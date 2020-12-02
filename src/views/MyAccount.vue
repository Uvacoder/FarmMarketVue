<template>
  <v-main>
    <Hero/>
    <v-toolbar-title class="subHeader text-center">MY ACCOUNT</v-toolbar-title>
    <div class="block latestPostBlock">
      <v-container>
        <v-row>
          <div class="col col-3">
            <v-card class="mx-auto" height="300" width="256">
              <v-navigation-drawer class="deep-orange accent-5" dark permanent>
                <v-list>
                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>My Products</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-account-box</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="edit_account" tag="none">Edit Account</router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <template v-slot:append>
                  <div class="pa-2">
                    <v-btn block>
                      Logout
                    </v-btn>
                  </div>
                </template>
              </v-navigation-drawer>
            </v-card>
          </div>

          <div class="col col-9">
            <div class="mx-4 button">
              <v-btn x-large color="success" dark>
                <router-link to="/add_product">Add new Product</router-link>
              </v-btn>
            </div>
            <div class="container">
              <div class="row">
                <v-col cols="3" v-for="item in products" :key="item.id">
                  <v-card outlined class="mx-auto my-12">
                    <template slot="progress">
                      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>
                    <v-img height="100" v-bind:src="item.src"></v-img>
                    <v-card-title>{{ item.productName }}</v-card-title>
                    <v-card-text>
                      <div class="my-4">
                        <div>$ {{ item.price }}</div>
                        <div>Amount: {{ item.amount }}</div>
                      </div>
                      <div class="my-4">
                        <div>{{ item.productDescription }}</div>
                      </div>
                      <v-row align="center" class="mx-0">
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                        <div class="grey--text ml-4">
                          4.5 (413)
                        </div>
                      </v-row>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" dark v-bind="attrs" v-on="on">Edit product</v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Product details</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6">
                                  <v-autocomplete :items="['Skiing', 'Ice hockey', 'Soccer']" label="Product category" multiple></v-autocomplete>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field label="Product name" aria-required="true">{{item.productName }}
                                  </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field label="Product description" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-text-field label="Price" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-text-field label="Amount" required></v-text-field>
                                </v-col>
                              </v-row>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" @click="dialog=false">Close</v-btn>
                            <v-btn color="blue darken-1" @click="updateProductFunc()">Save</v-btn>
                          </v-card-actions>
                            </v-container>
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </div>
            </div>
          </div>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>
import Hero from "@/components/Hero";

let getCategories = function () {
  let url = "http://localhost:8090/category";
  this.$http.get(url)
      .then(response => this.categories = response.data)
}
let getProducts = function () {
  let url = "http://localhost:8090/product";
  this.$http.get(url)
      .then(response => this.products = response.data)

}

let updateProduct = function () {
  let url = "http://localhost:8090/updateProduct";
  this.$http.post(url, this.product)
      .then(response => alert(response.data.message))
      .catch(result => alert(result.response.data.message))
}

export default {
  name: 'MyAccount',
  components: {
    Hero
  },
  data: () => ({
    products: [],
    categories: [],
    categoryId: 0,
    items: [
      {title: 'My Products', icon: 'mdi-view-dashboard'},
      {title: 'Account', icon: 'mdi-account-box'},
    ],
    dialog: false
  }),
  methods: {
    getCategoriesFunc: getCategories,
    getProductsFunc: getProducts,
    updateProductFunc: updateProduct
  },
  created: function () {
    this.getCategoriesFunc(),
        this.getProductsFunc(),
        this.updateProductFunc()
  }
}
</script>
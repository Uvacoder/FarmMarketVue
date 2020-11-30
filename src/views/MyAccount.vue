<template>
    <v-main>
      <Hero/>
        <div class="block latestPostBlock">
          <v-container>
            <h2 class="text-center">My Account</h2>
            <v-row>
              <div class="col col-3">
                <v-card
                    class="mx-auto"
                    height="300"
                    width="256"
                >
                  <v-navigation-drawer
                      class="deep-orange accent-5"
                      dark
                      permanent
                  >
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
                          <v-list-item-title><router-link to="edit_account" tag="none">Edit Account</router-link></v-list-item-title>
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
                          <v-card outlined
                                  class="mx-auto my-12"
                          >
                            <template slot="progress">
                              <v-progress-linear
                                  color="deep-purple"
                                  height="10"
                                  indeterminate
                              ></v-progress-linear>
                            </template>
                            <v-img
                                height="100"
                                v-bind:src="item.src"
                            ></v-img>
                            <v-card-title>{{ item.productName }}</v-card-title>
                            <v-card-text>
                              <div class="my-4">
                                <div>$ {{item.price}}</div>
                                <div>Amount: {{item.amount}}</div>
                              </div>
                              <div class="my-4">
                                <div>{{ item.productDescription }}</div>
                              </div>
                              <v-row
                                  align="center"
                                  class="mx-0"
                              >
                                <v-rating
                                    :value="4.5"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="14"
                                ></v-rating>
                                <div class="grey--text ml-4">
                                  4.5 (413)
                                </div>
                              </v-row>
                            </v-card-text>
                            <v-divider class="mx-4"></v-divider>
                            <v-card-actions>
                              <v-btn
                                  color="deep-purple lighten-2"
                                  text
                              >
                                Edit
                              </v-btn>
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

let getCategories = function (){
  let url = "http://localhost:8090/category";
  this.$http.get(url)
      .then(response => this.categories = response.data)
}

let getProducts = function (){
  let url = "http://localhost:8090/product";
  this.$http.get(url)
      .then(response => this.products = response.data)
}

export default {
  name: 'MyAccount',

  components: {
      Hero
  },

  data: () => ({
    products : [],
    categories: [],
    categoryId: 0
  }),

  methods: {
    getCategoriesFunc: getCategories,
    getProductsFunc: getProducts
  },
  created: function (){
    this.getCategoriesFunc(),
    this.getProductsFunc()
  }

}
</script>

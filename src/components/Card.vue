<template>
  <v-row>
    <div class="v-main__wrap">
      <div class="container">
        <div class="row ">
          <v-col cols="4" v-for="item in products" :key="item.id">
            <div class="card">
              <v-card>
                <v-img v-bind:src="item.categoryPicture" height="150"></v-img>
                <v-card-title class="card-title">{{ item.productName }}</v-card-title>
                <v-card-text class="cardText">
                  <div class="my-0">
                    <div>{{ item.productDescription }}</div>
                  </div>
                </v-card-text>
                <v-card-actions class="card-title2">
                  <v-icon>mdi-map-marker</v-icon>
                  <div>{{ item.sellerAddress }}</div>
                </v-card-actions>
                <v-card-actions class="card-title2">
                  <v-icon>mdi-account</v-icon>
                  <div>{{ item.sellerName }}</div>
                  <v-spacer></v-spacer>
                  <v-icon>mdi-phone</v-icon>
                  <div>{{ item.sellerPhone }}</div>
                </v-card-actions>
                <v-divider class="mx-4"></v-divider>
                <v-card-actions>
                  <v-dialog v-model="item.dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="on">€{{ item.price }}</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Product details</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-col cols="12">
                            <v-textarea v-model="email" color="teal">
                              <template v-slot:label>
                                <div>Your message to seller <small>(optional)</small></div>
                              </template>
                            </v-textarea>
                          </v-col>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" @click="item.dialog=false">Close</v-btn>
                            <v-btn color="blue darken-1" @click="contactSeller()">Contact Seller</v-btn>
                          </v-card-actions>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
        </div>
      </div>
    </div>
  </v-row>
</template>
<script>
import {EventBus} from './event-bus.js'

let getProducts = function (searchName, searchCategory) {
  let url = "http://localhost:8090/searchProductByCategoryAndName";
  this.$http.get(url, {params: {searchName, searchCategory}})
      .then(response => this.products = response.data)
}

let contactSellerFunc = function () {
  let url = "http://localhost:8090/contactSeller";
  let request = {
    email: this.email
  }
  this.$http.post(url, request)
      .then(response => this.email = response.data)
}

export default {
  name: 'Card',
  data: () => ({
    products: [],
    productId: 0,
    email: "",
    searchName: null,
    searchCategory: null
  }),
  props: {
    query: String
  },
  methods: {
    contactSeller: contactSellerFunc,
    getProducts: getProducts,
    // getProductsByCategory: getProductsByCategory,
  },
  created: function () {
    this.getProducts()
    // this.getProductsByCategory()

    EventBus.$on('search', searchName => {
      this.searchName = searchName
      this.getProducts(searchName, this.searchCategory)
    })

    EventBus.$on('searchCategory', searchName => {
      this.searchCategory = searchName
      this.getProducts(this.searchName, searchName)
    })

  }

}
</script>

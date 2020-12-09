<template>
  <v-row>
    <div class="v-main__wrap">
      <div class="container">
        <div class="row ">
          <v-col cols="4" v-for="item in products" :key="item.id">
            <div class="card">
            <v-card >
              <v-img v-bind:src="item.categoryPicture" height="150" ></v-img>
              <v-card-title class="card-title">{{ item.productName }}</v-card-title>
              <v-card-text class="cardText">
                <div class="my-0">
                  <div>{{ item.productDescription }}</div>
                  <div>Seller: {{item.sellerName}}</div>
                  <div>Location: {{item.sellerAddress}}</div>
                  <div>Phone: {{item.sellerPhone}}</div>
                </div>
              </v-card-text>
              <div class="price">€ {{ item.price }}</div>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">Contact</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Product details</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row><p>PRODUCT NAME{{products.productName}}</p> </v-row>
                      <v-row> <p>PRODUCT DESCRIPTION{{products.productDescription}}</p></v-row>
                      <v-row> <p>PRODUCT PRICE{{products.price }}</p></v-row>
                        <v-col cols="12">
                          <v-text-field ref="ContactSeller.emailMessage" placeholder="Your message to seller"></v-text-field>
<!--                          <v-text-field ref="ContactSeller.emailAddress"></v-text-field>-->
                        </v-col>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" @click="dialog=false">Close</v-btn>
                        <v-btn color="blue darken-1" @click="contactSeller()">Send email to seller</v-btn>
                      </v-card-actions>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
                <v-spacer></v-spacer>
                <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
                <v-btn icon><v-icon>mdi-bookmark</v-icon></v-btn>
                <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
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

let getProducts = function (searchWord) {
  let url = this.host + "/searchProduct";
  this.$http.get(url, {params: {searchWord}})
      .then(response => this.products = response.data)
}

let contactSellerFunc = function () {
  let url = this.host + "/contactSeller";
  let contactSeller = this.emailMessage
  this.$http.post(url, contactSeller)
      .then(response => this.email = response.data)
}

export default {
  name: 'Card',
  data: () => ({
    dialog: false,
    products: [],
    productId: 0,
    ContactSeller:{},
  }),
  props: {
    query: String
  },
  methods: {
    contactSeller: contactSellerFunc,
    getProducts: getProducts,
  },
  created: function () {
    this.getProducts()
    EventBus.$on('search', searchWord => {
      this.getProducts(searchWord)
    })
  }

}
</script>

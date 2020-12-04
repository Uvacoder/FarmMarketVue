<template>
  <v-row>
    <div class="v-main__wrap">
      <div class="container">
        <div class="row ">
          <v-col cols="4" v-for="item in products" :key="item.id">
            <div class="card">
            <v-card >
              <v-img height="100" src="/pictures/apple.jpg"></v-img>
              <v-card-title class="card-title">{{ item.productName }}</v-card-title>
              <v-card-text class="cardText">
                <div class="my-0">
                  <div>{{ item.productDescription }}</div>
                </div>
              </v-card-text>
              <div class="price">$ {{ item.price }}</div>
              <v-divider class="mx-4"></v-divider>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">Contact seller </v-btn>
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
                          <v-text-field label="Product name" aria-required="true">{{item.productName }}</v-text-field></v-col>
                        <v-col cols="12"><v-text-field label="Product description" required></v-text-field></v-col>
                        <v-col cols="12" sm="6"><v-text-field label="Price" required></v-text-field></v-col>
                        <v-col cols="12" sm="6"><v-text-field label="Amount" required></v-text-field></v-col>
                      </v-row>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" @click="dialog=false">Close</v-btn>
                        <v-btn color="blue darken-1" @click="contactSeller()">Send email to seller</v-btn>
                      </v-card-actions>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
              <v-card-actions>
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

let getAllProducts = function () {
  let url = "http://localhost:8090/getAllProducts";
  this.$http.get(url)
      .then(response => this.products = response.data)
}
let getLatestProducts = function () {
  let url = "http://localhost:8090/getLatestProducts";
  this.$http.get(url)
      .then(response => this.products = response.data)
}
let getProducts = function (){
  if(this.query == 'All'){
    this.getAllProducts()
  }
  if (this.query == 'Latest'){
    this.getLatestProducts()
  }
}

let contactSellerFunc = function (){

}


export default {
  name: 'Card',
  data: () => ({
    products: [],
    productId: 0,
  }),
  dialog: false,
  props: {
    query: String
  },
  methods: {
    getProductsFunc: getProducts,
    contactSeller: contactSellerFunc(),
    getAllProducts,
    getLatestProducts
  },
  created: function () {
    this.getProductsFunc()
  }

}
</script>

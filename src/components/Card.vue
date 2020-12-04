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
                </div>
              </v-card-text>
              <div class="price">$ {{ item.price }}</div>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn text class="button">BUY</v-btn>
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

let getAllProducts = function () {
  let url = "http://localhost:8090/findAllProducts";
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
export default {
  name: 'Card',
  data: () => ({
    products: [],
    productId: 0,
  }),
  props: {
    query: String
  },
  methods: {
    getProductsFunc: getProducts,
    getAllProducts,
    getLatestProducts
  },
  created: function () {
    this.getProductsFunc()
  }

}
</script>

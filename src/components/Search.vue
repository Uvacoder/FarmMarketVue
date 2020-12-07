<template>
  <v-container>
    <div class="search">
    <v-text-field v-model="searchWord.word" prepend-icon="mdi-magnify" single-line @keydown.enter="getProducts()" ></v-text-field>
<!--        @keydown.enter="getProducts()" prepend-icon="mdi-magnify" single-line v-model="searchWord.word"></v-text-field>-->
    </div>
  </v-container>
</template>

<script>
let getProductsFunc = function () {
  let url = "http://localhost:8090/searchProduct?";
  this.$http.get(url, {params: {searchWord:this.searchWord}})
      .then(response => this.products = response.data)
}

export default {
  name: 'Search',
  data: () => ({
     searchWord :{},
    products: [],
  }),
  methods: {
    getProducts: getProductsFunc
  },
  computed: {
    form() {
      return {
         searchWord: this.searchWord
      }
    },
}}

</script>
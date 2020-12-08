<template>
  <v-container>
    <div class="search">
    <v-text-field v-model="searchWord.word" prepend-icon="mdi-magnify" single-line @keydown.enter="getProducts()" ></v-text-field>
<!--        @keydown.enter="getProducts()" prepend-icon="mdi-magnify" single-line v-model="searchWord.word"></v-text-field>-->
    </div>
  </v-container>
</template>

<script>
//import router from "@/router";
import {EventBus} from "./event-bus.js"

let getProductsFunc = function () {
  EventBus.$emit('search', this.searchWord.word)
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
<template>
    <div class="heroBlock">
      <v-carousel  :show-arrows="false" hide-delimiters cycle  height="100" >
        <v-carousel-item
            v-for="item in products"
            :key="item.id"
            :src="item.categoryPicture"
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
          <v-row
              class="fill-height title"
              justify="center"
          >
            <div  >
              {{item.title}}
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
</template>

<script>
import {EventBus} from './event-bus.js'
let getProducts = function (searchWord) {
  let url = "http://localhost:8090/searchProduct";
  this.$http.get(url, {params: {searchWord}})
      .then(response => this.products = response.data)
}
export default {
  name: 'Hero',
  data: () => ({
    products: [],
    productId: 0,
  }),
  props: {
    query: String
  },
  methods: {
    getProducts: getProducts,
  },
  created: function () {
    this.getProducts()
    EventBus.$on('search', searchWord => {
      this.getProducts(searchWord)
    })
  }

}</script>




<template>
  <v-col>
    <div class="menu">
      <v-card outlined elevation="2" width="200">
        <v-list-item-group active-class="border"
                           color="indigo">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title align="center" class="subSubHeader">PRODUCTS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list dense nav>
            <v-list-item @click="getProducts(item.categoryName)" v-for="item in categories" :key="item.id" link>
              <v-list-item-icon>
                <v-icon>{{ item.categoryIcon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.categoryName }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-list-item-group>
      </v-card>
    </div>
  </v-col>
</template>

<script>
import {EventBus} from "./event-bus.js"

let getProductsFunc = function (searchCategory) {
  EventBus.$emit('searchCategory', searchCategory)
}

let getAllCategories = function () {
  let url = this.host + "/findAllCategories";
  this.$http.get(url)
      .then(response => this.categories = response.data)
}
export default {
  name: 'Menu',
  data: () => ({
    searchCategory: {},
    categories: [],
    categoryId: 0,
    products: [],
  }),
  methods: {
    getCategoriesFunc: getAllCategories,
    getProducts: getProductsFunc

  },

  created: function () {
    this.getCategoriesFunc()
  },
  computed: {
    form() {
      return {
        searchCategory: this.categoryName
      }
    },
  }
}
</script>

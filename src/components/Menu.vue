<template>
      <v-col  >
        <div class="menu">
        <v-card outlined elevation="2" width="200">
          <v-list-item-group active-class="border"
                             color="indigo">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title align="center" class="subSubHeader">PRODUCTS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list dense nav >
<!--            <v-list-item link >-->
<!--              <v-list-item-content v-model="searchWord.word" @click="getProductsByCategory(searchWord.word=vegetables)">Vegetables-->
<!--              </v-list-item-content>-->
<!--            </v-list-item>-->

            <v-list-item @click="getProductsByCategory(item.categoryName)" v-for="item in categories" :key="item.id" link>
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
let getProductsByCategoryFunc = function (categoryName) {
  EventBus.$emit('searchByCategory', categoryName)
}

let getAllCategories = function () {
  let url = "http://localhost:8090/findAllCategories";
  this.$http.get(url)
      .then(response => this.categories = response.data)
}
export default {
  name: 'Menu',
  data: () => ({
    searchWord :{},
    categories: [],
    categoryId: 0,
    products: [],
  }),
  methods: {
    getCategoriesFunc: getAllCategories,
    getProductsByCategory: getProductsByCategoryFunc

  },
  computed: {
    form() {
      return {
        searchWord: this.searchWord
      }
    },
  },
  created: function () {
    this.getCategoriesFunc()
  }
}
</script>

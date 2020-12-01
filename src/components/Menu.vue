<template>

      <v-col  >
        <div class="menu">
        <v-card outlined elevation="2" width="200">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title align="center" class="subSubHeader">PRODUCTS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list dense rounded>
            <v-list-item v-for="item in categories" :key="item.id">
              <v-list-item-icon>
                <v-icon>{{ item.categoryIcon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.categoryName }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
        </div>
      </v-col>

</template>

<script>
let getAllCategories = function () {
  let url = "http://localhost:8090/getAllCategories";
  this.$http.get(url)
      .then(response => this.categories = response.data)
}
export default {
  name: 'Menu',
  data: () => ({
    categories: [],
    categoryId: 0,
  }),
  methods: {
    getCategoriesFunc: getAllCategories,
  },
  created: function () {
    this.getCategoriesFunc()
  }
}
</script>

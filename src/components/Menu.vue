<template>

  <div class="menu">

      <v-col class="menu" >
        <v-card outlined elevation="2" width="200">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title align="center">PRODUCTS</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
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
      </v-col>

  </div>

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
    // return {
    //   items: [
    //     {title: 'Meat', icon: "mdi-sausage"},
    //     {title: 'Fish', icon: 'mdi-shark-fin'},
    //     {title: 'Diary', icon: 'mdi-food-variant'},
    //     {title: 'Eggs', icon: 'mdi-egg'},
    //     {title: 'Fruits', icon: 'mdi-apple'},
    //     {title: 'Vegetables', icon: 'mdi-carrot'},
    //     {title: 'Flowers', icon: 'mdi-sprout'},
    //     {title: 'Mushrooms', icon: 'mdi-mushroom'},
    //     {title: 'Other', icon: 'mdi-tractor'},
    //   ],
    // }
  }),
  methods: {
    getCategoriesFunc: getAllCategories,
  },
  created: function () {
    this.getCategoriesFunc()
  }

}
</script>

<template>

  <v-main>

    <Hero/>
    <div class="mainBlock" >
      <v-container>
        <v-row>
          <Menu/>
          <v-col md="8" class="pa-8  ">
            <v-row class="cards">
              <v-col md="3" class="ml-auto" v-for="item in category" :key="item.id">
              </v-col>
            </v-row>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <div class="text-center">
          <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
        </div>
      </v-container>
    </div>
  </v-main>
</template>
<script>
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";


export default {
  name: 'Shop',
  components: {

    Hero, Menu,
  },
  data() {
    return {
      page: 1,
      items: [
        fetch("http://localhost:8090/getAllCategories"),
        {title: 'Meat', icon: "mdi-sausage"},
        {title: 'Fish', icon: 'mdi-shark-fin'},
        {title: 'Diary', icon: 'mdi-food-variant'},
        {title: 'Eggs', icon: 'mdi-egg'},
        {title: 'Fruits', icon: 'mdi-apple'},
        {title: 'Vegetables', icon: 'mdi-carrot'},
        {title: 'Flowers', icon: 'mdi-sprout'},
        {title: 'Mushrooms', icon: 'mdi-mushroom'},
        {title: 'Other', icon: 'mdi-tractor'},
      ],
    }
  },
}
</script>

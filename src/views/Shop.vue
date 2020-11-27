<template>
  <v-content>
    <Hero/>

    <v-row class=" block ">
      <Menu/>
      <v-col md="8" class="pa-8  ">
        <v-row class="cards">

          <v-col md="3" class="ml-auto" v-for="item in category" :key="item.id">
            <v-card outlined :loading="loading" class="mx-auto my-12">
              <template slot="progress">
                <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
              </template>
              <v-img height="100" v-bind:src="item.src"></v-img>
              <v-card-title>{{ item.category_name }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                  <div class="grey--text ml-4">4.5 (413)</div>
                </v-row>
                <div class="my-4 subtitle-1">{{ item.location }}</div>
                <div>{{ item.description }}</div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">Reserve</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <div class="text-center">
      <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
    </div>

  </v-content>

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

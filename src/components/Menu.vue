<template>
<v-col offset-md="2">
<v-toolbar dense floating>
  <v-text-field prepend-icon="mdi-magnify" single-line></v-text-field>
</v-toolbar>
<v-card outlined elevation="12" width="276">
  <v-navigation-drawer floating permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title align="center">PRODUCTS</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense rounded>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</v-card>
</v-col>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      items: [
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

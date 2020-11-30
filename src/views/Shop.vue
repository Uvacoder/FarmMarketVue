<template>
  <v-main>
    <Hero/>
    <v-toolbar-title class="subHeader">SHOP</v-toolbar-title>
    <div class="mainBlock">
      <v-container>
        <v-row>
          <div class="col-3">

          <Menu/>
          </div>
<div class="col-8">
          <Card/>
</div>


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
import Card from "@/components/Card";


export default {
  name: 'Shop',
  components: {
    Card,
    Hero, Menu,
  },
  data() {
    return {
      page: 1,
    }
  },
}
</script>

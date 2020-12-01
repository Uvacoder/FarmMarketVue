<template>
  <v-main>
    <Hero/>
    <v-toolbar-title class="subHeader text-center">latest products</v-toolbar-title>
    <div class="mainBlock">
      <v-container>
        <v-row>
          <div class="col-3">
            <Menu/>
          </div>
          <div class="col-8">
            <CardWithLatestProducts/>
          </div>
        </v-row>
      </v-container>
    </div>

  </v-main>
</template>

<script>
import Hero from "@/components/Hero";
import CardWithLatestProducts from "@/components/CardWithLatestProducts";
import Menu from "@/components/Menu";

  export default {
    name: 'Main',

    components: {
      CardWithLatestProducts,
      Hero,
      Menu,
    },

    data () {
      return {
        items: [
        ],
      }
    },
  }
</script>



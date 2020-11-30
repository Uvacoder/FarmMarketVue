<template>
    <v-main>
      <Hero/>
      <v-toolbar-title class="subHeader text-center">MAIN</v-toolbar-title>
      <LatestPost/>
    </v-main>
</template>

<script>
import Hero from "@/components/Hero";
import LatestPost from "@/components/LatestPost";

  export default {
    name: 'Main',

    components: {
      LatestPost,
      Hero,
    },

    data () {
      return {
        items: [
        ],
      }
    },
  }
</script>



<template>
    <v-content>
      <Hero/>
      <LatestPost/>
    </v-content>
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



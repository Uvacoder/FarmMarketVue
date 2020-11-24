<template>
  <v-app width="200px">
    <v-app-bar
      app
      flat
    >
      <Header/>
    </v-app-bar>
    <v-main>
      <Hero/>
      <LatestPost/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Hero from "@/components/Hero";
import LatestPost from "@/components/LatestPost";

export default {
  name: 'App',

  components: {
    LatestPost,
    Hero,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>


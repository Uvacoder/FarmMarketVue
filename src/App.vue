<template>
  <v-app>
    <v-app-bar
        app
        flat
        shrink-on-scroll
    >

      <!--        <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

      <Header/>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>

    <router-view/>



    <v-footer>
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from "@/components/Footer";

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>


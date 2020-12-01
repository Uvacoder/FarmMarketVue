<template>
  <v-main>
<!--    <Hero/>-->
    <v-toolbar-title class="subHeader text-center">LATEST PRODUCTS</v-toolbar-title>
    <div class="mainBlock">
      <v-container>
        <v-row>
          <div class="col-3">
            <Menu/>
          </div>
          <div class="col-8">
            <v-row>
              <div class="v-main__wrap">
                <div class="container">
                  <div class="row">
                    <v-col cols="3" v-for="item in products" :key="item.id">
                      <v-card outlined class="mx-auto my-12">
                        <template slot="progress">
                          <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                        </template>
                        <v-img height="100" v-bind:src="item.src"></v-img>
                        <v-card-title>{{ item.productName }}</v-card-title>
                        <v-card-text>
                          <div class="my-4">
                            <div>$ {{ item.price }}</div>
                            <div>Amount: {{ item.amount }}</div>
                          </div>
                          <div class="my-4">
                            <div>{{ item.productDescription }}</div>
                          </div>
                          <v-row align="center" class="mx-0">
                            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                            <div class="grey--text ml-4">4.5 (413)</div>
                          </v-row>
                        </v-card-text>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                          <v-btn color="deep-purple lighten-2" text>BUY</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </div>
                </div>
              </div>
            </v-row>
          </div>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>


<script>
// import Hero from "@/components/Hero";

let showLatestFunc = function () {
  let url = "http://localhost:8090/getLatestProducts";
  this.$http.get(url)
      .then(response => this.products = response.data)
}

export default {
  name: 'LatestPost',
  comments: {
    // Hero
  },
  data: () => ({
    products: [],
    productId: 0,
  }),
  methods: {
    showLatest: showLatestFunc
  },
  created: function () {
    this.showLatest()
  }
};
</script>
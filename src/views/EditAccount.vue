<template>
  <v-main>
    <Hero/>
    <v-toolbar-title class="subHeader text-center">MY ACCOUNT</v-toolbar-title>
    <div class="block latestPostBlock">
      <v-container>
        <v-row>
          <div class="col col-3">
            <v-card
                class="mx-auto"
                height="300"
                width="256"
            >
              <v-navigation-drawer
                  class="deep-orange accent-5"
                  dark
                  permanent
              >
                <v-list>
                  <v-list-item link color="white">
                    <v-list-item-icon>
                      <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="/my_account" tag="none">My Products</router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item link>
                    <v-list-item-icon>
                      <v-icon>mdi-account-box</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>
                        <router-link to="edit_account" tag="none">Edit Account</router-link>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <template v-slot:append>
                  <div class="pa-2">
                    <v-btn block>
                      Logout
                    </v-btn>
                  </div>
                </template>
              </v-navigation-drawer>
            </v-card>
          </div>

          <div class="col col-9">
            <v-row>
              <v-col>
                <div class="my-4">
                  <div>Name:</div>
                </div>
                <div class="my-4">
                  <div>Email:</div>
                </div>
                <div class="my-4">
                  <div>Username:</div>
                </div>
                <div class="my-4">
                  <div>Password:</div>
                </div>
                <div class="my-4">
                  <div>Personal Inforamtion:</div>
                </div>
                <div class="my-4">
                  <div>Address:</div>
                </div>
                <div class="my-4">
                  <div>Phone:</div>
                </div>
              </v-col>
              <v-col>
                <div class="my-4">
                  <div>Name:</div>
                </div>
                <div class="my-4">
                  <div>Email:</div>
                </div>
                <div class="my-4">
                  <div>Username:</div>
                </div>
                <div class="my-4">
                  <div>Password:</div>
                </div>
                <div class="my-4">
                  <div>Personal Inforamtion:</div>
                </div>
                <div class="my-4">
                  <div>Address:</div>
                </div>
                <div class="my-4">
                  <div>Phone:</div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>

<script>

import Hero from "@/components/Hero";

let getCategories = function () {
  let url = "http://localhost:8090/category";
  this.$http.get(url)
      .then(response => this.categories = response.data)
}

let getProducts = function () {
  let url = "http://localhost:8090/product";
  this.$http.get(url)
      .then(response => this.products = response.data)
}

export default {
  name: 'EditAccount',

  components: {
    Hero
  },

  data: () => ({
    products: [],
    categories: [],
    categoryId: 0,
    items: [
      {title: 'My Products', icon: 'mdi-view-dashboard'},
      {title: 'Account', icon: 'mdi-account-box'},
    ],
  }),

  methods: {
    getCategoriesFunc: getCategories,
    getProductsFunc: getProducts
  },
  created: function () {
    this.getCategoriesFunc(),
        this.getProductsFunc()
  }

}
</script>

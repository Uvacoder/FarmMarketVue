<template>
  <v-card height="270" width="200">
    <v-navigation-drawer class="deep-orange accent-5" dark permanent>
      <v-list>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>
            <v-list-item-title>
              {{seller.username }}
            </v-list-item-title>
        </v-list-item>

        <v-list-item link>
          <v-list-item-title>
              <router-link to="my_account" class="myMenuBtn">My Products</router-link>
          </v-list-item-title>
        </v-list-item>

        <v-list-item link>
            <v-list-item-title>
              <router-link to="edit_account" class="myMenuBtn">Edit Account</router-link>
            </v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logoutFunc()">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>

import router from "@/router";

let logout = function (){
  localStorage.removeItem('user-token') // remove on logout
  router.push("/login");
  location.reload();
}
let getSeller = function () {
  let url = this.host + "/getSeller";
  console.log("get seller: " + url);
  this.$http.get(url)
      .then(response => this.seller = response.data)
}

export default {
  data: () => ({
    seller: {}
  }),
  name: "MyAccountMenu",
  methods: {
    logoutFunc : logout,
    getSellerFunc: getSeller
  },
  created: function () {
    this.getSellerFunc()
  },
}
</script>

<style scoped>

</style>
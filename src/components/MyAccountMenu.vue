<template>
  <v-card class="mx-auto" height="300" width="200">
    <v-navigation-drawer class="deep-orange accent-5" dark permanent>
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <router-link to="my_account" tag="none">My Products</router-link>
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

export default {
  name: "MyAccountMenu",
  methods: {
    logoutFunc : logout
  }
}
</script>

<style scoped>

</style>
<template>
  <v-toolbar flat class="mainHeader" cols="12" md="4">
    <div>
      <v-toolbar-title class="subSubHeader">
        <v-btn text>
          <router-link to="/">FARMMARKET</router-link>
        </v-btn>
      </v-toolbar-title>
    </div>

    <v-toolbar-items>
      <Search/>

      <v-btn text>
        <router-link to="/shop">Shop</router-link>
      </v-btn>

      <v-btn text>
        <router-link to="/create_account">Become a seller</router-link>
      </v-btn>

      <v-btn text>
        <router-link to="/my_account">My Account</router-link>
      </v-btn>

      <v-btn text>
        <router-link to="/login">Login</router-link>
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Search from "@/components/Search";

export default {
  name: 'Header',
  components: {Search},
  data: () => ({}),
}
</script>



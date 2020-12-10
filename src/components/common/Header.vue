<template>
  <v-toolbar flat class="mainHeader">
    <div>
      <v-toolbar-title class="subSubHeader">
        <v-btn to="/" text class ="btn">
          <router-link to="/" class ="btn">FARMMARKET</router-link>
        </v-btn>
      </v-toolbar-title>
    </div>

    <v-toolbar-items>
      <Search/>

      <v-btn to="/shop" text>
        <router-link to="/shop">Shop</router-link>
      </v-btn>

      <v-btn to="/create_account" text >
        <router-link to="/create_account">Become a seller</router-link>
      </v-btn>

      <v-btn to="/my_account" text>
        <router-link to="/my_account">My Account</router-link>
      </v-btn>

      <v-btn to="/login" text>
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



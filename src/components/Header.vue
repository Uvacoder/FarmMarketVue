<template>
  <vn-container>
    <v-toolbar flat>
      <v-toolbar-title>FarmMarket</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          <router-link to="/">Main</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/shop">Shop</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/create_account">Create Account</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/my_account">My Account</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </vn-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>



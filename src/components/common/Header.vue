<template>
  <v-container >

      <v-toolbar flat class="mainHeader">
        <div>
      <v-toolbar-title class="subSubHeader">FarmMarket</v-toolbar-title>
        </div>

       <v-toolbar-items>
         <Search/>
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

         <v-btn text>
           <router-link to="/login">Login</router-link>
         </v-btn>


      </v-toolbar-items>
    </v-toolbar>

  </v-container>
</template>

<script>
  import Search from "@/components/Search";
  export default {
    name: 'Header',
    components: {Search},
    data: () => ({
    }),
  }
</script>



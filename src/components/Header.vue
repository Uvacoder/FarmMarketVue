<template>
  <v-container>
    <v-toolbar id="header" flat>
      <v-toolbar-title>FarmMarket</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          Main
        </v-btn>

        <v-btn text>
          Shop
        </v-btn>

        <v-btn text>
          Create Account
        </v-btn>

        <v-btn text>
          My Account
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
    }),
  }
</script>



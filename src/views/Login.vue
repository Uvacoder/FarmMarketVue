<template>
  <v-main>
    <v-content>
      <Hero/>
      <div class="block">
        <v-container>
          <v-row class="fill-height" align="end" justify="center">
            <h2>To continue please login</h2>
          </v-row>
        </v-container>
      </div>
    </v-content>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="4">
        <v-card ref="form" color="#FAFAFA">
          <v-card-text>
            <v-text-field v-model="user.userName" label="Username"></v-text-field>
            <v-text-field v-model="user.password" label="Password"></v-text-field>
            <v-btn class="mr-4" @click="login()">Sign in</v-btn>
            <v-btn color="success" class="mr-4">
              <router-link to="/create_account">Sign up</router-link>
            </v-btn>
            <v-btn color="success" class="mr-4">
              <router-link to="/forgot_password">Forgot your password?</router-link>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import router from "@/router";
 import Hero from "@/components/Hero";

let loginFunc = function () {
  let url = "http://localhost:8090/login";
  this.$http.post(url, this.user)
      .then(response => {
            localStorage.setItem("user-token", response.data);
            this.$http.defaults.headers.common['Authorization'] = "Bearer" + response.data;
            router.push("/my_account");
          })}

export default {
  name: 'Login',
  components: {
    Hero
  },
  data: () => ({
    user: {}
  }),
  methods: {
    login: loginFunc
  }
}
</script>
<template>
  <v-main>
    <Hero/>
    <v-toolbar-title class="subHeader text-center">TO CONTINUE PLEASE LOGIN</v-toolbar-title>
    <div class="block mainBlock">
      <v-container>
        <v-form ref="form" v-model="valid">
          <v-card-text>
            <v-text-field label="Username" v-model="user.username"></v-text-field>
            <v-text-field label="Password" :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="() => (value = !value)" :type="value ? 'password' : 'text'"
                          required v-model="user.password"></v-text-field>
            <v-btn :disabled="!valid" class="mr-4" @click="login()">Sign in</v-btn>
            <v-btn class="mr-4">
              <router-link to="/create_account">Sign up</router-link>
            </v-btn>
            <v-btn class="mr-4">
              <router-link to="/forgot_password">Forgot your password?</router-link>
            </v-btn>
          </v-card-text>
        </v-form>
      </v-container>
    </div>
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
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + response.data;
            router.push("/my_account");
          }
      ).catch(result => alert(result.response.data.message))
}

export default {
  name: 'Login',
  components: {
    Hero
  },
  data: () => ({
    valid: true,
    value: true,
    user: {}
  }),
  computed: {
    form() {
      return {
        username: this.user.username,
        password: this.user.password,
      }
    },
  },
  methods: {
    login: loginFunc
  }
}

</script>
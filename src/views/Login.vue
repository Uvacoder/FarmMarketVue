<template>
  <v-main>
    <v-row justify="center">
      <v-col
          cols="12"
          sm="10"
          md="8"
          lg="4"
      >
        <v-card ref="form" color="#FAFAFA">
          <v-card-text>
            <v-text-field
                v-model="user.userName"
                label="Name"
            ></v-text-field>
            <v-text-field
                v-model="user.password"
                label="Password"
            ></v-text-field>
            <v-btn
                class="mr-4"
                @click="login()"
            >
              submit
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
let loginFunc = function () {
  let url = "http://localhost:8090/login";
  this.$http.post(url, this.user)
}

export default {
  name: 'Login',

  data: () => ({
    user: {}
  }),

  methods: {
    login: loginFunc
  }

  }
</script>
<template>
  <v-main>
    <Hero/>
    <v-toolbar-title class="subHeader text-center">CHANGE PASSWORD</v-toolbar-title>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid">
          <v-text-field ref="SellerName" v-model="seller.name" :rules="nameRules" label="Please enter your name"
                        required></v-text-field>
          <v-text-field ref="SellerUsername" v-model="seller.username" :rules="usernameRules"
                        label="Please enter your username" required></v-text-field>
          <v-text-field ref="Selleremail" v-model="seller.email" :rules="emailRules" label="Please enter your email"
                        required></v-text-field>
          <v-text-field ref="SellerPassword" v-model="seller.password" :rules="passwordRules"
                        label="Please enter your new password"
                        :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="() => (value = !value)" :type="value ? 'password' : 'text'"
                        required></v-text-field>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="updatePassword(), reset()">
            Update my password!
          </v-btn>
        </v-form>
      </v-container>
    </div>
  </v-main>
</template>


<script>
import Hero from "@/components/Hero";

let updatePasswordFunc = function () {
  let url = "http://localhost:8090/updateSellerPassword";
  this.$http.put(url, this.seller)
      .then(response => alert(response.data.message))
      .catch(result => alert(result.response.data.message))
}
export default {
  name: "ForgotPassword",
  components: {
    Hero
  },
  data: () => ({
    seller: {},
    valid: true,
    value: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 40) || 'Name must be less than 40 characters',
    ],
    username: '',
    usernameRules: [
      v => !!v || 'Username is required, minimum of 6 characters',
      v => (v && v.length > 5 && v.length < 20 && /./.test(v)) || 'Username should be at least 6 characters long',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Unique password is required',
      v => (v && v.length > 7 && v.length < 15 && /.*\d.*\d.*/.test(v)) || 'Password should be at least 8 characters long and contain at least 2 numbers',
    ]
  }),
  computed: {
    form() {
      return {
        name: this.seller.Name,
        email: this.seller.Email,
        username: this.seller.Username,
        password: this.seller.Passwoed,
      }
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    updatePassword: updatePasswordFunc
  }
}
</script>

<style scoped>

</style>
<template>
  <v-content>
    <Hero/>
    <div class = "block">
      <v-container>
        <v-row class="fill-height" align="end" justify="center">
          <h1>BECOME A SELLER. REGISTER NOW!</h1>
        </v-row>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field ref="SellerName" v-model="seller.name" :rules="nameRules" label="Name / for clients to appear" required></v-text-field>
          <v-text-field ref="SellerEmail" v-model="seller.email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field ref="SellerPhone" v-model="seller.phone" :rules="phoneRules" label="Phone number / for clients to contact" required></v-text-field>
          <v-text-field ref="SellerUsername" v-model="seller.username" :rules="usernameRules" label="Username" required></v-text-field>
          <v-text-field ref="SellerPassword" v-model="seller.password" :rules="passwordRules" label="Password" required></v-text-field>
          <v-text-field ref="repeatPassword" v-model="repeatPassword" :rules="repeatPasswordRules" label="Repeat password" required></v-text-field>
          <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Agree with all policies" required></v-checkbox>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="addSeller()">
            Submit
          </v-btn>
          <v-btn color="error" class="mr-4" @click="reset">
            Reset
          </v-btn>
        </v-form>
  '  </v-container>
    </div>
  </v-content>
</template>

<script>
import Hero from "@/components/Hero";

let addSellerFunc = function () {
  let url = "http://localhost:8090/newSeller";
  this.$http.post(url, this.seller)
      .then(response => alert(response.data.message))
      .catch(result=> alert(result.response.data.message))
}
  export default {
    name: 'CreateAccount',
    components: {
      Hero
    },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 40) || 'Name must be less than 40 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Phone is required',
      v => (v && v.length>6 && v.length<20 && /^\+?\d*$/.test(v)) || 'Phone must be valid',
    ],
    username: '',
    usernameRules: [
      v => !!v || 'Username is required, minimum of 6 characters',
      v => (v&& v.length>5 && v.length<20 && /./.test(v)) || 'Username should be at least 6 characters long',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Unique password is required',
      v => (v && v.length>7 && v.length<15 &&/.*\d.*\d.*/.test(v)) || 'Password should be at least 8 characters long and contain at least 2 numbers',
    ],
    repeatPassword: '',
    repeatPasswordRules: [
      v => !!v || 'Please repeat your password',
      v =>(v.valueOf()===this.seller.password)|| 'Password didn`t match',
    ],
        seller: {},
    checkbox: false
  }
    ),
    computed: {
      form() {
        return {
          sellerName: this.seller.Name,
          sellerEmail: this.seller.Email,
          sellerUsername: this.seller.Username,
          sellerPassword: this.seller.Passwoed,
          sellerPhone: this.seller.Phone,
        }
      },
    },

      methods: {
    validate () {
      this.$refs.form.validate()
    },
        addSeller: addSellerFunc,
    reset () {
      this.$refs.form.reset()
    },

  },
  }
</script>


<style>

</style>

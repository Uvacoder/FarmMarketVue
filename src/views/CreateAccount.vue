<template>
  <v-content>
    <div class="accountHeader">
      <v-container>
        <v-img alt="Tomati pilt" src="../assets/pictures/TomatAnna2.png">
        </v-img>
      </v-container>
    </div>
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
          <v-text-field v-model="name" :rules="nameRules" label="Name / for clients to appear" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field v-model="phone" :rules="phoneRules" label="Phone number / for clients to contact" required></v-text-field>
          <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
          <v-text-field v-model="password" :rules="passwordRules" label="Password" required></v-text-field>
          <v-text-field v-model="repeatPassword" :rules="repeatPasswordRules" label="Repeat password" required></v-text-field>
          <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Agree with all policies" required></v-checkbox>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
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

  export default {
    name: 'CreateAccount',
    components: {
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
      v => /\d{6,}/.test(v) || 'Phone must be valid',
    ],
    username: '',
    usernameRules: [
      v => !!v || 'Username is required, minimum of 6 characters',
      v => /.{6,}/.test(v) || 'This username is already in use',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Unique password is required',
      v => (v && v.length>10 &&/.\d.\d./.test(v)) || 'Password should be at least 8 characters long and contain at least 2 numbers',
    ],
    repeatPassword: '',
    repeatPasswordRules: [
      v => !!v || 'Please repeat your password',
      v =>(v && v.length>10 &&/.\d.\d./.test(v) )|| 'Password didn`t match',
    ],

    checkbox: false,
  }),

      methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
  },
  }
</script>


<style>

</style>

<template>
  <v-main>
    <Hero/>
    <v-toolbar-title class="subHeader text-center">MY ACCOUNT</v-toolbar-title>
    <div class="mainBlock">
        <v-row>
          <v-col class="col-3">
            <div class="mb-5 ml-8 mt-3">
              <MyAccountMenu/>
            </div>
            <div class="ml-8">
              <AddNewProductBtn/>
            </div>
          </v-col>
          <v-col class="col-8">
              <MyAccountCard/>

          </v-col>
        </v-row>
    </div>
  </v-main>
</template>

<script>
import Hero from "@/components/Hero";
import MyAccountMenu from "@/components/MyAccountMenu";
import AddNewProductBtn from "@/components/AddNewProductBtn";
import MyAccountCard from "@/components/MyAccountCard";

let getProducts = function () {
  let url = this.host + "/product";
  this.$http.get(url)
      .then(response => this.products = response.data)

}

export default {
  name: 'MyAccount',
  components: {
    MyAccountCard,
    AddNewProductBtn,
    MyAccountMenu,
    Hero
  },
  data: () => ({
    products: [],
    product: {},
    dialog: false,
  }),

  methods: {
    getProductsFunc: getProducts,
    resetForm() {
      this.errorMessages = []
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        this.$refs[f].reset()
      })
    },
    add() {
      this.formHasErrors = false

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true

        this.$refs[f].validate(true)
      })
    },
  },

  created: function () {
    this.getProductsFunc()
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },
}
</script>
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
  let url = "http://localhost:8090/product";
  this.$http.get(url)
      .then(response => this.products = response.data)

}

let updateProduct = function () {
  let url = "http://localhost:8090/updateProduct";
  this.$http.post(url, this.product)
      .then(response => alert(response.data.message))
      .catch(result => alert(result.response.data.message))
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
    updateProductFunc: updateProduct,
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
    this.getProductsFunc(),
        this.updateProductFunc()
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },
}
</script>
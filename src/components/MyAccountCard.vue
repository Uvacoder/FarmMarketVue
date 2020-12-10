<template>
  <v-row>
    <div class="v-main__wrap">
      <div class="container">
        <div class="row ">
          <v-col cols="4" v-for="(item, index) in products" :key="item.id">
            <div class="card">
              <v-card>
                <v-img v-bind:src="item.categoryPicture" height="150"></v-img>
                <v-card-title class="card-title">{{item.productName + item.id }}</v-card-title>
                <v-card-text class="cardText">
                  <div class="my-0">
                    <div>{{item.productDescription}}</div>
                  </div>
                </v-card-text>
                <div class="price">€ {{item.price}}</div>
                <v-divider class="mx-4"></v-divider>
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">Edit product</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Product details{{item.id}}</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6">
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Product name" aria-required="true">{{index }}
                            </v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field label="Product description" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field label="Price" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field label="Amount" required></v-text-field>
                          </v-col>
                        </v-row>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" @click="dialog=false">Close</v-btn>
                          <v-btn color="blue darken-1" @click="updateProductFunc()">Save</v-btn>
                        </v-card-actions>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <v-btn color="error" class="mr-4" @click="removeProduct(item.id)">Delete product</v-btn>
              </v-card>
            </div>
          </v-col>
        </div>
      </div>
    </div>
  </v-row>
</template>
<script>

let getProducts = function () {
  let url = this.host + "/product";
  this.$http.get(url)
      .then(response => this.products = response.data)

}

// let updateProduct = function () {
//   let url = this.host + "/updateProduct";
//   this.$http.post(url, this.product)
//       .then(response => alert(response.data.message))
//       .catch(result => alert(result.response.data.message))
// }

let removeProduct = function (id) {
  let url = this.host + "/removeProduct";
  this.$http.delete(url, {params: {id}})
      .then(response => {
        (this.products = response.data)
      location.reload()}
)
}


export default {
  name: 'MyAccountCard',

  data: () => ({
    products: [],
    productId: 0,
    product: {},
    dialog: false,
  }),
  props: {
    query: String
  },
  methods: {
    getProductsFunc: getProducts,
    // updateProductFunc: updateProduct,
    removeProduct: removeProduct,
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
    // this.updateProductFunc()
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },
}
</script>

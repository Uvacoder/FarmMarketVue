<template>
        <v-row>
          <v-col cols="4" v-for="item in products" :key="item.id">
            <div class="card">
            <v-card >
              <v-img height="100" src="/pictures/apple.jpg"></v-img>
              <v-card-title class="card-title">{{ item.productName }}</v-card-title>
              <v-card-text class="cardText">
                <div class="my-0">
                  <div>{{ item.productDescription }}</div>
                </div>
              </v-card-text>
              <div class="price">$ {{ item.price }}</div>
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">Edit product</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Product details</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-autocomplete :items="['Skiing', 'Ice hockey', 'Soccer']" label="Product category" multiple></v-autocomplete>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Product name" aria-required="true">{{item.productName }}
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
              </v-card-actions>
            </v-card>
            </div>
          </v-col>
        </v-row>
</template>
<script>

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
  name: 'MyAccountCard',

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

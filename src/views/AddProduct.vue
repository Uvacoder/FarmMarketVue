<template>
  <v-main>
    <v-row justify="center">
      <v-col
          cols="12"
          sm="10"
          md="8"
          lg="6"
      >
        <v-card ref="form" color="#FAFAFA">
          <v-card-text>
            <v-autocomplete
                ref="category"
                :rules="[() => !!result || 'This field is required']"
                :items="result"
                v-model="product.categoryId"
                item-text="categoryName"
                item-value="id"
                label="Category"
                required
            ></v-autocomplete>
            {{categoryId}}
            <v-text-field
                ref="productName"
                v-model="product.productName"
                :rules="[() => !!product.productName || 'This field is required']"
                :error-messages="errorMessages"
                label="Product Name"
                required
            ></v-text-field>
            <v-text-field
                ref="description"
                v-model="product.productDescription"
                :rules="[
              () => !!product.productDescription || 'This field is required',
              () => !!product.productDescription && product.productDescription.length <= 100 || 'Description must be less than 100 characters',
            ]"
                label="Product description"
                counter="100"
                required
            ></v-text-field>
            <v-text-field
                ref="price"
                v-model="product.price"
                label="Price"
                prefix="$"
            ></v-text-field>
            <v-text-field
                ref="amount"
                v-model="product.amount"
                :rules="[() => !!product.amount || 'This field is required']"
                label="Amount/Quantity"
                required
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text>
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip
                  v-if="formHasErrors"
                  left
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      icon
                      class="my-0"
                      v-bind="attrs"
                      @click="resetForm"
                      v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
                color="success"
                dark
                @click="add, addProduct()"
            >
              Add Product
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>

let addProductFunc = function () {
  let url = "http://localhost:8090/newProduct";
  this.$http.post(url, this.product)
      .then(response => alert(response.data.message))

}


let showResponse = function (){
  let url = "http://localhost:8090/category";
  this.$http.get(url)
      .then(response => this.result = response.data)
}


export default {
  name: 'NewProduct',

  data: () => ({
    errorMessages: '',
    formHasErrors: false,
    product: {},
    result: [],
    categoryId: 0
  }),

  computed: {
    form() {
      return {
        productName: this.product.productName,
        description: this.product.productDescription,
        price: this.product.price,
        amount: this.product.amount,
        categoryId: this.product.categoryId,
      }
    },
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    addProduct: addProductFunc,

    showResponse : showResponse,

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

  created: function (){
    this.showResponse()
  }
}
</script>
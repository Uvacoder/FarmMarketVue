<template>
  <v-main>
    <v-row justify="center">
      <v-col
          cols="12"
          sm="10"
          md="8"
          lg="6"
      >
        <v-card ref="form">
          <v-card-text>
            <v-autocomplete
                ref="category"
                v-model="product.category"
                :rules="[() => !!product.category || 'This field is required']"
                :items="categories"
                label="Category"
                required
            ></v-autocomplete>
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
  let url = "http://localhost:8080/newProduct";
  this.$http.post(url, this.product)
      .then(response => alert(response.data.message))

}

export default {
  name: 'NewProduct',

  data: () => ({
    categories: ['meat', 'diary', 'vegetables', 'fruits', 'flowers', 'eggs', 'mushrooms', 'fish'],
    errorMessages: '',
    formHasErrors: false,
    product: {}
  }),

  computed: {
    form() {
      return {
        productName: this.product.productName,
        description: this.product.productDescription,
        price: this.product.price,
        amount: this.product.amount,
        category: this.product.category,
      }
    },
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    addressCheck() {
      this.errorMessages = this.address && !this.name
          ? `Hey! I'm required`
          : ''

      return true
    },
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
    addProduct: addProductFunc
  },
}
</script>
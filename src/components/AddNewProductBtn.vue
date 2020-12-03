<template>
  <div class="mx-4 button">
    <v-dialog v-model="dialog2" width="600px">
      <template v-slot:activator="{ on, /*attrs*/ }">
        <v-btn x-large color="success" dark v-on="on">Add new product</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add new Product</span>
        </v-card-title>
        <v-card-text>
          <v-autocomplete
              ref="category"
              :rules="[() => !!categories || 'This field is required']"
              :items="categories"
              v-model="product.categoryId"
              item-text="categoryName"
              item-value="id"
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
          <v-btn text @click="dialog2=false">
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
              @click="addProduct(), dialog2=false"
          >
            Add Product
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>


let getCategories = function () {
  let url = "http://localhost:8090/category";
  this.$http.get(url)
      .then(response => this.categories = response.data)
}

let addProductFunc = function () {
  let url = "http://localhost:8090/newProduct";
  this.$http.post(url, this.product)
      .then(response => alert(response.data.message))
}
export default {
  name: "AddNewProductBtn",

  data: () => ({
    categories: [],

    errorMessages: '',
    formHasErrors: false,
    product: {},
    dialog: false,
    dialog2: false
  }),
  methods: {
    getCategoriesFunc: getCategories,
    addProduct: addProductFunc,

  },

  created: function () {
    this.getCategoriesFunc()
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },
}
</script>

<style scoped>

</style>
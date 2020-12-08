<template>
  <div>
    <v-dialog v-model="dialog2" width="600px">
      <template v-slot:activator="{ on, /*attrs*/ }">
        <v-btn height="50" width="200" color="success" dark v-on="on">Add new product</v-btn>
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
          <Upload/>
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

import Upload from "@/components/Upload";

let getCategories = function () {
  let url = this.host + "/category";
  this.$http.get(url)
      .then(response => this.categories = response.data)
}

let addProductFunc = function () {
  let url = this.host + "/newProduct";
  this.$http.post(url, this.product)
      .then(response => alert(response.data.message));
  // location.reload();
}
export default {
  name: "AddNewProductBtn",
  components: {Upload},
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
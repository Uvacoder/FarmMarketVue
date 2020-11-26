<template>
  <div>
    <v-main>
          <div class="text-center">
            <div class="my-2">
              <v-btn x-large color="success" dark>
                <router-link to="/add_product">Add new Product</router-link>
              </v-btn>
            </div>
          </div>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'MyAccount',

  data () {
    return {
      items: [
      ]
    }
  },
}
</script>

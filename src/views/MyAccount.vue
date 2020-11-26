<template>
    <v-main>
      <Hero/>
          <div class="text-center">
            <div class="my-2">
              <v-btn x-large color="success" dark>
                <router-link to="/add_product">Add new Product</router-link>
              </v-btn>
            </div>
          </div>
    </v-main>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  name: 'MyAccount',
components: { Hero},
  data () {
    return {
      items: [
      ]
    }
  },
}
</script>

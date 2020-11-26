<template>
    <v-main>
      <Hero/>
        <div class="block">
          <v-container>
            <h2 class="text-center">My Account</h2>
            <v-row>
              <div class="col col-2">
                <v-card
                    outlined
                    elevation="12"
                    width="276"
                >
                  <v-navigation-drawer
                      floating
                      permanent
                  >
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title align="center">
                          PRODUCTS
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list
                        dense
                        rounded
                    >
                      <v-list-item
                          v-for="item in items"
                          :key="item.title"
                          link
                      >
                        <v-list-item-icon>
                          <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-navigation-drawer>
                </v-card>
              </div>

              <div class="col col-10">
                <div class="text-center">
                  <div class="my-2">
                    <v-btn x-large color="success" dark>
                      <router-link to="/add_product">Add new Product</router-link>
                    </v-btn>
                  </div>
                </div>
                <div class="v-main__wrap"><div class="container"><div class="row"><div class="mt-2 col col-12"><strong>Category 1</strong></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="mt-2 col col-12"><strong>Category 2</strong></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="mt-2 col col-12"><strong>Category 3</strong></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="mt-2 col col-12"><strong>Category 4</strong></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div><div class="col-md-2 col-6"><div class="v-sheet theme--light" style="height: 150px;"></div></div></div></div></div>
              </div>
            </v-row>
          </v-container>
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
        {title: 'Meat', icon: "mdi-sausage"},
        {title: 'Fish', icon: 'mdi-shark-fin'},
        {title: 'Diary', icon: 'mdi-food-variant'},
        {title: 'Eggs', icon: 'mdi-egg'},
        {title: 'Fruits', icon: 'mdi-apple'},
        {title: 'Vegetables', icon: 'mdi-carrot'},
        {title: 'Flowers', icon: 'mdi-sprout'},
        {title: 'Mushrooms', icon: 'mdi-mushroom'},
        {title: 'Other', icon: 'mdi-tractor'},
      ],
    }
  },
}
</script>

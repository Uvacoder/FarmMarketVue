<template>

  <v-content>
    <Hero/>
    <v-row>
      <v-col cols="2"  >

      <v-card
        class="pa-4"
        l
        flat
    >
      <v-toolbar
          dense
          floating
          >
        <v-text-field
            prepend-icon="mdi-magnify"
            single-line
        ></v-text-field>
      </v-toolbar>
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

    </v-card>
      </v-col>
      <v-col cols="2" v-for="item in items" :key="item.id">
        <v-card outlined
                :loading="loading"
                class="mx-auto my-12"
        >
          <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
          </template>

          <v-img
              height="100"
              v-bind:src="item.src"
          ></v-img>

          <v-card-title>{{ item.title }}</v-card-title>

          <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
              <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
              ></v-rating>

              <div class="grey--text ml-4">
                4.5 (413)
              </div>
            </v-row>

            <div class="my-4 subtitle-1">
              {{item.location}}
            </div>

            <div>{{item.description}}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>


          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
            >
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>


    <div class="text-center">
      <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
      ></v-pagination>
    </div>

  </v-content>

</template>
<script>
import Hero from "@/components/Hero";

export default {
  name: 'Shop',
  components: {
    Hero,
  },
  data() {
    return {
      page: 1,
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

<template>
    <div class="block latestPostBlock">
      <v-container>
        <h2 class="text-center">Latest Products</h2>
        <v-row>
          <v-col cols="4" v-for="item in items" :key="item.id">
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
                  height="250"
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
      </v-container>
    </div>
</template>

<script>
  export default {
    name: 'LatestPost',

    data(){
      return {
        items: [
          {
            id: 1,
            title: "Tomat",
            location: "Tallinn",
            description: "Hello world, my name is tomato, im red and round",
            src: require("../assets/pictures/tomat.jpg")
          },
          {
            id: 2,
            title: "Apple",
            location: "Tartu",
            description: "Hello world, my name is apple, im yellow",
            src: require("../assets/pictures/apple.jpg")
          },
          {
            id: 3,
            title: "Strawberry",
            location: "Narva",
            description: "Hello world, my name is strawberry, im red",
            src: require("../assets/pictures/strawberry.jpg")
          }

        ]
      };
    }
  };
</script>


<style>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap);
#header {
  font-family: 'Montserrat';
}

</style>

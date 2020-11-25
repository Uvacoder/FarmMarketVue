<template>
    <div class="heroBlock">
      <v-carousel hide-delimiters cycle height="150" align="top">
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
          <v-row
              class="fill-height title"
              align="top"
              justify="center"
          >
            <div>
              {{item.title}}
            </div>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </div>
</template>

<script>
  export default {
    name: 'Hero',

    data () {
      return {
        items: [
          {
            src: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1476837579993-f1d3948f17c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
          },
        ],
      }
    },
  }
</script>


<style>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap);
#hero {
  font-family: 'Montserrat';
}

</style>

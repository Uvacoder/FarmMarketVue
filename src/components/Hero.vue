<template>
  <div class="heroBlock">
    <v-carousel  :show-arrows="false" hide-delimiters cycle  height="100" >
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
      >
        <v-row
            class="fill-height title"
            justify="center"
        >
          <div  >
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
          src: '/pictures/carousel1.jpg',
        },
        {
          src: '/pictures/carousel2.jpg',
        },
        {
          src: '/pictures/carousel3.jpg',
        },
        {
          src: '/pictures/carousel4.jpg',
        },
      ],
    }
  },
}
</script>


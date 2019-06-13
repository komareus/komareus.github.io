<template>
  <v-card class="home-card" ripple @click="toChapter">
    <v-img
      :src="cardData.src"
      class="white--text"
      height="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title
        class="fill-height align-end justify-center"
      >
        {{ cardData.title }}
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    cardData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    toChapter() {
      this.$router.push(this.cardData.to)
    }
  }
}
</script>

<style scoped lang="scss">
 .home-card{
    cursor: pointer;
    border: 10px solid rgba(255,255,255,.4);
    border-radius: 20px;
 }
</style>

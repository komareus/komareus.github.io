<template>
  <v-container>
    <h1 class="mb-5">
      Новини порталу
    </h1>
    <v-layout
      v-for="(item, i) in 20"
      :key="i"
      class="mb-5"
    >
      НОВИНА
    </v-layout>
  </v-container>
</template>

<script>

export default {
  components: {
  }
}
</script>

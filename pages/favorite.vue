<template>
  <div>
    <the-header />
    <div v-for="n in showNumber" :key="n">
      <the-card :number="n" />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheCard from '~/components/TheCard.vue'

export default {
  components: {
    TheHeader,
    TheCard
  },
  data() {
    return { showNumber: [] }
  },
  mounted() {
    let json = localStorage.getItem('json')
    json = JSON.parse(json)
    this.showNumber = json
  }
}
</script>

<style>
</style>

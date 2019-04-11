<template>
  <div>
    <the-header />
    <div v-for="n in 10" :key="n">
      <the-card :number="n"/>
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
  }
}
</script>

<style>

</style>

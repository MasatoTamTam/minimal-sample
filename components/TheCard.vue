<template>
    <div class="container">
        <div class="columns is-one-fifth">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                Component {{number}}
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </a>
            </header>
            <div class="card-content">
                <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                </div>
            </div>
            <footer class="card-footer">
                <a v-if="!isFavorite" href="#" class="card-footer-item" @click="save(number)">Save</a>
                <a v-else href="#" class="card-footer-item" @click="del(number)">Delete</a> 
                <a :href="'details/' + number" class="card-footer-item">Show Details</a>
            </footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    number: Number
  },
  mounted() {
    let json = localStorage.getItem('json')
    if (json.indexOf(this.number) !== -1) {
      this.isFavorite = true
    }
  },
  data() {
    return { isFavorite: false }
  },
  methods: {
    save: function (number) {
      let json = localStorage.getItem('json')
      json = JSON.parse(json)
      if (json) {
        json.push(number)
      } else {
        json = [number]
      }
      json = json.filter(function (v, i, s) {
        return s.indexOf(v) === i
      })
      localStorage.setItem('json', JSON.stringify(json))
      this.isFavorite = true
    },
    del: function (number) {
      this.isFavorite = false
      let json = localStorage.getItem('json')
      json = JSON.parse(json)
      json.splice(json.indexOf(number), 1)
      localStorage.setItem('json', JSON.stringify(json))
    }
  }
}
</script>

<style lang="css" scoped>
div.columns {
  margin: 10px;
}
</style>

<template>
  <div class="loading-container">
    <img class="loading" src="/img/loading.gif" />
  </div>
</template>

<script>
export default {
  name: 'loading-component',
  mounted() {
    this.isLondingOnScreen()
  },
  methods: {
    isLondingOnScreen() {
      window.addEventListener('scroll', () => {
        const loadingElement = document.querySelector('.loading')
        const distanceToTop = loadingElement.getBoundingClientRect().top
        if(distanceToTop < window.innerHeight) {
            this.$emit('loadingIsOnScreen')
        }
      })
    }
  }
}
</script>

<style scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.loading {
  width: 30%;
  max-width: 100px;
}
</style>

<template>
  <input placeholder="Nome do Pókemon" @input="sendUserInput($event)" />
</template>

<script>
export default {
  name: 'search-bar',
  methods: {
    async sendUserInput($event) {
      const userInput = this.cleanInput($event.target.value)
      if (await this.setTimer()) {
          this.$emit('userInput', userInput)
      }
    },
    cleanInput(input) {
      input = input.trim().toLowerCase()
      return input
    },
    setTimer() {
      return new Promise((res) => {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = null
        }
        this.timer = setTimeout(() => {
          res(true)
        }, 1000)
      })
    },
    setMinimumLength(input) {
      if (input.length >= 3) {
        return true
      }
      return false
    }
  },
  data() {
    return { timer: null }
  }
}
</script>

<style scoped>
input {
  display: block;
  margin: 100px auto 0 auto;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 20px;
}

/* ---------------- MOBILE XL --------------- */
@media (min-width: 500px) {
  input {
    width: 70%;
  }
}
</style>

<template>
  <div class="listing-container">
    <SearchBar @userInput="filterUserInput" />
    <div class="not-found" v-if="notFound">
      <h2>Não encontrado!</h2>
      <img src="/img/pikachuSurprise.png" alt="Imagem do Pokémon Pikachu, surpreso"/>
    </div>
    <div v-else class="cards-grid">
      <Card
        v-for="pokemon in pokemonsListOnCurrentPage"
        :key="pokemon.name"
        :pokemonInfo="pokemon"
      />
    </div>
    <Loading @loadingIsOnScreen="loadMore" v-if="!isFiltering && !notFound" />
  </div>
</template>

<script>
import Card from '../components/listing/Card.vue'
import SearchBar from '../components/listing/SearchBar.vue'
import Loading from '../components/listing/Loading.vue'
import callApi from '../assets/js/services/callApi'

export default {
  name: 'listing-component',
  components: {
    SearchBar,
    Card,
    Loading
  },
  async mounted() {
    const apiCall = await callApi('https://pokeapi.co/api/v2/pokemon?limit=1281')
    this.pokemonsList = apiCall.results
    this.pokemonsListOnCurrentPage = this.pokemonsList.slice(0, this.cardsPerPage)
  },
  data() {
    return {
      pokemonsList: [],
      pokemonsListOnCurrentPage: [],
      currentPage: 1,
      cardsPerPage: 20,
      notFound: false,
      isFiltering: false
    }
  },
  methods: {
    async loadMore() {
      if (!this.isFiltering) {
        this.currentPage++
        this.pokemonsListOnCurrentPage = this.pokemonsList.slice(
          0,
          this.cardsPerPage * this.currentPage
        )
      }
    },
    async filterUserInput(userInput) {
      if (userInput.length >= 3) {
        const filterList = this.pokemonsList.filter((pokemon) => {
          if (pokemon.name.startsWith(userInput)) {
            return pokemon
          }
        })
        if (filterList.length > 0) {
          this.pokemonsListOnCurrentPage = filterList
          this.isFiltering = true
          this.notFound = false
        } else {
          this.pokemonsListOnCurrentPage = this.pokemonsList.slice(
            0,
            this.cardsPerPage * this.currentPage
          )
          this.notFound = true
          this.isFiltering = false
        }
      } else {
        this.pokemonsListOnCurrentPage = this.pokemonsList.slice(
          0,
          this.cardsPerPage * this.currentPage
        )
        this.isFiltering = false
        this.notFound = false
      }
    }
  }
}
</script>

<style scoped>
.listing-container {
  max-width: 1060px;
  margin: 0 auto;
}

.cards-grid {
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 400px;
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  flex-direction: column;
  gap: 50px;
}

.not-found img {
  width: 80%;
  min-width: 300px;
  max-width: 400px;
  transform: translateX(10px);
}

.not-found p {
  font-family: sansMono;
  font-weight: 900;
  font-size: 1.3rem;
}
</style>

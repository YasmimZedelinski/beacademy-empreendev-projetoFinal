<template>
  <div :id="name" class="card">
    <img class="pokephoto" :src="image" />
    <span class="pokename">
      {{ this.name }}
    </span>
    <div class="poketype">
      <span class="poketype-name" v-for="type in types" :key="type">
        <img class="poketype-icon" :src="'/img/types/' + type.type.name + '.png'" />
        {{ type.type.name }}
      </span>
    </div>
    <div class="pokeabilities">
      <p class="title-abilities">Habilidades:</p>
      <span class="abilitie-name" v-for="abilitie in abilities" :key="abilitie">
        {{ abilitie.ability.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-component',
  props: {
    pokemonInfo: {
      type: Object,
      required: false
    },
    pokemonSpecificInfo: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      name: this.pokemonInfo.name,
      url: this.pokemonInfo.url,
      specifiedInfo: {},
      image: '',
      types: [],
      abilities: []
    }
  },
  async beforeMount() {
      const apiCall = await fetch(this.url)
      const reqBody = await apiCall.json()
      this.image = reqBody.sprites.other.dream_world.front_default ? reqBody.sprites.other.dream_world.front_default : reqBody.sprites.other['official-artwork'].front_default
      this.types = reqBody.types
      this.abilities = reqBody.abilities
      this.specifiedInfo = reqBody
  },
  async mounted() {
    const types = await new Promise((res) => {
      const interval = setInterval(() => {
        if (this.types) {
          clearInterval(interval)
          res(this.types)
        }
      }, 1000)
    })

    document.querySelector('#' + this.name).style.backgroundColor =
      'var(--' + types[0].type.name + ')'
  }
}
</script>

<style scoped>
.card {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.pokephoto {
  width: 60%;
  object-fit: fill;
  max-height: 150px;
  min-height: 150px;
}

.pokename {
  margin-top: 10px;
  font-family: sansMono;
  font-weight: 900;
  font-size: x-large;
}

.poketype {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
.poketype-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: sansMono;
  font-weight: 900;
}

.poketype-icon {
  width: 20px;
  filter: drop-shadow(0px 0px 2px #fff);
}

.pokeabilities {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 5px;
}

.title-abilities {
  font-weight: 900;
  font-family: sansMono;
}

.abilitie-name {
  text-align: center;
  font-family: sansMono;
}
</style>

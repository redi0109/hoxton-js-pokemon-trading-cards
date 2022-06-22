
function createPokemonCard(pokemon) {


  let cardLi = document.createElement('li')
  cardLi.className = 'card'
  cardLi.addEventListener('click', function () {

    if (pokeImg.src === pokemon.sprites.front_default) {
      pokeImg.src = pokemon.sprites.back_default
    } else {
      pokeImg.src = pokemon.sprites.front_default
    }

    
  })


  let titleH2 = document.createElement('h2')
  titleH2.className = 'card--title'
  titleH2.textContent = pokemon.name.toUpperCase()

  let pokeImg = document.createElement('img')
  pokeImg.width = 256
  pokeImg.className = 'card--img'
  pokeImg.src = pokemon.sprites.back_default

  let statsUl = document.createElement('ul')
  statsUl.className = 'card--text'

  for (let statInfo of pokemon.stats) {
    let statLi = document.createElement('li')
    statLi.textContent = `${statInfo.stat.name.toUpperCase()}: ${
      statInfo.base_stat
    }`
    statsUl.appendChild(statLi)
  }

  cardLi.append(titleH2, pokeImg, statsUl)

  let cardsUl = document.querySelector('.cards')
  cardsUl.append(cardLi)
}

for (let pokemon of data) {
  createPokemonCard(pokemon)
}


let addPokemonForm = document.querySelector('.add-pokemon-form')
addPokemonForm.addEventListener('submit', function (event) {
  event.preventDefault()

  let pokemon = {
    name: addPokemonForm.name.value,
    sprites: {
      back_default: addPokemonForm.backImage.value,
      front_default: addPokemonForm.frontImage.value,
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'hp',
          url: 'https://pokeapi.co/api/v2/stat/1/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'attack',
          url: 'https://pokeapi.co/api/v2/stat/2/',
        },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: {
          name: 'defense',
          url: 'https://pokeapi.co/api/v2/stat/3/',
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: 'special-attack',
          url: 'https://pokeapi.co/api/v2/stat/4/',
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: 'special-defense',
          url: 'https://pokeapi.co/api/v2/stat/5/',
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: 'speed',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
      {
        base_stat: 9001,
        effort: 0,
        stat: {
          name: 'cuteness',
          url: 'https://pokeapi.co/api/v2/stat/6/',
        },
      },
    ],
  }

  addPokemonForm.reset()

  createPokemonCard(pokemon)
})

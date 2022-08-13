const pokeImage = document.querySelector('.poke_image')
const pokemonName = document.querySelector('.pokemon_name')
const pokeNumber = document.querySelector('.pokemon_number')
const form = document.querySelector('.form')
const inputSearch = document.querySelector('.input_search')
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')
let pokeId = 1

async function apiDataId(pokemon) {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await APIResponse.json()

    return data.id
}

const fetchPoke = async (pokeName) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

    const data = await APIResponse.json();

    pokeImage.setAttribute('src', data.sprites.versions["generation-v"]["black-white"].animated.front_default)
    pokemonName.textContent = data.name
    pokeNumber.textContent = data.id


    console.log(data.name)
}



form.addEventListener('submit', async (e) => {
    e.preventDefault()


    await fetchPoke(inputSearch.value)

    pokeId = await apiDataId(inputSearch.value)



    console.log(pokeId)
})

async function incrementId() {

    if (pokeId < 649) {

        pokeId++

        await fetchPoke(`${pokeId}`)
        console.log(pokeId)

    } else {
        return pokeId
    }

}

async function decrementId() {
    if (pokeId > 1) {

        pokeId--

        await fetchPoke(`${pokeId}`)
        console.log(pokeId)
    } else {
        return pokeId
    }


}

fetchPoke(1)


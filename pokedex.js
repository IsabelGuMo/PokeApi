const pokemonsContainer$$ = document.querySelector('#pokedex');

const getPokemonsApi = async () => {
    let maxPokemon = 150; 
    for (let index = 1; index <= maxPokemon; index++) {
        const PokemonApi = await fetch (`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then(result => result.json())
            .then(data => printPokemon(data))            
    }
}

const printPokemon = (pokemon) => {
    const pokemonHTML =`
        <div>
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.sprites.front_default}"/>
        </div>
    `;
    const newPokemon = document.createElement("div");
    newPokemon.classList.add("col-4");
    newPokemon.innerHTML = pokemonHTML;

    pokemonsContainer$$.appendChild(newPokemon);
}

getPokemonsApi();

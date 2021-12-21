const pokemonsContainer$$ = document.querySelector('#pokedex');

const getPokemonsApi = async () => {
    let maxPokemon = 150; 
    for (let index = 1; index <= maxPokemon; index++) {
        await fetch (`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then(result => result.json())
            .then(data => printPokemon(data))            
    }
}

const printPokemon = (pokemon) => {
    const newPokemon = document.createElement("div");
    newPokemon.classList.add("col-4");
    
    const pokemonHTML =`
        <div class="card pokemon-card">
            <img src="${pokemon.sprites.front_default}" width="96" class="mx-auto d-block"/>
            <div class="card-body text-center" </div>
                <h5 class="card-title">${pokemon.name}</h5>
            </div>
        </div>
    `;
    newPokemon.innerHTML = pokemonHTML;

    pokemonsContainer$$.appendChild(newPokemon);
}

getPokemonsApi();

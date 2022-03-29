const pokemonsContainer$$ = document.querySelector('#pokedex');
const pokemonSearch = [];
const getPokemonsApi = async () => {
    let maxPokemon = 150; 
    for (let index = 1; index <= maxPokemon; index++) {
        await fetch (`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then(result => result.json())
            .then(data => printPokemon(data))            
    }
};

const printPokemon = (pokemon) => {
    const newPokemon = document.createElement("div");
    newPokemon.classList.add("col", "mb-5");

    const typesIcons = pokemon.types.map(type => {
        return `
            <div data-pokemon-type="${type.type.name}" class="icon ${type.type.name}">
                <img src="images/icons/${type.type.name}.svg"/>
            </div>`;
    });
    
    const pokemonHTML =`
        <div data-fn="pokemon-card" id="${pokemon.id}" class="card h-100 pokemon-card pokemon-card-${pokemon.types[0].type.name}">
            <img src="${pokemon.sprites.other.dream_world.front_default}" class="card-img-top"/>
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 data-fn="pokemon-name" class="fw-bolder">${pokemon.name}</h5>
                    height: ${pokemon.height} - weight: ${pokemon.weight}
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="icon-container">
                    ${typesIcons.join('')}
                </div>
            </div>
        </div>
    `;
    newPokemon.innerHTML = pokemonHTML;

    pokemonsContainer$$.appendChild(newPokemon);

    pokemonSearch.push({
        label: pokemon.name, 
        value: pokemon.id,
    });
};

getPokemonsApi();

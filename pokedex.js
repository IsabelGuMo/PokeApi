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
    const newPokemon = document.createElement('div');
    newPokemon.classList.add('col-4');
    
    const pokemonHTML = `
        <div class="card pokemon-card" style="width: 18 rem;">        
            <img src="${pokemon.sprites.other.dream_world.front_default}" class="card-img-top" width: "96 rem"/>
            <div class="card-body text-center">
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${pokemon.name}</li>
                <li class="list-group-item">id: ${pokemon.id}</li>
                <li class="list-group-item">A third item</li>
            </ul> 
        </div>`;
    
    newPokemon.innerHTML = pokemonHTML;

    pokemonsContainer$$.appendChild(newPokemon);
}

getPokemonsApi();

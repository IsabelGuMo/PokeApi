
const pokemonCards$$ = document.querySelectorAll('[data-fn="pokemon-card"]'); 
for (let pokemonCard$$ of pokemonCards$$) {
    let pokemonName$$ = pokemonCard$$.querySelector('[data-fn="pokemon-name"]');
    let pokemonName = pokemonName$$.textContent;
    let pokemonId = pokemonCard$$.id;
    pokemonSearch.push({
        label: pokemonName, 
        value: pokemonId,
    });
}

const search = (event) => {
    event.preventDefault(); // evita que el formulario se envie

    const searchForm$$ = event.target; 
    const searchTerm$$ = searchForm$$.elements['search-term'];
    const searchTerm = searchTerm$$.value.trim().toLowerCase();

    if (searchTerm === '') {
        alert("Type your Pokémon's name or class!!");

        return;
    }
}; 


const searchForm$$ = document.querySelector('#search-form');

searchForm$$.addEventListener('submit', search);


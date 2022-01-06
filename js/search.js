const search = (event) => {
    event.preventDefault(); // evita que el formulario se envie

    const searchForm$$ = event.target; 
    const searchTerm$$ = searchForm$$.elements['search-term'];
    const searchTerm = searchTerm$$.value.trim().toLowerCase();

    if (searchTerm === '') {
        alert("Type your Pokémon's name or class!!");

        return;
    }

    const pokemonCards$$ = document.querySelectorAll('[data-fn="pokemon-card"]'); 
    for (let pokemonCard$$ of pokemonCards$$) {
        let pokemonName$$ = pokemonCard$$.querySelector('[data-fn="pokemon-name"]');
        let pokemonName = pokemonName$$.textContent;
        if (searchTerm != pokemonName) {
            pokemonCard$$.style.display = 'none';
        } else {
            pokemonCard$$.style.display = 'block';
        }
    }
}; 


const searchForm$$ = document.querySelector('#search-form');

searchForm$$.addEventListener('submit', search);


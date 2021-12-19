const ol$$ = document.querySelector('#pokedex');

const getPokemonsApi = async () => {
    let maxPokemon = 2; 
    for (let index = 1; index <= maxPokemon; index++) {
        const PokemonApi = await fetch ("https://pokeapi.co/api/v2/pokemon/"+ index)
            .then(result => result.json().then(data => {
                const pokemon = data.map((result) => ({
                            name: result.name,
                            image: result.sprites.front_default,
                            id: result.id
                        }))
            }))
            .then(
                // response => {
                //     const pokemon = response.map((result) => ({
                //         name: result.name,
                //         image: result.sprites.front_default,
                //         id: result.id
                //     }))


                //     printPokemon(response.data);
                
                // }
            )            
    }
}

const printPokemon = (pokemon) => {
    console.log(pokemon)
 
    const pokemonHTML =`<li>${pokemon.name}</li> `
                        

    

    let newLi = document.createElement("li");

    ol$$.appendChild(newLi);

}
getPokemonsApi();

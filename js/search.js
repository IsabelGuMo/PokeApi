const search = (event) => {
    event.preventDefault(); // evita que el formulario se envie

    const searchTerm$$ = event.target.elements['search-term'];
    const searchTerm = searchTerm$$.value.trim().toLowerCase();

    if (searchTerm === '') {
        alert('Escribe algo!!');
    }
    console.log(searchTerm);
}; 


const searchForm$$ = document.querySelector('#search-form');

searchForm$$.addEventListener('submit', search);
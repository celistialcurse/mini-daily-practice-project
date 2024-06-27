const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
// <!-- here i took the name of the type and assign them color the all types are from api doc-->
};
const fetchPokemon = async () => {
    for(let i= 1;i<= pokemon_count ;i++){
       await getPokemon(i);
    }
//    the loop wiil run for each card 
 };

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);

    // here url contain the id which i passed from fetchpokemon function 
    // res variable declared which fetch the url 
    // in data variable we store the json file 
    // data wiil be passed as parameter to the createPokemon function where actuall task is performend 
};
   
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
  // here we create the div and give them class name pokemon for which alread styling in css
    const pokemonInnerHTML = `
      <div class="img-container">
        <img
          src="${pokemon.sprites.front_default}"
          alt=""
        />
      </div>
      <!--IN this container of info there will be information of the card -->
      <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        <h3 class="name">${pokemon.name}</h3>
        <small class="type">Type: ${pokemon.types.map(type => type.type.name).join(', ')}</small>
      </div>
    `;
  // pokeminnerhtml consist of html tags 
    pokemonEl.innerHTML = pokemonInnerHTML;
  // append this to pokemon -container 
    // Add background color based on the Pokémon's type
    const pokemonType = pokemon.types[0].type.name;
    // this wiil return the name of type as some has two type so we used indexhere 
    pokemonEl.style.backgroundColor = colors[pokemonType];
  // now according to type set the color of box
    poke_container.appendChild(pokemonEl);
  };

  fetchPokemon();
 
  



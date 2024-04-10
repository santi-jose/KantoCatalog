import pokemonData from "./pokemonData.js";

// get pokemon list from index.html
const pokemonContainer = document.getElementById("pokemonContainer"); 

for (const pokemon of pokemonData){
    // create pokemonDiv to store pokemon information
    const pokemonDiv = document.createElement("div");
    pokemonDiv.className = "pokemonDiv";

    // create h2 to store pokemon ID
    const id = document.createElement("h2");
    id.innerText = "ID:" + pokemon.id;

    // create h3 to store pokemon name
    const name = document.createElement("h3");
    name.innerText = pokemon.name;

    // create ordered list to store pokemon types
    const types = document.createElement("ol");
    for(const type of pokemon.type){
        const currentType = type;
        const typeElement = document.createElement("li");
        typeElement.innerText = currentType;
        types.appendChild(typeElement);
    }

    // create img to store pokemon sprite 
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprite;

    pokemonDiv.appendChild(id);
    pokemonDiv.appendChild(name);
    pokemonDiv.appendChild(types);
    pokemonDiv.appendChild(sprite);

    pokemonDiv.id = pokemon.name;

    pokemonContainer.appendChild(pokemonDiv);
}

// handle search 
const searchForm = document.getElementById("search");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.getElementById("query").value;
    console.log(query);

    const pokemonDivs = document.getElementsByClassName("pokemonDiv");
    const queriedDiv = document.getElementById(query);
    console.log(queriedDiv);
    if(queriedDiv !== undefined){
        for(const pokemonDiv of pokemonDivs){
            const name = pokemonDiv.getElementsByTagName("h3")[0].innerText;
            console.log(name);
            console.log(query);
            if(name == query){
                console.log("match found");
                pokemonDiv.style.display = "flex";
            }else{
                pokemonDiv.style.display = "none";
            }
        }
    }else{
        alert("Invalid pokemon name, try another one!");
        console.log("Invalid pokemon name, try another one!");
    }
    
})

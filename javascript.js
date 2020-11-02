//Création de variable 
let url = 'https://pokeapi.co/api/v2/';
let type =  'pokemon';
let id = 26;

var precedent = document.getElementById("precedent")
precedent.onclick = function(){
	id --;
	fetch(`${url}${type}/${id}`)
	.then( (data) => data.json())
 	.then((pokemon) => generateHtml(pokemon))
 	
};
//fetch me permet d'appeler les élement que je vaux afficher et les modifier
var suivant = document.getElementById("suivant")
suivant.onclick = function(){
	id ++;
	fetch(`${url}${type}/${id}`)
	.then( (data) => data.json())
 	.then((pokemon) => generateHtml(pokemon))
 };

const apiUrl = `${url}${type}/${id}`

	fetch(apiUrl)
 		.then( (data) => data.json())
 		.then((pokemon) => generateHtml(pokemon))

const generateHtml = (data) => {
 	console.log(data)
 	const html = `
 			<h2 class="name" >${data.name}</h2>
 			<img src="${data.sprites.front_default}"width="100" height="100">
 			<div class="details">
 			<h4>Height: ${data.height}</h4>
 			<h4>Weight: ${data.weight}</h4>
 			<h4>abilities: ${data.abilities[0].ability.name}</h4>
 			<h4>abilities: ${data.abilities[1].ability.name}</h4>
 			<h4>types: ${data.types[0].type.name}</h4>

 		</div>
 	`
 	const pokemonDiv = document.querySelector('.pokemon')
 	pokemonDiv.innerHTML = html
 }

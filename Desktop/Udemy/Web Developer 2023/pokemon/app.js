//http://raw.githubsercontent.com/PokemonAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const newImg = document.createElement('img');
const baseURL = 'http://raw.githubsercontent.com/PokemonAPI/sprites/master/sprites/pokemon/';



for (let number = 1 ; number < 101; number++){
    const pokemon = document.createElement('div');
    const lable = document.createElement('span');
    lable.innerText = `#${number}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${number}.png`;

    pokemon.appendChild(newImg);
    pokemon.appendChild(lable);
    container.appendChild(pokemon);
}
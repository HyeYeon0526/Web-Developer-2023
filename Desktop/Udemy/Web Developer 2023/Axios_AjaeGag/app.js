const jokes = document.querySelector("#jokes");
const btn = document.querySelector('button');

const getDadjoke = async () => {
    try{
        const config = { headers : { Accept: 'application/json'} }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke;

    } catch(e){
        console.log("ERROR",e);
    }

}


const addNewJoke = async() => {
    const jokeText = await getDadjoke();
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);
}

btn.addEventListener('click',addNewJoke);

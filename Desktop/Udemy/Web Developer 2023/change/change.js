const inputText = document.querySelector('input');
const newText = document.querySelector('h1');

inputText.addEventListener('input',(e) => {
    e.preventDefault();
    newText.innerText = inputText.value;
})
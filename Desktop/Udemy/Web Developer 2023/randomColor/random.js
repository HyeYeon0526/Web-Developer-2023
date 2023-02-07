const text = document.querySelector('#color_text');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    const colorChip = randomColor();
    text.innerText = colorChip;
    document.body.style.backgroundColor = colorChip;
})


const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r + g + b < 100) {
        text.style.color = 'white';
    }
    return `rgb(${r}, ${g}, ${b})`;
    
}
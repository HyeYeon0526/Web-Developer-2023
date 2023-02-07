const btn = document.querySelector('#btn');
const btn3 = document.querySelector('#btn3');

btn.onclick = function(){
    console.log('You clicked me! ');
    console.lof('I hope it worked! ');
}

function scream() {
    console.log('AHHHHHHHHHHHHHH!!!!!!');
    console.log('STOP TOUCHING ME!');
}

btn.onmouseenter = scream;

btn3.addEventListener('dblclick',function(){
    alert(' AEL btn clicked! ');
})
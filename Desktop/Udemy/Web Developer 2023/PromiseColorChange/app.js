const delayChangeColor = (color,delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            console.log(color);
            console.log(delay)
            resolve();
        },delay)
    })
}

delayChangeColor('red',1000)
    .then(() => delayChangeColor('orange',1000)) // return을 암시함으로서 Promise를 사용하여 색을 시간에 맞춰 변경하도록 지정함
    .then(() => delayChangeColor('yellow',1000))
    .then(() => delayChangeColor('green',1000))
    .then(() => delayChangeColor('blue',1000))
    .then(() => delayChangeColor('indigo',1000))
    .then(() => delayChangeColor('violet',1000))
const sing = async() => { // async 예제. 함수를 Promise로 실행하게 만들어줌
    throw "OH NO, PROBLEM !"
    return 'LALALALA~~~'
}

sing()
    .then(date => {
        console.log('PROBLEM RESOLVED WITH :', data)
    })
    .catch(err => {
        console.log('OH NO, PROBLEM REJECTED !!')
        console.log(err)
    })


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

async function rainbow() {
    await delayChangeColor ('red', 1000) // await 사용 예시. 하나의 이벤트가 끝날 때까지 기다렸다가 다음 작업을 수행
    await delayChangeColor ('orange', 1000)
    await delayChangeColor ('yellow', 1000)
    await delayChangeColor ('green', 1000)
    await delayChangeColor ('blue', 1000)
    await delayChangeColor ('indigo', 1000)
    await delayChangeColor ('purple', 1000)
    return console.log('Finish!')
}

rainbow().then(() => console.log('end of rainbow'));


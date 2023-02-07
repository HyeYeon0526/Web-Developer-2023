const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if(delay > 4000) {
            failure('Connection Timeout :(')
        }else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise =(url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if(delay > 4000) {
                reject('Connection Timeout :(')
            }else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

const request = fakeRequestPromise('www.naver.com/coffee');

request
		.then((data) => { // Promise로의 요청이 성공일 때. then 메서드를 사용함
		    console.log("success (page1)!")
            console.log(data)
			return fakeRequestPromise('www.naver.com/coffee2'); // return 시에 다음번 통과해야하는 url 주소를 반환함으로서 중첩문이 되지 않게 만든다.
		})
		.then((data) => {
		    console.log("success! (page2)")
            console.log(data)
            return fakeRequestPromise('www.naver.com/coffee3');
		})
		.then((data) => {
		    console.log("success! (page3)")
            console.log(data)
            return fakeRequestPromise('www.naver.com/coffee4');
		})
		.catch(() => { // Promise로의 요청이 실패. catch 메서드를 사용함
		    console.log("fail!")
		})
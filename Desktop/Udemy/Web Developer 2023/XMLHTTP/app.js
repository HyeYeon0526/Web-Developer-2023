 /* 
 "https://swapi.dev/api/people/1/"
번거로운 XMLHttpRequest 방식
const req = new XMLHttpRequest();

req.onload = function() {
    console.log("IT LOADED!!!")
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data.name, data.height);
}

req.onerror = function() {
    console.log("ERROR!!!")
    console.log(this);
}

req.open("GET","https://swapi.dev/api/people/1/")
req.send();

----------------------------------------------------------------------------------------------------------

fetch 를 사용한 연속적인 요청방식

fetch("https://swapi.dev/api/people/1/") // fetch 함수를 호출하면 첫번째 프로미스가 반환된다. 
    .then(res => { // 프로미스 처리 완
        console.log("RESOLVED !!! ",res)
        return res.json() // 첫번째 프로미스의 성공적인 반환값으로 res.json을 호출해서 두번째 프로미스를 반환. 
    })
    .then((data) => { // 두번째 프로미스를 성공적으로 반환받은 res.json을 data 매개변수로 받음. 
        console.log("JSON DONE", data) 

        return fetch("https://swapi.dev/api/people/2/") // 첫번째 구문의 요청이 끝난 후 두번째 요청을 보내기 위해 return
    })
    .then ((res) => {
        console.log("SECOND REQUEST RESOLVED !!") // 두번째 요청을 프로미스로 반환받은 후 값을 사용 가능. 중첩문을 사용할 필요가 없게된다.
        return res.json()
    })
    .then ((data) => {
        console.log("JSON DONE", data)
    })
    .catch((e) => { // 프로미스 처리 실패시 에러 처리
        console.log("ERROR",e);
    })



-------------------------------------------------------------------------------------------------------------------


const loadStarWardsPeople = async () => { // 비동기 함수를 활용한 fetch 이용 (url에 오류가 있을 상황을 대비하여 try-catch로 감싸주어야 한다. )
    try{
        const res = await fetch("https://swapi.dev/api/people/1/")
        const data = await res.json();
        console.log(data);

        const res2 = await fetch("https://ssdaergaerwapi.dev/api/people/2/") // 잘못 입력된 url이 존재할 시 catch문으로 전달됨
        const data2 = await res2.json();
        console.log(data2);
    }
    catch(e) {
        console.log("ERROR !!!! ")
    }

};

loadStarWardsPeople();

------------------------------------------------------------------------------------------------------------------------

*/



// 리팩토링 .ver

async function loadStarWardsPeople (id) {
    try{
        const url = `https://swapi.dev/api/people/${id}/`
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }
    catch(e){
        console.log("ERROR !!!! ")
    }
}

loadStarWardsPeople(1);
loadStarWardsPeople(2);
const clock = document.querySelector('h2#clock');

function getClock(){
    let date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //시작하자마자 하나 시작하고
setInterval(getClock, 1000); //1초뒤에 다시


// setTimeout(sayHello, 5000);
// new Date().getHours()
// new Date().getMinutes()
// new Date().getSeconds()

//일단위일때 01이 아니라 1 이라 안이쁨
//알아서 string 무조건 2자리수로 나오게 하기

//padStart(max, 'string');
//String()


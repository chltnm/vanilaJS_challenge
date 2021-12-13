const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const placehlder = loginForm.querySelector('#placeholder');

const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";

loginInput.addEventListener('focus', (event) => {
    placehlder.classList.add('hidden');
    loginInput.style.outline = '1px solid salmon'
});
placehlder.addEventListener('click', (event) => {
    placehlder.classList.add('hidden');
    loginInput.style.outline = '1px solid salmon'
    loginInput.focus();
});
loginInput.addEventListener('blur', (event) => {
    placehlder.classList.remove('hidden');
    loginInput.style.outline = 'none'
  });

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerHTML = `How was your day? <span class="salmon">${username}</span>`;
    greeting.style.textAlign = 'center';
    greeting.style.fontSize = '36px';
    greeting.style.fontWeight = '800';
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    //show the greetings
    //새로고침해도 가지고 있는 savedUsername을 가지고 보여줄 화면
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}



// Form Submission - value submit이 중요하지 click 했는지가 중요하지 않음
// loginButton.addEventListener('click',onLoginBtnClick);

//event.preventDefault() 설명
// const link = document.querySelector('a');
// function linkClick(event){
//     console.dir(event);
//     event.preventDefault();
// }
// link.addEventListener('click', linkClick);



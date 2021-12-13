const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const placehlderP = toDoForm.querySelector('#placeholder');
// 같은 문법 document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos'; //localStorage 키 

toDoInput.addEventListener('focus', (event) => {
    placehlderP.classList.add('hidden');
    toDoInput.style.outline = '2px solid salmon'
});
placehlderP.addEventListener('click', (event) => {
    toDoInput.style.outline = '2px solid salmon'
    placehlderP.classList.add('hidden');
    toDoInput.focus();
});

toDoInput.addEventListener('blur', (event) => {
    toDoInput.style.outline = 'none'
    placehlderP.classList.remove('hidden');
});

let toDos = [];
//const 새로고침할때마다 예전 toDos없어지고 새 toDos만 생기는 문제 생김

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //localStorage는 string만 저장하기 때문에 string으로 만들어서 저장
}

function deleteToDo(event) {
    //click -> event 발생 -> 타겟의 부모찾기 parentNode = parentElement
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    //parseInt : id는 문자 -> 숫자형으로
    //Array.filter( function which return false한 item 제거 );
    //delete누른 todo list의 id 같으면 제거 아니면 살려놓기

    saveToDos(); //localstorage에 setItem 새로고침
    //toDo 가 변경되면 saveToDos=setItem 도 같이.
}

function paintTodo(newTodo) {
    //newTodoObj 객체 인수를 newTodo라는 새로운 이름으로 받아서 씀 같은거임
    //최종 li<span+btn => ul#todo-list 에 넣기
    const li = document.createElement('li');
    li.id = newTodo.id;
    const newSpan = document.createElement('span');

    newSpan.innerText = `📍 ${newTodo.text}`;
    newSpan.style.padding = '0 12px 0px 1px';
    newSpan.style.fontWeight = '600';
    const button = document.createElement('button');
    button.innerText = '❌';
    button.style.background = 'transparent';
    button.style.border = 'none';
    button.style.fontSize = '.7em';
    button.addEventListener('click', deleteToDo);
    li.appendChild(newSpan); //~의 자식으로 마지막에 넣기 태그만가능
    li.style.marginBottom = '5px';
    li.appendChild(button); //span다음 btn
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //변수 복사해서 보내고, 비우기
    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //고유의 id 주기위해서 사용
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //stringify 한거 다시 array로
    toDos = parsedToDos; //keeping
    parsedToDos.forEach(paintTodo);
}
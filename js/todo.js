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
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStorage는 string만 저장함
}
//toDo 가 변경되면 saveToDos 도 같이.

function deleteToDo(event) {
    //click -> event 발생 -> 타겟의 부모찾기 parentNode = parentElement
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    //id는 문자 -> Date.now처럼 숫자형으로
    saveToDos(); //localstorage에 setItem 새로고침
}

function paintTodo(newTodo) { 
    //newTodoObj 객체 인수를 newTodo라는 이름으로 받아서 씀
    //최종 li<span+btn => ul#todo-list 에 넣기
    const li = document.createElement('li');
    li.id = newTodo.id;
    const newSpan = document.createElement('span');
    
    newSpan.innerText = `📍 ${newTodo.text}`;
    newSpan.style.padding = '0 12px 0px 1px';
    newSpan.style.fontWeight = '600';
    // newSpan.id(newtod)
    const button = document.createElement('button');
    button.innerText = '❌';
    button.style.background = 'transparent';
    button.style.border = 'none';
    button.style.fontSize = '.7em';
    button.addEventListener('click', deleteToDo);
    li.appendChild(newSpan);
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
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

function sayHello(item) {
    //sayHello(item순서대로 실행);

}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //keeping
    parsedToDos.forEach(paintTodo);
}
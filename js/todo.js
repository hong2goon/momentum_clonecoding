const todoWrap = document.querySelector(".todo-wrap"),
    todoForm = todoWrap.querySelector(".js-todo-form"),
    todoInput = todoForm.querySelector("input"),
    todoList = todoWrap.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target,
        li = btn.parentNode;
    todoList.removeChild(li);

    const cleanToDos = toDos.filter(function filterFn(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li"),
        delBtn = document.createElement("button"),
        span = document.createElement("span"),
        newId = toDos.length + 1;

    span.innerText = text;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);

    const toDoObj = {
        id: newId,
        text: text 
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = "";
}

function loadToDos() {
    const loadedtoDos = localStorage.getItem(TODOS_LS);
    if (loadedtoDos !== "[]") {
        const parsedToDos = JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(todo) {
            paintToDo(todo.text);
        });
    }
}

function todoInit() {
    if(localStorage.getItem(TODOS_LS) == null) {
        localStorage.setItem(TODOS_LS, "[]");
    }
    loadToDos();
    todoForm.addEventListener("submit", handleTodoSubmit);
}

todoInit();
const todoListWrap = document.querySelector(".todoList-wrap"),
    todoList = todoListWrap.querySelector(".js-toDoList"),
    todoWrap = document.querySelector(".todo-wrap"),
    todoForm = todoWrap.querySelector(".js-todo-form"),
    todoInput = todoForm.querySelector("input"),
    btnTodo = todoWrap.querySelector(".btn-todo");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target,
        li = btn.parentNode,
        ul = todoList.querySelector("ul");
    ul.removeChild(li);

    const length = ul.querySelectorAll("li").length;
    if (length === 0) {
        todoList.classList.remove("active");
    } 

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
    const ul = todoList.querySelector("ul"),
        li = document.createElement("li"),
        delBtn = document.createElement("button"),
        span = document.createElement("span"),
        newId = toDos.length + 1;

    span.innerText = text;
    delBtn.classList.add("btn-del");
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    li.classList.add("todo-item");
    ul.appendChild(li);
    todoList.classList.add("active");

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

function handleTodo(event) {
    event.stopPropagation();
    todoWrap.classList.toggle("show-fade-in");
}

function btnTodos() {
    btnTodo.addEventListener("click", handleTodo);
}

function todoInit() {
    if(localStorage.getItem(TODOS_LS) == null) {
        localStorage.setItem(TODOS_LS, "[]");
        todoList.classList.remove("active");
    }
    loadToDos();
    btnTodos();
    todoForm.addEventListener("submit", handleTodoSubmit);
}

todoInit();
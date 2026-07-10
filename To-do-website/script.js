// =====================================
// TODO ARRAY
// =====================================

let todos = [];

let editIndex = -1;

let currentFilter = "all";

// =====================================
// SELECT ELEMENTS
// =====================================

const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const priority = document.getElementById("priority");

const addBtn = document.getElementById("addBtn");

const todoList = document.getElementById("todoList");

const searchInput = document.getElementById("searchInput");

const filters = document.querySelectorAll(".filter");

const emptyState = document.getElementById("emptyState");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

// =====================================
// EVENT LISTENERS
// =====================================

addBtn.addEventListener("click", saveTask);

searchInput.addEventListener("input", renderTodos);

filters.forEach(button => {

    button.addEventListener("click", function(){

        filters.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        currentFilter = this.dataset.filter;

        renderTodos();

    });

});

// Enter key support

taskInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        saveTask();

    }

});

// =====================================
// CREATE / UPDATE
// =====================================

function saveTask(){

    const title = taskInput.value.trim();

    const dueDate = taskDate.value;

    const taskPriority = priority.value;

    if(title === ""){

        alert("Please enter a task.");

        return;

    }

    if(editIndex === -1){

        todos.push({

            title : title,

            dueDate : dueDate,

            priority : taskPriority,

            completed : false

        });

    }

    else{

        todos[editIndex].title = title;

        todos[editIndex].dueDate = dueDate;

        todos[editIndex].priority = taskPriority;

        editIndex = -1;

        addBtn.innerHTML = `
        <i class="fa-solid fa-plus"></i>
        Add Task`;

    }

    clearInputs();

    renderTodos();

}

// =====================================
// CLEAR INPUTS
// =====================================

function clearInputs(){

    taskInput.value = "";

    taskDate.value = "";

    priority.selectedIndex = 0;

}

// =====================================
// UPDATE STATISTICS
// =====================================

function updateStatistics(){

    totalTasks.textContent = todos.length;

    const completed = todos.filter(todo => todo.completed).length;

    completedTasks.textContent = completed;

    pendingTasks.textContent = todos.length - completed;

}

// =====================================
// RENDER TODOS
// =====================================

function renderTodos(){

    todoList.innerHTML = "";

    let filteredTodos = [...todos];

    // Search

    const keyword = searchInput.value.toLowerCase();

    filteredTodos = filteredTodos.filter(todo =>

        todo.title.toLowerCase().includes(keyword)

    );

    // Filter

    if(currentFilter === "completed"){

        filteredTodos = filteredTodos.filter(todo => todo.completed);

    }

    if(currentFilter === "pending"){

        filteredTodos = filteredTodos.filter(todo => !todo.completed);

    }

    if(filteredTodos.length === 0){

        emptyState.style.display = "block";

    }

    else{

        emptyState.style.display = "none";

    }

    filteredTodos.forEach(todo => {

        const realIndex = todos.indexOf(todo);

        const li = document.createElement("li");

        li.className = "todo-item";

        if(todo.completed){

            li.classList.add("completed");

        }

        li.innerHTML = `

        <div class="task-left">

            <input
                type="checkbox"
                class="checkbox"
                ${todo.completed ? "checked" : ""}
                onchange="toggleComplete(${realIndex})">

            <div>

                <div class="task-title">

                    ${todo.title}

                </div>

                <div class="task-date">

                    📅 ${todo.dueDate || "No Due Date"}

                </div>

                <span class="priority ${todo.priority.toLowerCase()}">

                    ${todo.priority}

                </span>

            </div>

        </div>

        <div class="actions">

            <button
                class="edit"
                onclick="editTask(${realIndex})">

                <i class="fa-solid fa-pen"></i>

            </button>

            <button
                class="delete"
                onclick="deleteTask(${realIndex})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>

        `;

        todoList.appendChild(li);

    });

    updateStatistics();

}

// =====================================
// INITIAL LOAD
// =====================================

renderTodos();
// =====================================
// TOGGLE COMPLETE
// =====================================

function toggleComplete(index) {

    todos[index].completed = !todos[index].completed;

    renderTodos();

}

// =====================================
// EDIT TASK
// =====================================

function editTask(index) {

    taskInput.value = todos[index].title;

    taskDate.value = todos[index].dueDate;

    priority.value = todos[index].priority;

    editIndex = index;

    addBtn.innerHTML = `
        <i class="fa-solid fa-pen"></i>
        Update Task
    `;

    taskInput.focus();

}

// =====================================
// DELETE TASK
// =====================================

function deleteTask(index) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {

        return;

    }

    todos.splice(index, 1);

    renderTodos();

}

// =====================================
// DELETE ALL TASKS
// =====================================

function deleteAllTasks() {

    if (todos.length === 0) {

        alert("No tasks available.");

        return;

    }

    const answer = confirm(
        "Delete all tasks?"
    );

    if (!answer) {

        return;

    }

    todos = [];

    renderTodos();

}

// =====================================
// SORT BY PRIORITY
// =====================================

function sortByPriority() {

    const order = {

        High: 1,
        Medium: 2,
        Low: 3

    };

    todos.sort(function (a, b) {

        return order[a.priority] - order[b.priority];

    });

    renderTodos();

}

// =====================================
// SORT BY DATE
// =====================================

function sortByDate() {

    todos.sort(function (a, b) {

        if (a.dueDate === "") return 1;

        if (b.dueDate === "") return -1;

        return new Date(a.dueDate) - new Date(b.dueDate);

    });

    renderTodos();

}

// =====================================
// CLEAR COMPLETED
// =====================================

function clearCompleted() {

    todos = todos.filter(function (todo) {

        return !todo.completed;

    });

    renderTodos();

}

// =====================================
// GET TASK COUNTS
// =====================================

function getCompletedCount() {

    return todos.filter(function (todo) {

        return todo.completed;

    }).length;

}

function getPendingCount() {

    return todos.filter(function (todo) {

        return !todo.completed;

    }).length;

}

// =====================================
// CHECK OVERDUE TASKS
// =====================================

function checkOverdueTasks() {

    const today = new Date();

    todos.forEach(function (todo) {

        if (
            todo.dueDate &&
            !todo.completed &&
            new Date(todo.dueDate) < today
        ) {

            console.log("Overdue:", todo.title);

        }

    });

}

// =====================================
// REFRESH
// =====================================

setInterval(function () {

    checkOverdueTasks();

}, 60000);

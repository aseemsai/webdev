// Creating variables for UI elements

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load event listeners
loadEventListeners();

function loadEventListeners() {
    // Add Task Event
    form.addEventListener('submit', addTask);
    // Remove Task Event
    taskList.addEventListener('click', removeTask);
    // Clear Tasks Event
    clearBtn.addEventListener('click', clearTasks);
    // Filter Tasks Event
    filter.addEventListener('keyup', filterTask);
    // DOM Content Update from Local Storage
    document.addEventListener('DOMContentLoaded', getTasks);
}

// List tasks from Local Storage
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task) => {
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        // Add inner html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);

        // Add the list to the task list
        taskList.append(li);
    })
}

// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    } else {

        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        // Add inner html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);

        // Add the list to the task list
        taskList.append(li);

        // Store to local storage
        storeTaskToLocalStorage(taskInput.value);

        // Clear the user input field
        taskInput.value = '';
    }

    e.preventDefault();
}

// Store Task
function storeTaskToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Push to tasks array
    tasks.push(task);

    // Push the tasks array to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
        // Remove task item from local storage
        removeFromLocalStorage(e.target.parentElement.parentElement);
    }

    e.preventDefault();
}

// Remove the task item from Local Storage
function removeFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task, index) => {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {

    if (confirm("Are you sure?")) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
    // Clear from Local Storage
    clearTasksFromLocalStorage();
}

// Clear all items from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// Filter Task
function filterTask(e) {

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        (task) => {
            if (task.textContent.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        }
    );
}
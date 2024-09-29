// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Event listener for adding a task
addBtn.addEventListener('click', addTask);
todoList.addEventListener('click', manageTask);

// Function to add a new task
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';  // Clear input after adding task
    } else {
        alert("Please enter a task");
    }
}

// Function to handle task completion or deletion
function manageTask(e) {
    const target = e.target;

    // Mark task as completed
    if (target.tagName === 'SPAN') {
        target.parentElement.classList.toggle('completed');
    }

    // Delete task
    if (target.classList.contains('delete-btn')) {
        target.parentElement.remove();
    }
}

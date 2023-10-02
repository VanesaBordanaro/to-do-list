// let myTasks = []

// const inputTask = document.getElementById("add-task")
// const inputBtn = document.getElementById("task-btn")
// const refreshBtn = document.getElementById("refresh-btn")
// const ulEl = document.getElementById("ul-el")
// const taskFromLocalStorage = JSON.parse(localStorage.getItem("myTasks"))

// if(taskFromLocalStorage) {
//     myTasks = taskFromLocalStorage
//     render(myTasks)
// }

// function render(task) {
//     let listItems = ""
//     for(let i = 0; i < task.length; i++) {
//         listItems += `
//             <li>
//                 ${task[i]}
//             </li>`
//     }
//     ulEl.innerHTML = listItems
// }

// inputBtn.addEventListener('click', function() {
//     myTasks.push(inputTask.value)
//     inputTask.value = ""
//     localStorage.setItem("tasks", JSON.stringify(myTasks))
//     render(myTasks)
// })

// refreshBtn.addEventListener('click', function() {
//     localStorage.clear()
//     myTasks = []
//     render(myTasks)
// })

let tasks = [];

const inputTask = document.getElementById("add-task");
const taskBtn = document.getElementById("task-btn");
const ulEl = document.getElementById("ul-el");
const refreshBtn = document.getElementById("refresh-btn");
const taskFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

if (taskFromLocalStorage) {
  tasks = taskFromLocalStorage;
  render(tasks);
}

function render(taskList) {
  ulEl.innerHTML = "";
  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button class="delete-btn" onclick="deleteTask(${index})">
        <img src="trash1.png" alt="Delete">
      </button>
      <button class="complete-btn" onclick="completeTask(${index})">
        <img src="check.png" alt="Complete">
      </button>
    `;
    ulEl.appendChild(li);
  });
  updateLocalStorage();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render(tasks);
}

function completeTask(index) {
  const li = ulEl.children[index];
  li.style.textDecoration = "line-through";
  render(tasks);
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskBtn.addEventListener("click", function () {
  const newTask = inputTask.value.trim();
  if (newTask !== "") {
    tasks.push(newTask);
    inputTask.value = "";
    render(tasks);
  }
});

refreshBtn.addEventListener("click", function () {
  localStorage.clear();
  tasks = [];
  render(tasks);
});


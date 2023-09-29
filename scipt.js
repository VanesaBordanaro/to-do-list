let myTasks = []

const inputTask = document.getElementById("add-task")
const inputBtn = document.getElementById("task-btn")
const refreshBtn = document.getElementById("refresh-btn")
const ulEl = document.getElementById("checkbox")
const taskFromLocalStorage = JSON.parse(localStorage.getItem("myTasks"))

if(taskFromLocalStorage) {
    myTasks = taskFromLocalStorage
    render(myTasks)
}

function render(task) {
    let listItems = ""
    for(let i = 0; i < task.length; i++) {
        listItems += `
            <li>
                ${task[i]}
            </li>`
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener('click', function(){
    myTasks.push(inputTask.value)
    inputTask.value = ""
    localStorage.setItem("tasks", JSON.stringify(myTasks))
    render(myTasks)
})

refreshBtn.addEventListener('click', function() {
    localStorage.clear()
    myTasks = []
    render(myTasks)
})
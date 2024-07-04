const addBtn = document.querySelector(".Addbtn");
const taskInput = document.querySelector(".input");
const taskList = document.querySelector(".tasks");

loadTasks();

function addTask() {
  const task = taskInput.value.trim();
  if (task) {
    createTasksElement(task);
    taskInput.value = "";
    saveTasks();
  } else {
    alert("Please enter something");
  }
}

function createTasksElement(task) {
  const listItem = document.createElement("li");

  listItem.textContent = task;

  const delBtn =document.createElement("button");
  delBtn.textContent="Delete";
  delBtn.className="delBtn";
  listItem.appendChild(delBtn);

  taskList.prepend(listItem);

  delBtn.addEventListener("click",function(){
    taskList.removeChild(listItem);
    saveTasks()
  })
}

function saveTasks(){
    let tasks= [];
    taskList.querySelectorAll("li").forEach(function(item){
        tasks.push(item.textContent.replace('Delete','').trim());
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function loadTasks(){
    const tasks =JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(createTasksElement);
}
addBtn.addEventListener("click", addTask);

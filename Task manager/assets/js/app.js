
const taskInput = document.querySelector("#task");
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

form.addEventListener('click', addNewTask);
// form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);

function addNewTask(e) {
    //alert("Add New Task ....");
      
    if (taskInput.value === ''){
        //alert('Enter New Task');
        taskInput.style.borderColor = "red";
         return; //avoiding else statement
    }

    else{
        const li = document.createElement('li');

        li.className = 'collection-item';

        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');

        link.className = 'delete-item secondary-content';
        link.innerHTML = '<a href="">X</a>';

        li.appendChild(link);

        taskList.appendChild(li);

        e.preventDefault(); //disable form submission
    }
}
   
function clearAllTasks() {
    // alert("Clear tasks ....");
    //This is the first way
    // taskList.innerHTML = '';
    while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
    }
}
   
function filterTasks(e) {
    console.log("Task Filter ...");
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')){
        if (confirm('Are You Sure about that ?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}
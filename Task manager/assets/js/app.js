
const taskInput = document.querySelector("#task");
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const sortIt = document.querySelector(".browser-default");
const reloadIcon = document.querySelector('.fa');
console.log(sortIt.value);

// form.addEventListener('click', addNewTask);
form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
sortIt.addEventListener('change', sortTasks);
reloadIcon.addEventListener('click', reloadPage);

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
        li.value = new Date().getSeconds();
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');

        link.className = 'delete-item secondary-content';
        link.innerHTML = '<button>x<button>';

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
    let keyWord = filter.value;
    let taskValues = document.querySelectorAll(".collection-item");

    taskValues.forEach(elt => {
        if(elt.textContent.indexOf(keyWord)){
            elt.style.display = "none";
        }
        else{
            elt.style.display = "block";
        }
    });
}

function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')){
        if (confirm('Are You Sure about that ?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

function sortTasks(){
    const presentTasks = document.querySelectorAll('.collection-item');
    let eltTimevalues = [];

    presentTasks.forEach(elt => {
        console.log(elt.value);
        eltTimevalues.push(elt.value);
    });

    eltTimevalues.sort();

    if(sortIt.value == "0"){
        for (let i = 0; i < eltTimevalues.length; i++){
            presentTasks.forEach(elts => {
                if(eltTimevalues[i] == elts.value)
                    taskList.appendChild(elts);
            });
        }
    }

    else{
        
        for (let i = eltTimevalues.length; i>=0; i--){
            presentTasks.forEach(elts => {
                if(eltTimevalues[i] == elts.value){
                    taskList.appendChild(elts);
                }
            });
        }
    }
}
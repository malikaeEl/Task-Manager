var db;
if(localStorage.tasks!=null){
    db=JSON.parse(localStorage.tasks);
}else{
    db=[];
}

// Create tasks
function CreateTask(){

    var task = {
    title:document.getElementById("title").value,
    description:document.getElementById("description").value,
    priority:document.getElementById("priority").value,
    date:document.getElementById("date").value,
    status:document.getElementById("status").value,
    }
    db[db.length]=task;
    var value=localStorage.setItem("tasks",JSON.stringify(db));
    console.log(value);

      document.getElementById('title').value=''
     document.getElementById('description').value=''

 
   ReadTask();

}
// Read tasks

function ReadTask() {
    document.getElementById("pendingtask").innerHTML = '';
    document.getElementById("completedtask").innerHTML = '';

    for (var a = 0; a < db.length; a++) {
        
        var taskHTML = `
            <div class="task">
                <span class="idresult"><i class="fa-solid fa-user"></i>=${a+1}</span>
                <h3 class="titleresult">Title:${db[a].title}</h3>
                <p class="descriptionresult">${db[a].description}</p>  
                <span class="priorityresult">Priority:${db[a].priority}</span>
                <span class="dateresult">Date:${db[a].date}</span>
                <div>
                <button class="edit" type="button" onclick="edittask(${a})">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="delete" type="button" onclick="DeleteTask(${a})">
                    <i class="fa-solid fa-trash"></i>
                </button>
                </div>
                
            </div>`;

        if (db[a].status === 'pending') {
            document.getElementById("pendingtask").innerHTML += taskHTML;
        } else if (db[a].status === 'completed') {  
            document.getElementById("completedtask").innerHTML += taskHTML;
        }
    }
}
ReadTask()

// Edit task choosen
function edittask(i){
    document.getElementById('title').value = db[i].title;
    document.getElementById('description').value = db[i].description; 
    document.getElementById("priority").value= db[i].priority; 
    document.getElementById("date").value= db[i].date; 
    document.getElementById("status").value = db[i].status; 

    

    document.getElementById('btn').innerHTML = 'Edit'
    document.getElementById('btn').onclick = function () {
         handeledit(i)
    }
}

function  handeledit(index){
    db[index].title = document.getElementById('title').value
    db[index].description = document.getElementById('description').value;
    db[index].priority=document.getElementById("priority").value
    db[index].date=document.getElementById("date").value
    db[index].status=document.getElementById("status").value 

  
     document.getElementById('title').value=''
     document.getElementById('description').value=''
    document.getElementById('btn').innerHTML = 'Add Task'

    document.getElementById('btn').onclick = function () {
         CreateTask()
    }
    localStorage.setItem("tasks",JSON.stringify(db))
    ReadTask()
}

// Delete task choosen

function DeleteTask(u){
    db.splice(u,1)
     localStorage.setItem("tasks",JSON.stringify(db))
    ReadTask()
       
}

function fetchTodos() {
  fetch(
    "https://todo-api-beige.vercel.app/api/todos?createdBy=Vouchh ",   {
      method: "GET",
      headers: {
        "x-secret-key": "9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())

    .then((data) => {
        console.log(data)
        let exper = data.data;
        for (let i = 0; i<=15; i++){
        document.getElementById("todo-list").innerHTML += `
        <div class="card mt-2">
        <div class="card-body">
            <div class="row">
                <div class="col">ID: ${exper[i].id}</div>
                <div class="col">Name: ${exper[i].task_name}</div>
                <div class="col">Status: ${exper[i].task_status}</div>
            </div>
        </div>
    </div>
        `;}
       })

    .catch((error) => {
      console.error("Error:", error);
    });
}

    fetchTodos();


function createTask(event){
   
    let newTask = document.getElementById("newTask").value;
    let priority = document.getElementById("priority").value;
    let createdBy = document.getElementById("createdBy").value;

    fetch(
        "https://todo-api-beige.vercel.app/api/todos ",   {
          method: "POST",
          headers: {
            "x-secret-key": "9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
             
                "task_name": newTask,
                "task_priority": priority,
                "created_by": createdBy,
               
          }),
        }
      )
        .then((response) => response.json())
    
        .then((data) => {
            console.log(data)
           })
    
        .catch((error) => {
          console.error("Error:", error);
        });
    }
createTask();


function completeTask(event){
    let completeTask = document.getElementById("completeTask").value;
   fetch("https://todo-api-beige.vercel.app/api/todos/complete="+completeTask,   {
          method: "PUT",
          headers: {
            "x-secret-key": "9f65ab977aa8be03a346cdc106a707a943f8d33f5148ef3f89c88fdf6df3bffe",
            "Content-Type": "application/json",
          },
         
        }
      )
        .then((response) => response.json())
    
        .then((data) => {
            console.log(data)

           })
    
        .catch((error) => {
          console.error("Error:", error);
        });
    }
completeTask();

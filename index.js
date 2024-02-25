const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = [];


//creating a function to saw the details of task and discreption 
function showAllTasks(){
    tasks.forEach((value , index) =>{
        const div = document.createElement("div");
        div.setAttribute("class" , "task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerHTML = value.description;
        innerDiv.append(span);

        const button = document.createElement("button");
        button.setAttribute("class" , "deleteBtn");
        button.innerText = "-";
        div.append(button);

        //delete the div called task
        button.addEventListener("click" , ()=>{
            removeTask(); 
            tasks.splice(index , 1);
            showAllTasks();
        })


        container.append(div);
    })
};

// it remove the tasks that already store in array called tasks
function removeTask(){
    tasks.forEach((value) => {
        const div = document.querySelector(".task");
        div.remove();
    });
};
 
// taking from "form" is submitted to array called taks
form.addEventListener("submit" , (e)=>{
    e.preventDefault();

    removeTask();
    tasks.push(
        {title: title.value,
        description : description.value
        })
    console.log(tasks);
    showAllTasks();

});



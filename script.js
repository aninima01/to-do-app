const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

//making a function
function allTasks(){
  let tasks = document.querySelectorAll(".pending");
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

let allLists = document.querySelectorAll(".lists");
if(allLists.length > 0) {
  todoLists.style.marginTop = "20px";
  clearButton.style.pointerEvents = "auto";
  return;
}
todoLists.style.marginTop = "0px";
clearButton.style.pointerEvents = "none";



}

//console.log(inputField,todoLists,pendingNum,clearButton);
//add task while we put value in textarea and hit enter
inputField.addEventListener("keyup" , (e)=> {
let inputVal = inputField.value.trim();
console.log(inputVal);

// if enter is clicked and input value is greater than 0;
if(e.key === "Enter" && inputVal.length > 0) {
    let liTag = `<li class="lists pending" onclick = "handleStatus(this)">
    <input type="checkbox" />
    <span class="task"
      >${inputVal}</span
    >
    <i class="uil uil-trash" onclick = "deleteTask(this)"> </i>
  </li>`;

  //inserting li tag 
  todoLists.insertAdjacentHTML("beforeend", liTag);
  
    inputField.value = ""; //removing values from inputarea
    allTasks();
}
})
//checking and unchecking when we click on task
function handleStatus(e) {
    const checkbox = e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked? false : true;
    console.log(checkbox);
    e.classList.toggle("pending");
    allTasks();
}

function deleteTask(e) {
  e.parentElement.remove();
  allTasks();

}

// deleting task by clear all button
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
})
 


function populateTodoList(todos) {
let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  let itemAdded = todos;
  console.log("ITEM ADDED => " + itemAdded.task + " " + itemAdded.completed + " " + itemAdded);

  const previousListClasses = document.querySelector("li");
  let classValues = previousListClasses.classList;
  classValues = classValues.toString().replace(" ", ",");
  // console.log("CLASSES IN ELEMENT ==> " + previousListClasses.classList);
  // console.log(classValues);

  // for (let x in todos) {
    // CREATING VARIABLES ON TAGS
    const liTag = document.createElement("li");
    const spanTag = document.createElement("span");
    const iTagOne = document.createElement("i");
    const iTagTwo = document.createElement("i");

    liTag.innerText = itemAdded.task;
    liTag.style.listStyleType = "none";
    liTag.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    
    iTagOne.classList.add("fa", "fa-check");
    iTagTwo.classList.add("fa", "fa-trash");
    spanTag.classList.add("badge", "bg-primary", "rounded-pill");
    iTagOne.ariaHidden = true;
    iTagTwo.ariaHidden = true;

    spanTag.appendChild(iTagOne);
    spanTag.appendChild(iTagTwo);

    liTag.appendChild(spanTag);

    // APPENDING VARIABLES
    list.appendChild(liTag);

    iTagOne.onclick = function () {
      liTag.style.textDecoration = "line-through";
      itemAdded.completed = true;
      console.log(itemAdded);
      
    }

    iTagTwo.onclick = function () { 
      iTagTwo.parentNode.parentNode.parentNode.removeChild(liTag);
      // todos.splice();
       
      // let indexVal = todos.indexOf(itemAdded);
      
      // console.log("Index of object => " + in);
      // console.log("Deleting from trash button => " + itemAdded);

    } 
  
  

}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  const todoInput = document.getElementById("todoInput");
  const newObject = {task : todoInput.value, completed : false};
  todos.push(newObject);
  // console.log(todos);
  lastElement = todos[todos.length - 1]

  populateTodoList(lastElement);

}

const clearTodosButton = document.createElement("button");
clearTodosButton.innerText = "Clear All";
const divContainer = document.querySelector(".container");
divContainer.appendChild(clearTodosButton);

clearTodosButton.addEventListener("click", deleteAllCompletedTodos);


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...

  // if (todos.length !== []) {
  //   console.log("List of todos left: " + todos);
  //   todos.pop();
  //   console.log("List of todos left: " + todos);


  //  }#

  
    todos.map(value => value).filter(function (value) {
      if (value.completed == true) {
        // const v = value;
        // delete todos[todos.findIndex(v => v.completed == true)];
        delete value;
        console.log("Deleted " + value.task);
        console.log(todos);
      } else {
        console.log("Not deleted " + value.task);
      }
  
    });

}


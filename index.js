function update_todo() {
  let task_element = this.parentElement;
  task_element.style.display = "none";
  task_element.remove();
  let task = task_element.textContent;
  document.getElementById("inputBox").value = task.slice(0, -12);
}

function delete_todo() {
  // Getting parent element, in this case it would be li.
  let parent = this.parentElement;

  // Changing its disply style from block to none to hide it.
  parent.style.display = "none";
  parent.remove();
}

// ev is an event object.
function check_todo(ev) {
  if (ev.target.tagName === "DIV") {
    ev.target.classList.toggle("checked");
  }
}

function create_delete_button() {
  // Created a  button to append it to the new todo.
  let delete_button = document.createElement("button");

  // Creating a text node to append it to the button.
  let t = document.createTextNode("Delete");

  // appending above text node to the button
  delete_button.appendChild(t);

  // attaching a onClick attribute to the button
  delete_button.onclick = delete_todo;
  delete_button.classList.add('delete');
  return delete_button;
}

function create_update_button() {
  // Created a  button to append it to the new todo.
  let update_button = document.createElement("button");

  // Creating a text node to append it to the button.
  let t = document.createTextNode("Update");

  // appending above text node to the button
  update_button.appendChild(t);

  // attaching a onClick attribute to the button
  update_button.onclick = update_todo;
  update_button.classList.add('update');

  return update_button;
}

function add_todo() {
  // Getting value from the input field.
  let todo = document.getElementById("inputBox").value;

  // Checking if the value is empty or not.
  if (todo === "") {
    alert("You must have to type something...");
  } else {
    // Create a text node.
    let t = document.createTextNode(todo);

    // Creating a new list item to apend it to the tasks list.
    let new_todo = document.createElement("div");
    
    // appending text node to newly created list item as a child.
    new_todo.appendChild(t);
    
    // embedding a delete button to the newly created todo.
    new_todo.appendChild(create_delete_button());

    // embedding a update button to the newly created todo.
    new_todo.appendChild(create_update_button());

    // Adding a event listener to the list item for checking and unchecking it.
    new_todo.addEventListener("click", check_todo, false);

    new_todo.classList.add('todo');

    // Getting tasks list.
    let tasks = document.getElementById("tasks");

    // appending new list item to the task list.
    tasks.appendChild(new_todo);

    // Clearing the input field.
    document.getElementById("inputBox").value = "";
  }
}

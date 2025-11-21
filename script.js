const addButton = document.querySelector(".add-button");
const addInput = document.querySelector(".add-input");
const toDoList = document.querySelector(".to-do-list");
const doneList = document.querySelector(".done-list");
const clearButton = document.querySelector(".clear-button");

const aRight = document.querySelector(".button1");
const aLeft = document.querySelector(".button2");

addButton.addEventListener("click", () => {
  if (addInput.value !== "") {
    const newToDo = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const text = document.createTextNode(addInput.value);

    newToDo.appendChild(text);
    newToDo.appendChild(checkBox);
    toDoList.appendChild(newToDo);
    addInput.value = "";

    aRight.addEventListener("click", () => {
      if (newToDo.parentElement === toDoList && checkBox.checked) {
        doneList.appendChild(newToDo);
        checkBox.checked = false;
      }
    });

    aLeft.addEventListener("click", () => {
      if (newToDo.parentElement === doneList && checkBox.checked) {
        toDoList.appendChild(newToDo);
        checkBox.checked = false;
      }
    });
  }
});

clearButton.addEventListener("click", () => {
  toDoList.innerHTML = "";
  doneList.innerHTML = "";
});

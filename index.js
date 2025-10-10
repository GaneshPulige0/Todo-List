let todoItemsContainer = document.getElementById("todoItemsContainer");


// creating list item. adding to todoItemsContainer
let todoElement = document.createElement("li")
todoElement.classList.add("todo-items-container","d-flex","flex-row")
todoItemsContainer.appendChild(todoElement)
// -----------------------------------------------------------------------


// creating checkbox and adding to todoElement
let inputElement = document.createElement("input")
inputElement.type = "Checkbox"
inputElement.classList.add("checkbox-input")
todoElement.appendChild(inputElement)
// /----------------------------------------------------------------


// creating div and label and adding to todoElement
labelElementContainer = document.createElement("div")
labelElementContainer.classList.add("d-flex","flex-row","label-container")
todoElement.appendChild(labelElementContainer)




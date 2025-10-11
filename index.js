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


// creating div and adding to todoElement
labelElementContainer = document.createElement("div")
labelElementContainer.classList.add("d-flex","flex-row","label-container")
todoElement.appendChild(labelElementContainer)

// creating a label element adding to and labelelementcontainer
labelElement = document.createElement("label")
labelElement.textContent = "Learn HTML"
labelElement.classList.add("checkbox-label")
labelElementContainer.appendChild(labelElement)



// creating a div for deleting icon. and append to labelElement
let deleteIconContainer = document.createElement("div") 
deleteIconContainer.classList.add("delete-icon-container","d-flex","flex-row")
labelElement.appendChild(deleteIconContainer)

let iconElement = document.createElement("i");
iconElement.classList.add("far", "fa-trash-alt", "delete-icon")
deleteIconContainer.appendChild(iconElement)
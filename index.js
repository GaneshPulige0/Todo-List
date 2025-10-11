let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoListcounter = 0



function onCheckBox(checkboxid,labelId){
    let labelElement = document.getElementById(labelId)
    labelElement.classList.toggle("checked") 
}

function onDeleteButton(todoElementid){
    let todoElement = document.getElementById(todoElementid)
    let todoItemsContainer = document.getElementById("todoItemsContainer");
    todoItemsContainer.removeChild(todoElement)
}


function createlabelelement(todoitem){
    // assigning id's
    let todoElementid = "todoElement" + todoitem.uniqueNo
    let checkboxid = "checkboxid"  + todoitem.uniqueNo 
    let labelId = "labelId" + todoitem.uniqueNo
    let deleteid = "deleteid" + todoitem.uniqueNo
// --------------------------------------------------------

    // creating list item. adding to todoItemsContainer
    let todoElement = document.createElement("li")
    todoElement.classList.add("todo-items-container","d-flex","flex-row")
    todoItemsContainer.appendChild(todoElement)
    todoElement.id = todoElementid
    // -----------------------------------------------------------------------


    // creating checkbox and adding to todoElement
    let inputElement = document.createElement("input")
    inputElement.type = "Checkbox"
    inputElement.id = checkboxid
    inputElement.classList.add("checkbox-input")
    todoElement.appendChild(inputElement)

    inputElement.onclick = function(){
        onCheckBox(checkboxid,labelId,deleteid);
    }
    // /----------------------------------------------------------------


    // creating div and adding to todoElement
    labelElementContainer = document.createElement("div")
    labelElementContainer.classList.add("d-flex","flex-row","label-container")
    todoElement.appendChild(labelElementContainer)

    // creating a label element adding to labelelementcontainer
    labelElement = document.createElement("label")
    labelElement.textContent = todoitem.text
    labelElement.setAttribute("for",checkboxid)
    labelElement.classList.add("checkbox-label")
    labelElementContainer.appendChild(labelElement)
    labelElement.id = labelId
    


    // creating a div for deleting icon. and append to labelElementContainer
    let deleteIconContainer = document.createElement("div") 
    deleteIconContainer.classList.add("delete-icon-container","d-flex","flex-row")
    labelElementContainer.appendChild(deleteIconContainer)


    // creating a icon and added to deleteIconContainer
    let iconElement = document.createElement("i");
    iconElement.classList.add("far", "fa-trash-alt", "delete-icon")
    iconElement.id = deleteid
    deleteIconContainer.appendChild(iconElement)
    iconElement.onclick = function(){
        onDeleteButton(todoElementid)
    }
}


function addButton(todoitem){
    todoListcounter += 1
    userInput = document.getElementById("userInputValue")
    if (userInput.value === ""){
        alert("Enter Valid Input")
        return;
    }
    createlabelelement({text:userInput.value,uniqueNo:todoListcounter})
    userInput.value = ""
}
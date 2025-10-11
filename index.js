let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];
function onCheckBox(checkboxid,labelId){
    let labelElement = document.getElementById(labelId)
    labelElement.classList.toggle("checked")
}



function createlabelelement(todoitem){
    // assigning id's
    let checkboxid = "checkboxid"  + todoitem.uniqueNo 
    let labelId = "labelId" + todoitem.uniqueNo
// --------------------------------------------------------

    // creating list item. adding to todoItemsContainer
    let todoElement = document.createElement("li")
    todoElement.classList.add("todo-items-container","d-flex","flex-row")
    todoItemsContainer.appendChild(todoElement)
    // -----------------------------------------------------------------------


    // creating checkbox and adding to todoElement
    let inputElement = document.createElement("input")
    inputElement.type = "Checkbox"
    inputElement.id = checkboxid
    inputElement.classList.add("checkbox-input")
    todoElement.appendChild(inputElement)

    inputElement.onclick = function(){
        onCheckBox(checkboxid,labelId);
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
    


    // creating a div for deleting icon. and append to labelElement
    let deleteIconContainer = document.createElement("div") 
    deleteIconContainer.classList.add("delete-icon-container","d-flex","flex-row")
    labelElement.appendChild(deleteIconContainer)


    // creating a icon and added to deleteIconContainer
    let iconElement = document.createElement("i");
    iconElement.classList.add("far", "fa-trash-alt", "delete-icon")
    deleteIconContainer.appendChild(iconElement)
}

for (let item of todoList) {
    createlabelelement(item)
}
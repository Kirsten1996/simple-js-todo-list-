/*
* Here I've created a todo list which grabs the value from the text input
* and pushes the value into an array.
* the array is then looped through and displayed in the ordered list.
*/

let toDoList = [];
// Grabs input field
let textInput = document.querySelector("#to-do");

// Grabs submit button
let submitButton = document.querySelector("#submit");

// Grabs ordered list
let orderedList = document.getElementById("orderedList");


submitButton.addEventListener("click", func);  

function func(e) {
  // prevent browser from refreshing
  e.preventDefault();

  // 
  let text = "";
  const newValue = textInput.value
  toDoList.push(newValue);
  console.log(textInput.value);
  console.log(toDoList);

  for(let i = 0; i < toDoList.length; i++) {
    console.log(toDoList[i]);
    text += "<li>" + toDoList[i] + "</li>";
    console.log(text);
  }

  orderedList.innerHTML = text;
  console.log(text);

  textInput.value = "";
}





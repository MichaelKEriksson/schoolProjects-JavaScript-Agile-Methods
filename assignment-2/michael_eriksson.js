"use strict";
//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];
let newForm = "";
let newInput = "";

//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  //Add code here to:
  //create and add form element to the Dom.
  newForm = document.createElement("form");
  document.body.appendChild(newForm);
}

function initLabel() {
  //Add code here to:
  //create label element and set the lable to "username" (TIP: use .textContent).
  //Add it to the form element. (TIP: use .appendChild).
  let newLabel = document.createElement("label");
  newLabel.textContent = "Username";
  newForm.appendChild(newLabel);
}

function initInput() {
  //Add code here to:
  //create input element and set it to be requried (TIP: use .required = true).
  //Add it to the form element. (TIP: use .appendChild).
  newInput = document.createElement("input");
  newInput.required = true;
  newForm.appendChild(newInput);
}

function initButton() {
  //Create button element and set the text to "login" (TIP: use .textContent)
  //Add it to the form element. (TIP: use .appendChild).
  //Add click eventListener for button and call validateLoginInfo function inside it.
  //if validateLoginInfo is true alert user with "Welcome" text.
  //if validateLoginInfo is false add border style to the input element: "3px solid red". (TIP: use .style.border).
  let newButton = document.createElement("button");
  newButton.textContent = "Login";
  newForm.appendChild(newButton);
  newButton.addEventListener("click", function () {
    if (validateLoginInfo()) {
      window.alert("Welcome");
      newForm.setAttribute("onsubmit", "return true");
    } else {
      newInput.style.border = "3px solid red";
      newForm.setAttribute("onsubmit", "return false");
    }
  });
}

function validateLoginInfo() {
  //Get the input using form input element (TIP: use .value)
  //if the username is in the usernames array return true if not return false.
  let userInput = false;
  usernames.forEach(function (userValue) {
    if (userValue == newInput.value) {
      userInput = true;
    }
  });
  return userInput;
}

//Write code here to call the init function only after the dom has been loaded (TIP: check "DOMContentLoaded" event)
document.addEventListener("DOMContentLoaded", init);

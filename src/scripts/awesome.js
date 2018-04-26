const DomBuilder = require("./DomBuilder");



const output = document.querySelector(".output");

const fragment = document.createDocumentFragment();

// Create factory funtion to generate components

const inputFieldFactory = (classList, defaultPlaceholderText) => {
const inputField = document.createElement("input");
inputField.classList = classList;
inputField.setAttribute("type", type);
inputField.placeholder = defaultPlaceholderText;
return inputField;
}


// Create input component

const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("button");
    theButton.classList = classList;
    theButton.setAttribute("value", textContent);
    return theButton;
}



fragment.appendChild(buttonFactory("button--submit", "Create Card"));
output.appendChild(fragment);

// Create button compontent

// Attach event listener to button
//   Get value of input field

//   Create card component with text

const cardFactory = (classList, textContent) => {
    const theButton = document.createElement("button");
    theButton.classList = classList;
    theButton.setAttribute("value", textContent);
    return theButton;
}

DomBuilder(fragment, ".output");

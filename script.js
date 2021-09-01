"use strict";

const inputField = document.querySelector("#input-box");
const dropdown = document.querySelector("#dropdown");
const outputField = document.querySelector("#output-box");

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("button").addEventListener("click", handleClick);
}

function handleClick() {
  const inputValue = inputField.value;
  const operation = dropdown.value;
  const output = generateOutput(inputValue, operation);
  outputField.value = output;
  console.log(output);
}

function generateOutput(input, operation) {
  console.log(input, operation);
  switch (operation) {
    case "cap1":
      return capitalizeFirst(input);

    case "first-name":
      return findFirstName(input);

    case "first-length":
      return findFirstLength(input);

    case "middle-name":
      return findMiddleName(input);

    case "check-file":
      return findFileType(input);

    case "password":
      return printAsterisk(input); //Asterisk = *

    case "cap3":
      return capThirdCharacter(input);

    case "space-hyphen":
      return capNextCharacter(input);

    default:
      return "I dont know";
  }
}

// cap1
// Capitalize first letter in the input
function capitalizeFirst(input) {
  return input[0].toUpperCase() + input.substring(1).toLowerCase();
}

// first-name
// Find the first name by locating the first " "
function findFirstName(input) {
  return input.substring(0, input.indexOf(" "));
}

// first-length
// Determine the length of first name (from above)
function findFirstLength(input) {
  return findFirstName(input).length;
}

// middle-name
// Find the middle name by locating the first and last " "
function findMiddleName(input) {
  const middleStart = input.indexOf(" ");
  const middleEnd = input.lastIndexOf(" ");
  return input.substring(middleStart, middleEnd);
}

// check-file
// Check if the input ends with .jpg or .png
function findFileType(input) {
  if (input.endsWith(".jpg")) {
    return ".jpg";
  } else if (input.endsWith(".png")) {
    return ".png";
  } else {
    return "Not an image";
  }
}

// password
// Return a number of *s equal to the input
function printAsterisk(input) {
  return "*".repeat(input.length);
}

// cap3
// Capitalize the 3rd character of input
function capThirdCharacter(input) {
  return input.substring(0, 2) + input[2].toUpperCase() + input.substring(3);
}

// space-hyphen
// Split input at space or hyphen and map over the resulting array - Then join them with " " - Deletes original space/hyphen, so doesn't completely solve the exercise
function capNextCharacter(input) {
  const strSplit = input.split(/[- ]+/g);
  return strSplit
    .map((element) => {
      let firstCharacter = element.substring(0, 1);
      let capFirst = firstCharacter.toUpperCase();
      let otherCharacters = element.substring(1);
      return capFirst + otherCharacters;
    })
    .join(" ");
}

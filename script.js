// buttons: reset grid, pick colour, rainbow, clear to white
document.getElementById("reset").addEventListener("click", gridNum);
document.getElementById("colour").addEventListener("click", colourBackgroundBlack);
document.getElementById("random").addEventListener("click", colourBackground);
document.getElementById("clear").addEventListener("click", clearBg);

// sets the background colours to white
function clearBg() {
  let gridElements = document.querySelectorAll(".grid");
  gridElements.forEach((elem) => {
  
  elem.style.backgroundColor = "white";
});
}

// asks for amount of grid squares per side, empties parent container calls create grid
function gridNum() {
  let answer = prompt(
    "How many grid squares would you like per side? Pick between 16 and 100"
  );

  let amount = parseInt(answer);

  if (amount < 16 || amount > 100 || isNaN(amount)) {
    alert("wrong! Pick a number between 16 and 100.");
    return
  } else {

    document.getElementById("container").innerHTML = "";

  // size to make sure all the divs are square and the same size
  let size = 100 / amount + "%";
  createGrid(amount, size);
}}

// creates the grid. Takes user input amount, times it by itself and loops for that amount of times.
function createGrid(amount, size) {
  for (let i = 0; i < (amount*amount); i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = size;
    div.style.height = size;

    document.getElementById("container").appendChild(div);
    colourBackgroundBlack();
  }
}

// creates rainbow coloured background
function colourBackground() {
  let gridElement = document.querySelectorAll(".grid");

  gridElement.forEach((elem) => {
    elem.addEventListener("mouseover", function () {
      this.style.backgroundColor = colourPicker();
    });
  });
}

// creates solid colour background
function colourBackgroundBlack() {
  let gridElement = document.querySelectorAll(".grid");

  gridElement.forEach((elem) => {
    elem.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
    });
  });
}

// generate random rgb
function colourPicker() {
  let col1 = Math.floor(Math.random() * 256);
  let col2 = Math.floor(Math.random() * 256);
  let col3 = Math.floor(Math.random() * 256);
  return `rgb(${col1}, ${col2}, ${col3})`;
}

// creates an emptry grid as soon as the page loads
window.addEventListener("load", (event) => {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = 100/16 + "%";
    div.style.height = 100/16 + "%";

    colourBackgroundBlack();

    document.getElementById("container").appendChild(div);
  }
});

// buttons: reset grid, pick colour, rainbow, clear to white
document.getElementById("reset").addEventListener("click", gridNum);
document.getElementById("colour").addEventListener("click", on);
document.getElementById("random").addEventListener("click", colourBackground);
document.getElementById("clear").addEventListener("click", clearBg);

// calls overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

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
      }
    colourBackgroundBlack();
    }

// creates selects colour for drawing
function colourBackground() {
  let gridElement = document.querySelectorAll(".grid");

  gridElement.forEach((elem) => {
    elem.addEventListener("mouseover", function () {
      // if (document.getElementById("rainbow").addEventListener("click")) =>
      this.style.backgroundColor = colourPicker();
      // } else if { document.getElementById("rainbow").addEventListener("click")) =>
        // this.style.backgroundColor = " /variable colour corresponding to button id/";
//    }{ else {I don't know do something};
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

window.onload=function(){
  createGrid(16, "6.25%");
}

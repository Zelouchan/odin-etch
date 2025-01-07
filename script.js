document.getElementById("reset").addEventListener("click", gridNum);
document.getElementById("colour").addEventListener("click", colourBackgroundBlack);
document.getElementById("random").addEventListener("click", colourBackground);
document.getElementById("clear").addEventListener("click", clearBg);

function clearBg() {
  document.getElementsByClassName("grid")
  this.style.backgroundColor; "white";
}

function gridNum() {
  let amount = prompt(
    "How many grid squares would you like per side? Pick between 16 and 100"
  );

  if (amount < 16 || amount > 100 || isNaN(amount)) {
    alert("wrong! Pick a number between 16 and 100.");
    return;
  }

  document.getElementById("container").innerHTML = "";

  let size = 100 / amount + "%";
  createGrid(amount, size);
}

function createGrid(amount, size) {
  let total = amount * amount;

  for (let i = 0; i < total; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = size;
    div.style.height = size;

    colourBackgroundBlack();

    document.getElementById("container").appendChild(div);
  }
}

function colourBackground() {
  let gridElement = document.querySelectorAll(".grid");

  gridElement.forEach((elem) => {
    elem.addEventListener("mouseover", function () {
      this.style.backgroundColor = colourPicker();
    });
  });
}

function colourBackgroundBlack() {
  let gridElement = document.querySelectorAll(".grid");

  gridElement.forEach((elem) => {
    elem.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
    });
  });
}

function colourPicker() {
  let col1 = Math.floor(Math.random() * 256);
  let col2 = Math.floor(Math.random() * 256);
  let col3 = Math.floor(Math.random() * 256);
  return `rgb(${col1}, ${col2}, ${col3})`;
}

window.addEventListener("load", (event) => {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = 100 / 16 + "%";
    div.style.height = 100 / 16 + "%";

    colourBackgroundBlack();

    document.getElementById("container").appendChild(div);
  }
});

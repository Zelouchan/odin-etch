document.getElementById("reset").addEventListener("click", gridNum);
// document.getElementById("colour").addEventListener("click", );
// document.getElementById("random").addEventListener("click", );
// document.getElementById("reset").addEventListener("click", );

function gridNum() {
    let amount = prompt("How many grid squares would you like per side? Pick between 16 and 100")

    if (amount < 16 || amount > 100 || isNaN(amount)) 
      { alert("wrong! Pick a number between 16 and 100.");
        return; } 

    document.getElementById("container").innerHTML = "";
    
    createGrid(amount);
    giveSize(amount);
}

function giveSize(amount) {
    let size = (100 / amount) +"%";
    createGrid(size)
}

function createGrid(amount, size) {
    let total = (amount * amount);
    for (let i = 0; i < total; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = size;
    div.style.height = size;

    document.getElementById("container").appendChild(div);
    }

    document.getElementsByClassName("grid").addEventListener("mouseover", changeBackground);
        function changeBackground() {
            this.style.backgroundColor = "black";
        }
}

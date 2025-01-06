function gridNum() {
    let amount = prompt("How many grid squares would you like per side? Pick between 16 and 100")
    createGrid(amount);
    giveSize(amount);
}

function giveSize() {
    let size = (100% / amount );
    createGrid(size)
}

function createGrid() {
    let total = (amount * amount);
    while (i = 0; i > total; i++);

    var div = document.createElement("div");
    div.style.width = size;
    div.style.height = size;
    document.getElementById("container").appendChild(div);
    // create div use function giveSize
}
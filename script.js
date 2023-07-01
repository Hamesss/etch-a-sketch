const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const btn3 = document.querySelector(".button3");
const btn4 = document.querySelector(".button4");
let currentSize = 16;
let rainbow = false;
let eraser = false;

btn1.addEventListener("click", changeGridSize);
btn2.addEventListener("click", rainbowColour);
btn3.addEventListener("click", erase)
btn4.addEventListener("click", clear);

function createGrid(size = 16) {
    const hoveredSquares = document.querySelectorAll(".hovered");
    const divSquare = document.querySelector(".div-square");
    divSquare.innerHTML = "";
    for (let i = 0; i < size; i++) {
        const div = document.createElement("div");
        div.classList.add("line");
        divSquare.appendChild(div);

    }

    const squares = document.querySelectorAll(".line");
    squares.forEach(div => {
        for (let i = 0; i < size; i++) {
            const newDiv = document.createElement("div")
            newDiv.classList.add("div-child");
            newDiv.setAttribute("style", `width: ${800 / size}px; height: ${800 / size}px;`);
            newDiv.addEventListener("mouseover", addHoveredClass);
            div.appendChild(newDiv);
        }

    });
}

function addHoveredClass(e) {
    if (rainbow == true) {
        this.style.backgroundColor = getRandomColor();
    }
    else if (eraser == true) {
        this.style.backgroundColor = "lightgrey";
    }
    else {
        this.style.backgroundColor = "black";
    }
}
createGrid();


function changeGridSize(e) {
    const newSize = parseInt(prompt("Enter a new grid size less than 100"));
    if (typeof newSize == "string" || newSize < 1 || newSize > 100) {
        alert("Invalid grid size!");
    }
    else if (isNaN(newSize)){}
    else {
        currentSize = newSize;
        createGrid(newSize);
    }
}

function rainbowColour(e) {
    if (rainbow == true) {
        rainbow = false;
        btn2.style.backgroundColor = "white";

    }
    else {
        if (eraser == true) {
            erase();
        }
        rainbow = true;
        btn2.style.backgroundColor = "lightgreen";
    }
}

function erase(e) {
    if (eraser == true) {
        eraser = false;
        btn3.style.backgroundColor = "white";
    }

    else {
        if (rainbow == true) {
            rainbowColour();
        }
        eraser = true;
        btn3.style.backgroundColor = "lightgreen";
    }
}

function clear(e){
    createGrid(currentSize);
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

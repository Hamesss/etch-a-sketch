const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");

function createGrid(size = 16){
    const hoveredSquares = document.querySelectorAll(".hovered");
    const divSquare = document.querySelector(".div-square");
    divSquare.innerHTML = "";
for (let i = 0; i < size; i++){
    const div = document.createElement("div");
    div.classList.add("line");
    divSquare.appendChild(div);

}

const squares = document.querySelectorAll(".line");
squares.forEach(div => {
    for (let i = 0; i < size; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("div-child");
        newDiv.setAttribute("style", `width: ${800/size}px; height: ${800/size}px;`);
        newDiv.addEventListener("mouseover", addHoveredClass)
        div.appendChild(newDiv);
    }

});
}

function addHoveredClass(e){
    this.classList.add("hovered")
}
createGrid();

btn1.addEventListener("click", changeGridSize); 
btn2.addEventListener("click", rainbowColour);
function changeGridSize(e){
    const newSize = parseInt(prompt("Enter a new grid size less than 100"));
    if (typeof newSize == "string" ||newSize < 0 || newSize > 100){
        alert("Invalid grid size!");
    }
    else {
    createGrid(newSize);
    }
}

function rainbowColour(e){
    
}
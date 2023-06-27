function createGrid(){
for (let i = 0; i < 16; i++){
    const divSquare = document.querySelector(".div-square");
    const div = document.createElement("div");
    div.classList.add("line");
    divSquare.appendChild(div);

}

const squares = document.querySelectorAll(".line");
squares.forEach(div => {
    for (let i = 0; i < 16; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("div-child");
        newDiv.addEventListener("mouseover", addHoveredClass)
        div.appendChild(newDiv);
    }

});
}

function addHoveredClass(e){
    this.classList.add("hovered")
}
createGrid();
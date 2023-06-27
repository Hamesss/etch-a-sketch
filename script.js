
for (let i = 0; i < 16; i++){
    const divLine = document.querySelector(".div-line");
    const div = document.createElement("div");
    div.classList.add("line");
    divLine.appendChild(div);

}
const squares = document.querySelectorAll(".line");
squares.forEach(div => {
    for (let i = 0; i < 16; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("div-child");
        div.appendChild(newDiv);
    }

});
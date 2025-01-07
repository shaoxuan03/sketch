let container = document.querySelector(".container");
let defaultGrid = 16;


function createGrid(gridVal){
    for(i = 1; i < gridVal*gridVal + 1; i++){
        let div1 = document.createElement("div");
        container.appendChild(div1);
        div1.textContent = i;
    }
}

createGrid(16);
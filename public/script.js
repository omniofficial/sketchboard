// I need to add logic here where a user can click a button with a prompt. Prompt will ask how many squares per side to add to the container. Container size will be the same, it will not change.

// Button Logic

// Size = button input x button input

/*
for (let i = 0, i < size; i++){
CLEAR previous container, then add grids. 
}
*/

const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
    const gridsquare = document.createElement("div");
    gridsquare.classList.add("square");
    container.appendChild(gridsquare);
}

// Hover effect using event listener
const gridsquares = document.querySelectorAll(".square");

gridsquares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "lightblue";
    });
});

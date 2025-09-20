const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
    const gridquare = document.createElement("div");
    gridquare.classList.add("square");
    container.appendChild(gridquare);
}

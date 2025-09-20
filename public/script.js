function resizeGrid() {
    var squaresPerSide = prompt("Enter number of squares per side (max 100)");

    squaresPerSide = Math.min(Number(squaresPerSide), 100); // limit to 100

    // Clear previous grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Call createGrid with new size
    createGrid(squaresPerSide);
}

function createGrid(squaresPerSide) {
    const gap = 2;
    const containerSize = container.offsetWidth;
    const squareSize =
        (containerSize - (squaresPerSide - 1) * gap) / squaresPerSide;

    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const gridsquare = document.createElement("div");
        gridsquare.classList.add("square");
        container.appendChild(gridsquare);

        // Dynamic sizing
        gridsquare.style.width = `${squareSize}px`;
        gridsquare.style.height = `${squareSize}px`;

        // Hover effect for each square
        gridsquare.addEventListener("mouseenter", function () {
            gridsquare.style.backgroundColor = "lightblue";
        });
    }
}

const container = document.querySelector("#container");

// Initial grid
createGrid(16); // Default grid creation

// Button Logic
let resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener("click", resizeGrid); // Upon click, run resizeGrid

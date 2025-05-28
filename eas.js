


const container = document.querySelector(".canva");
const generateBtn = document.querySelector(".generate");

function getRainbowColor() {
      const rainbowColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"]; // Red, Orange, Yellow, Green, Blue, Indigo, Violet
      return rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
}

generateBtn.addEventListener("click", function(){
const input = document.getElementById("gridSize");
const gridSize = input.value;
const squareSize = 600 / gridSize;
container.innerHTML = "";
for (let i=0; i < gridSize * gridSize; i++) {
  const square = document.createElement("div");
  square.style.width = `${squareSize}px`;
  square.style.height = `${squareSize}px`;
  square.style.border = "1px solid #000";
  square.style.boxSizing = "border-box";
  square.style.transition = "background-color 0.3s ease";
  // square.style.display = "flex";
  // square.style.justifyContent = "center";
  // square.style.alignItems = "center";

  container.appendChild(square);
  const selectedColor = document.getElementById("color");
  square.addEventListener("mouseover", function(){
    if (selectedColor.value === "blue") {
    square.style.backgroundColor = "blue";
  }
    if (selectedColor.value === "rainbow") {
    square.style.backgroundColor = getRainbowColor();
  }
  });
  square.addEventListener("contextmenu", function (event) {
      event.preventDefault(); // Prevent default right-click menu
      square.style.backgroundColor = "#ffffff"; // Reset to white
  });

  }

container.style.display = "flex";
container.style.flexWrap = "wrap";
// container.style.flex = "none";
container.style.minWidth = "600px";
container.style.maxWidth = "600px";
container.style.minHeight = "600px";
container.style.maxHeight = "600px";
container.style.border = "2px solid #000";

});

function makeGrid(width, height) {
  const container = document.createElement("div");
  container.className = "container";

  const body = document.querySelector("body");
  body.appendChild(container);

  for (let i = 0; i < height; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.className = "row-container";
    document.querySelector(".container").appendChild(rowContainer);

    for (let j = 0; j < width; j++) {
      const item = document.createElement("div");
      item.className = "item";

      rowContainer.appendChild(item);
      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#60b347";
      });
      item.addEventListener("mouseout", () => {
        setTimeout(() => {
          item.style.backgroundColor = "#ffffff";
        }, 200);
      });
    }
  }
}

makeGrid(16, 16);

const button = document.querySelector(".button");
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#a4fafc";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "azure";
});
button.addEventListener("mousedown", () => {
  button.style.backgroundColor = "white";
});
button.addEventListener("mouseup", () => {
  button.style.backgroundColor = "#a4fafc";
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const width = prompt("Specify width");
  const height = prompt("Specify height");

  document.querySelector(".container").remove();

  makeGrid(width, height);
});

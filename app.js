const container = document.querySelector(".container");
const colorPicker = document.querySelector("#colorPicker");
const modes = document.querySelectorAll(".modes .btn");
const restart = document.querySelector(".restart .btn");

restart.addEventListener("click", (e) => {
  function clearGrid() {
    const divs = document.querySelectorAll(".div");
    divs.forEach((div) => container.removeChild(div));
  }
  clearGrid();
  let size = window.prompt(
    "What size x by x do you want your grid to be? Maximum 50!"
  );
  if (size > 50) {
    createGrid(50);
  } else {
    createGrid(size);
  }
  const divs = document.querySelectorAll(".div");
  container.addEventListener("mousedown", (e) => {
    e.preventDefault();
    divs.forEach((div) => div.addEventListener("mouseover", setColor));
  });

  container.addEventListener("mouseup", (e) =>
    divs.forEach((div) => div.removeEventListener("mouseover", setColor))
  );
});

modes.forEach((mode) =>
  mode.addEventListener("click", (e) => {
    color = e.target.getAttribute("data");
  })
);

function rng(x) {
  return Math.floor(Math.random() * x);
}

let color = "";
colorPicker.addEventListener("change", (e) => {
  color = e.target.value;
});

function createGrid(x) {
  container.setAttribute(
    "style",
    `display: grid; grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr;); gap: 2px`
  );
  for (let i = 0; i < x * x; i++) {
    const div = document.createElement("div");
    div.classList.add("div");
    container.appendChild(div);
  }
  const divs = document.querySelectorAll(".div");
}

function setColor(e) {
  if (color === "eraser") {
    e.target.style.backgroundColor = "#fff";
  } else if (color === "random") {
    e.target.style.backgroundColor = `hsl(${rng(361)}, ${rng(101)}%, ${rng(
      101
    )}%)`;
  } else {
    e.target.style.backgroundColor = color;
  }
}

window.onload = () => {
  createGrid(16);
  const divs = document.querySelectorAll(".div");

  container.addEventListener("mousedown", (e) => {
    e.preventDefault();
    divs.forEach((div) => div.addEventListener("mouseover", setColor));
  });

  container.addEventListener("mouseup", (e) =>
    divs.forEach((div) => div.removeEventListener("mouseover", setColor))
  );
};

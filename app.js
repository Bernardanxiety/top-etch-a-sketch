const container = document.querySelector(".container");

function randomNumber(x) {
  return Math.floor(Math.random() * x);
}

function createGrid(x) {
  container.setAttribute(
    "style",
    `display: grid; grid-template-columns: repeat(${x}, 1fr); grid-template-rows: repeat(${x}, 1fr)`
  );
  for (let i = 0; i < x * x; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", `outline: 1px dotted black;`);
    div.classList.add("div");
    container.appendChild(div);
  }
  const divs = document.querySelectorAll(".div");
  divs.forEach((div) =>
    div.addEventListener("mouseover", (e) => {
      div.setAttribute(
        "style",
        `background-color: hsl(${randomNumber(361)}, ${randomNumber(
          101
        )}%, ${randomNumber(101)}%);`
      );
    })
  );
}

window.onload(createGrid(16));

// Grab the container
const container = document.querySelector("#container");

// From the example
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a glorious tex-content";
container.appendChild(content);

// Task 1: Red paragraph
const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hi I'm red";
container.appendChild(redParagraph);











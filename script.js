// Submission of assignment for Dev Mentor & Coach's review

// Grab the container
const container = document.querySelector("#container");

// From the example
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is a glorious text-content";
container.appendChild(content);

// Task 1: <p> with red text
const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);

// Task 2: <h3> with blue text
const blueText = document.createElement("h3");
blueText.style.color = "blue";
blueText.textContent = "Hey I'm a blue h3!";
container.appendChild(blueText);

// Task 3 a: <div> with nested <h1> and <p>
const styleDiv = document.createElement("div");
styleDiv.style.border = "2px solid black";
styleDiv.style.backgroundColor = "pink";

    // 3 b: Nested heading
    const h1Text = document.createElement("h1");
    h1Text.textContent = "I'm in a div!";
    styleDiv.appendChild(h1Text);

    // 3 c: Nested paragraph
    const pText = document.createElement("p");
    pText.textContent = "ME TOO!";
    styleDiv.appendChild(pText);

// Finally append resultant div to container    
container.appendChild(styleDiv);
const container = document.querySelector('#container');
const btn = document.querySelector('#btnBox');
const reset = document.querySelector('#reset');
const eraser = document.querySelector('#eraser');
const colored = document.querySelector('#colored');

// Set the default color to red
let currentColor = "red";

// Add mouseover event listener to container to color boxes
container.addEventListener('mouseover', (e) => {
  const smallBox = e.target;
  if (smallBox.classList.contains('box')) {
    smallBox.style.backgroundColor = currentColor;
  }
});

// Change color to blue
colored.addEventListener('click', () => {
  currentColor = "blue";
  console.log(currentColor);
});

// Change color to white (eraser)
eraser.addEventListener('click', () => {
  currentColor = "white";
});

// Reset all boxes to white
reset.addEventListener('click', () => {
  const smallBoxes = document.querySelectorAll('.box');
  smallBoxes.forEach(smallBox => {
    smallBox.style.backgroundColor = 'white';
  });
});

// change number of boxes in container
btn.addEventListener('click', () => {
  const numOfBoxStr = prompt('How many boxes?');
  const numOfBoxInt = parseInt(numOfBoxStr);

  if (numOfBoxInt > 100) {
    return alert("Can't have more than 100 boxes.");
  }

  // Remove existing rows from the container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Calculate the width of the boxes based on the container's width and the number of boxes in a row
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const boxWidth = (containerWidth / numOfBoxInt) - 2; // Subtracting 2 to account for the box border
  const boxHeight = (containerHeight / numOfBoxInt) - 2;

  for (let i = 0; i < numOfBoxInt; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    // create boxes in each row based on number of boxes in a row
    for (let j = 0; j < numOfBoxInt; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${boxWidth}px`;
      box.style.height = `${boxHeight}px`;
      row.appendChild(box);
    }

    container.appendChild(row);
  }
});

// set container styles
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '500px';
container.style.height = '500px';
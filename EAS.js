console.log("hello");

const container = document.querySelector('#container');
const btn = document.querySelector('#btnBox');
const reset = document.querySelector('#reset')


btn.addEventListener('click', () => {
    const numOfBoxStr = prompt('How many Box?');
    const numOfBoxInt = parseInt(numOfBoxStr);

    if (numOfBoxInt > 100) {
        return alert("can't have more than 100");
    }

    // Remove existing rows from the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Calculate the width of the boxes based on the container' width and the number of boxes in a row
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetWidth;
    const boxWidth = (containerWidth/ numOfBoxInt) - 2; // Subtracting 2 to account for the box border
    const boxHeight = (containerHeight/ numOfBoxInt) -2; 

    

    for (let i = 0; i < numOfBoxInt; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        // create 16 boxes in each row
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

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '500px';
container.style.height = '500px';

function colorOnMove(e) {
    const smallBox = e.target;
    if (smallBox.classList.contains('box')) {
        smallBox.style.backgroundColor = "blue";
    };
};

reset.addEventListener('click', () => {
    const smallBoxes = document.querySelectorAll('.box');
    
    smallBoxes.forEach(smallBox => {
        smallBox.style.backgroundColor = 'white';

    });
    console.log(smallBoxes);
});


container.addEventListener('mousemove', colorOnMove)

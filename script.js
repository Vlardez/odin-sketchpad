const canvas = document.querySelector('.container');
const resetBtn = document.querySelector('#resetBtn');


function randColor() {
    return Math.floor(Math.random() * 254);
}

function darkenColor(obj, step) {
    const splitCol = obj.style.backgroundColor.split(',');
    const hue = splitCol[0].split('(');
    let r = parseInt(hue[1])-step;
    let g = parseInt(splitCol[1])-step;
    let b = parseInt(splitCol[2])-step;
    console.log(r,g,b);
    r = (r>0)?r:0;
    g = (g>0)?g:0;
    b = (b>0)?b:0;
    obj.style.backgroundColor = `rgb(${r},${g},${b})`;
    console.log(obj.style.backgroundColor);
}

function changeColor() {
    if (!Boolean(this.style['backgroundColor'])) {
        this.style.backgroundColor = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
    } else {
        darkenColor(this, 25);
    }
}

function createGrid() {
    const gridSize = parseInt(prompt("Please enter the size of the grid",16));
    canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }

    for (let i = 0; i < gridSize*gridSize; i++) {
        let div = document.createElement('div');
        div.className = 'square';
        div.addEventListener('mouseover',changeColor)
        canvas.appendChild(div);
    }
}

resetBtn.addEventListener('click',createGrid);
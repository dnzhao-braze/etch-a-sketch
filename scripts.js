const container = document.querySelector('#container');
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', () => {
    const grid = document.querySelectorAll('.grid');
    grid.forEach((square) => {
        square.classList.remove('hover');
    })
})
const gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', () => {
    let checker = true;
    let input = 0;
    do {
        input = Number(prompt("Enter number of squares per side for the new grid (1-100)"));
        checker = input < 1 || input > 100 || isNaN(input);
    } while(checker);
    createGrid(input);
})
function createGrid(n){
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i<n; i++){
        for (let j = 0; j<n; j++){
            let square = document.createElement('div');
            square.classList.add('grid');
            square.style.width = `${(480/n)}px`;
            square.style.height = `${(480/n)}px`;
            square.addEventListener('mouseover', () => {
                square.classList.add('hover');
            })
            container.appendChild(square);
        }
    }
}
createGrid(16);


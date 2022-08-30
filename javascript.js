const container = document.querySelector('#container');
let playerChoice; 

do{
    playerChoice = prompt('How many rows and columns 1-50: ');
} while(playerChoice < 1 || playerChoice > 50); 



for (let i = 0; i < playerChoice; i++){
    const divColumn = document.createElement('div');
    for (let i = 0; i < playerChoice; i++){
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        divColumn.appendChild(divRow);
    }
    divColumn.classList.add('column');
    container.appendChild(divColumn);
}

const rowSelector = document.querySelectorAll('.row');
console.log(rowSelector[2]);



for (let i = 0; i < rowSelector.length; i++){
    rowSelector[i].addEventListener('mouseover', () =>{
        rowSelector[i].style.backgroundColor = 'blue';
    })
    /*rowSelector[i].addEventListener('mouseout', () =>{
        rowSelector[i].style.backgroundColor = 'white';
    })*/
}
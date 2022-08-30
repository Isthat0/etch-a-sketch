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

let columnSelector = document.getElementsByClassName('.column');
console.log(columnSelector.length);

for( let i = 0; i < columnSelector.length; i++){
    console.log(columnSelector[i]);
}
let rowSelector = document.getElementsByClassName('.row');;
console.log(rowSelector);





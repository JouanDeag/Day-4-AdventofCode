const input = require('fs').readFileSync('data.txt', 'utf8').split('\r\n\r\n');
const opened = new Set();

let instruction = input[0];
input.shift();
let brickor = input;

instruction = instruction.split(',').map(e => parseInt(e, 10));
brickor = brickor.map(bricka => bricka.split('\r\n').map(row => row.split(" ").filter(cell => cell.length > 0).map(cell => parseInt(cell, 10))))

console.log();

for (let i = 0; i < instruction.length; i++) {
    opened.add(instruction[i]);
}

function areyaWinninSon (bricka) {
    bricka.forEach(row => { 
        row.forEach(cell => { 
            opened.has(cell);
        })  
    })
}
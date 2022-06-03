const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(fieldArray){
        this._fieldArray = fieldArray;
    }
    get fieldArray(){
        return this._fieldArray;
    }
    sayHello(){
        const name = prompt("give me your name!!! i am not kidding around here");
        console.log(`hello ${name}, nice to meet you!`);
    }
}

let testField = new Field();

testField.sayHello();


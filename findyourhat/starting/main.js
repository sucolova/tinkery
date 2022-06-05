const prompt = require('prompt-sync')({sigint: true}); // create promt for user input; user can exit with ctrl c = true

class Field {
    constructor(fieldArray){
        this._fieldArray = fieldArray;
    }
    get fieldArray(){
        return this._fieldArray;
    }
    static generateField(v,h){
        let field = [];
        let currentArray;
        let asteriskPlaced = false;
        let hatPlaced = false;
        for (let i = 0; i < v; i++){
            field.push([]);
            currentArray = i;
            for (let i = 0; i < h; i++){
                let r = Math.floor(Math.random()*100);
                console.log(r);
                if (r <= 4 && asteriskPlaced === false ){
                    field[currentArray].push("*");
                    asteriskPlaced = true;
                }else if (r <= 2 && hatPlaced === false && currentArray > v/2 ){
                    field[currentArray].push("^");
                    hatPlaced = true;
                } else if (r <= 80) {
                    field[currentArray].push("░");
                } else if (r <= 100) {
                    field[currentArray].push("O");
                } else {
                    console.log("something went wrong");
                }
            console.log(field);
            }

        }
        if (asteriskPlaced === true && hatPlaced === true){
        return field;
        } else {
            field[0][0] = "*";
            field[v-1][h-1] = "^";
            return field;
        }
    }
    askDirection(){
        const ask = prompt("press hjklö for movement ");
        console.log(`you pressed ${ask} !`);
        return ask;
    }
    printField(){
        console.log(this._fieldArray.join("\r\n").replaceAll(",", "")); // prints the 2d Array as string with line breaks and without commas
    }
    startGame(){
        let v = this.findIndexOfChar("*").vertical; // get the koordinates for the start of the game;
        let h = this.findIndexOfChar("*").horizontal;
        let winOrLoose = true;
        while (winOrLoose){
            this.printField();
            let direction = this.askDirection(); // get user input
            switch (direction){  // move * in user input direction (update koordinates v,h)
                case "h":

                    h -= 1;
                    if(h < 0){
                        h = 0;
                    }
                    break;
                case "j":
                    v += 1;
                    if(v >= this._fieldArray.length -1){
                        v = this._fieldArray.length -1;
                    } // baustelle
                    break;
                case "k":
                    v -= 1;
                    if(v < 0){
                        v = 0;
                    }
                    break;
                case "l":
                    h += 1;
                    if(h >= this._fieldArray[0].length -1){
                        h = this._fieldArray[0].length -1;
                    }
                    break;
                default:
                    console.log("!!!!!! hjkl for movement");
            }
            let fieldChar = this._fieldArray[v][h];
            if (fieldChar === "O"){
                winOrLoose = false;
                console.log("you bumpet into a rock, game over");
            } else if (fieldChar === "^"){
                console.log("you found the hat, you win!! congratulations, i am very proud of you!");
                winOrLoose = false;
            } else {
                this._fieldArray[v][h] = "*"; // put new asterisk at updated koordinates
                this.printField(); // draw the new field
            }
        }
    }
    findIndexOfChar(c){                     // gives me the vertical and horizontal indices of char in FieldArray. Only works on single occurances
        for(let i = 0; i < this._fieldArray.length; i++){
            if (this._fieldArray[i].findIndex(element => element === c) != -1){
                let horizontal = this._fieldArray[i].findIndex(element => element === c);
                let vertical = i;
                //console.log(vertical, horizontal);
                //console.log(this._fieldArray[vertical][horizontal]);
                return {vertical, horizontal};
            }
        }
    }
}



let testField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

let myField = new Field(Field.generateField(15,  16));
myField.startGame();



class ShiftCypher {
    constructor(n){
        this._n = n;
    }
    get n(){
        return this._n;
    }
    encrypt(str){
        str = str.toUpperCase();
        for (let x = 0; x < str.length; x++){
            if (str.charCodeAt(x) <= 90 && str.charCodeAt(x) >= 65){                                // if letter
                if(str.charCodeAt(x) +this._n > 90){                                                // if outside of letterspace greater 90
                    let d = str.charCodeAt(x) +this._n -90;                                         // how much outside?
                    console.log(d);
                    str = str.substring(0, x) + String.fromCharCode(d+64) + str.substring(x +1);    // begin at A plus difference (d1 = 65 -> A)
                } else if (str.charCodeAt(x) +this._n < 65) {
                    let d = str.charCodeAt(x) +this._n -65;                                         // going to be a negative number (how far beneath A)
                    console.log(d);
                    str = str.substring(0, x) + String.fromCharCode(91+d) + str.substring(x +1);    // start at Z and go down
                } else {
                    str = str.substring(0, x) + String.fromCharCode(str.charCodeAt(x) +this._n) + str.substring(x +1);
                }
            }
        }
        return str;
    }
    decrypt(str){
        let n = this._n * -1;
        str = str.toUpperCase();
        for (let x = 0; x < str.length; x++){
            if (str.charCodeAt(x) <= 90 && str.charCodeAt(x) >= 65){                                // if letter
                if(str.charCodeAt(x) +n > 90){                                                // if outside of letterspace greater 90 -> z > A
                    let d = str.charCodeAt(x) +n -90;                                         // how much outside?
                    console.log(d, str.charAt(x));
                    str = str.substring(0, x) + String.fromCharCode(d+64) + str.substring(x +1);    // begin at A plus difference (d1 = 65 -> A)
                }else if (str.charCodeAt(x) +n < 65) {
                    let d = str.charCodeAt(x) +n -65;                                         // going to be a negative number (how far beneath A)
                    console.log(d, str.charAt(x));
                    str = str.substring(0, x) + String.fromCharCode(91+d) + str.substring(x +1);    // start at Z and go down
                } else {
                    str = str.substring(0, x) + String.fromCharCode(str.charCodeAt(x) +n) + str.substring(x +1);
                }
            }
        }
        return str;

    }
}



const cipher = new ShiftCypher(1);

console.log(cipher.encrypt("Z"));
console.log(cipher.decrypt("a"));

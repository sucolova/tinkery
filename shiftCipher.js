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
                } if (str.charCodeAt(x) +this._n < 65) {
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
        let n = this._n * -1;                                                                           // negate n for decryption
        str = str.toUpperCase();
        for (let x = 0; x < str.length; x++){                                                           // cycle through every char
            if (str.charCodeAt(x) <= 90 && str.charCodeAt(x) >= 65){                                    // test if Letter
                if(str.charCodeAt(x) +n < 65){                                                          // if before encryption +n > 90 meaning: after encryption 64 +n
                    let d = str.charCodeAt(x) +n -65;                                                   // how far after 65 would it be
                    console.log(str.charCodeAt(x));
                    console.log("if +n < 65",d);
                    str = str.substring(0, x) + String.fromCharCode(91 + d) + str.substring(x +1);      // because before encryption too close to 90 and d = the amount that was too much
                } else {
                    str = str.substring(0, x) + String.fromCharCode(str.charCodeAt(x) +n)
                        + str.substring(x +1);

                }
            }

        }
        return str;
    }

}



const cipher = new ShiftCypher(-2);

console.log(cipher.encrypt("abC! XYz."));
console.log(cipher.decrypt(cipher.encrypt("abC! XYz.")));

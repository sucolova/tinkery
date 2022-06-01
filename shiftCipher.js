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
            if (str.charCodeAt(x) <= 90 && str.charCodeAt(x) >= 65){
                if(str.charCodeAt(x) +this._n > 90){
                    let d = str.charCodeAt(x) +this._n -90;
                    console.log(d);
                    str = str.substring(0, x) + String.fromCharCode(d+64) + str.substring(x +1);
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
            if (str.charCodeAt(x)+n <= 90 && str.charCodeAt(x)+n >= 65){
                if(str.charCodeAt(x) +n < 65){
                    let d = str.charCodeAt(x) +n -65;
                    console.log(str.charCodeAt(x));
                    console.log("if +n < 65",d);
                    str = str.substring(0, x) + String.fromCharCode(90 - d) + str.substring(x +1);
                } else {
                    str = str.substring(0, x) + String.fromCharCode(str.charCodeAt(x) +n)
                        + str.substring(x +1);

                }
            }

        }
        return str;
    }

}



const cipher = new ShiftCypher(1);

console.log(cipher.encrypt("abC! XYz."));
console.log(cipher.decrypt(cipher.encrypt("abC! XYz.")));

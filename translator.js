let inputText = document.querySelector("#input-english").value;
let outputCode = document.querySelector("#output-code").value = translatedCode;
const button = document.querySelector("#translator");

export const translateToMorse = (string) => {


};


const morseCode = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    " ": "/",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "/": "-..-.",
    "'": ".----.",
    "+": ".-.-.",
    "-": "-....-",
    "@": ".--.-.",
    "!": "-.-.--"
};

// return string.toLowerCase().split(" ").map(morse => {
//     if(morseCode[morse])
//     {
//         return morseCode[morse];
//     } else {
//         return morse;
//     }
//  }).join(" ");
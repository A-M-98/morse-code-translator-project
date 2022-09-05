const button = document.querySelector("#translator");

export const translateToMorse = (string) => {
    let inputText = document.querySelector("#input-english").value;
    string = inputText.toLowerCase();
    let firstArray = string.split("");
    let secondArray = firstArray.map(morse => {
        if(morseCode[morse])
            {
                return morseCode[morse];
            } else {
                return morse;
            }

    });

    let translatedCode = secondArray.join(" ");
    document.querySelector("#output-code").value = translatedCode;

};

button.addEventListener("click", translateToMorse);

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
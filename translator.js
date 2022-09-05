
export const translateToMorse = (string) => {
    return string.toLowerCase().split(" ").map(morse => {
        if(morseCode[morse])
        {
            return morseCode[morse];
        } else {
            return morse;
        }
     }).join(" ");

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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translateToMorse = void 0;

var translateToMorse = function translateToMorse(string) {
  var word = string.toLowerCase();
  var firstArray = word.split("");
  var secondArray = firstArray.map(function (morse) {
    if (morseCode[morse]) {
      return morseCode[morse];
    } else {
      return morse;
    }
  });
  return secondArray.join(" ");
};

exports.translateToMorse = translateToMorse;
var morseCode = {
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
  "v": "...-",
  "w": ".--",
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
  ":": "---...",
  "=": "-...-",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ";": "-.-.-.",
  "!": "-.-.--"
};
"use strict";

var _translator = require("./translator.js");

var button = document.querySelector("#translator");
button.addEventListener("click", function () {
  var inputText = document.querySelector("#input-english").value.toLowerCase();
  var translatedCode = (0, _translator.translateToMorse)(inputText);
  document.querySelector("#output-code").value = translatedCode;
});
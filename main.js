import { translateToMorse } from "./translator.js";
const button = document.querySelector("#translator");
button.addEventListener("click", () => {
    let inputText = document.querySelector("#input-english").value.toLowerCase();
    const translatedCode = translateToMorse(inputText); 
    document.querySelector("#output-code").value = translatedCode;
});
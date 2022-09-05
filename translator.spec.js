import { translateToMorse } from "./translator.js";

describe('Testing translateToMorse', () => {
  it("a should translate to be .-", ()=> {
    // Arrange
      let string;
    // Act
      string = "a";
      let result = translateToMorse(string)
    // Assert
    expect(result).toBe(".-");
  });

  it("afaq should translate to be .- ..-. .- --.-", ()=> {
    // Arrange
      let string;
    // Act
      string = "afaq";
      let result = translateToMorse(string)
    // Assert
    expect(result).toBe(".- ..-. .- --.-");
  });

  it("12345 should translate to be .---- ..--- ...-- ....- .....", ()=> {
    // Arrange
      let string;
    // Act
      string = "12345";
      let result = translateToMorse(string)
    // Assert
    expect(result).toBe(".---- ..--- ...-- ....- .....");
  });

  it("HELLO should translate to be .... . .-.. .-.. ---", ()=> {
    // Arrange
      let string;
    // Act
      string = "HELLO";
      let result = translateToMorse(string)
    // Assert
    console.log(result);
    expect(result).toBe(".... . .-.. .-.. ---");
  });

  it("My name is Afaq should translate to be -- -.-- / -. .- -- . / .. ... / .- ..-. .- --.-", ()=> {
    // Arrange
      let string;
    // Act
      string = "My name is Afaq";
      let result = translateToMorse(string)
    // Assert
    expect(result).toBe("-- -.-- / -. .- -- . / .. ... / .- ..-. .- --.-");
  });

  it("Hi, hello. what's up? should translate to be .... .. --..-- / .... . .-.. .-.. --- .-.-.- / .-- .... .- - .----. ... / ..- .--. ..--..", ()=> {
    // Arrange
      let string;
    // Act
      string = "Hi, hello. what's up?";
      let result = translateToMorse(string)
    // Assert
    expect(result).toBe(".... .. --..-- / .... . .-.. .-.. --- .-.-.- / .-- .... .- - .----. ... / ..- .--. ..--..");
  });

  it("Symbols:/+-=()@&! should translate to be ... -.-- -- -... --- .-.. ... ---... -..-. .-.-. -....- -...- -.--. -.--.- .--.-. .-... -.-.--", ()=> {
    // Arrange
      let string;
    // Act
      string = "Symbols:/+-=()@&!";
      let result = translateToMorse(string)
    // Assert
    expect(result).toBe("... -.-- -- -... --- .-.. ... ---... -..-. .-.-. -....- -...- -.--. -.--.- .--.-. .-... -.-.--");
  });  

 });

 //what should translateToMorse fucntion actually be able to do?

 //recieve letters and translate those latters into morse code
 //take into consideration capital letters -  These also need to translate to morse code
 //take into consideration spaces between words and translate these accordingly.
 //Number!
 //Symbols!
 //Extension - different languages other than english

 //should we have a translateToEnglish translator?
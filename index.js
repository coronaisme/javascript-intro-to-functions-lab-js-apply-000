var shout = (string) => string.toUpperCase();

var whisper = (string) => string.toLowerCase();

var logShout = (string) => console.log(string.toUpperCase());

var logWhisper = (string) => console.log(string.toLowerCase());

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return `I can't hear you!`;
  }
}

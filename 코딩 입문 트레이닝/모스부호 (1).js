function solution(letter) {
  var answer = [];
  var temp = letter.split(" ");
  var morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  var morseKey = Object.keys(morse);
  var morseValue = Object.values(morse);
  for (i = 0; i < temp.length; i++) {
    for (j = 0; j < morseKey.length; j++) {
      if (temp[i] == morseKey[j]) {
        answer.push(morseValue[j]);
      }
    }
  }
  return answer.join("");
}

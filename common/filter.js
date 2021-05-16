const string = "Привет! Как дела?";
const vowels = ['у','е','ы','а','о','э','я','и','ю','ё'];
function getVowels (str) {
  str = str.toLowerCase();
  const array = str.split("");
  let arrayVowel = [];
  for (let i=0; i < array.length; i++) {
    let vowelIndex = vowels.indexOf(array[i]);
    if (vowelIndex > 0) {
      arrayVowel.push(vowels[vowelIndex]);
    } 
  }
  return arrayVowel.join("");
}

console.log(getVowels(string));
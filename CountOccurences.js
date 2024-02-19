function CountOccurences(str, character) {
  //   console.log("ffffffffffffff", str.split(""), character);
  const string = str.split("");
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == character) {
      count++;
    }
  }
  return count;
}
const result = CountOccurences("hello", "l");
console.log("result", result);

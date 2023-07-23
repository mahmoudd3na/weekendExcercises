function organizeStrings(str1, str2) {
  let chars = [];
  let letters = str1.concat(str2).split("");
  for (char of letters) if (!chars.includes(char)) chars.push(char);

  for (let i = 0; i < chars.length; i++)
    for (let j = i; j < chars.length; j++)
      if (chars[i] > chars[j]) {
        let temp = chars[j];
        chars[j] = chars[i];
        chars[i] = temp;
      }
  return chars.join("");
}
let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
console.log(organizeStrings(a, a));
x
function toWeirdCase(text) {
  let answer = "";
  answer += text.charAt(0).toUpperCase();
  let index = 1;
  for (let i = 1; i < text.length; i++) {
    if (text.charAt(i) !== " ") {
      if (index % 2 == 0) answer += text.charAt(i).toUpperCase();
      else answer += text.charAt(i).toLowerCase();
      index++;
    } else answer += " ";
  }
  return answer;
}
console.log(toWeirdCase("well its not like that"));

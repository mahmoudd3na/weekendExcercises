/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  let letters = [];
  letters[0] = null;
  letters[1] = null;
  letters[2] = ["a", "b", "c"];
  letters[3] = ["d", "e", "f"];
  letters[4] = ["g", "h", "i"];
  letters[5] = ["j", "k", "l"];
  letters[6] = ["m", "n", "o"];
  letters[7] = ["p", "q", "r", "s"];
  letters[8] = ["t", "u", "v"];
  letters[9] = ["w", "x", "y", "z"];

  let digit =digits+"".split(""); 
  let answer = [""];
  let final = [];


  for (let k = 0; k < digit.length; k++) {
    // 35
    for (let j = 0; j < answer.length; j++) {

  //     for (let i = 0; i < letters[digit[k]].length; i++) {
  //   // ["a", "b", "c"];
  //       final.push(answer[j] + letters[digit[k]][i]);
  //       console.log(final); 
  //       answer+= [...final];
  //       final = [""];
  //     }
  //   }
  // }
  // return answer;
}
  //   if(string.length==0)
  //   return answer;
  //   else if (string.length==1){
  //    for(let i=0;i<letters[string[0]].length;i++){
  //      answer.push(letters[string[0]][i]);
  //   }
  //   return answer;
  // }
  //   else if(string.length==2){
  //     for(let i=0;i<letters[string[0]].length;i++){
  //         for(let j=0;j<letters[string[1]].length;j++){
  //             answer.push(letters[string[0]][i]+letters[string[1]][j]);
  //       }
  //     }
  //     return answer;
  // }
  // else if(string.length==3){
  //     for(let i=0;i<letters[string[0]].length;i++){
  //         for(let j=0;j<letters[string[1]].length;j++)
  //             for(let u=0;u<letters[string[2]].length;u++)
  //             answer.push(letters[string[0]][i]+letters[string[1]][j]+letters[string[2]][u]);
  //     }
  //     return answer;
  // }
  // else if(string.length==4){
  //     for(let i=0;i<letters[string[0]].length;i++){
  //         for(let j=0;j<letters[string[1]].length;j++)
  //             for(let u=0;u<letters[string[2]].length;u++)
  //                 for(let o=0;o<letters[string[3]].length;o++)
  //             answer.push(letters[string[0]][i]+letters[string[1]][j]+letters[string[2]][u]+letters[string[3]][o]);

  //     }
  //     return answer;
  // }

console.log(letterCombinations(52));

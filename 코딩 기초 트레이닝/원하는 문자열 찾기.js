function solution(myString, pat) {
  var answer = 0;
  myString = myString.toLowerCase();
  pat = pat.toLowerCase();
  if (myString.includes(pat) == true) answer = 1;
  else if (myString.includes(pat) == false) answer = 0;
  return answer;
}

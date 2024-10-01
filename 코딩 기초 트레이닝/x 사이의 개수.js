function solution(myString) {
  var answer = [];
  while (1) {
    var index = 0;
    if (myString.includes("x") == true) {
      index = myString.indexOf("x");
      answer.push(index);
      myString = myString.slice(index + 1, myString.length);
    } else {
      index = myString.length;
      answer.push(index);
      break;
    }
  }

  return answer;
}

// indexOf는 x가 검색된 인덱스를 나타냄
// slice는 시작 문자열 ~ 끝 문자열

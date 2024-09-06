function solution(my_string) {
  var answer = new Array(52).fill(0); // 알파벳을 저장할 빈 배열
  for (i = 0; i < my_string.length; i++) {
    if (my_string[i].charCodeAt() > 64 && my_string[i].charCodeAt() < 91) {
      // 대문자 판별
      answer[my_string[i].charCodeAt() - 64 - 1]++;
    } else if (
      // 소문자 판별
      my_string[i].charCodeAt() > 96 &&
      my_string[i].charCodeAt() < 123
    ) {
      answer[my_string[i].charCodeAt() - 96 + 26 - 1]++;
    }
  }
  return answer;
}

// 배열 참고 사이트 : https://velog.io/@sy3783/JS%EB%B0%B0%EC%97%B4-%EC%B1%84%EC%9A%B0%EA%B8%B0
// 아스키코드 참고 사이트 : https://velog.io/@ovzip/%EC%95%84%EC%8A%A4%ED%82%A4%EC%BD%94%EB%93%9C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%95%84%EC%8A%A4%ED%82%A4%EC%BD%94%EB%93%9C-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0

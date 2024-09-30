function solution(myString, pat) {
  var i = 0;
  var count = 0;
  while (1) {
    var startPoint = myString.indexOf(pat);
    if (startPoint == -1) {
      // 남은 문자열에서 pat을 찾지 못했을 경우 탈출
      return count;
    }
    myString = myString.slice(startPoint + 1, myString.length); // 찾은 인덱스 다음부터 마지막까지 자름
    i += startPoint; // i는 현재 문자열을 다시 탐색하기 시작할 위치임
    count++; // 결과 값 count는 몇 개를 찾았는지 반환하기 위함
    if (myString.length == pat.length && myString == pat) {
      // 만약 남은 myString이 pat일 경우
      count++;
      return count;
    }
  }
  return count;
}

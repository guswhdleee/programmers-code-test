function solution(n) {
  var answer = Array.from(Array(n), () => new Array(n).fill(null)); // 빈 배열 할당
  var pase = 1; // 넣는 패턴의 순서 구분
  var fr = 0; // 2차원 배열의 행을 담당
  var se = 0; // 2차원 배열의 열을 담당
  var count = 1; // 넣을 숫자
  var dark = 0; // 흑막
  var end = n ** 2 + 1;
  while (count < end) {
    switch (pase) {
      case 1: // 1페이즈
        answer[fr][se] = count;
        se++;
        count++;
        if (se == n) {
          pase = 2;
          fr++;
          se--;
        }
        break;
      case 2: // 2페이즈
        answer[fr][se] = count;
        fr++;
        count++;
        if (fr == n) {
          pase = 3;
          fr--;
          se--;
        }
        break;
      case 3: // 3페이즈
        answer[fr][se] = count;
        se--;
        count++;
        if (se < dark) {
          pase = 4;
          se++;
          fr--;
        }
        break;
      case 4: // 4페이즈
        answer[fr][se] = count;
        fr--;
        count++;
        if (fr == dark) {
          dark++;
          pase = 1;
          fr++;
          se++;
          n--;
        }
    }
  }

  return answer;
}

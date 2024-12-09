function solution(price) {
  var answer = 0;
  var temp;
  if (price >= 100000 && price < 300000) {
    temp = (price / 100) * 5;
    answer = price - temp;
  } else if (price >= 300000 && price < 500000) {
    temp = (price / 100) * 10;
    answer = price - temp;
  } else if (price >= 500000) {
    temp = (price / 100) * 20;
    answer = price - temp;
  } else if (price < 100000) answer = price;
  return Math.floor(answer);
}

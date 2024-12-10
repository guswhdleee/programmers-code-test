function solution(hp) {
  var answer = 0;
  var capAnt = Math.floor(hp / 5);
  hp = hp - 5 * capAnt;
  var solAnt = Math.floor(hp / 3);
  hp = hp - 3 * solAnt;
  var ant = Math.floor(hp / 1);
  answer = capAnt + solAnt + ant;
  return answer;
}

function solution(rank, attendance) {
  var realRank = [];
  var canAtd = [];
  for (i = 0; i < rank.length; i++) {
    if (attendance[i] == false) continue;
    realRank.push(rank[i]);
    canAtd.push(i);
  }

  for (i = 0; i < realRank.length; i++) {
    for (j = i + 1; j < realRank.length; j++) {
      if (realRank[i] > realRank[j]) {
        var temp = realRank[i];
        realRank[i] = realRank[j];
        realRank[j] = temp;
        var temp2 = canAtd[i];
        canAtd[i] = canAtd[j];
        canAtd[j] = temp2;
      }
    }
  }

  let answer = 10000 * canAtd[0] + 100 * canAtd[1] + canAtd[2];

  return answer;
}

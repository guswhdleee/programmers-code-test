function solution(strArr) {
  for (i = 0; i < strArr.length; i++) {
    if (i % 2 == 0) strArr[i] = strArr[i].toLowerCase();
    else if (i % 2 == 1) strArr[i] = strArr[i].toUpperCase();
  }
  return strArr;
}

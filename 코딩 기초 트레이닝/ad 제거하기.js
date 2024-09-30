function solution(strArr) {
  for (i = 0; i < strArr.length; i++) {
    if (strArr[i].includes("ad") == true) {
      strArr.splice(i, 1);
      i--;
    }
  }

  return strArr;
}

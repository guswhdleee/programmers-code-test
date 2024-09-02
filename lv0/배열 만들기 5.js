function solution(intStrs, k, s, l) {
    var answer = [];
    for(i=0; i < intStrs.length; i++) {
        var cmp_num = intStrs[i];
        var del_num = cmp_num.slice(s, s+l);
        if (del_num > k) answer.push(parseInt(del_num));
    }
    return answer;
}
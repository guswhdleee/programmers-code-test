function solution(my_strings, parts) {
    var answer = [];
    var del_str = '';
    for(i=0; i < my_strings.length; i++) {
        del_str = my_strings[i].slice(parts[i][0], parts[i][1] + 1);
        answer.push(del_str);
    }
    answer = answer.join('');
    return answer;
}



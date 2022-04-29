function computeFail(pattern) {
    var fail = new Array(pattern.length);
    fail[0] = 0;

    var m = pattern.length;
    var j = 0;
    var i = 1;

    while (i < m) {
        if(pattern.charAt(j) === pattern.charAt(i)){
            fail[i] = j + 1;
            i++;
            j++;
        }else if(j > 0){
            j = fail[j-1];
        }else{
            fail[i] = 0;
            i++;
        }
    }
    return fail;
}

module.exports = function(pattern, text){
    var n = text.length;
    var m = pattern.length;

    var fail = computeFail(pattern);

    var i = 0;
    var j = 0;

    while(i < n){
        if(pattern.charAt(j) === text.charAt(i)){
            if(j == m - 1){
                return (i - m + 1);
            }
            i++;
            j++;
        }else if(j > 0){
            j = fail[j-1];
        }else{
            i++;
        }
    }
    return (-1)
}


// tes function
// var text = "akuselalusukakamu"
// var pattern = "use"
// var hasil = kmpMatch(text, pattern)
// if(hasil === -1){
//     console.log("pattern not found")
// }else{
//     console.log("dimulai pada indeks " + hasil)
// }



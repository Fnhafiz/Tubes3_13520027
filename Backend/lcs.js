module.exports = function lcs(pattern, text, m, n) {
    if (m == 0 || n == 0){
        return 0;
    }
    if (pattern[m-1] == text[n-1]){
        return 1 + lcs(pattern, text, m-1, n-1);
    }
    else{
        return max(lcs(pattern, text, m, n-1), lcs(pattern, text, m-1, n));
    }
}
 
function max(a , b) {
    return (a > b)? a : b;
}

var pattern = "AGGTT";
var text = "AGGCCCCTT";
var m = pattern.length;
var n = text.length;
// console.log("Length of LCS is" + " " + lcs( pattern, text, m, n));
 
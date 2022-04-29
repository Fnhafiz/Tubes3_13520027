module.exports = function(pattern, text){
	var n = text.length;
	var m = pattern.length;
	var i = m - 1;
	var last = buildLast(pattern);
	if (i > n-1) {
		return -1;
	}
	var j = m - 1;
    do{
		if (pattern.charAt(j) === text.charAt(i)) {
			if (j === 0) {
				return i;
			} else {
				i = i - 1;
				j = j - 1;
			}
		} else {
			var lo = last[text[i]];
			i = i + m - min(j, 1+lo);
			j = m - 1;
		}
    } while (i <= n-1);
	return -1;
}

function buildLast(pattern){
	var last = new Array(128);
	for (var i = 0; i < 128; i++) {
		last[i] = -1;
	}

	for (var i = 0; i < pattern.length; i++) {
		last[pattern[i]] = i;
	}
	return last;
}

function min(a, b){
	if (a < b) {
		return a;
	}
	return b;
}

// tes function

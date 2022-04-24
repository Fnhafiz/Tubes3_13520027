package main

func main() {
	var pattern string = "GCAK"
	var text string = "DFGHJKLCVBNMFGHJKGCAKFGHJKGCBK"
	if bmMatching(pattern, text) != -1 {
		println("match")
		println(bmMatching(pattern, text))
	} else {
		println("not match")
	}
}

func bmMatching(pattern string, text string) int {
	n := len(text)
	m := len(pattern)
	i := m - 1
	last := buildLast(pattern)
	if i > n-1 {
		return -1
	}
	j := m - 1
	for ok := true; ok; ok = (i <= n-1) {
		if pattern[j] == text[i] {
			if j == 0 {
				return i
			} else {
				i = i - 1
				j = j - 1
			}
		} else {
			var lo int = last[text[i]]
			i = i + m - min(j, 1+lo)
			j = m - 1
		}
	}
	return -1
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func buildLast(pattern string) [128]int {
	var last [128]int
	for i := 0; i < 128; i++ {
		last[i] = -1
	}

	for i := 0; i < len(pattern); i++ {
		last[pattern[i]] = i
	}
	return last
}

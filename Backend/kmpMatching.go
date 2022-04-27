package main

// import "fmt"

func computeFail(pattern string) []int {
	var fail = make([]int, len(pattern))
	fail[0] = 0
	var m int = len(pattern)
	var j int = 0
	var i int = 1

	for i < m {
		if pattern[j] == pattern[i] {
			fail[i] = j + 1
			i++
			j++
		} else if j > 0 {
			j = fail[j-1]
		} else {
			fail[i] = 0
			i++
		}
	}
	return fail
}

func kmpMatch(text string, pattern string) int {
	var n int = len(text)
	var m int = len(pattern)

	var fail []int = computeFail(pattern)

	var i int = 0
	var j int = 0

	for i < n {
		if pattern[j] == text[i] {
			if j == m-1 {
				return (i - m + 1)
			}
			i++
			j++
		} else if j > 0 {
			j = fail[j-1]
		} else {
			i++
		}
	}
	return (-1)
}

// func main() {
// 	var kata string
// 	var pattern string

// 	fmt.Println("Masukkan kata")
// 	fmt.Scan(&kata)
// 	fmt.Println("Masukkan pattern")
// 	fmt.Scan(&pattern)

// 	var posn int = kmpMatch(kata, pattern)
// 	if posn == -1 {
// 		fmt.Println("Pattern not found")
// 	} else {
// 		fmt.Printf("Pattern start at posn %d", posn)
// 	}
// }

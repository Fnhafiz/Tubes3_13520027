package main

import (
	"fmt"
	"regexp"
)

func main() {
	coba := "AAACCTGCTGAGGGCCTTTAAAAAAB"
	if checkRegexDNA(coba) {
		fmt.Println("match")
	} else {
		fmt.Println("not match")
	}
}

func checkRegexDNA(dna string) bool {
	var regex, _ = regexp.Compile("^[AGCT]*$")

	var isMatch = regex.MatchString(dna)
	return isMatch
}

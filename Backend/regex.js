function checkRegexDNA(dna) {
    const reg = /^[A|G|C|T]*$/;
	var isMatch = reg.test(dna);
	return isMatch;
}

// tes function
// var text = "AAACCTGCTGAGGGCCTTTAaaAAAAA"
// var hasil = checkRegexDNA(text)
// if(hasil){
//     console.log("sesuai")
// }else{
//     console.log("tidak sesuai")
// }
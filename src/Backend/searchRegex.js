const string = "demam tinggi";
const string2 = "2022-04-25";
const string3 = "2022-04-25 demam tinggi"
const regexDate = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
const regexDisease = /^[a-zA-Z\s]*$/
const regexDateDisease = /^(\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])\s[a-zA-Z\s]*)$/
const isExist = regexDateDisease.test(string3);


module.exports = function (text){
    const regexDate = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
    const regexDisease = /^[a-zA-Z\s]*$/
    const regexDateDisease = /^(\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])\s[a-zA-Z\s]*)$/
    if (regexDate.test(text)==true){
        return 1;
    } else if (regexDisease.test(text)==true){
        return 2;
    } else if (regexDateDisease.test(text)==true){
        return 3;
    } else {
        return 4;
    }
}

// console.log(regexSearch(string3))
// module.exports = function (text){
//     const regex = /^[AGCT]*$/;
//     const isExist = regex.test(text);
//     return isExist;
// }
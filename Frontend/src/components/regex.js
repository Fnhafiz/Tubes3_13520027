const string = "AGGGTCAACTA";
const regex = /^[AGCT]*$/;
const isExist = regex.test(string);
console.log(isExist)

function funcRegex(text){
    const regex = /^[AGCT]*$/;
    const isExist = regex.test(text);
    return isExist;
}
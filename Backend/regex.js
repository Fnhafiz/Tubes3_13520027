const string = "AGGGTCAACTA";
const regex = /^[AGCT]*$/;
const isExist = regex.test(string);
console.log(isExist)

module.exports = function (text){
    const regex = /^[AGCT]*$/;
    const isExist = regex.test(text);
    return isExist;
}

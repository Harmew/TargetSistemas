function reverseString(InitialString) {
    let newString = ""
    for (i = InitialString.length-1; i >=0; i--) newString += InitialString[i];
    return newString
}
console.log(reverseString('daniel'))

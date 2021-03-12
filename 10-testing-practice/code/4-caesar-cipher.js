function cipher(string) {
    const shift = 10;
    var newStr = [...string];

    return newStr
        .map((letter, index) => {
            let letterCode = string.charCodeAt(index);
            let isUpper = letterCode >= 65 && letterCode <= 90;
            let newLetterCode = letterCode;

            if (isUpper) letterCode += 32;

            if (letterCode >= 97 && letterCode <= 122) {
                newLetterCode =
                    letterCode + shift > 122
                        ? letterCode + shift - 26
                        : letterCode + shift;
            }

            if (isUpper) return String.fromCharCode(newLetterCode - 32);

            return String.fromCharCode(newLetterCode);
        })
        .join('');
}

export default cipher;
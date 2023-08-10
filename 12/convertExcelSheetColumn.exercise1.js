function convertExcelSheetColumnToNumber(column) {
    let result = 0;
    const letters = column.split('');
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        const letterNumber = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        result += letterNumber * (26 ** i)
    }
    return result;
}

console.log(convertExcelSheetColumnToNumber('A'));
console.log(convertExcelSheetColumnToNumber('AAA'));
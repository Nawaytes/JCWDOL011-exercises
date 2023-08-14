function convertExcelSheetColumnToNumber(column) {
    let result = 0;
    const letters = column.split('');
    const base = 'A'.charCodeAt(0);  
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        const letterNumber = letter.charCodeAt(0) - base + 1;
        result = result * 26 + letterNumber;
    }
    return result;
}


console.log(convertExcelSheetColumnToNumber('AL'));
console.log(convertExcelSheetColumnToNumber('ABC'));
console.log(convertExcelSheetColumnToNumber('ZY'));
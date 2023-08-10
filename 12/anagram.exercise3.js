function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const str1Sorted = str1.split('').sort().join('');
    const str2Sorted = str2.split('').sort().join('');

    return str1Sorted === str2Sorted;
}

console.log(isAnagram('abc', 'cba'));
console.log(isAnagram('abc', 'cbad'));
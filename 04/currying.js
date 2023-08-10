function multiplier(factor) {
    return function aa(number) {
        return factor * number
    }
}

console.log(multiplier(2))
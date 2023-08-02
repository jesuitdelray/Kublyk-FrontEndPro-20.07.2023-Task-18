function calculateAverage(arr) {
    let sum = 0
    let count = 0

    for (const element of arr) {
        if (typeof element === "number") {
            sum += element
            count++
        }
    }

    return sum / count
}

function doMath(x, symbol, y) {
    switch (symbol) {
        case "+":
            return x + y
        case "-":
            return x - y
        case "*":
            return x * y
        case "/":
            return x / y
        case "%":
            return x % y
        case "^":
            return Math.pow(x, y)
        default:
            return NaN // Поверне Not-a-Number у разі невідомого оператора
    }
}

function fillTwoDimensionalArray(rows, columns) {
    const array = []

    for (let i = 0; i < rows; i++) {
        const innerArray = []
        for (let j = 0; j < columns; j++) {
            const userInput = prompt(`Введіть значення для елементу [${i}][${j}]:`)
            innerArray.push(userInput)
        }
        array.push(innerArray)
    }

    return array
}

function removeCharsFromString(str, charsToRemove) {
    for (const char of charsToRemove) {
        str = str.replace(new RegExp(char, "g"), "")
    }
    return str
}

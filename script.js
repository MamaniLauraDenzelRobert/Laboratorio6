document.getElementById('fibonacciForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numTerms = parseInt(document.getElementById('numTerms').value);
    const resultDiv = document.getElementById('fibonacciResult');
    resultDiv.textContent = generateFibonacci(numTerms).join(', ');
});

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

document.getElementById('binaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numBinaryTerms = parseInt(document.getElementById('numBinaryTerms').value);
    const resultDiv = document.getElementById('binaryResult');
    resultDiv.textContent = generateBinarySeries(numBinaryTerms).join(', ');
});

function generateBinarySeries(n) {
    let series = [];
    for (let i = 0; i < n; i++) {
        series.push(i.toString(2));
    }
    return series;
}
document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numFactorials = parseInt(document.getElementById('numFactorials').value);
    const resultDiv = document.getElementById('factorialResult');
    const { factorials, sum } = generateFactorialsAndSum(numFactorials);
    resultDiv.textContent = `Factoriales: ${factorials.join(', ')} | Suma: ${sum}`;
});

function generateFactorialsAndSum(n) {
    let factorials = [];
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        const factorial = calculateFactorial(i);
        factorials.push(factorial);
        sum += factorial;
    }
    return { factorials, sum };
}

function calculateFactorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
document.getElementById('rotateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('numberInput').value;
    const steps = parseInt(document.getElementById('rotateSteps').value);
    const resultDiv = document.getElementById('rotateResult');
    const leftRotation = rotateLeft(number, steps);
    const rightRotation = rotateRight(number, steps);
    resultDiv.textContent = `Rotación Izquierda: ${leftRotation} | Rotación Derecha: ${rightRotation}`;
});

function rotateLeft(number, steps) {
    const len = number.length;
    const actualSteps = steps % len;
    return number.slice(actualSteps) + number.slice(0, actualSteps);
}

function rotateRight(number, steps) {
    const len = number.length;
    const actualSteps = steps % len;
    return number.slice(len - actualSteps) + number.slice(0, len - actualSteps);
}
document.getElementById('evenDigitRotateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('evenDigitNumber').value;
    const resultDiv = document.getElementById('evenDigitRotateResult');
    if (number.length < 6) {
        resultDiv.textContent = "El número debe tener al menos 6 dígitos.";
        return;
    }
    const rotatedNumber = rotateEvenDigitsRight(number);
    resultDiv.textContent = `Número Rotado: ${rotatedNumber}`;
});

function rotateEvenDigitsRight(number) {
    const digits = number.split('');
    const evenDigits = digits.filter(digit => digit % 2 === 0);
    if (evenDigits.length === 0) return number; // No even digits to rotate

    // Rotate even digits to the right
    const lastEvenDigit = evenDigits.pop();
    evenDigits.unshift(lastEvenDigit);

    // Reconstruct the number with rotated even digits
    let evenIndex = 0;
    return digits.map(digit => (digit % 2 === 0 ? evenDigits[evenIndex++] : digit)).join('');
}
document.getElementById('repeatedDigitsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('repeatedDigitsNumber').value;
    const resultDiv = document.getElementById('repeatedDigitsResult');
    const repeatedDigits = findRepeatedDigits(number);
    resultDiv.textContent = repeatedDigits.length > 0 ? `Dígitos Repetidos: ${repeatedDigits.join(', ')}` : 'No hay dígitos repetidos.';
});

function findRepeatedDigits(number) {
    const digitCount = {};
    const repeatedDigits = [];

    // Count occurrences of each digit
    for (const digit of number) {
        digitCount[digit] = (digitCount[digit] || 0) + 1;
    }

    // Find digits that appear more than once
    for (const [digit, count] of Object.entries(digitCount)) {
        if (count > 1) {
            repeatedDigits.push(digit);
        }
    }

    return repeatedDigits;
}
document.getElementById('palindromeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('palindromeNumber').value;
    const resultDiv = document.getElementById('palindromeResult');
    const isPalindrome = checkPalindrome(number);
    resultDiv.textContent = isPalindrome ? "ES CAPICUA" : "NO ES CAPICUA";
});

function checkPalindrome(number) {
    const strNumber = number.toString();
    const reversedStrNumber = strNumber.split('').reverse().join('');
    return strNumber === reversedStrNumber;
}
document.getElementById('primeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('primeNumber').value);
    const resultDiv = document.getElementById('primeResult');
    const isPrime = checkPrime(number);
    resultDiv.textContent = isPrime ? "ES PRIMO" : "NO ES PRIMO";
});

function checkPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}
document.getElementById('generatePrimesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const n = parseInt(document.getElementById('generatePrimesNumber').value);
    const resultDiv = document.getElementById('generatePrimesResult');
    const primes = generatePrimesUpTo(n);
    resultDiv.textContent = primes.length > 0 ? `Números Primos: ${primes.join(', ')}` : 'No hay números primos.';
});

function generatePrimesUpTo(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (checkPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function checkPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}
document.getElementById('fibonacciVectorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const n = parseInt(document.getElementById('fibonacciVectorNumber').value);
    const resultDiv = document.getElementById('fibonacciVectorResult');
    const fibonacciSeries = generateFibonacci(n);
    resultDiv.textContent = `Serie Fibonacci: ${fibonacciSeries.join(', ')}`;
});

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}
document.getElementById('exponentialSeriesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const base = parseFloat(document.getElementById('exponentialBase').value);
    const terms = parseInt(document.getElementById('exponentialTerms').value);
    const resultDiv = document.getElementById('exponentialSeriesResult');
    const exponentialSeries = generateExponentialSeries(base, terms);
    resultDiv.textContent = `Serie Exponencial: ${exponentialSeries.join(', ')}`;
});

function generateExponentialSeries(base, terms) {
    let series = [];
    for (let i = 0; i < terms; i++) {
        series.push(Math.pow(base, i));
    }
    return series;
}
document.getElementById('palindromeWordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const word = document.getElementById('palindromeWord').value;
    const resultDiv = document.getElementById('palindromeWordResult');
    const isPalindrome = checkPalindromeWord(word);
    resultDiv.textContent = isPalindrome ? "ES PALÍNDROMO" : "NO ES PALÍNDROMO";
});

function checkPalindromeWord(word) {
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}
document.getElementById('reverseStringForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputString = document.getElementById('stringInput').value;
    const resultDiv = document.getElementById('reverseStringResult');
    const reversedString = reverseString(inputString);
    resultDiv.textContent = `Cadena Invertida: ${reversedString}`;
});

function reverseString(str) {
    return str.split('').reverse().join('');
}
document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operation = document.getElementById('operation').value;
    const operand2 = parseFloat(document.getElementById('operand2').value);
    const resultDiv = document.getElementById('calculatorResult');
    
    let result;
    switch (operation) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand2 !== 0 ? operand1 / operand2 : 'Error: División por cero';
            break;
        case '!':
            result = factorial(operand1);
            break;
        case '^':
            result = Math.pow(operand1, operand2);
            break;
        default:
            result = 'Operación no válida';
    }
    
    resultDiv.textContent = `Resultado: ${result}`;
});

function factorial(n) {
    if (n < 0) return 'Error: Factorial de número negativo';
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
document.getElementById('romanNumeralForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('integerInput').value);
    const resultDiv = document.getElementById('romanNumeralResult');
    const romanNumeral = convertToRoman(number);
    resultDiv.textContent = `Número Romano: ${romanNumeral}`;
});

function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    
    let result = '';
    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    return result;
}
document.getElementById('pascalTriangleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const rows = parseInt(document.getElementById('pascalRows').value);
    const resultDiv = document.getElementById('pascalTriangleResult');
    const pascalTriangle = generatePascalTriangle(rows);
    resultDiv.innerHTML = formatPascalTriangle(pascalTriangle);
});

function generatePascalTriangle(rows) {
    const triangle = [];
    for (let i = 0; i < rows; i++) {
        triangle[i] = new Array(i + 1);
        triangle[i][0] = 1;
        triangle[i][i] = 1;
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
    }
    return triangle;
}

function formatPascalTriangle(triangle) {
    return triangle.map(row => row.join(' ')).join('<br>');
}
import './styles.css';

export function captitalize(word) {
    const capitalized = `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    return capitalized;
}

export function reverseString(word) {
    const wordArray = word.split("");
    const reversedArray = wordArray.reverse();
    const reversedWord = reversedArray.join("");
    return reversedWord;
}

export function calculator(a, b, opr) {
    let ans;
    switch (opr) {
        case '+':
            ans = a + b;
            break;
        case '-':
            ans = a - b;
            break;
        case '/':
            ans = a / b;
            break;
        case '*':
            ans = a * b;
            break;
        default:
            ans = "Invalid Operation";
    }
    return ans;
}

function encrypt(s, k) {
    let result = "";
    const alphabets = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < s.length; i++) {
        const codeAtI = (s.charCodeAt(i) - 97);
        if (codeAtI >= 0 && codeAtI <= 26) {
            result += alphabets[(codeAtI + k) % 26];
        } else {
            result += s.charAt(i);
        }
    }
    return result;
}

export function caesarCipher(word, k) {
    const result = encrypt(word.toLowerCase(), k);
    return result;
}

function findAverage(arr) {
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }
    return sum / arr.length;
}

export function analyzeArray(arr) {
    const arrayDetails = {
        average: findAverage(arr),
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
    return arrayDetails;
}
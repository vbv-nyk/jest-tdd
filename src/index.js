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

export function caesarCipher(word) {

}
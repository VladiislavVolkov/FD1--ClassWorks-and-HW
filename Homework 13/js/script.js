function reverseNumber(n) {
    let a = String(n)
    let result = '';
    for (let i = a.length-1; i >= 0; i--) {
        result += a[i];
        console.log(result, i)
    }
    return result;

        };
    
let c = reverseNumber(prompt('Введите число, которое хотите "перевернуть":'));
alert(`"Перевернутое" число - ` + c);




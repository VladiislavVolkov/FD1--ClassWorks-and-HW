function reverseNumber(num) {         // ПЕРЕВЕРНУТОЕ ЧИСЛО
    let a = String(num)
    let result = '';
    for (let i = a.length-1; i >= 0; i--) {
        result += a[i];
    }
    return result;
        };
    
let c = reverseNumber(prompt('Введите число, которое хотите "перевернуть":'));
alert(`"Перевернутое" число - ` + c);





function pow(a,b) {                   // ЧИСЛО А В СТЕПЕНИ Б
    let res = 1                    
    for (let i = 0; i < b; i++){
        res = res * a
    }
    return res;
};

let f = pow(prompt('Введите первое число А (которое возводится в степень)'),prompt('Введите второе число Б (которое будет степенью)'));
alert(f)



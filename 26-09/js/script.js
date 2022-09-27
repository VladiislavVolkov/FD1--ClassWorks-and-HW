// function ageChanger(a,b,c) {
//     a ?? (a = 'No argument')
//     age = a
//     console.log(age, b, c)
// }

// ageChanger(20,3,4)
// ageChanger(50)
// ageChanger()



// function ageChanger(a,b,c=10) {
//     a ?? (a = 'No argument')
//     age = a
//     console.log(age, b, c)
// }

// ageChanger(20,3,4)
// ageChanger(50)
// ageChanger()



// function text(a,b) {
//     a ?? (a = 'Denis')
//     b ?? (b = 'Hello')
//     console.log(a + ', '+ b)
// }

// text("Yan", "Hello")
// text()



// function sum(...args) {
//     console.log(args)
// }

// sum(1,3,5,7,9)
// sum(2,4,6)



// function ageChanger(age) {
//     return age*5
// }

// let a = ageChanger(10)
// console.log(a)



// function sum(a,b) {
//     return a+b
// }

// let a = sum(20,4)
// console.log(a)



// function checkAge(age) {
//     if (age) {
//         return alert ('18 лет!')
//     } else {
//         return false
//     }
// }

// let a = checkAge(confirm('Вам есть 18'))
// console.log(a)



// function num(a) {     //function declaration!!!!!!!!!!!!!
//     if (a == '18') {
//         return;
//     } else {
//         num(prompt('введите число 18'));
//     }
// }

// num(prompt('введите число 18'));


// function num(a,b) {                        
//     if (a < b) {
//         alert(a)
//     } else {
//         alert(b)
//     }
// }

// num(prompt('введите число a'),prompt('введите число b'))



// function pow(a,b) {    
//     let res = 1                    
//     for (let i = 0; i < b; i++){
//         res = res * a
//         console.log(res, i)
//     }
//     console.log(res)
// }

// pow(prompt('введите число a'),prompt('введите число b'))


// let num = function(a) {      //function expression!!!!!!!!!!
//     if (a == '18') {
//         return;
//     } else {
//         num(prompt('введите число 18'));
//     }
// }

// num(prompt('введите число 18'));



// function ask(question, yes, no){
//     if(confirm(question)){
//         yes()
//     }else{
//         no()
//     }
// }

// function agree() {
//     alert('согласен')
// }

// function disagree10() {
//     alert('не согласен')
// }

// ask('Согласны ли Вы', agree, disagree10)




// function FizzBuzz(num, func1, func2, func3){
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             func3()
//         }else if (i % 5 === 0){
//             func1()
//         }else if (i % 3 === 0){
//             func2()
//         }else {
//             console.log(i)
//         }
//     }
// }

// function showFizz() {
//     console.log('Fizz');
// }

// function showBuzz() {
//     console.log('Buzz');
// }

// function showFizzBuzz() {
//     console.log('FizzBuzz');
// }

// FizzBuzz(100, showFizz, showBuzz, showFizzBuzz)


// function reverseNumber(n) {
//     let a = String(n)
//     let result = '';
//     for (let i = a.length-1; i >= 0; i--) {
//         result += a[i];
//         console.log(result, i)
//     }
//     return result
//         };
    
// let c = reverseNumber(prompt('Введите число, которое хотите "перевернуть":'));
// alert(`"Перевернутое" число - ` + c);





// // let i = "25";
// // let ii = "50"
// // let iii = (+i + +ii)
// // console.log(i + ii);
// // console.log(typeof i);
// // console.log(iii);
// // console.log(typeof iii);




// // let result = "P" < "L";
// // console.log(result);




// // let a = "a";
// // let b = "a";
// // console.log(Boolean(a));



// // console.log(undefined || '' || null);




// // let distance = 2000;
// // let summa = 700;
// // let blizko = (distance<2100);
// // console.log(blizko);
// // console.log('two ' + ((summa>600) && ''));




// // let a = prompt("a");
// // let b = prompt("b");
// // let d = ((b>a) && console.log(`LETS ${b} > ${a}`));
// // console.log(`Вы видете этот текст, так как ${a} больше ${b}`);




// console.log('35' + - "22");



// console.log('35' * "22");




// //console.log('558' > 22++);





// let usersCounter = 0;
// let newUsers = usersCounter++;
// console.log(newUsers);



// console.log(!false && 11 || 18 && !"");




// let namee;
// console.log(typeof namee);
// console.log(namee ?? "No name")




// // 1 - неверно, останется 35 - 22, т.к. если хотя бы один операнд является строкой, то второй будет также преобразован в строку (сложения чисел, в т.ч. и со знаком '-' - в данном примере не происходит); 3 -неверно, т.к. инкремент работает только с переменной; 4 - неверно потому, что постфиксная форма выполняет операцию уже после вывода первой переменной в консоль, в результате чего получается 0; для желаемого результата (1) необходима префиксная форма; 5 - неверно: в левой половине сравнения получается 11, в правой - 1, дальше идет сравнение, в результате которого побеждает первый результат, т.к. при результате true оператор ИЛИ || останавливается и возвращает исходное значение этого операнда.




// let message = "Hello JS!";
// let a = prompt("Ввведите число А");
// let b = prompt("Ввведите число Б");
// if (a > b) {
//     console.log(`Так как тру - то ${message}`);
// }
// else {
//     console.log(`Увы ${a} меньше ${b}!`)
// }




// if (1 === "1") {
//     console.log('Истина!');
// } else {
//     console.log('Ложь!');
// }




// if (5 == "5") {
//     console.log('Истина!');
// } else {
//     console.log('Ложь!');
// }




// let message = (true > false) ? 'Истина' : ' Ложь!';
// console.log(message);





// let age = 1;
// do {
//     alert ('me ' + age + ' years');
//     age--;
// } while (age<30)
// alert('Yes, i am big!');
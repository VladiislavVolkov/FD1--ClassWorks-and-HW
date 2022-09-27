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


// let a = 4;
// console.log(a);
// let b = a++;
// console.log(b);
// console.log(a*b--);
// console.log(b);

// let a = '2';
// let b = '12';
// a = (Number(a));
// b = (Number(b));
// console.log(a > b) ;

// console.log(true && null && '2' || 5 );

// const numbers = [1, 3, 5, 7, 9]
// let i = 0
// while (i < numbers.length) {
//   const currentElement = numbers[i]
//   console.log(currentElement * currentElement)
//   i++
// }

// let a = '';
// for (b = 0; b < 7; b++){
// 	a += '***#***';
// console.log(a);
// }

// let result = '', line, row;
// 	for(row = 1; row <= 8; row++) {
// 		for(line = 1; line <= 8; line++) {
// 			if(row % 2 == 0) {
// 				if(line % 2 == 0) {
// 					result+= '#';
// 				} else {
// 					result+= ' ';
// 				}
// 			} else {
// 				if(line % 2 == 0) {
// 					result+= ' ';
// 				} else {
// 					result+= '#';
// 				}
// 			}
// 		}
// 		result='';
// 	}




// let aaa = "#";
// while (aaa.length <= 7){
//    console.log(aaa);
//    aaa += "1#2";
// }

// const arr = ['a'];
// const str = 'qwerty';
// const arr1 = str.split('');
// const arr2 = str.split('').reverse();
// const arr3 = arr1.concat(arr,arr2);
// console.log(arr3);

// const str = prompt ('name,age');
// const arr = str.split(',');
// console.log(`Hello, ${arr[0]}! You are ${arr[1]} years`);




// let func = function(){
//     return 10
// }

// let func = (a,func) => {
//     console.log(a)
//     func()
// }

// func(10,()=>{console.log(50)})




// function ask(question, yes, no) {              ///обычная запись
//     if (confirm(question)) yes();
//     else no ();
// }

// ask(
//     'Вы согласны?',
//     function () {
//         alert ('Вы согласились.');
//     },
//     function () {
//         alert ('Вы отменили выполнение.');
//     }
// )



// let ask = (question,yes, no) => {              //// стрелочная запись
//     if (confirm(question)) yes();
//     else no ();
// }

// ask(`Вы согласны?`,
//     ()=>alert ('Вы согласились.'),
//     ()=>alert ('Вы отменили выполнение.'),
// );



// let obj = {
//     name: 'Yan',
//     surname: 'Mor',
//     age: 24,
//     "my namee": "Yannn"
// };

// console.log(obj.age, obj.name)
// console.log(obj.surname, obj["my namee"])

// console.log(obj.year)  //// underfined
 
// obj.year = 2022
// console.log(obj.year)
// console.log(obj)

// delete obj.year
// console.log(obj)

// obj['year10'] = 20220
// console.log(obj)

// delete obj['year10']
// console.log(obj)




// let user = {};
// console.log(user);

// user.name = 'Vladislav';
// console.log(user);

// user.surname = 'Volkov';
// console.log(user);

// user.name = 'VladislavVVVVVV';
// console.log(user);

// delete user.name;
// console.log(user)

// console.log(user.yeeeeeeeer ?? 'Нет такого свойства');
// console.log('surname' in user)

// user.year = 29
// user.city = 'Gomel'

// for(key in user){
//     console.log(key)
//     console.log(user[key]);
// }




// let newUser = {
//     '1':1,
//     '2':2,
//     '5':5,
//     '3':3,
//     'sdfsdfdsf':'dfsfsdfds'
// }

// for(key in newUser){
//     console.log(key)
//     // console.log(newUser[key]);
// }


let prices = {
    milk:1000,
    bread:300,
    phone:50000,
}


// let sum = (prices.milk + prices.bread + prices.phone);
// console.log (sum)

// let sum = 0
// for(key in prices){
//    sum += prices[key]
// }
// console.log(sum)


let prices1 = {
    milk:44000,
    bread:300000,
    phone:5555500,
    name: 'sdfdsfs',
    der: 76,
    gre: "dsfdsf"
}


function sum(obj) {
let sum = 0

for(key in obj){
    if (typeof obj[key] === 'number' || +obj[key] !== 'Nan' ) {
        sum += obj[key] 
    }   
    
}
return sum
}

console.log(sum(prices));
console.log(sum(prices1));
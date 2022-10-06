// let a = {
//     name: "yan",
//     red: 70
// }
// let b = {
//     name: "yan2",
// }

// console.log(a === b)
// console.log(JSON.stringify(a)===JSON.stringify(b))  /// приводит объект к строке

// console.log(Object.keys(a)) // возвращает набор ключей объекта в виде массива
// console.log(Object.values(b)) // возвращает набор значений объекта в виде массива


// /////


// let obj1 = {
//     a: 500,
//     b: 1000,
//     c: 2000,
//     d: 'string'
// }

// for(let key in obj1){
//     if (typeof obj1[key] === 'number') {
//         obj1[key] *= 2
//     } else {
//         delete obj1[key]
//     }
// }
// console.log(obj1)


// ////


// let obj2 = {
//     a: 500,
//     b: 1000,
//     c: 2000,
//     d: 'string'
// }
// let obj3 = {...obj2}
// for(let key in obj3){
//     if (typeof obj3[key] === 'number') {
//         obj3[key] *= 3
//     } else {
//         delete obj3[key]
//     }
// }
// console.log(obj2, obj3)


// ////



// let aaa = {
//     a:10, 
//                        // свойство
//     obj:{                   // свойство
//         name: "YAN",
//     },

//     func: function () {       // метод
//         console.log('method')
//     },

//     newFunc2() {
//         console.log('newFunction2')
//     }
// }

// aaa.newFunc = function() {
//     console.log('newfunction')
// }

// console.log(aaa)

// aaa.newFunc2()

// console.log(aaa)

// delete aaa.newFunc2

// console.log(aaa)



// /////


// let attt = {

//     counter:0,

//     addCounter(){
//         this.counter++
//     },

//     showCounter(){
//         console.log(this.counter)
//     }
// }

// attt.addCounter()
// attt.addCounter()
// attt.addCounter()

// attt.showCounter()


// ///

// let calc = {

//     a:8,
//     b:2,
//     result:0,

//     addPlus(){
//         this.result = this.a + this.b
//     },

//     addMinus(){
//         this.result = this.a - this.b
//     },

//     addMult(){
//         this.result = this.a * this.b
//     },

//     addDiv(){
//         this.result = this.a / this.b
//     },

//     showResult() {
//         console.log(this.result)
//     }
// }

// calc.addPlus()
// calc.showResult()
// calc.addMinus()
// calc.showResult()
// calc.addMult()
// calc.showResult()
// calc.addDiv()
// calc.showResult()


// ////


// let q = ['10', 20, {name:"yan"}] 
  
// for (let i = 0; i < q.length; i++) {
//     console.log(q[i])
// }

// console.log(q.indexOf(20))


// let t = [10, 20, 30] 
// for (let i = 0; i < t.length; i++) {
//     console.log(t[i]*3)
// }

// t.push(40,50,60)  /// добавляет в конец массива элемент
// console.log(t)

// t.pop() /// удаляет из концa массива
// console.log(t)

// t.shift() /// удаляет первый элемент массива
// console.log(t)

// t.unshift(99, 55, 77) /// добавляет в начало массива
// console.log(t)

// t.splice(1,3)  /// удаляет С (0) номера - КОЛ-Во (2)
// console.log(t)


// let tt = t.slice(0,3)
// console.log(tt)

// /////


let s = [10, 20, 30, 40, 50]; 
let y = [100, 200]; 
function sumM(e) {
    let sum = 0;
    for (let i = 0; i < e.length; i++) {
        sum += e[i];
    }
    console.log(sum)
}
sumM(y)

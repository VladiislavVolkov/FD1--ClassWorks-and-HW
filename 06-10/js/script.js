// let arr = [10,20,30,40]
// let arr2= []
// arr.forEach((item,index,array)=>{
//     arr2.push(item *= 2)
//     console.log(item,index,array)   ///ничего не возвращает
// })
// console.log(arr2)


// let arr = [10,20,30,40]
// let result = arr.map((item,index,aray)=>item*2)  /// возвращает новый массив с результатом колбэка
// console.log(result)


// let arr = [10,20,30,40]
// let result = arr.reduce((accumulator,item,index,array)=>accumulator + item,initialValue) /// возвращает одно результирующее значение
// console.log(result)


// let arr = [10,20,30,40]
// let result = arr.reduceRight ((accumulator,item,index,array)=>accumulator + item,initialValue) /// как reduce только считает элементы
// console.log(result)


// let arr = [10,20,30,40]
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(30))
// console.log(arr.includes(20))


// let arr = [10,20,30,40]
// let result = arr.filter(item => item%20 === 0) // возвращает новый массив с результатом фильтра
// console.log(result)


// let arr2 = [4423,43,41,7,45,9,34,43,87] /// djpdhfoftn
// let result = arr2.sort((a,b) => a - b)
// console.log(result)

// let arr2 = [4423,43,41,7,45,9,34,43,87]
// let result = arr2.sort((a,b) => {
//     if(a>b) {
//         return -1
//     }
//     if (b>a) {
//         return 1
//     }
//     if (b===a){
//         return 0
//     }
// })
// console.log(result)


// let arr = [10,20,30,40]
// let arr1 = [10,20,30,40,50]

// let compare = true

// arr.forEach((item,index)=>{
//     if(arr.length !== arr1.length){
//         compare = false
//     } 
    
//     if(item !== arr1[index]) {
//         compare = false
//     }
   
// })

// console.log(compare)




let arr3 = [
    {
        name:'Yan',
        age:50
    },
    {
        name:'Andrey',
        age:40
    },
    {
        name:'Denis',
        age:45
    }
]

// console.log(arr3[2].name)

// let allAge = arr3.map((item)=>item.age)
// let averageAge = (allAge.reduce((sum,item)=>sum+item)/arr3.length)

// console.log(averageAge)

// console.log(arr3.reduce((a,i) => a + i.age,0)/arr3.length)



// let name1 = prompt('Ввведите имя')
// let tel = {}
// arr3.forEach ((item)=>{
//     if (name1 !== item.age) {
//         console.log('Пользователь не найден')
//     } else {
//         promt('Add tel')}
//     }
//  )

// console.log(tel)


let name = prompt('Enter name:')
let isUser = false

arr3.forEach((item)=>{
    if (item.name === name){
        item.tel = prompt('Enter tel:')
        isUser = true
    } else {
        alert('No user!')
    }
})

// !isUser && alert('No user!')

console.log(arr3)







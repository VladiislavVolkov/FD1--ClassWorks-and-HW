let array = [54,356,2,91,406,23,7,90,8,114];

function max (a){
    let max = a[0]
    for( let i=1; i < a.length; i++){
        if ( max < a[i]){
            max = a[i]
        }
    }
    console.log (`Самое максимальное число ${max}`)
}

function min (b){
    let min = b[0]
    for( let i=1; i < b.length; i++){
        if ( min > b[i]){
            min = b[i]
        }
    }
    console.log (`Самое минимальное число ${min}`)
}

max (array)
min (array)


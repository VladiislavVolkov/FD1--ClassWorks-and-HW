let obj1 = {
	namee: 'Dima',
	age: 20,
	hair: 'white',
	habitats: {
		isSmoking: false,
		isDrinking: true,
		isGay: true,
		isLearning: true,
	}
}

let obj2 = {
	namee: 'Dima',
	age: 20,
	hair: 'white',
	habitats: {
		isSmoking: false,
		isDrinking: true,
		isGay: true,
		isLearning: true,
	}
}


function compare (obj1, obj2) {
    
        for(let key in obj1){
            if(obj1.hasOwnProperty(key)){
                if(obj1[key] !== obj2[key]){
                    return false;
                }
            }
        }
        for(let key in obj2){
            if(obj2.hasOwnProperty(key)){
                if(obj1[key] !== obj2[key]){
                    return false;
                }
            }
        }
        return true;
    };


console.log(obj1 == obj2)
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
	age: 30,
	hair: 'white',
	habitats: {
		isSmoking: false,
		isDrinking: true,
		isGay: true,
		isLearning: true,
	}
}

function compare(obj1, obj2) {
	const a = Object.getOwnPropertyNames(obj1);
	const b = Object.getOwnPropertyNames(obj2);
  
	if (a.length !== b.length) {
	  return false;
	}
  
	for (let i = 0; i < a.length; i += 1) {
	  const c = a[i];
	  const d = typeof(obj1[c]) === 'object' && typeof(obj2[c]) === 'object';
  
	  if ((!d && (obj1[c] !== obj2[c]))
	  || (d && !compare(obj1[c], obj2[c]))) {
		return false;
	  }
	}
  
	return true;
	
  }

  console.log(compare(obj1, obj2));
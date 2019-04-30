//let const



const animals = [
	{ type: 'giraffe', height: 8.2, weight: 315, name: 'Geofrie', top3Foods: ['leaves','roots','children']},
	{ type: 'tiger', height: 2.1, weight: 120, name: 'Tony', top3Foods: ['meat','children','corn flakes']}
]

animalListing(animals, true);


function animalListing( animalArray, listFoods){
	if(listFoods===undefined){
		listFoods = true;
	}
	const outputArray = [];
	// for(let animalIndex = 0; animalIndex< animalArray.length; animalIndex++){
	// 	const thisAnimal = animalArray[animalIndex];
	// 	const name = thisAnimal.name;
	// 	const height = thisAnimal.height;
	// 	const weight = thisAnimal.weight;
	// 	const type = thisAnimal.type;
	// 	const foods = thisAnimal.top3Foods;
	// 	const food1 = foods[0];
	// 	const food2 = foods[1];
	// 	const food3 = foods[2];
	// 	let sentence = "Animal: "+name+" is a "+type+" and is "+height+" meters at "+(weight*2.2)+" lbs";
	// 	//console.log(sentence);
	// 	if(listFoods){
	// 		sentence += " and it likes to eat "+food1+", "+food2+", and "+food3;
	// 		console.log(sentence)
	// 	}
	// }
	for(let animalIndex = 0; animalIndex< animalArray.length; animalIndex++){
		const thisAnimal = animalArray[animalIndex];
		const {name, height, weight , type } = thisAnimal;
		//console.log(name, height, weight , type );
		const foods = thisAnimal.top3Foods;
		const [food1, food2, food3] = foods;
		//console.log(food1, food2, food3);
		let sentence = "Animal: "+name+" is a "+type+" and is "+height+" meters at "+(weight*2.2)+" lbs";
		//console.log(sentence);
		if(listFoods){
			sentence += " and it likes to eat "+food1+", "+food2+", and "+food3;
			console.log(sentence)
		}
	}
	console.log('outputArray :', outputArray);
	return outputArray;
}

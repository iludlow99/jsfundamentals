//Objects

let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'],
	getPies: function () {
		return this.pies //food object
	},
		
	pieName: function () { 
		let piesNames = []

		this.pies.forEach( function (x) {
		
		piesNames.push(x + " pie") 
		})

		return piesNames
	}
}

console.log(food.pieName())

// console.log(food.pies[0] + " pie")

// food.pies.forEach (function (foods) {
// 	console.log(foods + " pie")
// })

//console.log(food.getPies())

//Crate a methed inside of the object food that appends ' pie' to them 
// using the forEach() methed
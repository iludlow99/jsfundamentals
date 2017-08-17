

let students = ['Thomas', 'Madyson', 'Brandon', 'Leon', 23, true, ['Jackson', 'Perry']]

console.log(typeof(students))

console.log(students[2])

console.log("Hello " + students[6][1] + " the Platypus.")


let arrOfFood = ['Quesadilla', 'Pecan Pie', 'Potato', 'CheeseCake', 'Shimp Pasta']

arrOfFood.push('NY Style Pizza')
//	index of item | How many to cut | What do you want to replace it with  
arrOfFood.splice(1, 1, 'Blueberry Pie')
//(you don't have to substitute anything in, you can just take something out)

//for (let l of arrOfFood) {
//	console.log(l)
//}

arrOfFood.forEach(function(foodItem) {console.log(foodItem)})



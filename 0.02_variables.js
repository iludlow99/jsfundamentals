//Variables

var name = "Madyson"

var firstName = "Isaac"

var lastName = "Ludlow"

var fullName = firstName + " " + lastName

//console.log(fullName)

//Variable data types


//Variable scopes

//Silver

var myNumber = 0

console.log(myNumber)

myNumber = myNumber + 10

console.log(myNumber)

       myNumber = myNumber -1
// Better way to do this ^  "myNumber += -1"

console.log(myNumber)

myNumber = myNumber * 9

console.log(myNumber)

myNumber = myNumber / 7

console.log(myNumber)

//Gold
var currentAge = 18
var MaxAge = 110
var favFood = "Spinch Snickerdoodles"
var packsOfFoodPerDay = 28

var TotalNumberOfCookies = (packsOfFoodPerDay * diffDays)

var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date(2017,16,08);
var secondDate = new Date(2117,16,08);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

console.log(diffDays )
console.log(TotalNumberOfCookies)







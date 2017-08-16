/*

lcv = Loop control variable

for loop
--------------

while loop
--------------

for in loop
--------------

do while loop
--------------

*/


for (var i = 0; i < 10; i++) {
	console.log(i)
}

var i = 0
while (i < 100) {
i += 10
console.log(i)
}

var studentName = "smita"
var newStudentName = ''

for (var l in studentName) {
	if(l == 0){
		newStudentName += studentName[0].toUpperCase()
	} else {
		newStudentName += studentName[1]
		newStudentName += studentName[2]
		newStudentName += studentName[3]
		newStudentName += studentName[4]
	}
}

console.log(newStudentName)
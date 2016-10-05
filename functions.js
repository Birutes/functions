/** 1 funkcija **/

var findLongestWord = function(array) {
  var elements = array.length;
  var count = 0;
  for (i = 0; i < elements; i++) {
    if (array[i].length > count) 
      count = array[i].length;
  }
  return count;
}

console.log(findLongestWord(["Pamela", "Kristina", "Ana"]));

/** 2 funkcija **/

var numbers = [1, 2, 3, 4];

function sum() {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function multiply() {
    //Setting total to one, since multiplying by zero will yeild zero
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
        total = total * numbers[i];
    }
    return total;
}

console.log('The summed result of ' + numbers + ' is: ' + sum());
console.log('The multiplied result of ' + numbers + ' is: ' + multiply());

/** 3 funkcija **/

function evaluateExpression(operand1, operand2, operator) {
	
	operator = {
		'+': function(operand1, operand2) {return operand1 + operand2 }
	};
}

console.log(evaluateExpression(5, 7, '+'));

/** 4 funkcija **/

function duplicate(array) {
	return array + "," + array;
}

console.log(duplicate([1,2,3,4,5]));

/** Loop **/

for (var i=1; i <= 100; i++)
{
	if (i % 15 == 0)
        console.log("fizzbuzz")
    if (i % 3 == 0)
        console.log("fizz");
    else if (i % 5 == 0)
        console.log("buzz");
    else
        console.log(i);
}
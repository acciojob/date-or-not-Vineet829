var isDate = function (input) {
  let test = new Date(input)
	return !isNaN(test.getTime()) || input instanceof Date
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

one.onclick = function() {
	calc.input.value += '1'
};

two.onclick = function() {
	calc.input.value += '2'
};

three.onclick = function() {
	calc.input.value += '3'
};

plus.onclick = function() {
	calc.input.value += '+'
};

four.onclick = function() {
	calc.input.value += '4'
};

five.onclick = function() {
	calc.input.value += '5'
};

six.onclick = function() {
	calc.input.value += '6'
};

minus.onclick = function() {
	calc.input.value += '-'
};

seven.onclick = function() {
	calc.input.value += '7'
};

eight.onclick = function() {
	calc.input.value += '8'
};

nine.onclick = function() {
	calc.input.value += '9'
};

mul.onclick = function() {
	calc.input.value += '*'
};

zero.onclick = function() {
	calc.input.value += '0'
};

doit.onclick = function() {
	calc.input.value = Math.round(eval(calc.input.value))
};

div.onclick = function() {
	calc.input.value += '/'
};

// drop.onclick = function() {
// 	calc.input.value += '.'
// };
// Задание 1 
// В prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.

let inputValue = prompt("Введите значение");

inputValue++;
typeOf_inputValue = typeof(inputValue);
inputValue--;

if (typeOf_inputValue == "number" && isNaN(inputValue)==false) {

	let res = inputValue % 2 ? ("Ваше число нечетное") : ("Ваше число четное");
	console.log(res);
}

else {
	console.log("Упс, кажется, вы ошиблись");
}
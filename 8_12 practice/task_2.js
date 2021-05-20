// Задание 2 
//Дана переменная Х, которая может принимать любое значение. 
//Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».
//Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let varX;

switch (typeof(varX)) {
	case 'number': 
     if (isNaN(varX) == false) {
		console.log('X - число');
		}
		break;

	case 'string': 
		console.log('X - Строка');
		break;

	case 'boolean': 
		console.log('Логический тип');
		break;

	default:
		console.log('Тип х не определён');
}



let varX = prompt('Введите значение X');

if (varX =='false' || varX == 'true') {
	console.log('X - логический тип');
}
else {
	if(varX == 'null' || varX == 'undefined' || isNan(parseInt(varX)) == true) {
		console.log('Тип X не определён');
	}
	else {
		console.log()
		if(typeof(parseInt(varX)) == 'number') {
			console.log('X - число');
		}
		else {
			console.log('X - Строка');
		}
	}
}
// Задание 3 
//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

//1
let initialString = 'Hello'; 
let stringLength = initialString.length; 
let result = '';

for (i = (stringLength-1); i>=0; i--) { 
	result += initialString[i];
}

console.log(result);

//2 
let initialString = 'Hello'; 
let res = initialString.split('').reverse().join('');

console.log(res);

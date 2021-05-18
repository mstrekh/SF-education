// Задание 9 
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

let newMass = [1, 0, 2, 3, "nan", null, 5, 7, 9, true, 'hello'];
let odd = 0; 	// нечет
let even = 0; 	// чет
let zeroHere = false;
function countEvenAndOddNumbers() { 
	newMass.forEach(function callback(currentValue, index, array) {
		if (zeroHere == false && currentValue === 0) { 
			zeroHere = true;
		}

        else {
			if (typeof(currentValue) == 'number' && isNaN(currentValue) == false) {
				currentValue%2 == 0 ?  even++ : odd++;
			}
        }
	});

 console.log("Количество четных чисел: " + even);
 console.log("Количество нечетных чисел: " + odd);
 if (zeroHere) {console.log('В массиве есть "0"');}
}

countEvenAndOddNumbers();

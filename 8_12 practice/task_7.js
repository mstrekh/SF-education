// Задание 7
//Дан массив. 
//Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let newMass = [1, 0, 2, 3, "nan", null, 5, 7, 9, true, 'hello'];
let odd = 0; 	// нечет
let even = 0; 	// чет
let zeroHere = false;

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

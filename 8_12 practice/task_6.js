//Задание 6
//Дан массив. 
//Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
//Проверить, все ли элементы в массиве одинаковые.

let myMass = ["asd", "asd", "asd", "asd", "asd"];

let checkElement;

let elementIndex = 0;
do {
    for (i = (elementIndex + 1); i = (myMass.length - 1); i++) {
        if (myMass[elementIndex] == myMass[i]) {
            checkElement = true;
        } 
        else checkElement = false;
        break;
    }
    elementIndex++;
}
while (checkElement && elementIndex < myMass.length - 1);

checkElement ? console.log('Все элементы в массиве одинаковы') : console.log('Элементы в массиве не одинаковы');
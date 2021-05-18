// Задание 8
//Создайте произвольный массив Map. 
//Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
//Используйте шаблонные строки.

let map = new Map();

map.set("1", "first");  
map.set("2", "second");  
map.set("3", "third");  
map.set("4", "fourth");  

for (let num of map.keys()) {
	console.log(`Ключ - ${num}, значение - ${map.get(num)}`);
};
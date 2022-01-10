// comment
// УРОК 2
// Задание 1
let title = "myFirstProject";
let screens  = "Простые, Сложные, Интерактивные";
let screenPrice = 12345;
let rollback  = 99;
let fullPrice = 3000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " гривен");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");

screens = screens.toLowerCase();
console.log(screens.split(", "));

console.log("Процент отката посреднику за работу: " + fullPrice * (rollback/100));

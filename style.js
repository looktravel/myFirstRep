// comment
//  Урок 3

let title = prompt('Как называется ваш проект?');
let screens  = prompt('Какие типы экранов нужно разработать?');
let screenPrice = prompt('Сколько будет стоить данная работа?');
let rollback  = 99;
let fullPrice = 3000;
let adaptive =  confirm('Нужен ли адаптив на сайте?');

let service1 =  prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 =  prompt('Сколько это будет стоить?');
let service2 =  prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 =  prompt('Сколько это будет стоить?');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

fullPrice = (Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2));
console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " гривен");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");

screens = screens.toLowerCase();
console.log(screens.split(", "));

console.log("Процент отката посреднику за работу: " + fullPrice * (rollback/100));

let servicePercentPrice = (fullPrice - (fullPrice * (rollback/100)));
console.log("Итого: " + Math.ceil(servicePercentPrice));

if (fullPrice < 0 ) {
    console.log("Что то пошло не так");
}
if (fullPrice > 0 && fullPrice <= 15000 ) {
    console.log("Скидка не предусмотрена");
}
if (fullPrice > 15000 && fullPrice <= 30000 ) {
    console.log("Даем скидку в 5%");
}
if (fullPrice > 30000 ) {
    console.log("Даем скидку в 10%");
}
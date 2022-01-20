// comment
//  Урок 4

// let title = prompt('Как называется ваш проект?');
let screens  = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback  = 99;
let fullPrice = 0;
let service1 =  prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 =  +prompt('Сколько это будет стоить?');
let service2 =  prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 =  +prompt('Сколько это будет стоить?');
let str = ' любое предлОжение УхАха';

const getAllServicePrices = function(a, b) {
    return a + b;
}
function getFullPrice(a) {
    let b = getAllServicePrices(servicePrice1, servicePrice2)
    return a + b;
}
const getTitle = function(str) {
    let sym = [];
    let ready = "";
    for (let i = 0; i < str.length; i++) {
        sym.push(str[i]);      
    }
    for (let i = 0; i < sym.length; i++) {
        if (sym[i] != " ") {
            sym[i] = sym[i].toUpperCase();
            for (let j = i + 1; j < sym.length; j++){
                sym[j] = sym[j].toLowerCase();               
            }
            break;
       }     
    }
    for (let i = 0; i < sym.length; i++) {
        ready += sym[i];
    }
    return ready;
}
const getServicePercentPrices = function(a) {
     return getFullPrice(a)- (getFullPrice(a) * (rollback/100));
}
const getArray = function(str){
    let array = [];
    for (let i = 0; i < str.length; i++) {
        array.push(str[i]);      
    }
    return array;
}
const getRollbackMessage = function(num){
    fullPrice = getFullPrice(num);
    if (fullPrice < 0 ) {
        return "Что то пошло не так";
    }
    if (fullPrice > 0 && fullPrice <= 15000 ) {
        return "Скидка не предусмотрена";
    }
    if (fullPrice > 15000 && fullPrice <= 30000 ) {
        return "Даем скидку в 5%";
    }
    if (fullPrice > 30000 ) {
        return "Даем скидку в 10%";
    }
}

console.log(screens);
console.log( getAllServicePrices(servicePrice1, servicePrice2) );
console.log(getFullPrice(screenPrice));
console.log(str);
console.log(getTitle(str));
console.log(getServicePercentPrices(screenPrice));
console.log(getArray(screens));
console.log(getRollbackMessage(screenPrice));
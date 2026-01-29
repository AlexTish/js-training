'use strict';

let title = "JS Task Title";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1000;
let rollback = 10;
let fullPrice = 1000000;
let adaptive = true;
title = prompt("Как называется ваш проект?", " ");
screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
screenPrice = +prompt("Сколько будет стоить данная работа?","12000");
adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollbackAmount = fullPrice * (rollback/100);
let servicePercentPrice = fullPrice - Math.ceil(rollbackAmount);

const screenArray = screens.toLowerCase().split(", ");

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена"
    } else if (price < 0) {
        return "Что-то пошло не так"
    }
}

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(getRollbackMessage(fullPrice));
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log("Массив:", screenArray);
console.log(`Процент вознаграждения посреднику за работу: ${rollbackAmount} рублей`);
console.log(`Стоимость за вычетом вознаграждения: ${servicePercentPrice} рублей`);
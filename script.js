'use strict';
const title = prompt("Как называется ваш проект?", " ");
const screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?","12000");
const rollback = 10;
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const screenArray = screens.toLowerCase().split(", ");

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback / 100));

if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
}

const rollbackAmount = fullPrice * (rollback/100);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log("Типы экранов для разработки:", screenArray);
console.log("Процент отката посреднику за работу:", rollbackAmount);
console.log(`Стоимость за вычетом вознаграждения: ${servicePercentPrice} рублей`);
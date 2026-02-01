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

const getAllServicePrices = function() {
    return (servicePrice1 || 0) + (servicePrice2 || 0);
};

const getFullPrice = function() {
    const allServicePrices = getAllServicePrices()
    return screenPrice + allServicePrices
}

const getTitle = function() {
    if (!title || typeof title !== "string") {
        return "";
    }
    const formattedTitle = title.trim();
    if (formattedTitle.length === 0){
        return "";
    }
    return formattedTitle[0].toUpperCase() + formattedTitle.slice(1).toLowerCase();
}

const getServicePercentPrices = function() {
    return fullPrice - Math.ceil(rollbackAmount);
    }

const allServicePrices = getAllServicePrices(); 
const fullPrice = getFullPrice();
const formattedTitle = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

const rollbackAmount = fullPrice * (rollback/100);
const servicePercentPrice = getServicePercentPrices();

console.log("Типы экранов для разработки:", screenArray);
console.log(getRollbackMessage(fullPrice));
console.log(`Стоимость за вычетом вознаграждения: ${servicePercentPrice} рублей`);
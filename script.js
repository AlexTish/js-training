'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;
let screenArray;

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function(){
    title = prompt("Как называется ваш проект?", " ");
    screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?","12000");
    } while (!isNumber(screenPrice));   
    screenPrice = parseFloat(screenPrice);
    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getAllServicePrices = function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }
        let costInput;
        do{
            costInput = +prompt("Сколько это будет стоить?");
        } while (!isNumber(costInput));
        sum += costInput;
    }
    return sum;
};

const getFullPrice = function() {
    return screenPrice + allServicePrices
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

asking();
screenArray = screens.toLowerCase().split(", ");
allServicePrices = getAllServicePrices(); 
fullPrice = getFullPrice();
const rollbackAmount = fullPrice * (rollback/100);
servicePercentPrice = getServicePercentPrices();
const formattedTitle = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("Типы экранов для разработки:", screenArray);
console.log(getRollbackMessage(fullPrice));
console.log(`Стоимость за вычетом вознаграждения: ${servicePercentPrice} рублей`);

console.log("screenPrice:", screenPrice, "тип:", typeof screenPrice);
console.log("allServicePrices:", allServicePrices, "тип:", typeof allServicePrices);
console.log("fullPrice:", fullPrice, "тип:", typeof fullPrice);
console.log("rollbackAmount:", rollbackAmount, "тип:", typeof rollbackAmount);
console.log("servicePercentPrice:", servicePercentPrice, "тип:", typeof servicePercentPrice);
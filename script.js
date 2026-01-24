'use strict';
let title = "JS Task Title";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1000;
let rollback = 10;
let fullPrice = 1000000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
const screenArray = screens.toLowerCase().split(", ");
console.log("Массив:", screenArray);
const rollbackAmount = fullPrice * (rollback/100);
console.log("Процент отката посреднику за работу:", rollbackAmount);

// Спрашиваем у пользователя “Как называется ваш проект?” и результат сохраняем в переменную title
title = prompt("Как называется ваш проект?", " ");

// Спросить у пользователя “Какие типы экранов нужно разработать?” сохранить в переменную screens
screens = prompt("Какие типы экранов нужно разработать?","Простые, Сложные, Интерактивные");

// Спросить у пользователя “Сколько будет стоить данная работа?” и сохранить в переменную screenPrice
screenPrice = +prompt("Сколько будет стоить данная работа?","12000");

// Спросить у пользователя “Нужен ли адаптив на сайте?” и сохранить данные в переменной adaptive
adaptive = confirm("Нужен ли адаптив на сайте?");

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

// Вычислить итоговую стоимость работы учитывая стоимость верстки экранов и дополнительных услуг и результат занести в переменную fullPrice
fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Объявить переменную servicePercentPrice и занести в нее итоговую стоимость за вычетом отката посреднику (servicePercentPrice = fullPrice - Откат посреднику), округлив результат в большую сторону (методы объекта Math в помощь). Вывести servicePercentPrice в консоль.
let servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback / 100));

/* Написать конструкцию условий (расчеты приведены в рублях) (вывести в консоль)
- Если fullPrice больше 30000, то “Даем скидку в 10%” 
- Если fullPrice больше 15000 и меньше 30000, то сообщение “Даем скидку в 5%” 
- Если fullPrice меньше 15000 и больше 0 то в консоль вывести сообщение “Скидка не предусмотрена” 
- Если отрицательное значение то вывести “Что то пошло не так” 
- Учесть варианты 0, 15000 и 30000(к какому уровню не важно) */
if (fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
}

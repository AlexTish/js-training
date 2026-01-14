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

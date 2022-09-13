// let lastName = prompt("Введите вашу Фамилию");
// let firstName = prompt("Введите вашe Имя");
// let threeName = prompt("Введите вашe Отчество");
// let years = prompt("Введите возраст в годах");





// Проверка ФИО на:  ничего
//                   пустую строку
//                   на пробелы (прочитал про этот метод в инете)

// Проверка возраста согласно ТК РБ в соответсвии с полом

while (true) {
    lastName = prompt("Введите вашу Фамилию");
    if (lastName !== null && lastName !== "" && lastName.trim()) break;
}
while (true) {
    firstName = prompt("Введите вашe Имя");
    if (firstName !== null && firstName !== "" && firstName.trim()) break;
}
while (true) {
    threeName = prompt("Введите вашe Отчество");
    if (threeName !== null && threeName !== "" && threeName.trim()) break;
}
let years = prompt("Введите возраст в годах");
let yearsDay = years * 365;
let yearsAddFive = (+years + 5);
let sex = confirm("Ваш пол - мужской? \n\nнажимая \"ДА / OK\" - подтверждаете мужской пол\nнажимая \"НЕТ / CANCEL\" - подтверждаете женский пол");
    if (sex == true) {
        sex = "мужской";
    } else {
        sex = "женский";
    }
let pension; 
    if (sex == `мужской`) {
        if (years >= 63) {
            pension = ("да");
        } else {
            pension = ("нет");
        }
    } else {
        if (years >= 58) {
            pension = ("да");
        } else {
            pension = ("нет");
        } 
    }
console.log(lastName, firstName, threeName, years, yearsDay, yearsAddFive, sex, pension);
alert (`Ниже указаны введенные данные. \n \n
        Ваше ФИО: ${lastName} ${firstName} ${threeName}.\n
        Ваш возраст в годах: ${years}.\n
        Ваш возраст в днях: ${yearsDay}.\n
        Через 5 лет Вам будет: ${yearsAddFive}.\n
        Ваш пол: ${sex}\n
        Вы на пенсии: ${pension}\n\n\n
        Ура! Магия!:)`);

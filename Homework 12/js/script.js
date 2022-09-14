// Возможно здесь много лишнего, но я тренируюсь JS.


// Здесь есть проверка на: ничего;
//                         пустую строку;
//                         на пробелы (прочитал про этот метод в инете);
//                         возраст только число от 1 до 120;
//                         выход на пенсию в соответсвии с полом;
//                         М >= 63, Ж >= 58.


// Ввод ФИО и возраста без условий.
    // let lastName = prompt("Введите вашу Фамилию");
    // let firstName = prompt("Введите вашe Имя");
    // let threeName = prompt("Введите вашe Отчество");
    // let years = prompt("Введите возраст в годах");

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
while (true) {
    years = prompt("Введите возраст в годах");
    if (years >=1 && years <=120 && years !== "" && threeName.trim()) break;
}
let yearsDay = years * 365;
let yearsAddFive = (+years + 5);
let sex = confirm("Ваш пол - мужской? \n\nнажимая \"ДА / OK\" - подтверждаете мужской пол\nнажимая \"НЕТ / CANCEL\" - подтверждаете женский пол");
// оперделение пола с использованием условного оператора 
    if (sex == true) {
        sex = "мужской";
    } else {
        sex = "женский";
    }

// определение пола с использованием условной операции
    // sex == true ? sex = "мужской" : sex = "женский";

let pension; 
// опред. пенсии с использ. условного оператора ВАРИАНТ 1
    // if (sex == `мужской` ) {
    //     if (years >= 63) {
    //         pension = ("да");
    //     } else {
    //         pension = ("нет");
    //     }
    // } else {
    //     if (years >= 58) {
    //         pension = ("да");
    //     } else {
    //         pension = ("нет");
    //     } 
    // }

// опред. пенсии с использ. условного оператора ВАРИАНТ 2
        if ((sex == `мужской`)&&(years >= 63) || (sex == `женский`)&&(years >= 58)) {
            pension = ("да");
        } else {
            pension = ("нет");
        }

// опред. пенсии с использ. условной операции
    // (sex == `мужской`) && (years >= 63) || (sex == `женский`) && (years >= 58) ? pension = "да" : pension = "нет";

// вывод в консоль - это я для себя (тренировка:)
console.log(lastName, firstName, threeName, years, yearsDay, yearsAddFive, sex, pension);

alert (`Ниже указаны введенные данные. \n \n
        Ваше ФИО: ${lastName} ${firstName} ${threeName}.\n
        Ваш возраст в годах: ${years}.\n
        Ваш возраст в днях: ${yearsDay}.\n
        Через 5 лет Вам будет: ${yearsAddFive}.\n
        Ваш пол: ${sex}\n
        Вы на пенсии: ${pension}\n\n\n
        Ура! Магия!:)`);

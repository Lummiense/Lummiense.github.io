function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Определяем функции для проверки формы
function validateForm() {
    // Получение значений элементов формы
    let name = document.anketa.name.value;
    let surname = document.anketa.surname.value;
    let second_name = document.anketa.second_name.value;
    let birth_date= document.anketa.Birth_date.value;
    let email = document.anketa.email.value;
    let phone = document.anketa.phone.value;
    
    
    // Определяем переменные ошибок со значением по умолчанию
    let nameErr = surnameErr = second_nameErr = emailErr = phoneErr= true;
    
    // Проверяем имя
    if(name == "") {
        printError("nameErr", "Пожалуйста, введите ваше имя");
    } else {
        let regex = /^[а-яА-Я\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Пожалуйста, введите правильное имя");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    if(surname == "") {
        printError("surnameErr", "Пожалуйста, введите вашу фамилию");
    } else {
        let regex = /^[а-яА-Я\s]+$/;                
        if(regex.test(surname) === false) {
            printError("surnameErr", "Пожалуйста, введите правильную фамилию");
        } else {
            printError("surnameErr", "");
            surnameErr = false;
        }
    }

    if(second_name == "") {
        printError("second_nameErr", "Пожалуйста, введите ваше отчество");
    } else {
        let regex = /^[а-яА-Я\s]+$/;                
        if(regex.test(second_name) === false) {
            printError("second_nameErr", "Пожалуйста, введите правильное отчество");
        } else {
            printError("second_nameErr", "");
            second_nameErr = false;
        }
    }
    
    // Проверяем адрес электронной почты
    if(email == "") {
        printError("emailErr", "Пожалуйста, введите адрес вашей электронной почты");
    } else {
        // Регулярное выражение для базовой проверки электронной почты
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Пожалуйста, введите действительный адрес электронной почты");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Проверяем номер мобильного телефона
    if(phone == "") {
        printError("phoneErr", "Пожалуйста, введите номер вашего мобильного телефона");
    } else {
        let regex = /^\+7[1-9]\d{9}$/;
        if(regex.test(phone) === false) {
            printError("phoneErr", "Неверный формат телефона");
        } else{
            printError("phoneErr", "");
            phoneErr = false;
        }
    }
            
    // Запрещаем отправку формы в случае ошибок
    if((nameErr || surnameErr || second_nameErr || emailErr || phoneErr) == true) {
       return false;
    } else {                           
        return document.write("<body style='font-weight: bold;color: black;font-size: 20px;text-align: center;background: linear-gradient(blue, pink);position: relative;top: 10px;width: 600px;height: 700px;left: 610px;'><div style = 'background-color: aliceblue;height: 750px;'><h1>Вы ввели следующие данные</h1>"+
        "<h2>Имя: <h2>"+ name +
        "<h2>Фамилия: <h2>"+ surname+
        "<h2>Отчество: <h2>" + second_name+
        "<h2>Дата рождения: <h2>"+ birth_date+
        "<h2>Email: <h2>"+ email+
        "<h2>Номер телефона: <h2><div><body>"+ phone
        )
       
    }
};
// TODO: В данный момент не проходит сабмит, потому что не успевает отправить данные прежде, чем откроется новая форма. Возможно нужно поставить задержку отправки...
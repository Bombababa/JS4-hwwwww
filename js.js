function checkFields() {
    const field1 = document.getElementById('field1').value;
    const field2 = document.getElementById('field2').value;
    const message = document.getElementById('message');

    if (field1 && field2) {
        message.textContent = "Обидва поля заповнені";
    } else {
        message.textContent = "Не всі поля заповнені";
    }
}

checkFields()

function checkSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sumMessage = document.getElementById('sumMessage');

    if (num1 + num2 > 10) {
        sumMessage.textContent = "Сума більша за 10";
    } else {
        sumMessage.textContent = "Сума менша або дорівнює 10";
    }
}


function checkText() {
    const textInput = document.getElementById('textInput').value;
    const textMessage = document.getElementById('textMessage');

    if (textInput.includes("JavaScript")) {
        textMessage.textContent = "Текст містить слово JavaScript";
    } else {
        textMessage.textContent = "Текст не містить слово JavaScript";
    }
}


function checkRange() {
    const numberInput = parseFloat(document.getElementById('numberInput').value);
    const rangeMessage = document.getElementById('rangeMessage');

    if (numberInput > 10 && numberInput < 20) {
        rangeMessage.textContent = "Число входить в діапазон від 10 до 20";
    } else {
        rangeMessage.textContent = "Число не входить в діапазон від 10 до 20";
    }
}


function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formMessage = document.getElementById('formMessage');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length >= 3 && emailPattern.test(email) && password.length >= 6) {
        window.location.href = "https://www.example.com";
    } else {
        formMessage.textContent = "Дані введені некоректно";
    }
}

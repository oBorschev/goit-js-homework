"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  // код
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  // код
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  // код
  if (!isLoginValid(login)) return "Error login must have from 4 to 16 simbols";
  else if (!isLoginUnique(allLogins, login)) return "This login exist";
  else {
    allLogins.push(login);
    return "Login successfully added";
  }
};

// Вызовы функции для проверки
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

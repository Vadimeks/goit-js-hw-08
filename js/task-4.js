// Завдання 4

// Напиши скрипт управління формою логіна.
// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert
//  з попередженням про те, що 'All form fields must be filled in'.
//  Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.

// Якщо користувач заповнив усі поля і відправив форму,
//     збери значення полів в об'єкт з двома властивостями, де ключ —
//      це ім'я інпутів, а значення — відповідні значення цих інпутів,
//      очищені від пробілів по краях.Для доступу до елементів форми
//       використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і
// очисти значення полів форми методом reset.
// js/task-4.js

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(formData);
  event.currentTarget.reset();
}

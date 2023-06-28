//Завдання 6.1

let Button6_1_1 = document.querySelector("#Btn6-1-1");
let Button6_1_2 = document.querySelector("#Btn6-1-2");
let Button6_1_3 = document.querySelector("#Btn6-1-3");
let Body = document.querySelector(".body")

Button6_1_1.addEventListener('mouseenter', function () {
    Body.classList.add('color1');
});
Button6_1_1.addEventListener('mouseleave', function () {
    Body.classList.remove('color1');
});
Button6_1_2.addEventListener('mouseenter', function () {
    Body.classList.add('color2');
});
Button6_1_2.addEventListener('mouseleave', function () {
    Body.classList.remove('color2');
});
Button6_1_3.addEventListener('mouseenter', function () {
    Body.classList.add('color3');
});
Button6_1_3.addEventListener('mouseleave', function () {
    Body.classList.remove('color3');
});

//Завдання 6.2
function checkAnswer(button) {
    const correctAnswer = "Воду";
    const userAnswer = button.textContent;

    if (userAnswer === correctAnswer) {
      button.style.backgroundColor = "green";
      button.style.color = "white";
      document.getElementById("result").textContent = "Відповідь правильна!";
    } else {
      button.style.backgroundColor = "red";
      button.style.color = "white";
      document.getElementById("result").textContent = "Відповідь неправильна!";
    }

    // Включаємо перемикач
    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = true;
    }
  }
  //Завдання 6.3
  function checkAnswer2(button) {
    const correctAnswer = "Кіт";
    const userAnswer = button.textContent;

    if (userAnswer === correctAnswer) {
      button.style.backgroundColor = "green";
      button.style.color = "white";
      document.getElementById("result").textContent = "Відповідь правильна!";
    } else {
      button.style.backgroundColor = "red";
      button.style.color = "white";
      document.getElementById("result").textContent = "Відповідь неправильна!";
    }

    // Включаємо перемикач
    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = true;
    }
  }
  // Завдання 6.5

document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("вход_в_форму");
    const signinBtn = document.getElementById("signin__btn");
    const welcomeBlock = document.getElementById("добро_пожаловать");
    const userIdSpan = document.getElementById("user_id");

    const savedUserId = localStorage.getItem("user_id");
    if (savedUserId) {
        userIdSpan.textContent = savedUserId;
        welcomeBlock.classList.add("welcome_active");
    }

    signinForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const login = signinForm.querySelector('[name="логин"]').value;
        const password = signinForm.querySelector('[name="пароль"]').value;

        const data = {
            login: login,
            password: password,
        };

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function () {
            if (xhr.status === 200) {
                const result = JSON.parse(xhr.responseText);
                if (result.success) {
                    localStorage.setItem("user_id", result.user_id);
                    userIdSpan.textContent = result.user_id;
                    welcomeBlock.classList.add("welcome_active");
                } else {
                    alert("Неверный логин/пароль");
                }
            } else {
                console.error("Ошибка сервера: " + xhr.status);
                alert("Произошла ошибка при отправке запроса. Пожалуйста, попробуйте еще раз.");
            }
        };

        xhr.onerror = function () {
            console.error("Произошла ошибка при отправке запроса.");
            alert("Произошла ошибка при отправке запроса. Пожалуйста, попробуйте еще раз.");
        };

        xhr.send(JSON.stringify(data));
    });
});


// проверяем


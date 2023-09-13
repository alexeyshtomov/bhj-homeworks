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

        const login = signinForm.querySelector('[name="login"]').value;
        const password = signinForm.querySelector('[name="password"]').value;

        const data = {
            login: login,
            password: password,
        };

        fetch("https://students.netoservices.ru/nestjs-backend/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error("Ошибка сервера: " + response.status);
                }
            })
            .then(function (result) {
                if (result.success) {
                    localStorage.setItem("user_id", result.user_id);
                    userIdSpan.textContent = result.user_id;
                    welcomeBlock.classList.add("welcome_active");
                } else {
                    alert("Неверный логин/пароль");
                }
            })
            .catch(function (error) {
                console.error("Произошла ошибка при отправке запроса:", error);
                alert("Произошла ошибка при отправке запроса. Пожалуйста, попробуйте еще раз.");
            });
    });
})
// проверяем


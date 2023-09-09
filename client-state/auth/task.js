document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signin__form");
    const signinBtn = document.getElementById("signin__btn");
    const welcomeBlock = document.getElementById("welcome");
    const userIdSpan = document.getElementById("user_id");

    
    const savedUserId = localStorage.getItem("user_id");
    if (savedUserId) {
        userIdSpan.textContent = savedUserId;
        welcomeBlock.style.display = "block";
    }

    
    signinBtn.addEventListener("click", function (event) {
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
                return response.json();
            })
            .then(function (result) {
                if (result.success) {
                    
                    localStorage.setItem("user_id", result.user_id);
                    userIdSpan.textContent = result.user_id;
                    welcomeBlock.style.display = "block";
                } else {
                   
                    alert("Неверный логин/пароль");
                }
            })
            .catch(function (error) {
                console.error("Произошла ошибка при отправке запроса:", error);
            });
    });
});
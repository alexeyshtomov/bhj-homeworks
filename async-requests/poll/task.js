document.addEventListener("DOMContentLoaded", function () {
    
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");

    // Отправляем GET-запрос для получения опроса
    fetch("https://students.netoservices.ru/nestjs-backend/poll")
        .then(response => response.json())
        .then(data => {
            
            pollTitle.textContent = data.данные.title;

           
            data.данные.answers.forEach(answer => {
                const answerButton = document.createElement("button");
                answerButton.className = "poll__answer";
                answerButton.textContent = answer;
                answerButton.addEventListener("click", () => {
                    // Выводим диалоговое 
                    alert("Спасибо, ваш голос засчитан!");
                });
                pollAnswers.appendChild(answerButton);
            });
        })
        .catch(error => {
            console.error("Произошла ошибка при получении опроса:", error);
        });
});
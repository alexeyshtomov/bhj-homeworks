// Функция для выполнения GET-запроса
function sendGETRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response.data); 
      }
    };
  
    xhr.send();
  }
  
  
  function displayPoll(pollData) {
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");
  
    pollTitle.textContent = pollData.title;
  
    pollData.answers.forEach((answer) => {
      const answerButton = document.createElement("button");
      answerButton.className = "poll__answer";
      answerButton.textContent = answer;
  
      answerButton.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
  
      pollAnswers.appendChild(answerButton);
    });
  }
  
  
  sendGETRequest("https://students.netoservices.ru/nestjs-backend/poll", displayPoll);
  
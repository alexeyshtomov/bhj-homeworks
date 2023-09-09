// Получаем ссылку на изображение анимации загрузки
const loader = document.getElementById('загрузчик');

// Получаем ссылку на элемент, в который будем вставлять данные о курсе валют
const itemsContainer = document.getElementById('items');

// Отправляем GET-запрос на указанный URL
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then((response) => response.json())
  .then((data) => {
    // Получаем данные о курсе валют из JSON-ответа
    const currencies = data.ответ.Значение;

    // Создаем элементы для каждой валюты и добавляем их в контейнер
    for (const currencyCode in currencies) {
      if (currencies.hasOwnProperty(currencyCode)) {
        const currency = currencies[currencyCode];
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
          <div class="item__code">${currency.CharCode}</div>
          <div class="item__value">${currency.Value}</div>
          <div class="item__currency">руб.</div>
        `;
        itemsContainer.appendChild(item);
      }
    }

    // Скрываем анимацию
    loader.classList.remove('loader_active');
  })
  .catch((error) => {
    console.error('Произошла ошибка при загрузке данных:', error);

    
    loader.classList.remove('loader_active');
  });

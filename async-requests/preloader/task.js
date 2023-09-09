// Получаем ссылку на изображение анимации загрузки
const loader = document.getElementById('загрузчик');


const itemsContainer = document.getElementById('items');

// Отправляем GET-запрос на указанный URL
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then((response) => response.json())
  .then((data) => {
    
    const currencies = data.ответ.Значение;

    // Скрываем анимацию загрузки
    loader.classList.remove('loader_active');

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
  })
  .catch((error) => {
    console.error('Произошла ошибка при загрузке данных:', error);
  });

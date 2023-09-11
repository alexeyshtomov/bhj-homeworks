const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');


fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then((response) => response.json())
  .then((data) => {
    
    const currencies = data.ответ.Значение;

    
    itemsContainer.innerHTML = '';

    
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

    
    loader.classList.remove('loader_active');
  })
  .catch((error) => {
    console.error('Произошла ошибка при загрузке данных:', error);
  });

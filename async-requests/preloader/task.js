const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
  .then((response) => response.json())
  .then((data) => {
    itemsContainer.innerHTML = '';

    for (const currencyCode in data.response.Values) {
      if (data.response.Values.hasOwnProperty(currencyCode)) {
        const currency = data.response.Values[currencyCode];
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
          <div class="item__code">${currency.CharCode}</div>
          <div class="item__value">${currency.Value}</div>
          <div class="item__currency">rub</div>
        `;
        itemsContainer.appendChild(item);
      }
    }

    loader.classList.remove('loader_active');
  })
  .catch((error) => {
    console.error('An error occurred while loading data:', error);
  });


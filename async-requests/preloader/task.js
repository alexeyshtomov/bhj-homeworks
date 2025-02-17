const itemsContainer = document.getElementById('items');
const loader = document.getElementById('loader');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        itemsContainer.innerHTML = '';
        const data = JSON.parse(xhr.responseText);

for (const currencyCode in data.response.Valute) {
    if (data.response.Valute.hasOwnProperty(currencyCode)) {
        const currency = data.response.Valute[currencyCode];
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
    } else {
        console.error('An error occurred while loading data:', xhr.statusText);
    }
};

xhr.onerror = function () {
    console.error('An error occurred while making the request.');
};

xhr.send();

const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

// работаем с данными, получаем список и заполняем им массив
fetch(url)
    .then(res => res.json())
    .then(data => cities.push(...data));

// фильтруем массив по введенному тексту (получаем введенный текст и массив с данными, результатом передаем отфильтрованный массив)
function findMatches(text, cities) {
    const regex = new RegExp(text, "gi"); // ищем по всему текту, игнорируя регистр
    return cities.filter(place => place.city.match(regex) || place.state.match(regex));
}

// форматируем число населения - добавляем запятую на каждые три цифры с конца
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// отображаем результаты поиска (передаем в функцию введенный текст и массив с данными, получаем отфильтрованный массив)
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    // стилизуем введенный текст - заменяем найденный текст на текст с форматированием (желтая подсветка)
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regex, `<span class="hl"> ${this.value} </span>`);
        const stateName = place.state.replace(regex, `<span class="hl"> ${this.value} </span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join(''); // соединяем массив в строку для корректного отображения html (единым кодом)
    suggestions.innerHTML = html; // отображаем результат
}




const input = document.querySelector('input');
const suggestions = document.querySelector('.suggestions');

// устанавливаем событие - подслушка на изменение input, ввод текста
input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);


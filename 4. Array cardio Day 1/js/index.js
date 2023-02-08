const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];


// Array.prototype.filter()
// 1. Filter the first inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599); // if true keep it!
console.table(fifteen); // отображение в виде таблицы

// Array.prototype.map() returns Array of the same length
// 2. Give us an array of the inventory first and last names

const fullNames = inventors.map (item => `${item.first} ${item.last}`);
console.table(fullNames)

// Array.prototype.sort() you get two items, you ask to sort these two items, person a older or person b? And then you put an older person on top
// 3. Sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort((firstPerson, secondPerson ) => firstPerson.year - secondPerson.year );
console.table(ordered);
// дословно выглядит так
// первый вариант
// const ordered = inventors.sort(function(a, b) {
//     if (a.year > b.year) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// });
// или второй вариант
// const ordered = inventors.sort((firstPerson, secondPerson ) => firstPerson.year > secondPerson.year ? 1 : -1);


// Array.prototype.reduce() 
// 4. How many years did all the inventors live ?

const totalYears = inventors.reduce((total, inventor) => total += inventor.passed - inventor.year, 0);
// или полное представление
// const totalYears = inventors.reduce((total, inventor) => {
//     return total + (inventor.passed - inventor.year)
// }, 0); // Задаем изначальное значение total = 0, иначе оно будет undefined, из-за этого сработает конкатенация, а не мат.сложение
console.log(totalYears); // 861


// 5. Sort the inventors by years lived
const oldest = inventors.sort((firstPerson, secondPerson) => (secondPerson.passed - secondPerson.year) - (firstPerson.passed - firstPerson.year));
// или полное представление
// const oldest = inventors.sort((a, b) => {
//     const firstPerson = a.passed - a.year;
//     const secondPerson = b.passed - b.year;
//     return firstPerson > secondPerson ? -1 : 1;
// });
console.table(oldest);


// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// перейти по ссылке ниже, зайти в консоль и скопировать в нее весь нижеследующий код, результатом будет массив из улиц
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];

// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));
// console.log(de); // (12)


// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => lastOne.split(', ')[0] > nextOne.split(', ')[0] ? -1 : 1);
// или полное представление
// const alpha = people.sort(function(lastOne, nextOne) {
//     const [aLast, aFirst] = lastOne.split(', ');
//     const [bLast, bFirst] = nextOne.split(', ');
//     return aLast > bLast ? -1 : 1;
// });
console.table(alpha);


// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) { // если не существует объект с ключом item, мы его инициализируем
        obj[item] = 0
    };
    obj[item]++ // на каждое совпадение добавляем +1
    return(obj);
}, {}); // стартуем с пустого объекта и заполняем его ключами

console.table(transportation); // {car: 5, truck: 3, bike: 2, walk: 2, van: 2}





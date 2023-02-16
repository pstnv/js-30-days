const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// 1. Array.prototype.some() проверяет, есть ли хотя бы один элемент, который удовлетворяет условию
// Задача 1. Есть кто-нибудь в массиве people старше 19?
const isAdult = people.some(person => new Date().getFullYear() - person.year >= 19);
console.log(isAdult); // true

// длинный вариант
// const isAdult = people.some(function(person) {  
//   if (currentYear - person.year >= 19) return true; // или return currentYear - person.year >= 19;
// });
// console.log(isAdult); // true


// 2. Array.prototype.every() проверяет, есть удовлетворяют ли все элементы условию
// Задача 2. Все ли старше 19 в массиве people?
const allAdults = people.every(person => new Date().getFullYear() - person.year >= 19);
console.log(allAdults); // false

// 3. Array.prototype.find() похож на filter(), но возвращает только одно значение - первое, что удовлетворяет условию
// Задача 3. Найти комментарий с ID 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment); // {text: 'Super good', id: 823423}

// длинный вариант
// const comment = comments.find(function(comment) {
//   if (comment.id === 823423) return true;
// });
// console.log(comment); // {text: 'Super good', id: 823423}


// 4. Array.prototype.findIndex() покажет, где в массиве находится тот самый элемент, который удовлетворяет условию (например, чтобы его удалить)
// Задача 4. Найти комментарий с ID 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index); // 1

// длинный вариант
// const index = comments.findIndex(function(comment) {
//   if (comment.id === 823423) return true;
// });
// console.log(index); // 1

// Пример удаления элемента массива (комментария)
// 1-й способ
// comments.splice(index, 1); // удаляем элемент, начиная с индекса index в количестве 1
// console.table(comments);

// 2-й способ
// создаем массив из двух массивов с использованием spread (...)
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
]
console.table(newComments);

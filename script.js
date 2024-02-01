const word = document.querySelector('.word'); //находим элемент где будем менять на рандомное слово
const body = document.querySelector('body');

const words = ['hello', 'robot', 'enjoy', 'bingo', 'found']; //создаем массив для выбора случайного слова

let i = 0;

body.addEventListener('keyup', (event) => { //вешаем обработчик на всю страницу 
    const ourWord = word.querySelectorAll('span'); //возращяем всю колекцию элемента word
    let characterText = event.key; //возращяем определенный клик по конпке на клаве

    if (ourWord[i].innerText === characterText) { // если буква [i] слова на стр = букле клика 
        ourWord[i].classList.add('c'); //красим в зеленый цвет 
        ourWord[i].classList.remove('w'); //и удалаем красный цвет если был ранее применен
        i++ // и увеличивем счетчик на 1

    } else { //если б[i] != б.к 
        ourWord[i].classList.add('w'); //красим букву к красный и пока не попадем на нужную букву не двигаемся по слову 
    }

    if (ourWord[i] === ourWord[length - 1]) { //если доходим до последней буквы
        i = 0; //возращаемся на начало счетчика (если это не сделать то будет расматривать слово с i на котором закончилось предыдущее слово)
        generate(); //и обновляем слово 
    }
});

function generate() { //функция для генерации слова
    const randomIndex = Math.floor((Math.random() * words.length)); // генерируем случайный индекс от 0 до длины массива
    let newWord = words[randomIndex]; //новое слово из массива под выбранным индексом 
    word.innerHTML = '';
    newWord.split('').forEach(character => { //разбиваем наше слово на массив и перебераем каждый элемент массива
        const characterSpan = document.createElement('span'); //создаем новый элемент span
        characterSpan.innerText = character; //в каждый span вставляем элементы (буквы)
        word.appendChild(characterSpan); // добавили на страницу в div
    });
}

generate(); //вызываем функцию
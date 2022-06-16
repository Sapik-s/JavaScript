"use strict";

//Global variables
let numberOfFilm;

function start() {
    numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilm == null || numberOfFilm == '' || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

//Object
const personaMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//Запись данных в объект с вызовом следующей функции после завершения
function rememberMyFilms(callback) {
    for (let i = 0; i < 1; i++) {

        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length > 3 && a.length < 50) {
            personaMovieDB.movies[a] = b;
        } else {
            console.log('error');
            alert('Введено неккоректное значение, попробуйте заного!');
            i--;
        }
    }
    callback();
}

rememberMyFilms(rememberMyPlace);

//Следующая функция с заполнением объекта
function rememberMyPlace() {
    for (let i = 0; i < 1; i++) {

        const c = prompt('Какой кинотеатр выбрали?', ''),
              d = prompt('В каком зале сидели?', '');

        if(c != null && d != null && c != '' && d != '' && c.length > 1 && c.length < 50) {
            personaMovieDB.actors[c] = d;
        } else {
            console.log('error');
            alert('Введено неккоректное значение, попробуйте заного!');
            i--;
        }
    }
}

//Выбор кол-ва жанров/запись жанров в массив
function writeYourGenres() {
    let numberOfGenres = prompt('Введите количество любимых жанров', '');
    for (let i = 1; i <= numberOfGenres; i++) {
        personaMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером, ${i}`);
    }
}

writeYourGenres();

//Проверка является ли объект приватным
function showMyDB() {
    if (personaMovieDB.privat == false) {
        console.log(personaMovieDB.movies);
    }
}

showMyDB();

alert('Спасибо за пройденный опрос!');
console.log(personaMovieDB);
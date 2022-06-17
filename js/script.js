"use strict";

//Object
const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personaMovieDB.count == null || personaMovieDB.count == '' || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    //Запись данных в объект с вызовом следующей функции после завершения
    rememberMyFilms: function (callback) {
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
    },
    //Следующая функция с заполнением объекта
    rememberMyPlace: function () {
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
    },
    //Выбор кол-ва жанров/запись жанров в массив
    writeYourGenres: function () {
        let numberOfGenres = prompt('Введите количество любимых жанров', '');

        for (let i = 1; i <= numberOfGenres; i++) {

            if(numberOfGenres == null && numberOfGenres == '') {
                alert('Такое дейтсвие невозможно, попробуйте снова');
                i--;
                
            } else {
                
            }
        }
        personaMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр под номером ${i + 1} - это ${item}`);
        });
    },
    /////---------------------------------------
    ////
    ////
    ///   Проверить и переделать, устанавливать другую приватность через [] = true
    ///
    ///--------------------------------------
    //Проверка является ли объект приватным
    showMyDB: function () {
        if (personaMovieDB.privat == false) {
            console.log(personaMovieDB.movies);
            return personaMovieDB.privat;
        }
    },
    //Инверсия приватности
    toggleVisibleMyDB: () =>{
        if(personaMovieDB.showMyDB == false){
            personaMovieDB.showMyDB.privat = true;
        } else {
            personaMovieDB.showMyDB.privat = false;
        }
    }
};

personaMovieDB.start();
personaMovieDB.rememberMyFilms(personaMovieDB.rememberMyPlace);
personaMovieDB.writeYourGenres();
personaMovieDB.showMyDB();

alert('Спасибо за пройденный опрос!');
console.log(personaMovieDB);

let count = Object.keys(personaMovieDB).length;
console.log(count);


const arr = [3, 2, 81, 'Что-то', 'Удалить'];

const objectCopy = {
    Name: 'Alexsadr',
    Age: '21',
    child: {
        Name: '',
        Age: ''
    }
};

const copyArr = [...arr, 'Добавил при копировании', 222];

const copyObj = {...objectCopy};

copyObj.child.Name = 'Dima';
copyObj.child.Age = 50;

console.log(objectCopy);

delete copyArr[4];

console.log(copyArr);

console.log(copyObj);
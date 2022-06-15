"use strict";

const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');
const youLike = confirm('Желаете пройти опрос?');
if (youLike == true) {
    const personaMovieDB = {
        count: numberOfFilm,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
    
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', ''),
        c = prompt('Какой кинотеатр выбрали?', ''),
        d = prompt('В каком зале сидели', '');
    
    personaMovieDB.movies[a] = b;
    personaMovieDB.actors[c] = d;

    alert('Спасибо за пройденный опрос!');

    console.log(personaMovieDB);
} else {
    alert('Вы уверены?');
}
'use strict';

const isNamber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n); 
};

let numberRandom = Math.floor(Math.random() * 100) + 1;
console.log(numberRandom);

function guessNumber (numbRand) {

    let numberUser = prompt('Угадай число от 1 до 100!');
    
    if (numberUser === null){
        alert(' "Игра окончена" ');
        return;
    }

    if (!isNamber(numberUser)) {
        alert('Введите ЧИСЛО!');
        guessNumber (numbRand);
    } else if (numberUser > numbRand){
        alert('Загаданное число меньше!');
        guessNumber (numbRand);
    } else if (numberUser < numbRand){
        alert('Загаданное число больше!');
        guessNumber (numbRand);
    } else {
        alert (' "Поздравляю, Вы угадали!!!" ');
    }

}

guessNumber (numberRandom);
'use strict';

const isNamber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n); 
};

function startGame () {

    let numberRandom = Math.floor(Math.random() * 100) + 1;
    console.log(numberRandom);

    let attempt = 10;

    function guessNumber (numbRand , x) {

        console.log(x);
        let numberUser = prompt('Угадай число от 1 до 100!');
        
        if (numberUser === null){
            alert(' "Игра окончена" ');
            return;
        }


        if (!isNamber(numberUser)) {
            alert('Введите ЧИСЛО!');
            guessNumber (numbRand, x);
        } else if (x === 1) {
            let loos = confirm('"Попытки закончились, хотите сыграть еще?"');
            if (loos === false){
                alert('Игра окончена!');
                return;
            } else {
                startGame();
            }
            return;
        } else if (numberUser > numbRand){
            x --;
            alert('Загаданное число меньше, осталось попыток: ' + x);
            guessNumber (numbRand, x);
        } else if (numberUser < numbRand){
            x --;
            alert('Загаданное число больше, осталось попыток: ' + x);
            guessNumber (numbRand, x);
        } else {
            let winn = confirm (' Поздравляю, Вы угадали!!! Хотели бы сыграть еще? ');
            if (winn === false){
                alert('Игра окончена!');
                return;
            } else {
                startGame();
            }
            
        }

    }

    guessNumber (numberRandom, attempt);

}

startGame();
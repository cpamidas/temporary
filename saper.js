// Функция для генерации числа от min до max
function randomBomb (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Генерация числа на основе функции (номер ячейки в которой будет бомба)
var bombFieldNumber = randomBomb(1, 6);

// Получаем коллекцию div с классом field
var fieldList = document.getElementsByClassName('field');

// Прячем бомбу в div
fieldList[bombFieldNumber - 1].bomb = 'red';

// Перебираем все дивы, которые у нас есть
for (var i = 0; i < fieldList.length; i++) {
    
    //вешаем обработчик на каждую ячейку (div)
    fieldList[i].onclick = function () {
        
        console.log(this.bomb);
        
        if(this.bomb == 'red') {
            this.style.backgroundColor = this.bomb;
            document.getElementById('sound2').play();
        } else {
            this.style.backgroundColor = 'green';
        }
        
        // this.style.backgroundColor = (this.bomb == 'red')?this.bomb:'green';
    }
}
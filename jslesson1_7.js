/*

var enteredWord = prompt('Введите слово или число для проверки на палиндром!');

var firstPart = '';
var secondPart = '';

for (var i = 0; i < enteredWord.length / 2; i++) {
    firstPart += enteredWord[i];
};

for (var i = enteredWord.length; i >= enteredWord.length / 2; i--) {
    secondPart += enteredWord[i];
};

if (firstPart == secondPart){
    console.log('Success!');
} else {
    console.log('Fail!');
}

/*

var userLang = window.navigator.language;

console.log(userLang);

if (userLang == 'ru-RU'){
    window.location.href = '#ua'
} else if (userLang == 'en-EN') {
   
} else if (userLang == 'ua-UA') {

} 

/*

var enteredWord = prompt('Введите слово или число для проверки на палиндром!');

var firstPart = '';
var secondPart = '';

for (var i = 0; i < enteredWord.length / 2; i++) {
    firstPart += enteredWord[i];
};

for (var i = enteredWord.length; i >= enteredWord.length / 2; i--) {
    secondPart += enteredWord[i];
};

if (firstPart == secondPart){
    console.log('Success!');
} else {
    console.log('Fail!');
}



/*
var text = prompt('Enter your text!');

var result = text.split(',');

console.log(result);

/*

var email = prompt('Enter your email!');

var i = email.indexOf('@');

var result = email.slice(0, i);

console.log(result);



/*

var fio = prompt('Введите ФИО!');
var pasport = prompt('Введите паспорт!');
var adr = prompt('Введите адрес!');
var numb = prompt('Номер документа!');

var blank = '№:numb | Ф.И.О:fio | Паспорт:pasport | Адрес:adr';

var blank_result = blank.replace('numb', numb)
                        .replace('fio', fio)
                        .replace('pasport', pasport)
                        .replace('adr', adr);

console.log(blank_result);

document.getElementById('categories').innerHTML = blank_result;


/*

var a = 'hello world 35 best 536';

var b = a.replace('world', '*');

console.log(b);

/*

var a = 'hello world ';

console.log(a.length);

var b = a.concat('best');



var b = a.indexOf('world');

console.log(b);

/*


// С функциями конструкторами:

/*

function Bird () {
    this.speed = '300km/s';
    this.size = '30m';
    this.color = 'blue';
};

function Duck () {
    this.color = 'white';
    this.size = '1m';
};

var bird = new Bird();

Duck.prototype = bird;    

// Duck прототипируем обьектом bird - расширяем базовый функционал одного обьекта - другим;

var donaldduck = new Duck();

console.log(donaldduck.speed);







/*

С обьектами:

var a = {
    
    color: 'white',
    width: '100px',
    height: '200px'
    
};

var b = {
    
    color: 'black'
    
};

var c = {
    
    color: 'red'
    
};

b.__proto__ = a;          // прототипировали

c.__proto__ = b;

console.log(b.color);
console.log(c.color);

*/
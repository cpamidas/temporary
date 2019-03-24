/*

function sortWord() {

    var numberArr = ['one', 'two', 'three', 'four'];

    var sortNumerArr = [];

    for (var i = 0; i < numberArr.length; i++) {   
     
        if (numberArr[i] >= numberArr[0] || numberArr[i] >= numberArr[1] || numberArr[i] >= numberArr[2] || numberArr[i] >= numberArr[3]) {
        
            sortNumberArr[sortNumberArr.length]
            
        }
        
    }
}

sortWord();
 /*  
 
 
    
    
    if ('one' > 'two') {
        console.log ('Yeeeeeeeeeeeeeeeees!')	
    } else {
        console.log ('bye');
    }
    
}

sortWord ('Lol');

*/


/*

var word = prompt ('Введите слово!');

function searchWord (enteredWord) {
    
    var text = 'Hello my favourite world';
    
    var arr = [];
    
    var resultWord = '';
    
    // перебираем буквы в переменной текст
    for (var i = 0; i < text.length; i++) {   
        
        // сравнение, если пробел или запятая или точка, тогда формируем массив из слов
        if ( text[i] == ' ' || text[i] == ',' || text[i] == '.') {
            arr[arr.length] = resultWord;
            
            // очищаем слово
            resultWord = '';
        } else {
            
            // формируем слово
            resultWord += text[i];
            if (resultWord == enteredWord) {
                console.log ('Есть такое слово!')
            }
        }
        
        
       // // проверяем на окончание текста
       // if (i + 1 == text.length) {
       //     
       //     // записываем последнее слово
       //     arr[arr.length] = resultWord;
       // }
	}
    

    
}

searchWord(word);


/*
function getMaxNumber() {
    
    var numbers = arguments;
    console.log (numbers);
    
    var maxNumber = numbers[0];
    
    for (var i = 0; i < numbers.length; i++) {   
        
        if ( maxNumber < numbers[i] ) {
            maxNumber = arguments[i]; 
        }
        
	};
    
return maxNumber;}

var x = getMaxNumber (32, 43, 56, 70, 8);

console.log (x);



/*

function getParams(a) {
    
    console.log (a);
    return arguments;
    
}

var a = getParams ('Alex', 'ru');

console.log (a);

/*

function getParams() {
    
    return arguments;
    
}

var a = getParams ('Alex', 'ru');

console.log (a);

/*

function sayHello( name, lang ) {
	switch (lang) {
		case 'en': return 'Hello ' + name;

		case 'ru': return 'Привет ' + name;

		case 'ua': return 'Привит ' + name;
	}
}

var a = sayHello ('Alex', 'ru');

console.log (a + ' 18.02.2018');


/*

function sayHello( name, lang ) {
	switch (lang) {
		case 'en': console.log ('Hello ' + name);
		break;

		case 'ru': console.log ('Привет ' + name);
		break;

		case 'ua': console.log ('Привит ' + name);
        break;
	}
}

sayHello ('Alex', 'ru');
sayHello ('Petro', 'ua');
sayHello ('Sasha', 'en');




/*
function sayHello( name ) {
	console.log ('Hello ' + name);
}

sayHello ('Alex');

sayHello ('Petya');

sayHello ('Sasha');

/*

function sayHello() {
	var name = "Alex";
	console.log ('Hello ' + name);
}

sayHello ();

sayHello ();

sayHello ();

*/
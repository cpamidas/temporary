/*

var lvlup = {
    
    courses: {
    
        net: {
            price: 2690,
            priceperiod: 'per month',
            startdate: 'already',
            duration: 'six month',
            teacher: [
                {
                    name: 'Aleksandr',
                    familyname: 'Pura',
                    age: 38,
                    specialization: 'C#, .NET, C++'
                },
                
                {
                    name: 'Juliana',
                    familyname: 'Mangarova',
                    age: 27,
                    specialization: 'C#, .NET, C++'
                }
            ]
        },
        
        modeling3d: {
            price: 7490,
            priceperiod: 'per cource',
            startdate: 'already',
            duration: 'three month',
            teacher: [
                {
                    name: 'Oleg',
                    familyname: 'Senin',
                    age: 48,
                    specialization: 'architecture, 3D-MAX'
                },
                
                {
                    name: 'Yurii',
                    familyname: 'Gunchak',
                    age: 31,
                    specialization: '3D-printing, MAYA, 3D COAT, MODO'
                },
            ]
        },
        
        android: {
            price: 2890,
            priceperiod: 'per month',
            startdate: 'February 19',
            duration: 'five month',
            teacher: {
                name: 'Yurii',
                familyname: 'Leshenko',
                age: 30,
                specialization: 'android JAVA'    
            }
        },
        
        PHP: {
            price: 2890,
            priceperiod: 'per month',
            startdate: 'February 19',
            duration: 'five month',
            teacher: {
                name: 'Yurii',
                familyname: 'Leshenko',
                age: 666,
                specialization: 'PHP, JS, MVC, Zend Framework, FUEL PHP'    
            }     
        }    
    },
    
    meetups: {
        
        birthday: {
            date: 'Fabruary 27',
            place: 'LevelUP office',
            adr: 'Dnipro, Troickaya, 21',
            topic: 'success stories'
        },
        
        startinit: {
            date: 'Fabruary 25',
            place: 'LevelUP office',
            adr: 'Dnipro, Troickaya, 21',
            topic: 'How to start a career in the computer field'
        },
        
        videomarketing: {
            date: 'Fabruary 21',
            place: 'LevelUP office',
            adr: 'Dnipro, Troickaya, 21',
            topic: 'how to make video content'
        } 
    }  
};

console.log (lvlup.courses.modeling3d.teacher[0].specialization);



var number = prompt ('Введите число от 0 до 9999!');



/*

1. Описать в формате JSON учебное заведение LVLUP
    Курсы
    Группы
    Часы
    Стоимость
    
2. Вводим от 0 до 9999 преобразовать в английский текст.

 
********************************************************







/*  var user = {
        
        name: 'alex',
        age: 35,
        gender: 'male'
    };

	for (var b in user) {

	console.log(user[b]);
        
    }
/*
 	var arr = ['vasya', 'petya', 'alex'];

	for (var a in arr) {

	console.log(arr[a]);
        
    }

/*   do {
        
        var x = prompt ('Введите число!');
        
    } while (x != 10);
    


/*

var a = ['kolya', 'vasya', 'petya'];

for (var i = 0; i < a.length; i++) {
		console.log (i);
        console.log (a[i]);
	};

var str = "petya";

console.log (str[0], str[4]);

	var i = 0;

	while (i < 10) {
		console.log(i);
		i++
	}

/*

for (var i = 0; i < 10; i++) {
		console.log (i);
	};

/*

var a = [55, 33, 40, 50 ,80];

console.log (a.length);

delete a[2];

console.log (a);

a[2] = 50;

console.log (a);

a[5] = 60;

console.log (a);

/* var car = {
    info: {
        brand: 'BMW',
        class: 'A',
        type: 'roadster',
        typeEngine: 'petrol'
    },
    
    body: {
        wheels: {
            size: '18 inch',
            styling: 'star',
            rubberBrand: 'Michelin',
            wheelBaseLength: '4235cm',
            color: 'black'
        },
        
        frame: {
            weight: '2132kg',
            width: '1564cm',
            height: '1874cm',
            length: '5324cm'
        },
        
        computer: {
            applications: {
                phonebook: [
                    {
                        name: 'vasya',
                        tel: '80633243',
                        email: 'vasya@gmail.com'
                    },
                    
                    {
                        name: 'alena',
                        tel: '8063314212',
                        email: 'alena@gmail.com'
                    },
                    
                    {
                        name: 'kostya',
                        tel: '806312412',
                        email: 'kostya@gmail.com'
                    }
                ],
                
                calls: [
                    {
                        name: 'alena',
                        tel:  '8063314212',
                        time: '12 hour ago'
                    },
                    
                    {
                        name: 'Uknown',
                        tel:  '806332342312',
                        time: '1 hour ago'
                    },
                    
                ]
            }
        }
    }
}

console.log (car.body.computer.applications.calls[0].time, car.body.computer.applications.phonebook[2].tel);





/* var smartphone = {
    
    display: {
        size: 4.8,
        lcd: 'AMOLED',
        colors: '32b',   
    },
    
    applications: {
        phonebook: [
            {
                name: 'vasya',
                tel: '80633243',
                email: 'vasya@gmail.com'
            }, 
            
            {
                name: 'alena',
                tel: '80633234324',
                email: 'alena@gmail.com'
            } 
        ]
    }
    
};

console.log (smartphone.applications.phonebook[0].email);

console.log (smartphone['applications']['phonebook'][0]['email']);

/*

var users = ['vasya', true, 35, '806335']

console.log (users[2]);

var user2 = { name: 'vasya', auth: 'true', age: 35, tel: '806335'};

console.log (user2.name);


/*
var checkpointFb = prompt ('В чем проблема? Какой checkpoint?');

// Селфи || Платежка || Документы || Мобилка

if (checkpointFb == 'Селфи') {
    
    console.log ('Сделай селфи, заполни форму и отправь данные!');
    
    var selfieResult = confirm ('Checkpoint пройден? Аккаунт разблокирован?');
    
    if (selfieResult == true) {
        console.log ('Yeah, man! Цукерберг побежден, заливай кампании!');
    } else {
        console.log ('DAMN MAN! Регистрируем новый аккаунт!');
    }  
    
} else if (checkpointFb == 'Платежка') {
    
    var paymentHolder = prompt ('Кто владелец платежного инструмента?');
    // Я || Любое имя
    
    if (paymentHolder == 'я' || paymentHolder == 'Я') {
        console.log ('Отсканируй паспорт, заполни форму и отправь данные!');
        
        var paymentResult = confirm ('Checkpoint пройден? Аккаунт разблокирован?');
    
        if (paymentResult == 'true') {
            console.log ('Yeah, man! Цукерберг побежден, заливай кампании!');
        } else {
            console.log ('DAMN MAN! Регистрируем новый аккаунт!');
        }
        
    } else {
        console.log ('Возьми точные данные платежного инструмента у ' + paymentHolder + ', отсканируй паспорт, заполни форму и отправь данные!');
        
        var paymentHolderAnswer = confirm (paymentHolder + ' дал данные платежки?');
        
        if (paymentHolderAnswer == true) {
            console.log ('Отлично! Сканируй паспорт, заполняй форму и отправляй данные!');
            
            var paymentResult = confirm ('Checkpoint пройден? Аккаунт разблокирован?');
    
                if (paymentResult == 'true') {
                    console.log ('Yeah, man! Цукерберг побежден, заливай кампании!');
                } else {
                    console.log ('DAMN MAN! Регистрируем новый аккаунт!');
                }
        } else {
            console.log ('Увы! Данных будет недостаточно. Регистрируй новый аккаунт!');
        }
    }
    
} else if (checkpointFb == 'Документы') {
    
    console.log ('Отсканируй паспорт, заполни форму и отправь данные!');
    
    var documentsResult = confirm ('Checkpoint пройден? Аккаунт разблокирован?');
    
    if (documentsResult == true) {
        console.log ('Yeah, man! Цукерберг побежден, заливай кампании!');
    } else {
        console.log ('DAMN MAN! Регистрируем новый аккаунт!');
    }  
    
} else if (checkpointFb == 'Мобилка') {
    
    console.log ('Вставь нужную SIM в телефон и проверь, активна ли она!');
    
    var simStatus = confirm ('Нужная SIM активна?');
    
    if (simStatus == true) {
        console.log ('Проходим проверку по SMS!');
        
        var mobileResult = confirm ('Checkpoint пройден? Аккаунт разблокирован?');
        
        if (mobileResult == true) {
            console.log ('Yeah, man! Цукерберг побежден, заливай кампании!');
        } else {
            console.log ('Попытка 1 - неудачна! Жди сутки и пробуй пройти проверку повторно!');
            
            var count = 1;
            
            while (count < 6) {
                console.log ('Делаем попытку №' + count + '?'); 
                count++;
            }
        }
        
    } else {
        console.log ('Выкинь SIM и забудь про аккаунт! Регистрируй новый!');
    }
} else {
    console.log ('Товарищ! Отправляйся изучать справку Facebook для рекламодателей!');
}

















































































/*

var month = prompt ('Введите месяц!')

switch (month) {
	case '1': console.log ('January');
	break;

	case '2': console.log ('February');
	break;

	case '3': console.log ('March');
	break;

	case '4': console.log ('April');
	break;

	case '5': console.log ('May');
	break;

	case '6': console.log ('June');
	break;

	case '7': console.log ('July');
	break;

	case '8': console.log ('August');
	break;

	case '9': console.log ('September');
	break;

	case '10': console.log ('Oktober');
	break;

	case '11': console.log ('November');
	break;

	case '12': console.log ('Decemver');
	break;

	default: console.log ('Вы неверно ввели данные!');
}

/*
var money = prompt ('Сколько денег БРАТ?!')

if ( money >= 300 ) {
    console.log ('Езжай к Алене!');
} else if (money >= 200 && money < 300) {
    console.log ('Купи пива, чипсов и нагетсов!');
} else if (money < 200){
    console.log ('Купи молока!');
} else {
    console.log ('LOL!');
}



var month = prompt('Введите месяц!');

if ( month == 'февраль' ) {
    console.log ('Холодно!');
} else if (month == 'март') {
    console.log ('Запахло весной!');
} else {
    console.log ('Hacking attempt!');
}

*/


/* var login = prompt ('Введите логин!');
var password = prompt ('Введите пароль!');

if (login == 'midas' &&  password == '111') {
    console.log ('WELCOME!');
} else {
    console.log ('LOL!');
}

var x = 0.3 - 0.2;
var y = 0.2 - 0.1;

if (x==y) {
    console.log ('OMEGA LOL!');
} else {
    console.log ('NONE'); 
} */
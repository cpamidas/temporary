



/*


var num = prompt ('Введите значение от 0 до 9999!');

var smallRange = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var middleRange = [ 
    '',
    '',
    'twenty ',
    'thirty ',
    'fourty ',
    'fifty ',
    'sixty ',
    'seventy ',
    'eighty ',
    'ninety '
];

var result = '';

switch (num.length) {
    case 4: result += smallRange[num[0]] + ' thousand '; // num[0] - 1
    case 3: result += smallRange[num[1]] + ' hundred ';
    case 2: if(num[2] > 1) {
        result += middleRange[num[2]];                
    };
    case 1: result += smallRange[num[3]];
}

console.log (result);

1234
 123
  12
   1

/*

от 0 до 9999

проблема которую нужно решить - смещение

1234 one thousand

, 'ten', 'eleven', 'twelve'

var word = 'hello my favourite world';

var result = ''

for (var i = word.length - 1; i >= 0; i--) {
    
        if (word[i] == 'o') {
            result += '*';    
        } else {
		result += word[i];
        }
	}

console.log (result);

/* for (var i = word.length - 1; i >= 0; i--) {
		console.log (word[i]);
	}

/*

var products = [
    {
        brand: 'Acer',
        model: 'MX500',
        category: 'laptop',
        hardware: {
            processor: {
                brand: 'intel',
                cores: 8,
                cache: 64,
                socket: 775,
                frequency: 3.14
            },
            
            memory: [
                
                {
                    brand: 'Kingston',
                    type: 'ddr4',
                    value: '24g'
                },
                
                {
                    brand: 'Kingston',
                    type: 'ddr4',
                    value: '24g'
                }       
            ],
            
            gpu: {
                brand: 'nVidia',
                memory: '2gb'
            }
        }
    },
    
    
    {
        brand: 'Samsung',
        model: 'R530',
        category: 'laptop',
        hardware: {
            processor: {
                brand: 'intel',
                cores: 2,
                cache: 16,
                socket: 775,
                frequency: 3.14
            },
            
            memory: [
                
                {
                    brand: 'Kingston',
                    type: 'ddr3',
                    value: '4g'
                },
                
                {
                    brand: 'Kingston',
                    type: 'ddr4',
                    value: '4g'
                }       
            ],
            
            gpu: {
                brand: 'nVidia',
                memory: '1gb'
            }
        }
    },  
];

console.log (products[1].hardware.memory[1].type);

console.log ()

var brand = prompt ('Введите Brand!');

for (var i in products) {
    console.log (products[i]);
    
    if (brand == products[i].brand) {
        console.log (products[i].model);
    }
}
*/
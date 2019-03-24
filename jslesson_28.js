var xhr = new XMLHttpRequest();

// метод, адрес, запросы (синхронные или асинхронные) / true or false
xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

xhr.onreadystatechange = function (res) {
    if( xhr.readyState == 4) {
        
        var responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject);
        showCurrency(responseObject);           
    }
};

xhr.send();

function showCurrency (currency) {
    
    var currencyFrom = document.getElementById('from');
    var currencyTo = document.getElementById('to');
    
    for ( var c in currency) {
        
        var currencyOption = document.createElement('option');
        
        var currencyText = document.createTextNode(currency[c].ccy);
        
        currencyOption.appendChild(currencyText);
        
        currencyOption.dataset.buy = currency[c].buy;
        
        currencyFrom.appendChild(currencyOption);
    }
    
     for ( var c in currency) {
        
        var currencyOption = document.createElement('option');
        
        var currencyText = document.createTextNode(currency[c].ccy);
        
        currencyOption.appendChild(currencyText);
        
        currencyOption.dataset.buy = currency[c].buy;
        
        currencyTo.appendChild(currencyOption);
    }
}

var fromValue = 'USD';
var toValue = 'USD';

document.getElementById('from').addEventListener('change', function(e) {
    for (i = 0; i < this.children.length; i++) {
        if (this.children[i].selected == true) {
            window.fromValue = this.children[i].value;
            window.fromDataBuy = this.children[i].dataset.buy;
        }
    }
})

document.getElementById('to').addEventListener('change', function(e) {
    for (i = 0; i < this.children.length; i++) {
        if (this.children[i].selected == true) {
            window.toValue = this.children[i].value;
            window.toDataBuy = this.children[i].dataset.buy;
        }
    }
})

// получаем элемент кнопки
var btn = document.getElementById('calculate');

btn.onclick = function () {
    
    // получаем сумму из поля ввода
    var amount = document.getElementById('amount').value;
    // получаем спан для введенной суммы
    var amountInResult = document.getElementById('amountinresult');
    // создаем ноду для введенной суммы
    var amountText = document.createTextNode(amount);
    // добавляем ноду в спан для результирующей суммы
    amountInResult.appendChild(amountText);
    
    
    // получаем нужные спаны и присваиваем им соответсвующие значения валют
    var fromCurrency = document.getElementById('fromcurrency');
    var fromCurrencyText = document.createTextNode(fromValue);
    fromCurrency.appendChild(fromCurrencyText);
   
    var toCurrency = document.getElementById('tocurrency');
    var toCurrencyText = document.createTextNode(toValue);
    toCurrency.appendChild(toCurrencyText);
    
    // считаем результат (кросскурс - прямые котировки)
    //var result = 1 * 666;
    var result = ((amount * fromDataBuy) / (amount * toDataBuy)) * amount
    // кладем результат в нужный спан
    var inResult = document.getElementById('result');
    var inResultText = document.createTextNode(result);
    inResult.appendChild(inResultText);
    
    // отображаем результирующий блок в html
    document.getElementById('resultblock').style.display = 'block'; 
}



// нужно допилить округление до двух знаков в amount
// нужно допилить момент, чтобы валюты повторно не добавлялись при новом клике на кнопку, а заменяли предыдущие значения

/*

document.getElementById('listcars').addEventListener('change', function(e) {
    console.log(e, this.children);
    for (var i = 0; i < this.children.length; i++) {
        console.log(this.children[i].selected)
    }
})

/*

/*

var xhr = new XMLHttpRequest();

// метод, адрес, запросы (синхронные или асинхронные) / true or false
xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

xhr.onreadystatechange = function (res) {
    if( xhr.readyState == 4) {
        
        console.log(JSON.parse(xhr.responseText));
        
    }
};

xhr.send();

/*

var xhr = new XMLHttpRequest();

// метод, адрес, запросы (синхронные или асинхронные) / true or false
xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

xhr.onreadystatechange = function (e) {
    if( xhr.readyState == 4) {
        console.log(e);
    }
}

xhr.send();


// backup

// ЧАСТЬ ДЗ


var xhr = new XMLHttpRequest();

// метод, адрес, запросы (синхронные или асинхронные) / true or false
xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

xhr.onreadystatechange = function (res) {
    if( xhr.readyState == 4) {
        
        var responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject);
        console.log(responseObject[3].sale);
        showCurrency(responseObject);
        
    }
};

xhr.send();

function showCurrency (currency) {
 
    var currencyFrom = document.getElementById('from');
    
    for ( var c in currency) {
        console.log(currency[c].ccy);
        
        var currencyOption = document.createElement('option');
        
        var currencyText = document.createTextNode(currency[c].ccy);
        
        currencyOption.appendChild(currencyText);
        
        currencyOption.dataset.buy = currency[c].buy;
        
        currencyFrom.appendChild(currencyOption); 
    }
}

document.getElementById('from').addEventListener('change', function(e) {
    for (i = 0; i < this.children.length; i++) {
        if (this.children[i].selected == true) {
            console.log(this.children[i].dataset.buy);     
        }
    }
})

*/
document.getElementById('text').addEventListener('blur', function(e) {
    console.log('blur');
    
    if (this.value == '') {
        this.style.borderColor = 'red';
    } else {
        this.style.borderColor = 'green';
    }
})

document.getElementById('text').addEventListener('focus', function(e) {
    console.log('focus');
})

/* !this.value

/*

document.getElementById('listcars').addEventListener('change', function(e) {
    console.log(e, this.children);
    for (var i = 0; i < this.children.length; i++) {
        console.log(this.children[i].selected)
    }
})

/*

document.getElementById('img').addEventListener('change', function(e) {
    console.log(e.target.files[0]);
    
    var fileReader = new FileReader();
    
    fileReader.onloadend = function (event) {
        console.log(event, fileReader.result);
        var img = document.createElement('img');
        img.src = fileReader.result;
        
        document.getElementById('test').appendChild(img);
    }
    
    fileReader.readAsDataURL(e.target.files[0])
})

/*

document.addEventListener ('DOMContentLoaded', function (e) {
    console.log(e, 'onload');
});

/*

window.onbeforeunload = function (e) {
    console.log(e);
    
    return 'Закрыть?';
}


/*

document.addEventListener('onbeforeunload', function(e){
    
    return false;
    console.log(e);
    if (confirm('В жопу раз или вилкой в глаз?')) {
        return false;
    }
});

/*

var ix = 0

document.addEventListener('keyup', function(e){
    if (e.KeyCode == 39) {
        
        ix += 50;
        
        document.getElementById('test').style.left = ix + 'px';
    }
})

/*

// // Получаем объект кнопки button
// var btn = document.getElementById('btn');

// // событие нажатия на кнопку 
// btn.onclick = function () {
// 	var productsStr = localStorage.getItem('products');
	
// 	var products = {};
// 	var productId = 0;
// 	var productObj = {};
// 	// получаем объект текстового поля с id="product"
// 	var product = document.getElementById('product');

// 	// получаем объект ul с id="productlist"
// 	var productlist = document.getElementById('productlist');

// 	// создаем объект текста который вводим 
// 	var productName = document.createTextNode(product.value);

// 	// создаем объект тэга span для значения productName
// 	var span  = document.createElement('span');

// 	// добавляем в объект элемента span текст (название продукта)
// 	span.appendChild(productName);

// 	// создаем объект тэга li
// 	var li = document.createElement('li');

// 	// создаем объект тэга input для checkbox
// 	var check = document.createElement('input');

// 	// создаем кнопку удаления
// 	var btnDel = document.createElement('a')
	
// 	// вместо ссылки якорь на саму страницу
// 	btnDel.href = '#';
	
// 	// добавляем классы с иконкой
// 	btnDel.classList.add('fas');
// 	btnDel.classList.add('fa-trash-alt');

// 	// устанавлеваем тип как checkbox
// 	check.setAttribute('type','checkbox');

// 	// добавляе в li checkbox
// 	li.appendChild(check);

// 	// добавляем в li span
// 	li.appendChild(span);

// 	// добавляем в li кнопку удаления
// 	li.appendChild(btnDel);

// 	// добавляем li в ul (productlist)
// 	productlist.appendChild(li);

// 	// добавляем в пустой объект значение к свойству name
// 	productObj.name = product.value;

// 	// очищаем текстовое поле
// 	product.value = '';

// 	// действие по нажатию на кнопку удаления
// 	btnDel.onclick = function () {

// 		// от родительского элемента удаляем дочерний элемент li 
// 		// this - объект элемента на который мы нажали
// 		productlist.removeChild(this.parentElement);
// 	}

// 	// увеличиваем на 1 значение id продукта
// 	productId++;

// 	// добавляем приставку id
// 	productId = "id" + productId;

// 	// в массив продуктов добаляем новый объект продукта
// 	products[productId] = productObj;
// 	console.log(products);
// 	// записываем объект продукта в localstorage
// 	localStorage.setItem('products', JSON.stringify(products));
// }

// console.log(localStorage);


var btn = document.getElementById('btn');
var products = [];

btn.onclick = function () {

	var product = document.getElementById('product');
	products.push(product.value);

	localStorage.setItem('products', JSON.stringify(products))
}

// function getProducts() {
// 	var productsList = localStorage.getItem('products');
// 	var ul = document.getElementById('productlist');

// 	if(productsList){
// 		var productsArray = JSON.parse(productsList);
// 		console.log(productsArray)

// 		for(var i = 0; i < productsArray.length; i++){
// 			var li = document.createElement('li');
// 			var txt = document.createTextNode(productsArray[i]);
// 			li.appendChild(txt);
// 			ul.appendChild(li);
// 		}
// 	}
// }

// getProducts();

document.getElementById('test').onDbClick = function(){
	console.log('dbclick');
}

document.getElementById('test').addEventListener('mousemove', function(e){
	console.log('move' , e.offsetX, e.offsetY);
})

*/
var products = [];

var btn = document.getElementById('btn');
 
btn.onclick = function () {
    
    var product = document.getElementById('product');
    var productlist = document.getElementById('productlist');
 
    var productName = document.createTextNode(product.value);
    
    var span = document.createElement('span');
    span.appendChild(productName);
    
    var li = document.createElement('li');
    
    var check = document.createElement('input');
    
    var btnDel = document.createElement('a');
    btnDel.href = '#';
    
    btnDel.classList.add('fas');
    btnDel.classList.add('fa-trash-alt');
   
    
    check.type = 'checkbox';
    
    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(btnDel);
 
    productlist.appendChild(li);
    
    product.value = '';
    
    btnDel.onclick = function () {
        productlist.removeChild(this.parentElement);
    }
}

sessionStorage.setItem('product', 'Виски');
console.log(sessionStorage);




/*

var btn = document.getElementById('btn');

btn.onclick = function () {
    
    var product = document.getElementById('product');
    var productlist = document.getElementById('productlist');
    
    var productName = document.createTextNode(product.value);
    
    var li = document.createElement('li');
    li.appendChild('productName');
    
    productlist.appendChild(li);
    
    
}



smartphone = {
    phonebook:[
        
        {
            name:"",
            tel:"",
            email:""
        },
        
        {}
        {}
        {}
    ]
}

// 3 поля и по кнопочке add информация которую мы вводили - формируется в обьект, а потом формируется вывод контакта;

//добавлять в массив smartphone.phonebook.push();

*/
$('.ex').click(function () {
    var login = $('#login').val();
    console.log(login);
    $('.mylist').append('<li>' + login +'</li>');
})


// вириант как подписаться на событие динамического элемента
$(document).on('click', 'li', function() {
    $(this).remove();
    // чтобы получить обьект текущего
});



// $(':button').css('background-color', 'red');

// $('.ex:not("p")').css('background-color', 'green');

/*

$('.ex:even').css('background-color', 'red');
$('.ex:odd').css('background-color', 'green');




/*

$('.ex:eq(1)').css('background-color', 'red');

// другой вариант

$('.ex').eq(1).css('background-color', 'red');

/*

// такая функция называется closure
// самозапускающаяся анонимная функция

(function () {
    
    // это уже сам код
    function $ () {
        this.a = 30;
    }
    
    window.$$ = new $();
})();

console.log($$);



/*

function getNum (num) {
    
    if (num != 0) {
        var x = 25;
        return x/num;
    } else {
        throw new Error('На ноль делить нельзя!');
    }
}

try {
    getNum(0);
} catch (e) {   // e - это обьект кастомный в который помещается наша ошибка
    console.log('Возникла ошибка!');
    console.log(e.message);
}

*/

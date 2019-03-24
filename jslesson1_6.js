var x1 = prompt('Введите значение №1!');
var y1 = prompt('Введите значение №2!');

var html = '<table>';


function table (x, y) {
    for (var i = 1; i <= x; i++) {
        
        html += '<tr>';
        for (var n = 1; n <= y; n++) {
            console.log(i + 'x' + n + '=' + (i*n));
        }
        html += '</tr>';
    }  
};

html += '</table>';

table(x1, y1);

document.getElementById('categories').innerHTML = html;





/*

var categories = [
    {
        category: 'Laptop',
        link: '#laptop',
        subcategories: [
            {
                category: 'Asus',
                link: '#asus',
                subcategories: [
                    {
                        category: 'A500',
                        link: '#a500',
                        subcategories: []
                    },
                    {
                        category: 'A300',
                        link: '#a300',
                        subcategories: []
                    },
                    {
                        category: 'A600',
                        link: '#a600',
                        subcategories: []
                    },
                ]
            },
            {
                category: 'Acer',
                link: '#acer',
                subcategories: [
                    {
                        category: 'SX50',
                        link: '#sx50',
                        subcategories: []
                    },
                    {
                        category: 'L400',
                        link: '#l400',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        category: 'Smartphone',
        link: '#smartphone',
        subcategories: [
            {
                category: 'XIAOMI',
                link: '#xiaomi',
                subcategories: [
                    {
                        category: 'X4 Note',
                        link: '#x4_note',
                        subcategories: []
                    }
                ]
            },
            {
                category: 'Samsung',
                link: '#samsun',
                subcategories: [
                    {
                        category: 'G7',
                        link: '#g7',
                        subcategories: []
                    },
                    {
                        category: 'G9',
                        link: '#g9',
                        subcategories: []
                    }
                ]
            }
        ]
    }
];

var html = '';

function showCategories(categories) {
    
    html += '<ul>';
    
    for (var i = 0; i < categories.length; i++) {
        
        html += '<li>';
        html += '<a href="' + categories[i].link + '">' + categories[i].category + '</a>';
        
        if(categories.length > 0) {
            showCategories(categories[i].subcategories);
        }
        
        html += '</li>';
    }
    
    html += '</ul>';
    
}

showCategories(categories);

document.getElementById('categories').innerHTML = html;
*/
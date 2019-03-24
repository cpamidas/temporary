
function Slider (width_dyn, height_dyn, imgs) {
    
    this.currentPosition = 0;
    this.images = imgs;
    this.width = width_dyn;
    this.height = height_dyn;
    this.next = function() {
        console.log(this.img[++this.currentposition]);
    };
    this.previous = function() {
        console.log(this.img[--this.currentposition]);
    }
}

var imgs = [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg'
];

var slider_500_250 = new Slider ('500', '250', imgs);
var slider_900_600 = new Slider ('900', '600');
var slider_300_200 = new Slider ('300', '200');

console.log (slider_500_250.width);




/* 

function Slider (width_dyn, height_dyn, imgs) {
    
    this.currentPosition = 0;
    this.images = imgs;
    this.width = width_dyn;
    this.height = height_dyn;
    this.next = function() {
        console.log(Slider.img[++Slider.currentposition]);
    };
    this.previous = function() {
        console.log(Slider.img[--Slider.currentposition]);
    }
}

var imgs = [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg'
];

var slider_500_250 = new Slider ('500', '250', imgs);
var slider_900_600 = new Slider ('900', '600');
var slider_300_200 = new Slider ('300', '200');

console.log (slider_500_250.width);

console.log (slider_300_200.img[1]);

console.log (slider_900_600.img[9]);

/*

var slider = {
    currentPosition: 0,
    img: [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/img/11.jpg'
    ],
    width: 600,
    height: 300,
    next: function() {
        
        console.log(slider.img[++slider.currentPosition]);
        
    },
    previous: function() {

        console.log(slider.img[--slider.currentPosition]);
        
    }
}

slider.next()
slider.next()

slider.previous()
slider.previous()



/*

function Car (color) {
	
	this.wheels = 4;
	this.color = color;
	this.brand = 'audi';
    this.go = function() {
        console.log('Ехать!');
    }
	
}

var audi = new Car ('white');
var audiBlack = new Car ('black');
var audiPurple = new Car ('purple');

audi.go();

console.log (audi.wheels);

console.log (audiPurple.color);

console.log (audiPurple);



/*

function Car () {
	
	this.wheels = 4;
	this.color = 'white';
	this.brand = 'audi';
	
}

var audi = new Car ();

console.log (audi.wheels);


/*

var slider = {
    currentPosition: 0,
    img: [
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/img/11.jpg'
    ],
    width: 600,
    height: 300,
    next: function() {
        
        console.log(slider.img[++slider.currentPosition]);
        
    },
    previous: function() {

        console.log(slider.img[--slider.currentPosition]);
        
    }
}

slider.next()
slider.next()

slider.previous()
slider.previous()

/*

var i = 0;

var itterator = function() {
    i++;
    console.log(i);
}

setTimeout(itterator, 3000);


function a() {
    console.log('hello');
}

a();

/*

var i = 0;

var itterator = function() {
    i++;
    console.log(i);
}

setInterval(itterator, 3000);



function a() {
    console.log('hello');
}

a();



/*

var i = 0;

setInterval(function(){
    i++;
    console.log(i);
}, 3000);



function a() {
    console.log('hello');
}

a();


/*

function getUser(callback) {

	var user = 	'vasya';

	callback(user); 			

}

getUser(function(user){
	
	console.log('send request for friend ' + user + '!');

});



/*

var getCount = function (num) {
	
}

getCount(30);

console.log(getCount);

*/
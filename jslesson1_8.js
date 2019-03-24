var x = screen.width/2 - 100;
var y = screen.height/2 - 100;
var strParams = "width=200, height=200, left="+x+",top="+y;


function openPopup() {
    window.open('https://google.com', 'DZ', strParams)
}

console.log(window);

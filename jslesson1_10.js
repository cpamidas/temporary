var txt = document.createTextNode('HELLO LITTLE TRAKTORIST!');

var el = document.createElement('div');

el.appendChild(txt); document.insert

document.body.appendChild(el);

var el2 = document.createElement('p');

var txt2 = document.createTextNode('WROLD WORLD WORLD');

// insertBefore вызывается у родителского элемента

el2.appendChild(txt2);

document.body.insertBefore(el2, el);

// removeChild - динамическое удаление элемента

document.body.removeChild(el);
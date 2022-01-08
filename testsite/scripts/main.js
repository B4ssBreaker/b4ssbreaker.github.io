var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/random.jpg'){
        myImage.setAttribute ('src','images/randomx.jpg');
        } else {
            myImage.setAttribute ('src','images/random.jpg');
        }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    var myName = prompt('Prosze podać nazwe użytkownika.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Lakiernia Eko-Okna jest super, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Lakiernia Eko-Okna jest super, ' + storedName;
}


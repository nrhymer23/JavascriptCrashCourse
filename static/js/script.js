function ageInDays(){
var birthyear = prompt('Hey, What year were you Born?');
var ageInDayss = (2020 - birthyear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
h1.setAttribute( 'id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1); 
console.log(ageInDayss);
}

function reset(){
document.getElementById('ageInDays').remove();
}

function generateCat(){
var image = document.createElement('img');
var div = document.getElementById('flex-cat-gen');
image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
div.appendChild(image);
}
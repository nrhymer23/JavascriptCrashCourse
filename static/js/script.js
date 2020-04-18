


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

//rps challenge
function rpsGame(yourChoice){
var humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = numberToChoice(randToRpsInt());
console.log('computerChoice', botChoice)
results = decideWinner(humanChoice,botChoice); //returns a array of possible endings ie [0,1] human lost | bot won
message = finalMessage(results) // returns 'You Won' 'You Lost' 'You Tied'
console.log(message);
rpsFrontEnd(yourChoice.id, botChoice.id, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return['Rock','Paper','Scissors'][number]
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
    'Rock':{'Scissors':1, 'Rock':0.5, 'Paper':0},
    'Paper':{'Rock': 1, 'Paper':0.5, 'Scissors':0},
    'Scissors':{'Paper': 1, 'Scissors':0.5, 'Rock':0}
    };
    
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
   
    return [yourScore, computerScore];

}
// why computerScore isnt being checked?? i have to continue debugging !!
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0 ){
        return {'message':'You Lost lol', 'color': 'red'};
    }
    else if (yourScore === 0.5){
        return{'message': 'You Tied!', 'color': 'yellow'};
    }
    else{
        return{'message': 'You Won!', 'color': 'green'};
    }
    
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase ={
        'Rock': document.getElementById('Rock').src,
        'Paper': document.getElementById('Paper').src,
        'Scissors':document.getElementById('Scissors').src
    }

    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML ="<h1 style = 'color: " + finalMessage['color'] + "; font-size:60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

///Challenge 4: Change the color of all the buttons 
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons= [];
for(let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
 
function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonsRed();
    } else if (buttonThingy.value === 'green'){
        buttonsGreen();
    } else if (buttonThingy.value === 'reset'){
        buttonColorReset();
    } else if (buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonsRed(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i=0; i < all_buttons.length; i++){
       all_buttons[i].classList.remove(all_buttons[i].classList[1]);
       all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i =0; i <all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}
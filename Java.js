var score = 99;
score += 1
var numCorrect = 0;

function checkScore() {

if (score == 100) { // IF score equal to 100 then alert but if i use > then the score must be higher *//
    alert('You Won Excalibur!');
    numCorrect = numCorrect + 1;

} else {
    alert("You Lose");
}
}

function blah() {
alert("I made it here, yeah!!!");
var Minecraft_Build = 0;

var Minecraft_Build = prompt('What to build in are sever', '');
if (Minecraft_Build >= 3) {
    alert('You Should build a Basic House.');
} else if (Minecraft_Build >= 2) {
    alert('You should Build a castle');
} else if (Minecraft_Build >= 1) {
    alert('You Should Build a Town House');
} else {
    alert('You should Leave Now!')
}
}


function BetweenNumber() {
if (a < 10 && a > 1) {
    //alert("The value " + a + " id Between 1 and 10");
}
}
var num = 1;
while (num <= 5) {
    document.write('Number ' + num + '<br>');
    num += 1;
}

var a = '2';

document.write('<p>Hello to the World</p>');
document.write(score);

var message = 'Hello';
var name = 'Excalibur';
message = message + '' + name;

function Data() {
    var date = ['first', 'second', 'third', 'last'];
    for (var j = date.length; j > 0; j--) {
        document.write(Data[j - 1 + '<br>']);
    }
}
var properties = ['red', '14px', 'Arial'];
properties.push('bold'); //Push add the the name to the end but if you use unshift it make it go to the begin *//

window.authors = [
    'Ernest Hemingways',
    'Charlotte Bronte',
    'Dante Alighieri',
    'Emily Dickinson'
];

function printToday() {
    var today = new Date();
    document.write(today.toDateString());
}

function functionName(parameter1, parameter2) {
    // the JavaScript you want to run
    return value;
}

var Tax = .08
    function calculateTotal(quantity, price) {
        var total = quantity * price * (1 + Tax)
        var formattedTotal = total.toFixed(2);
        return formattedTotal;
    }

var saleTotal=calculateTotal(2, 16.95)
document.write('Total cost is: $' + saleTotal)
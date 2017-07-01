window.score =0;
var questions = [

];

window.questions = [
    ['How many moons does Earth have?', 1],
    ['How many moons does Saturn have?', 31],
    ['How many moons does Venus have', 0]
];

for(var i=0; i<questions.length; i++) {
    askQuestion(questions[i]);
}

function askQuestion(question){
    var answer = prompt(question[0],'');
        if (answer == question[1]) {
            alert('Correct!');
            score++;
        } else {
            alert('Sorry. The correct anwer is ' + question[1]);
        }
}

function message(){
var message ='You got' + score;
message +='out of' + questions.length;
message +='questions correct.';
document.write('<p>'+ message + '</p>')
}
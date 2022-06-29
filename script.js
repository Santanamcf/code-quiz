var quizBox = document.getElementById("quiz-section");
var resultsBox = document.getElementById("results");
var submitButton = document.getElementById("submit");
var countdownTimer = document.getElementById("timer");

function countdown(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        timeLeft--;
        countdownTimer.textContent = $(timeLeft) + "remaining time";

        if(timeLeft === 0){
            clearInterval(timeInterval)
        }



    },1000)
}


let question1 = {question:"How many championships do the Los Angeles Lakers have?", option1:"0",option2:"17",option3:"10",option4:"6",answer:"2"}
let question2 = {question:"Which player has averaged a triple double over an entire season?", option1:"Russell Westbrook", option2:"Elgin Baylor", option3:"Joe Ingles", option4:"Kyrie Irving", answer:"1"}
let question3 = {question:"Who won the first NBA finals MVP award?", option1:"Damian Lillard", option2:"Jerry West", option3:"Wilt Chamberlain", option4:"Magic Johnson", answer:"2"}
let question4 = {question:"Who was the highest paid player in NBA history?", option1:"Lebron James", option2:"Michael Jordan", option3:"Kobe Bryant", option4:"Gilbert Arenas", answer:"1"}
let question5 = {question:"How many NBA teams are there", option1:"32",option2:"50",option3:"32",option4:"30",answer:"3"}

function quizConstruct(){}

function userResults(){
    if (question1 = true){alert("Correct!")
}   else {
    alert("Wrong!")
}
    if (question2 = true){alert("Correct!")
}   else {
    alert("Wrong!")
}   if (question3 = true){alert("Correct!")
}   else {
    alert("Wrong!")
}   if(question4 = true){alert("Correct!")
}   else {
    alert("Wrong!")
}   if (question5 = true){alert("Correct!")
}   else {
    alert("Wrong!")
}

}
var quizBox = document.getElementById("quiz-section-1");
var resultsBox = document.getElementById("results");
var submitButton = document.getElementById("submit");
var countdownTimer = document.getElementById("timer");
var startButton = document.getElementById("start");
var a1Button = document.getElementById("a1");
var b2Button = document.getElementById("b2");
var c3Button = document.getElementById("c3");
var d4Button = document.getElementById("d4");

//var questions = question1, question2, question3, question4, question5;


let question1 = {question:"How many championships do the Los Angeles Lakers have?", a1:"0",b2:"17",c3:"10",d4:"6",answer:"17"}
let question2 = {question:"Which player has averaged a triple double over an entire season?", a1:"Elgin Baylor", b2:"Russell Westbrook", c3:"Joe Ingles", d4:"Kyrie Irving", answer:"Russell Westbrook"}
let question3 = {question:"Who won the first NBA finals MVP award?", a1:"Damian Lillard", b2:"Jerry West", c3:"Wilt Chamberlain", d4:"Magic Johnson", answer:"Jerry West"}
let question4 = {question:"Who was the highest paid player in NBA history?", a1:"Michael Jordan", b2:"Lebron James", c3:"Kobe Bryant", d4:"Gilbert Arenas", answer:"Lebron James"}
let question5 = {question:"How many NBA teams are there", a1:"32",b2:"30",c3:"50",d4:"52",answer:"30"}

function countdown(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        timeLeft--;
        countdownTimer.textContent = timeLeft + "       seconds remaining";

        if(timeLeft === 0){
            clearInterval(timeInterval);
            alert("Failed!")

        }
        



    },1000)
}


function startQuiz(){
  if (startButton = true){
  }
    
}
function submit(){
    quizConstruct1()
}

function quizConstruct1(){

    document.getElementById("quiz-section-1").innerHTML = JSON.stringify(question1.question)
    document.getElementById("a1").innerHTML = JSON.stringify(question1.a1)
    document.getElementById("b2").innerHTML = JSON.stringify(question1.b2)
    document.getElementById("c3").innerHTML = JSON.stringify(question1.c3)
    document.getElementById("d4").innerHTML = JSON.stringify(question1.d4)
}

function quizConstruct2(){
    document.getElementById("quiz-section-1").innerHTML = JSON.stringify(question2.question)
    document.getElementById("a1").innerHTML = JSON.stringify(question2.a1)
    document.getElementById("b2").innerHTML = JSON.stringify(question2.b2)
    document.getElementById("c3").innerHTML = JSON.stringify(question2.c3)
    document.getElementById("d4").innerHTML = JSON.stringify(question2.d4)
}

function quizConstruct3(){
    document.getElementById("quiz-section-1").innerHTML = JSON.stringify(question3.question)
    document.getElementById("a1").innerHTML = JSON.stringify(question3.a1)
    document.getElementById("b2").innerHTML = JSON.stringify(question3.b2)
    document.getElementById("c3").innerHTML = JSON.stringify(question3.c3)
    document.getElementById("d4").innerHTML = JSON.stringify(question3.d4)
}

function quizConstruct4(){
    document.getElementById("quiz-section-1").innerHTML = JSON.stringify(question1.question)
    document.getElementById("a1").innerHTML = JSON.stringify(question4.a1)
    document.getElementById("b2").innerHTML = JSON.stringify(question4.b2)
    document.getElementById("c3").innerHTML = JSON.stringify(question4.c3)
    document.getElementById("d4").innerHTML = JSON.stringify(question4.d4)
}

function quizConstruct5(){
    document.getElementById("quiz-section-1").innerHTML = JSON.stringify(question5.question)
    document.getElementById("a1").innerHTML = JSON.stringify(question5.a1)
    document.getElementById("b2").innerHTML = JSON.stringify(question5.b2)
    document.getElementById("c3").innerHTML = JSON.stringify(question5.c3)
    document.getElementById("d4").innerHTML = JSON.stringify(question5.d4)
}

function userResults(){
    if (question1 = question1.b2){alert("Correct!") 
}   else {alert("Wrong!")}
    if (question2 = question2.b2){alert("Correct")}
    else {alert("Wrong!")}
    if (submitButton = true){quizConstruct2}



}


startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", quizConstruct1);
startButton.addEventListener("click", countdown);
a1Button.addEventListener("click", userResults);
b2Button.addEventListener("click", userResults);
c3Button.addEventListener("click", userResults);
d4Button.addEventListener("click", userResults);
submitButton.addEventListener("click");
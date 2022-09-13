const question = document.querySelector('#question');
let a1 = document.querySelector('#a1');
let b2 = document.querySelector('#b2');
let c3 = document.querySelector('#c3');
let d4 = document.querySelector('#d4');
let secondsLeft = document.querySelector('#secondsLeft')
let highScores = document.querySelector('#highScores');
const startQuiz = document.querySelector('#startQuiz');
let playerScores = []


const question1 = { question: "How many championships do the LA Lakers have?", ans: ["0", "17", "10", "6"] }
const question2 = { question: "Which player has averaged a triple double over an entire season?", ans: ["Kyrie Irving", "Elgin Baylor", "Russell Westbrook", "Joe Ingles"] }
const question3 = { question: "Who won the first nba finals mvp award?", ans: ["Damian Lillard", "Jerry West", "Wilt Chamberlain", "Magic Johnson"] }
const question4 = { question: "Who was the highest paid player in NBA history?", ans: ["Michael Jordan", "Kobe Bryant", "Lebron James", "Gilbert Arenas"] }
const question5 = { question: "How many NBA teams are there?", ans: ["32", "30", "52", "50"] }
const allQuestions = [question1, question2, question3, question4, question5]
const answerKey = [1, 2, 3, 2, 1]
let currentIndex = 0;


function init() {
    const getPlayerScores = JSON.parse(localStorage.getItem("playerScores"));
    if (getPlayerScores !== null) {
        playerScores = getPlayerScores;
    }
    renderPlayerScores();
}

function renderPlayerScores() {
    highScores.innerHTML = "";
    for (let i = 0; i < playerScores.length; i++) {
        let savedScore = playerScores[i];
        let li = document.createElement("li");
        li.textContent = savedScore;
        li.setAttribute("data-index", i);
        highScores.appendChild(li);
    }

}

function saveScore() {
    localStorage.setItem("playerScores", JSON.stringify(playerScores));
}
document.getElementById("a1").hidden = true;
document.getElementById("b2").hidden = true;
document.getElementById("c3").hidden = true;
document.getElementById("d4").hidden = true;

startQuiz.addEventListener("click", function () {

    document.getElementById("a1").hidden = false;
    document.getElementById("b2").hidden = false;
    document.getElementById("c3").hidden = false;
    document.getElementById("d4").hidden = false;
    timeLeft = 60;
    timer = setInterval(function () {
        timeLeft--;
        secondsLeft.textContent = timeLeft
        if (timeLeft === 0 || timeLeft < 0) {
            secondsLeft.textContent = "Game Over!"
            clearInterval(timer);
            window.alert("Out of time!")
            document.location.reload(true);
        }
    }, 1000)
    setQuestion(currentIndex);

})
function setQuestion(currentIndex) {
    question.textContent = allQuestions[currentIndex].question;
    a1.textContent = allQuestions[currentIndex].ans[0]
    b2.textContent = allQuestions[currentIndex].ans[1]
    c3.textContent = allQuestions[currentIndex].ans[2]
    d4.textContent = allQuestions[currentIndex].ans[3]

}

function scanAnswer(currentIndex, userChoice) {
    answer = allQuestions[currentIndex].ans[answerKey[currentIndex]];
    console.log(answer)
    if (answer == userChoice) {
        console.log("CORRECT");
        currentIndex++
    } else {
        console.log("INCORRECT");
        currentIndex++;
        timeLeft -= 10;
    }
    if (currentIndex < 5) {
        setQuestion(currentIndex);
    } else {
        setScoreBoard();
        clearInterval(timer);
        secondsLeft.textContent = "Done!";
        document.getElementById("timeCont").hidden = true;
    }
}
function setScoreBoard() {
    let score = secondsLeft;
    listItem = document.createElement('li');

    initials = prompt("Input your name!")
    listItem.textContent = initials + "  got " + score + " points!"
    let scoreText = listItem.textContent
    playerScores.push(scoreText);

    saveScore();
    renderPlayerScores();
    document.location.reload(true);
}

a1.addEventListener("click", function() {
    userChoice = a1.textContent;
    scanAnswer(currentIndex, userChoice);
})

b2.addEventListener("click", function() {
    userChoice = b2.textContent;
    scanAnswer(currentIndex, userChoice);
})

c3.addEventListener("click", function() {
    userChoice = c3.textContent;
    scanAnswer(currentIndex, userChoice);
})

d4.addEventListener("click", function() {
    userChoice = d4.textContent;
    scanAnswer(currentIndex, userChoice);
})


init()
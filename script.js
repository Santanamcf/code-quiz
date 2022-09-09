const question = document.querySelector('#question');
let a1 = document.querySelector('#a1');
let b2 = document.querySelector('#b2');
let c3 = document.querySelector('#c3');
let d4 = document.querySelector('#d4');
let timeLeft = document.querySelector('#timeLeft')
let highScores = document.querySelector('#highScores');
const startQuiz = document.querySelector('#startQuiz');
let scores = []


question1 = {question: "How many championships do the LA Lakers have?", ans:["0", "17", "10", "6"]}
question2 = {question:"Which player has averaged a triple double over an entire season?", ans:["Kyrie Irving", "Elgin Baylor", "Russell Westbrook", "Joe Ingles"]}
question3 = {question:"Who won the first nba finals mvp award?", ans:["Damian Lillard", "Jerry West", "Wilt Chamberlain", "Magic Johnson"]}
question4 = {question:"Who was the highest paid player in NBA history?", ans:["Michael Jordan", "Kobe Bryant", "Lebron James", "Gilbert Arenas"]}
question5 = {question:"How many NBA teams are there?", ans:["32", "30", "52", "50"]}
allquestions = [question1, question2, question3, question4, question5]
answerKey = [1,2,3,2,1]
currentIndex = 0;


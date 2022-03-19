const quiz = [
    {
        question: "What does HTML stand for?",
        answers: ["Home Tool Markup Language", "Hyper Tool Markup Language", "Hyperlinks and Type Markup Language", "Hyper Text Markup language"],
        correctAnswer: 4
    },
    {
        question: " ________  is a block of code which only runs when it is called",
        answers: ["Operator", "Object", "Method", "Script"],
        correctAnswer: 2
    },
    {
        question: "Random number can be created by ______",
        answers: ["Math.random", "math.Random", "Math.floor", "math.Floor"],
        correctAnswer: 2
    },
    {
        question: "If a variable is defined outside of function, it is a ______ variable",
        answers: ["Local", "Static", "Global", "Dynamic"],
        correctAnswer: 3
    },
]

let questionNumber = 0;
let seconds = 75;

const timer = document.getElementById('timer');
let timerInterval;
let temporaryMessageTimeout;

const quizHeader = document.getElementById('quiz-header');
const questions = document.getElementById('questions');
function setQuestion(num) {
    quizHeader.textContent = quiz[num].question;
    const answers = quiz[num].answers;
    document.getElementById('answer1').innerHTML = "1. " + answers[0]
    document.getElementById('answer2').innerHTML = "2. " + answers[1]
    document.getElementById('answer3').innerHTML = "3. " + answers[2]
    document.getElementById('answer4').innerHTML = "4. " + answers[3]
}

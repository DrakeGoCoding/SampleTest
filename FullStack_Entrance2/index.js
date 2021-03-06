import "./problem.js"

import { shuffleArray } from './utils.js'

const QUIZSET = [
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which country will host the 2020 Summer Olympics?",
        "correct_answer": "Japan",
        "incorrect_answers": ["China", "Australia", "Germany"]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the 2016 Formula 1 World Driver&#039;s Championship?",
        "correct_answer": "Nico Rosberg",
        "incorrect_answers": ["Lewis Hamilton", "Max Verstappen", "Kimi Raikkonen"]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the most common type of pitch thrown by pitchers in baseball?",
        "correct_answer": "Fastball",
        "incorrect_answers": ["Slowball", "Screwball", "Palmball"]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is often called &quot;the Maestro&quot; in the men&#039;s tennis circuit?",
        "correct_answer": "Roger Federer",
        "incorrect_answers": ["Bill Tilden", "Boris Becker", "Pete Sampras"]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "&quot;Stadium of Light&quot; is the home stadium for which soccer team?",
        "correct_answer": "Sunderland FC",
        "incorrect_answers": ["Barcelona FC", "Paris Saints-Germain", "Manchester United"]
    }
]

class QuizGame {
    quizSet;
    quizIndex;
    correctAnswerCount;

    /**
     * 
     * @param {Array} quizSet 
     */
    constructor(quizSet) {
        this.quizSet = quizSet;
    }

    shuffleQuiz() {
        this.quizSet = shuffleArray(this.quizSet);
        this.quizSet.forEach(quiz => shuffleArray(quiz.incorrect_answers));
    }

    startGame() {
        quizZoneParent.style.display = "block";
        quizIntro.style.filter = "blur(5px)";
        this.quizIndex = 0;
        this.correctAnswerCount = 0;
        this.shuffleQuiz();
        this.nextQuiz();
    }

    endGame() {
        quizZoneParent.style.display = "none";
        quizIntro.style.filter = "blur(0px)";
        alert(`Game Over.\nResult: ${this.correctAnswerCount}/${this.quizSet.length}`)
    }

    displayQuiz(index, quiz) {
        quizCount.innerHTML = `Quiz: ${++index}/${this.quizSet.length}`;
        quizTitle.innerHTML = quiz.question;
        const answers = shuffleArray(quiz.incorrect_answers.concat(quiz.correct_answer));
        for (let i = 0; i < answerBtns.length; i++) {
            let answerBtn = answerBtns[i];
            answerBtn.innerHTML = answers[i];
        }
    }

    nextQuiz() {
        this.prepareNextQuiz();
        currentQuiz = this.quizSet[this.quizIndex];
        if (currentQuiz)
            this.displayQuiz(this.quizIndex++, currentQuiz);
        else
            this.endGame();
    }

    checkAnswer(quiz, userAnswer) {
        return userAnswer === quiz.correct_answer;
    }

    showResult(quiz, userAnswer) {
        let isCorrectAnswer = this.checkAnswer(quiz, userAnswer);
        if (isCorrectAnswer) {
            this.correctAnswerCount++;
            currentAnswerBtn.style.background = "#2095F3";
            currentAnswerBtn.style.color = "white";
            quizResult.innerHTML = "Correct!";
        }
        else {
            currentAnswerBtn.style.background = "#ff4a5a";
            currentAnswerBtn.style.color = "white";
            quizResult.innerHTML = "Incorrect!";
        }
        quizBottomContainer.style.display = "block";
    }

    prepareNextQuiz() {
        isChosen = false;
        quizZone.classList.remove("animate");
        quizZone.classList.add("animate");
        answerBtns.forEach(button => button.setAttribute('style', ''));
        quizBottomContainer.style.display = "none";
    }
}

let quizIntro = document.querySelector("section");
let quizZoneParent = document.querySelector(".quiz-container");
let quizZone = document.querySelector(".quiz-zone");
let quizBottomContainer = document.querySelector(".bottom-container");

let startGameBtn = document.querySelector("#start-button");
let answerBtns = document.querySelectorAll(".answer-container");
let nextBtn = document.querySelector("#next-button");
let exitBtn = document.querySelector("#X");

let quizTitle = document.querySelector("#quiz-title");
let quizCount = document.querySelector("#quiz-count");
let quizResult = document.querySelector("#quiz-result");

let isChosen = false;

let currentQuiz;
let currentAnswer;
let currentAnswerBtn;

let quizGame = new QuizGame(QUIZSET);

startGameBtn.addEventListener("click", () => quizGame.startGame());
exitBtn.addEventListener("click", () => quizGame.endGame());
nextBtn.addEventListener("click", () => quizGame.nextQuiz());

answerBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (!isChosen) {
            currentAnswerBtn = button;
            currentAnswer = button.innerHTML;
            quizGame.showResult(currentQuiz, currentAnswer);
            isChosen = true;
        }
    })
});
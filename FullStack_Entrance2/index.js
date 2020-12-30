import * as Problem from "./problem.js"

const arr1 = [1, 2, "a"]
const arr2 = [1, 3, "b"]
console.log(Problem.removeDupFrom2Array(arr1, arr2));

const teamList = [
    {
        name: 'Arsenal',
        points: 99,
        GD: 45
    },
    {
        name: 'Chelsea',
        points: 75,
        GD: 39
    },
    {
        name: 'Manchester United',
        points: 60,
        GD: 29
    },
    {
        name: 'Liverpool',
        points: 88,
        GD: 39
    }
]
console.log(Problem.sortRank(teamList));

function shuffleArray(array) {
    let j, tmp;
    for (let i = array.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }
    return array;
}

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

    /**
     * 
     * @param {Array} quizSet 
     */
    constructor(quizSet) {
        this.quizSet = quizSet;
    }

    shuffleQuestion() {
        this.quizSet = shuffleArray(this.quizSet);
        this.quizSet.forEach(quiz => shuffleArray(quiz.incorrect_answers));
    }

    startGame(){
        quizIndex = 0;
        correctAnswerCount = 0;
        this.nextQuiz();
    }

    endGame(){
        quizZoneParent.style.display = "none";
        quizIntro.style.filter = "blur(0px)";
        alert(`Game Over.\n Results: ${correctAnswerCount}/${this.quizSet.length}`)
    }

    displayQuiz(index, quiz){
        index += 1;
        quizCount.innerHTML = `Quiz: ${index}/${this.quizSet.length}`;
        quizTitle.innerHTML = quiz.question;
        const answers = shuffleArray(quiz.incorrect_answers.concat(quiz.correct_answer));
        for (let i = 0 ; i < answerBtns.length; i++){
            let answerBtn = answerBtns[i];
            answerBtn.children[0].innerHTML = answers[i];
        }
    }

    nextQuiz() {
        this.prepareNextQuiz();
        currentQuiz = this.quizSet[quizIndex];
        if (currentQuiz)
            this.displayQuiz(quizIndex++, currentQuiz);
        else
            this.endGame();
    }

    checkAnswer(quiz, userAnswer) {
        return userAnswer === quiz.correct_answer;
    }

    showAnswer(quiz, userAnswer) {
        let isCorrectAnswer = this.checkAnswer(quiz, userAnswer);
        if (isCorrectAnswer) {
            correctAnswerCount++;
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
        answerBtns.forEach(button => {
            let oldButton = button.setAttribute('style', '');
            return oldButton;
        });
        quizZone.classList.add("animate");
        quizBottomContainer.style.display = "none";
    }
}

let quizIntro = document.querySelector("section");
let quizZoneParent = document.querySelector(".quiz-zone-parent");
let quizZone = document.querySelector(".quiz-zone");
let quizZoneQuestion = document.querySelector(".quiz-zone-question");
let quizBottomContainer = document.querySelector(".bottom-container");

let startGameBtn = document.querySelector(".start-button");
let answerBtns = document.querySelectorAll(".quiz-container");
let nextBtn = document.querySelector(".next-button");
let exitBtn = document.querySelector(".X");

let quizTitle = document.querySelector(".quiz");
let quizCount = document.querySelector(".quiz-count");
let quizResult = document.querySelector(".quiz-result");

let quizIndex = 0;
let correctAnswerCount = 0;
let isChosen = false;

let currentQuiz;
let currentAnswer;
let currentAnswerBtn;

let quizGame;

startGameBtn.addEventListener("click", () => {
    quizGame = new QuizGame(QUIZSET);
    quizZoneParent.style.display = "block";
    quizIntro.style.filter = "blur(5px)";
    quizGame.startGame();
});

exitBtn.addEventListener("click", () => {
    quizZoneParent.style.display = "none";
    quizIntro.style.filter = "blur(0px)";
    quizGame.endGame();
});

nextBtn.addEventListener("click", () => {
    quizGame.nextQuiz();
})

answerBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (!isChosen) {
            currentAnswerBtn = button;
            currentAnswer = button.children[0].innerHTML;
            quizGame.showAnswer(currentQuiz, currentAnswer);
            isChosen = true;
        }
    })
});
const startButton = document.getElementById('startBtn')
const introText = document.getElementById('intro')
const questionLoad = document.getElementById('questionLoad')
const choicesLoad = document.getElementById('choicesLoad')
const choiceButton = document.getElementById('choiceButton')
let scoreCount = document.getElementById('scoreCounter')
let timeLeft = document.getElementById('timeLeft')
const win = document.getElementById('win')
const lose = document.getElementById('lose')
const quizBox = document.getElementById('quizBox')
const timeHaha = document.getElementById('timeHAHA')
const scoreButton = document.getElementById('saveScore')
const saveSpace = document.getElementById('saveSpace')
const saveLoad = document.getElementById('saveLoad')
const leaderboardText = document.getElementById('lolLeader')
const saveButton = document.getElementById('saveButton')
let savedName = document.getElementById('saved-name')
const saveAlert = document.getElementById('saveAlert')
startButton.addEventListener("click", quizInitial)
saveButton.addEventListener("click", localRun)
saveButton.addEventListener("click", saveShow)
saveLoad.addEventListener("click", showSaveArea)


document.addEventListener("click", event => {
    if(event.target.classList.contains('choices')) {
        if (event.target.dataset.choices == event.target.dataset.answer) {
            console.log('correct!')
            score += 1
            currentQuestion += 1
            if(currentQuestion == questionArray.length) {
                quizBox.classList.add('quizEnd')
                quizBox.classList.remove('quiz')
                timeLeft.classList.add('timeGone')
                timeLeft.classList.remove('timesLeft')
                timeHaha.innerHTML = `<h4 class="timesLeft" id="timeLeft">Time Left:</h4>`
                lose.innerHTML = `<p class="quizFinal">Quiz Finished!</p>
                <button onClick="window.location.reload();" class="tryAgain">Try Again?</button>`
                finalScore()
            }
            scoreLoad()
            quizLoad()
        } else {
            time -= 10
        }
    }
})


let currentQuestion = 0
let score = 0
let time = 120

let questionArray = [
    {
        question: 'Which answer is not a primitive data type?',
        choices: ['Boolean', 'Number', 'String', 'Variable'],
        answer: 'Variable'
    },
    {
        question: 'What does DOM stand for?',
        choices: ['Digital Object Model', 'Data Object Model', 'Document Object Model', 'Destroy Object Model'],
        answer: 'Document Object Model'
    },
    {
        question: 'What does JSON stand for?',
        choices: ['JavaScript Object Notation', 'JavaScript Object Node', 'JavaScript Object Nodule', 'JavaScript Objective Notation'],
        answer: 'JavaScript Object Notation'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        choices: ['/', '=', '?', '-'],
        answer: '/'
    },
    {
        question: 'What is the correct way to call a class in CSS?',
        choices: ['!class', '#class', '@class', '.class'],
        answer: '.class'
    },
]

function quizLoad() {
    introText.classList.add('introHidden')
    introText.classList.remove('intro')

    questionLoad.innerHTML = `
    <p class="question">${questionArray[currentQuestion].question}
    `

    choicesLoad.innerHTML = `
    <button id="choiceButton" class="choices" data-choices='${questionArray[currentQuestion].choices[0]}' data-answer='${questionArray[currentQuestion].answer}'>${questionArray[currentQuestion].choices[0]}</button>
    <button id="choiceButton" class="choices" data-choices='${questionArray[currentQuestion].choices[1]}' data-answer='${questionArray[currentQuestion].answer}'>${questionArray[currentQuestion].choices[1]}</button>
    <button id="choiceButton" class="choices" data-choices='${questionArray[currentQuestion].choices[2]}' data-answer='${questionArray[currentQuestion].answer}'>${questionArray[currentQuestion].choices[2]}</button>
    <button id="choiceButton" class="choices" data-choices='${questionArray[currentQuestion].choices[3]}' data-answer='${questionArray[currentQuestion].answer}'>${questionArray[currentQuestion].choices[3]}</button>
    `
}

function quizInitial() {
    startButton.removeEventListener("click", quizInitial)
    introText.classList.add('introHidden')
    introText.classList.remove('intro')
    setInterval(timeCounter, 1000)

    questionLoad.innerHTML = `
    <p class="question">${questionArray[currentQuestion].question}
    `

    choicesLoad.innerHTML = `
    <button id="choiceButton" class="choices" data-choices='${questionArray[currentQuestion].choices[0]}' data-answer='${questionArray[currentQuestion].answer}'>${questionArray[currentQuestion].choices[0]}</button>
    <button id="choiceButton" class="choices" data-choices='${questionArray[currentQuestion].choices[1]}' data-answer='${questionArray[currentQuestion].answer}'>${questionArray[currentQuestion].choices[1]}</button>
    <button id="choiceButton" class="choices" data-choices='${questionArray[currentQuestion].choices[2]}' data-answer='${questionArray[currentQuestion].answer}'>${questionArray[currentQuestion].choices[2]}</button>
    <button id="choiceButton" class="choices" data-choices='${questionArray[currentQuestion].choices[3]}' data-answer='${questionArray[currentQuestion].answer}'>${questionArray[currentQuestion].choices[3]}</button>
    `
}


const timeCounter = () => {
    time -= 1
    timeLeft.textContent = `Time Left: ${time}s`
    if(time === 0) {
        timeLeft.classList.add('timeGone')
        timeLeft.classList.remove('timesLeft')
        quizBox.classList.add('quizEnd')
        quizBox.classList.remove('quiz')
        lose.innerHTML = `<p class="lose">YOU LOSE!</p>
        <button onClick="window.location.reload();" class="tryAgain">Try Again?</button>`
        timeHaha.innerHTML = `<h4 class="timeOut" id="timeLeft">Time Left: 0</h4>`

    }
}

const scoreLoad = () => {
    scoreCount.textContent = `Score: ${score}` 
}

function finalScore () {
    if (score == 5) {
        scoreCount.classList.add('scoreWin')
        scoreCount.classList.add('score')
    }
}

function localRun() {
    let newScore = {
        scoreValue: score,
        name: savedName.value
    }
    let scores = []
    scores.push(newScore)
    localStorage.setItem('scores', JSON.stringify (scores))
    let calledScore = JSON.parse(localStorage.getItem('scores'))
    console.log(calledScore)
    leaderboardText.innerHTML = `
    <div class="leader1">
                    <h3>Dylan: 4</h3>
                </div>
                <div class="leader2">
                    <h3>Alex: 1</h3>
                </div>
                <div class="leader1">
                    <h3>Sammy: 5</h3>
                </div>
                <div class="leader2">
                    <h3>John: 4</h3>
                </div>
                <div class="leader1">
                    <h3>${calledScore[0].name}: ${calledScore[0].scoreValue}</h3>
                </div>
    `
}

function saveShow() {
    saveAlert.classList.add('saveAlert')
    saveAlert.classList.remove('saveAlertHidden')
}

function showSaveArea() {
    saveSpace.classList.add('saveArea')
    saveSpace.classList.remove('saveAreaHidden')
}
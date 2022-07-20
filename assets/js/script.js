const startButton = document.getElementById('startBtn')
const introText = document.getElementById('intro')
let timeLeft = document.getElementById('timeLeft')
const questionLoad = document.getElementById('questionLoad')
const choicesLoad = document.getElementById('choicesLoad')
startButton.addEventListener("click", quizLoad)



let currentQuestion = 0

let questionArray = [
    {
        question: 'Which answer is not a primitive data type?',
        choices: ['Boolean', 'Number', 'String', 'Undefined', 'Variable'],
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
        choices: ['/', '=', '?', '|', '-'],
        answer: '/'
    },
    {
        question: 'What is the correct way to call a class in CSS?',
        choices: ['!class', '#class', '@class', '.class', '*class'],
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
    <button id="choiceButton" class="choices">${questionArray[currentQuestion].choices[0]}
    <button id="choiceButton" class="choices">${questionArray[currentQuestion].choices[1]}
    <button id="choiceButton" class="choices">${questionArray[currentQuestion].choices[2]}
    <button id="choiceButton" class="choices">${questionArray[currentQuestion].choices[3]}
    <button id="choiceButton" class="choices">${questionArray[currentQuestion].choices[4]}
    `
}










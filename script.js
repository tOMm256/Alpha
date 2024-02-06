const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre:"WHO",
        questions: [
            {
                question: "Who was the first President of Russia?",
                answers: ["Boris Eltsin", "Stanislav Shushkevich"],
                correct: "Boris Eltsin",
                level: "easy",
            }, 
            {
                question: "Who is the prime minister of the UK?",
                answers: ["Boris Johnson", "Rishi Sunak"],
                correct: "Rishi Sunak",
                level: "medium",
            }, 
            {
                question: "Who is the author of Black Castle Olshansky?",
                answers: ["Pimen Panchenko", "Vladimir Korotkevich"],
                correct: "Vladimir Korotkevich",
                level: "hard",
            }, 
        ]
    },


    {
        genre:"WHERE",
        questions: [
            {
                question: "Where is Louvre?",
                answers: ["Berlin", "Paris"],
                correct: "Paris",
                level: "easy",
            }, 
            {
                question: "Where is Hoover Dam?",
                answers: ["USA", "Germany"],
                correct: "USA",
                level: "medium",
            }, 
            {
                question: "Where is the geographical center of Belarus?",
                answers: ["near Dzerzhinsk", "near Marina Gorka"],
                correct: "near Marina Gorka",
                level: "hard",
            },  
        ]
    },

    {
        genre:"WHEN",
        questions: [
            {
                question: "When was the WW2 begun?",
                answers: ["1939", "1941"],
                correct: "1939",
                level: "easy",
            }, 
            {
                question: "When Aleksander Pushkin was shot?",
                answers: ["1837", "1845"],
                correct: "1837",
                level: "medium",
            }, 
            {
                question: "When operation Bagration was started?",
                answers: ["1943", "1944"],
                correct: "1944",
                level: "hard",
            },  
        ]
    },

    {
        genre:"WHAT",
        questions: [
            {
                question: "What is Madrid?",
                answers: ["capital of Portugal", "capital of Spain"],
                correct: "capital of Spain",
                level: "easy",
            }, 
            {
                question: "What ocean is the biggest?",
                answers: ["Atlantic", "Pacific"],
                correct: "Pacific",
                level: "medium",
            }, 
            {
                question: "What is Quantic Dream?",
                answers: ["game developer", "movie studio"],
                correct: "game developer",
                level: "hard",
            },  
        ]
    },

    {
        genre:"HOW MANY",
        questions: [
            {
                question: "How many people live on Earth?(2024)",
                answers: ["8.1 bil", "7.8 bil"],
                correct: "8.1 bil",
                level: "easy",
            }, 
            {
                question: "How many stars on American flag?",
                answers: ["50", "52"],
                correct: "50",
                level: "medium",
            }, 
            {
                question: "How many districts in Minsk?",
                answers: ["9", "8"],
                correct: "9",
                level: "hard",
            },  
        ]
    },
]

let score = 0

function addCategory(category){
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.level === 'easy') {
            card.innerHTML = 100
        }
        if (question.level === 'medium') {
            card.innerHTML = 200
        }
        if (question.level === 'hard') {
            card.innerHTML = 300
        }

        card.setAttribute('data-question', question.question)
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.getInnerHTML())

        card.addEventListener('click', flipCard)
    })
}

jeopardyCategories.forEach(category => addCategory(category))

function flipCard() {
    this.innerHTML = ""
    this.style.fontSize = "15px"
    this.style.lineHeight = "30px"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute('data-question')
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')
    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')
    firstButton.addEventListener('click', getResult)
    secondButton.addEventListener('click', getResult)
    this.append(textDisplay, firstButton, secondButton)

   const allCards = Array.from(document.querySelector('.card'))
   allCards.forEach(card => card.removeEventListener('click', flipCard))
}


function getResult(){
   const allCards = Array.from(document.querySelectorAll('.card'))
   allCards.forEach(card => card.addEventListener('click', flipCard))

    const cardOfButton = this.parentElement

    if(cardOfButton.getAttribute('data-correct') == this.innerHTML){
        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild){
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')

        }, 100)
    } else {
    cardOfButton.classList.add('wrong-answer')
    setTimeout(() => {
        while (cardOfButton.firstChild){
            cardOfButton.removeChild(cardOfButton.lastChild)
        }
        cardOfButton.innerHTML = 0
    }, 100)
    }
    cardOfButton.removeEventListener('click', flipCard)
}

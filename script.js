const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeopardyCategories = [
    {
        genre:"WHO",
        questions: [
            {
                question: "Who was the first President of Russian Federation?",
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

function addCategory(category){
    const column = document.createElement('div')
    column.classList.add('genre-column')

    const genreTitle = document.createElement('div')
    genreTitle.classList.add('genre-title')
    genreTitle.innerText = category.genre

    column.appendChild(genreTitle)
    game.append(column)
}

jeopardyCategories.forEach(category => addCategory(category))
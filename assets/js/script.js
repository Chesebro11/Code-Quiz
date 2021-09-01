// Starting questions here. Q = Prompt/questions O: options, A: Correct answer
var questions = [
    {
        Q: "Commonly used data types do not include:",
        O: ["strings", "booleans", "alerts", "integers"],
        A: "alerts"
    },
    {
        Q: "The condition in an if / else statement is enclosed within ___.",
        O: ["quotes", "curly brackets", "parentheses", "square brackets"],
        A: "parentheses"
    },
    {
        Q: "What language is primarily used to style an HTML document?",
        O: ["CSS", "C#", "Python", "All Of The Above"],
        A: "CSS"
    },
    {
        Q: "What is the variable Boolean used to represent?",
        O: ["Numbers", "True/False", "Nothing", "Apples"],
        A: "True/False"
    },
    {
        Q: "Arrays in Javascript can be used to store ___.",
        O: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        A: "all of the above"
    },
    {
        Q: "An incredibly useful used during development and debugging for printing content to the debugger is:",
        O: ["GitBash", "console log", "for loops", "CSS"],
        A: "console log"
    }
];

//Declared Variables
var score = 0;
var questionIndex = 0;

//query selectors
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Timer Variables
var timeLeft = 60;
// 10 seconds off for every incorrect answer
var penalty = 10;
// holds interval time
var holdInterval = 0;
// Create new element
var ulCreate = document.createElement("ul");

// Starts timer on button press, shows a display
timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        // starts timer going down, interval of 1 second
        holdInterval = setInterval(function() {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if (secondsLeft = 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Times up!";
            }
        }, 1000);
    }
    render(questions);
});

// Render the actual questions and choices
function render(questions) {
    // ensures any existing data gets cleared
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
// for loop to go through everything in the arrays
    for (var i = 0; i < questions.length; i++) {
        //appends question title
        var quizQuestion = questions[questionIndex].Q;
        var quizOptions = questions[questionIndex].O;
        questionsDiv.textContent = quizQuestion;
    }
}
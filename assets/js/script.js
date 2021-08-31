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
// Create new element
var ulCreate = document.createElement("ul");
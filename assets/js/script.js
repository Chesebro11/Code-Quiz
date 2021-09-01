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
startTime.addEventListener("click", function() {
    if (holdInterval === 0) {
        // starts timer going down, interval of 1 second
        holdInterval = setInterval(function() {
            timeLeft--;
            currentTime.textContent = "Time: " + timeLeft;

            if (secondsLeft = 0) {
                clearInterval(holdInterval);
                theEnd();
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
    };
    quizOptions.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (check));
        
    })
};

function check(event) {
    var element = event.target;

    if (element.matches('li')) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // if its correct increase score and notify user
        if (element.textContent == questions[questionIndex].A) {
            score++;
            createDiv.textContent = "Correct! The answer is: " +questions[questionIndex].A;
        }
        else {
            // if incorrect reduce time by penalty inform user of correct answer
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "That was incorrect, the correct answer is: " + questions[questionIndex].A;
        }
    }
    questionIndex++;

    if (questionIndex >= questions.length) {
        theEnd();
        createDiv.textContent = "The quiz is over! " + "" + "You scored " + score + " points!";
    }
    else {
        render(questions);
    };
    questionsDiv.appendChild(createDiv);
};

function theEnd() {
    questionsDiv.innerHTML = '';
    currentTime.innerHTML = '';

    // Heading
    var createH1 = document.createElement('h1');
    createH1.setAttribute("id", 'createH1');
    createH1.textContent = "The End!"
    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    if (timeLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement('p');
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + (timeRemaining+score);

        questionsDiv.appendChild(createP2);
    }
    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./highscores.html");
        }
    });

}
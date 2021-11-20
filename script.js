const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich"
    ],
    correctAnswer: "Brendan Eich"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [
      "Node.js",
      "TypeScript",
      "npm"
    ],
    correctAnswer: "npm"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [
      "Angular",
      "jQuery",
      "RequireJS",
      "ESLint"
    ],
    correctAnswer: "ESLint"
  }
];
let index = 0;
let time = 200;
let timerId;
let startbuttonEl = document.getElementById("startbutton");
let timeEl = document.getElementById("time");
let startDivEl = document.getElementById("startdiv");
let questionsDivEl = document.getElementById("questionsdiv")
let currentquestionEl = document.getElementById("currentquestion")
let answerdiv = document.getElementById("choicesdiv")

function handleTick() {
  time--;
  timeEl.textContent = time
  if (time <= 0) {
    endgame()
  }
}
function beginTheQuiz() {
  startDivEl.setAttribute("class", "hidden");

  questionsDivEl.removeAttribute("class")

  timerId = setInterval(handleTick, 1000);
  timeEl.innerText = time
  displayquestion(index)
}

startbuttonEl.onclick = beginTheQuiz;

function displayquestion(questionindex) {
  var question = myQuestions[questionindex]
  console.log(question.question)
  currentquestionEl.innerText = (question.question)
  console.log(question.answers)
  answerdiv.innerHTML = ""
  for (var i = 0; i < question.answers.length; i++) {
    var answerbttn = document.createElement("button");
    answerbttn.setAttribute("value", question.answers[i]
    )
    answerbttn.textContent = question.answers[i]
    answerbttn.onclick = answerclick
    answerdiv.appendChild(answerbttn)
  }

}
function answerclick() {
  // compare value of button user to correct answer of question object 
  if (this.value === myQuestions[index].correctAnswer) {
    console.log("correct")
  } else {
    console.log("wrong")
    //  if question doesnt match we want to deduct time 
    time -= 15
    if (time < 0) {
      time = 0

    }
  }


  // move to move next question by incrementing index 
  index++

  // check to see if at end of question array if are end the game if not render the next question
  if (index === myQuestions.length) {
    endgame()
  } else {
    displayquestion(index)
  }

}
function endgame() {
  // stop timer 
  clearInterval(timerId);
  // show end screene 
  var endscreen = document.getElementById("endgame")
  endscreen.removeAttribute("class")
  // show final score

  // hide question div   
 
  questionsDivEl.setAttribute("class", "hidden")
}


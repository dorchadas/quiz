const questions = [
    {
        question: "What Comes after A?",
        answers: [
            { text: "B", correct: true },
            { text: "K", correct: false },
            { text: "C", correct: false },
            { text: "O", correct: false },
        ],
    },
    {
        question: "What do you call a person who cant see?",
        answers: [
            { text: "blind", correct: true },
            { text: "Deaf", correct: false },
            { text: "Human", correct: false },
            { text: "Racist", correct: false },
        ],
    },
    {
        question: "How does the person who invented language with out any language",
        answers: [
            { text: "By talking random words", correct: false },
            { text: "He was from the future", correct: false },
            { text: "By having 9000 Iq", correct: false },
            { text: "None Of the Abhove", correct: true },
        ],
    },
    {
        question:
            "What comes after friday'?",
        answers: [
            { text: "Holiday", correct: false },
            { text: "Saturday", correct: true },
            { text: "Happy Saturday", correct: false },
            { text: "Lonely Saterday", correct: false },
        ],
    },

    {
      question: "What Is the Full form of Alt?",
      answers: [
          { text: "ALternative", correct: true },
          { text: "A lemon tea", correct: false },
          { text: "A long time", correct: false },
          { text: "A left note", correct: false },
      ],
  },
  {
    question: "When was Arthur born?",
    answers: [
        { text: "1984", correct: false },
        { text: "2004", correct: false },
        { text: "Never Born", correct: false },
        { text: "Who is Arthur?", correct: true },
    ],
},
{
  question: "How many language does nepal have?",
  answers: [
      { text: "1", correct: false },
      { text: "3456", correct: false },
      { text: "90001", correct: false },
      { text: "127", correct: true },
  ],
},
];

let score = 0;
let currentQuestionIndex = 0;

const questionContainer = document.getElementById("question");
const nextBtn = document.getElementById("next");
const answerContainer = document.getElementById("mainanswer");
const questionStatus = document.getElementById("numb");

const startPage = document.getElementById("start-page");
const quizPage = document.querySelector(".box");
const startBtn = document.getElementById("start-btn");
// const visible = document.querySelector(".visible")


startBtn.addEventListener("click", () => {
  // visible.style.display ="hidden"
  startPage.style.display= "none";  
  quizPage.classList.remove("hidden");  
  startQuiz();  
});


const startQuiz = () => {
    score = 0;
    currentQuestionIndex = 0;
  
    nextBtn.innerText = "Next";
    nextBtn.style.display = "none";
    questionStatus.style.display = "block";
  
  
    showQuestion();
  };

  startBtn.addEventListener("click", startQuiz);


  const showQuestion = () => {
    nextBtn.style.display = "none";
  const question = questions[currentQuestionIndex].question;
  const questionNumber = currentQuestionIndex + 1;

  questionContainer.innerText = `${questionNumber}. ${question}`;

  questionStatus.innerText = `${questionNumber} of ${questions.length} questions`;

  removeAnswer();

  const answers = questions[currentQuestionIndex].answers;

  answers.forEach((answer) => {
    const ansBtn = document.createElement("button");
    ansBtn.classList.add("ans-btn");
    ansBtn.innerText = answer.text;
    answerContainer.appendChild(ansBtn);

    if (answer.correct) {
      ansBtn.dataset.correct = answer.correct;
    }
    ansBtn.addEventListener("click", selectAnswer);
  });
};

const selectAnswer = (e) => {
  nextBtn.style.display = "block";
  const selectedAnswer = e.target;
  const isCorrect = selectedAnswer.dataset.correct === "true";

  if (isCorrect) {
    selectedAnswer.classList.add("correct");
    score++;
  } else {
    selectedAnswer.classList.add("incorrect");
  }
  Array.from(answerContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
};

const removeAnswer = () => {
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
};

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
        showScore();
    }
  } else {
    startQuiz();
  }
});

const showScore = () => {

    removeAnswer()
  questionContainer.innerText = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
  
  questionStatus.style.display = "none";
};

startQuiz();
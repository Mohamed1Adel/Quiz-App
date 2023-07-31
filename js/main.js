const quizData = [
  {
    question: "How old id Florin ?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "What the must used programming language in 2019 ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "a",
  },
  {
    question: "Who is the president of Us at 2020?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stands for ?",
    a: "HyperText Markup Language",
    b: "cascading Style Sheet",
    c: "Json Object Notation",
    d: "Application programming interface",
    correct: "a",
  },
  {
    question: "What Year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer");
const quiz = document.querySelector(".quiz")
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelect()
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}
function getSelected() {
  console.log("hio");

  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
    // console.log(answerEl.checked);

});
return answer;
}

function deSelect(){
    answersEls.forEach((answerEl) => {
       answerEl.checked = false
})
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if(answer === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered correctly ${score} / ${quizData.length} questions</h2> <button onClick="location.reload()">Reload</button>`
    }
  }
});

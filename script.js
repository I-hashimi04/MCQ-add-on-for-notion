const questions = Array.isArray(window.quizQuestions) ? window.quizQuestions : [];

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");

const startButton = document.querySelector("#start-button");
const submitButton = document.querySelector("#submit-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const tryAgainButton = document.querySelector("#try-again-button");

const liveScore = document.querySelector("#live-score");
const questionTotal = document.querySelector("#question-total");
const progressText = document.querySelector("#progress-text");
const topicText = document.querySelector("#topic-text");
const progressFill = document.querySelector("#progress-fill");
const questionText = document.querySelector("#question-text");
const options = document.querySelector("#options");
const feedback = document.querySelector("#feedback");
const resultTitle = document.querySelector("#result-title");
const resultScore = document.querySelector("#result-score");
const resultMessage = document.querySelector("#result-message");
const reviewList = document.querySelector("#review-list");

let currentIndex = 0;
let selectedIndex = null;
let score = 0;
let hasSubmitted = false;
let attempts = [];

function initialise() {
  questionTotal.textContent = String(questions.length);
  liveScore.textContent = "0";

  if (questions.length === 0) {
    startScreen.innerHTML = `
      <h2>No questions found</h2>
      <p class="muted">Add at least one question to <code>questions.js</code>, then refresh this page.</p>
    `;
    return;
  }

  startButton.addEventListener("click", startQuiz);
  submitButton.addEventListener("click", submitAnswer);
  nextButton.addEventListener("click", goToNextQuestion);
  restartButton.addEventListener("click", restartQuiz);
  tryAgainButton.addEventListener("click", restartQuiz);
}

function startQuiz() {
  currentIndex = 0;
  selectedIndex = null;
  score = 0;
  hasSubmitted = false;
  attempts = [];

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = questions[currentIndex];

  selectedIndex = null;
  hasSubmitted = false;

  progressText.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  topicText.textContent = currentQuestion.topic || "";
  progressFill.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;
  questionText.textContent = currentQuestion.question;
  feedback.classList.add("hidden");
  feedback.innerHTML = "";

  submitButton.disabled = true;
  submitButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
  nextButton.textContent = currentIndex === questions.length - 1 ? "Show result" : "Next question";
  liveScore.textContent = String(score);

  options.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option-button";
    optionButton.setAttribute("role", "radio");
    optionButton.setAttribute("aria-checked", "false");
    optionButton.dataset.index = String(index);
    optionButton.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${escapeHtml(option)}</span>
    `;

    optionButton.addEventListener("click", () => selectOption(index));
    options.appendChild(optionButton);
  });
}

function selectOption(index) {
  if (hasSubmitted) return;

  selectedIndex = index;
  submitButton.disabled = false;

  document.querySelectorAll(".option-button").forEach((button) => {
    button.setAttribute("aria-checked", button.dataset.index === String(index) ? "true" : "false");
  });
}

function submitAnswer() {
  if (selectedIndex === null || hasSubmitted) return;

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedIndex === currentQuestion.answer;
  hasSubmitted = true;

  if (isCorrect) score += 1;

  attempts.push({
    question: currentQuestion.question,
    selected: selectedIndex,
    correct: currentQuestion.answer,
    isCorrect,
  });

  document.querySelectorAll(".option-button").forEach((button) => {
    const buttonIndex = Number(button.dataset.index);
    button.disabled = true;

    if (buttonIndex === currentQuestion.answer) {
      button.classList.add("correct");
    }

    if (buttonIndex === selectedIndex && !isCorrect) {
      button.classList.add("incorrect");
    }
  });

  feedback.classList.remove("hidden");
  feedback.innerHTML = `
    <strong>${isCorrect ? "Correct" : "Incorrect"}</strong>
    <span>${escapeHtml(currentQuestion.explanation || "No explanation has been added for this question.")}</span>
  `;

  liveScore.textContent = String(score);
  submitButton.classList.add("hidden");
  nextButton.classList.remove("hidden");
}

function goToNextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  showResults();
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const percentage = Math.round((score / questions.length) * 100);

  resultTitle.textContent = percentage >= 80 ? "Strong performance" : percentage >= 50 ? "Good attempt" : "Needs review";
  resultScore.textContent = `${score}/${questions.length}`;
  resultMessage.textContent = `${percentage}% correct. Review any missed questions below, then repeat the quiz.`;

  reviewList.innerHTML = attempts.map((attempt, index) => {
    const question = questions[index];
    const selectedText = question.options[attempt.selected] || "No answer selected";
    const correctText = question.options[attempt.correct] || "Unknown";

    return `
      <article class="review-item">
        <p class="status">${attempt.isCorrect ? "Correct" : "Incorrect"}</p>
        <p><strong>Q${index + 1}.</strong> ${escapeHtml(attempt.question)}</p>
        <p class="muted">Your answer: ${escapeHtml(selectedText)}</p>
        ${attempt.isCorrect ? "" : `<p class="muted">Correct answer: ${escapeHtml(correctText)}</p>`}
      </article>
    `;
  }).join("");
}

function restartQuiz() {
  startQuiz();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

initialise();

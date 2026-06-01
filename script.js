const sourceQuestions = Array.isArray(window.quizQuestions) ? window.quizQuestions : [];

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

let sessionQuestions = [];
let currentIndex = 0;
let selectedIndex = null;
let score = 0;
let hasSubmitted = false;
let attempts = [];
let optionStates = [];

function initialise() {
  questionTotal.textContent = String(sourceQuestions.length);
  liveScore.textContent = "0";

  if (sourceQuestions.length === 0) {
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

  sessionQuestions = shuffle(sourceQuestions).map((question) => ({
    ...question,
    shuffledOptions: shuffle(
      question.options.map((text, originalIndex) => ({
        text,
        originalIndex,
        isCorrect: originalIndex === question.answer,
      }))
    ),
  }));

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = sessionQuestions[currentIndex];

  selectedIndex = null;
  hasSubmitted = false;
  optionStates = currentQuestion.shuffledOptions.map(() => ({ crossed: false, highlighted: false }));

  progressText.textContent = `Question ${currentIndex + 1} of ${sessionQuestions.length}`;
  topicText.textContent = currentQuestion.topic || "";
  progressFill.style.width = `${((currentIndex + 1) / sessionQuestions.length) * 100}%`;
  questionText.textContent = currentQuestion.question;
  feedback.classList.add("hidden");
  feedback.innerHTML = "";

  submitButton.disabled = true;
  submitButton.classList.remove("hidden");
  nextButton.classList.add("hidden");
  nextButton.textContent = currentIndex === sessionQuestions.length - 1 ? "Show result" : "Next question";
  liveScore.textContent = String(score);

  options.innerHTML = "";

  currentQuestion.shuffledOptions.forEach((option, index) => {
    const optionRow = document.createElement("div");
    optionRow.className = "option-row";
    optionRow.dataset.index = String(index);

    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "option-select";
    optionButton.setAttribute("role", "radio");
    optionButton.setAttribute("aria-checked", "false");
    optionButton.dataset.index = String(index);
    optionButton.innerHTML = `<span class="option-text">${escapeHtml(option.text)}</span>`;
    optionButton.addEventListener("click", () => selectOption(index));

    const actions = document.createElement("div");
    actions.className = "option-actions";
    actions.setAttribute("aria-label", "Option tools");

    const crossButton = document.createElement("button");
    crossButton.type = "button";
    crossButton.className = "option-tool cross";
    crossButton.textContent = "×";
    crossButton.title = "Cross out option";
    crossButton.setAttribute("aria-label", "Cross out option");
    crossButton.addEventListener("click", () => toggleCross(index));

    const highlightButton = document.createElement("button");
    highlightButton.type = "button";
    highlightButton.className = "option-tool highlight";
    highlightButton.textContent = "Mark";
    highlightButton.title = "Highlight option";
    highlightButton.setAttribute("aria-label", "Highlight option");
    highlightButton.addEventListener("click", () => toggleHighlight(index));

    actions.append(crossButton, highlightButton);
    optionRow.append(optionButton, actions);
    options.appendChild(optionRow);
  });
}

function selectOption(index) {
  if (hasSubmitted) return;

  selectedIndex = index;
  submitButton.disabled = false;

  document.querySelectorAll(".option-select").forEach((button) => {
    button.setAttribute("aria-checked", button.dataset.index === String(index) ? "true" : "false");
  });
}

function toggleCross(index) {
  if (hasSubmitted) return;

  optionStates[index].crossed = !optionStates[index].crossed;
  updateOptionStateClasses(index);
}

function toggleHighlight(index) {
  if (hasSubmitted) return;

  optionStates[index].highlighted = !optionStates[index].highlighted;
  updateOptionStateClasses(index);
}

function updateOptionStateClasses(index) {
  const row = options.querySelector(`.option-row[data-index="${index}"]`);
  if (!row) return;

  const crossButton = row.querySelector(".option-tool.cross");
  const highlightButton = row.querySelector(".option-tool.highlight");

  row.classList.toggle("crossed", optionStates[index].crossed);
  row.classList.toggle("highlighted", optionStates[index].highlighted);
  crossButton.classList.toggle("active", optionStates[index].crossed);
  crossButton.setAttribute("aria-pressed", String(optionStates[index].crossed));
  highlightButton.classList.toggle("active", optionStates[index].highlighted);
  highlightButton.setAttribute("aria-pressed", String(optionStates[index].highlighted));
}

function submitAnswer() {
  if (selectedIndex === null || hasSubmitted) return;

  const currentQuestion = sessionQuestions[currentIndex];
  const selectedOption = currentQuestion.shuffledOptions[selectedIndex];
  const correctDisplayIndex = currentQuestion.shuffledOptions.findIndex((option) => option.isCorrect);
  const correctOption = currentQuestion.shuffledOptions[correctDisplayIndex];
  const isCorrect = selectedOption?.isCorrect === true;

  hasSubmitted = true;

  if (isCorrect) score += 1;

  attempts.push({
    question: currentQuestion.question,
    selectedText: selectedOption?.text || "No answer selected",
    correctText: correctOption?.text || "Unknown",
    isCorrect,
  });

  document.querySelectorAll(".option-row").forEach((row) => {
    const rowIndex = Number(row.dataset.index);
    const selectButton = row.querySelector(".option-select");
    const toolButtons = row.querySelectorAll(".option-tool");

    selectButton.disabled = true;
    toolButtons.forEach((button) => {
      button.disabled = true;
    });

    if (rowIndex === correctDisplayIndex) {
      row.classList.add("correct");
    }

    if (rowIndex === selectedIndex && !isCorrect) {
      row.classList.add("incorrect");
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
  if (currentIndex < sessionQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  showResults();
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const percentage = Math.round((score / sessionQuestions.length) * 100);

  resultTitle.textContent = percentage >= 80 ? "Strong performance" : percentage >= 50 ? "Good attempt" : "Needs review";
  resultScore.textContent = `${score}/${sessionQuestions.length}`;
  resultMessage.textContent = `${percentage}% correct. Review any missed questions below, then repeat the quiz.`;

  reviewList.innerHTML = attempts.map((attempt, index) => `
    <article class="review-item">
      <p class="status">${attempt.isCorrect ? "Correct" : "Incorrect"}</p>
      <p><strong>Question ${index + 1}.</strong> ${escapeHtml(attempt.question)}</p>
      <p class="muted">Your answer: ${escapeHtml(attempt.selectedText)}</p>
      ${attempt.isCorrect ? "" : `<p class="muted">Correct answer: ${escapeHtml(attempt.correctText)}</p>`}
    </article>
  `).join("");
}

function restartQuiz() {
  startQuiz();
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
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

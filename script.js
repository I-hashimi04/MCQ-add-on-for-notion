const sourceQuestions = Array.isArray(window.quizQuestions) ? window.quizQuestions : [];

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");

const startButton = document.querySelector("#start-button");
const submitButton = document.querySelector("#submit-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const tryAgainButton = document.querySelector("#try-again-button");
const copySummaryButton = document.querySelector("#copy-summary-button");

const liveScore = document.querySelector("#live-score");
const questionTotal = document.querySelector("#question-total");
const progressText = document.querySelector("#progress-text");
const topicText = document.querySelector("#topic-text");
const progressFill = document.querySelector("#progress-fill");
const questionText = document.querySelector("#question-text");
const leadInText = document.querySelector("#lead-in-text");
const options = document.querySelector("#options");
const feedback = document.querySelector("#feedback");
const resultTitle = document.querySelector("#result-title");
const resultScore = document.querySelector("#result-score");
const resultMessage = document.querySelector("#result-message");
const priorityList = document.querySelector("#priority-list");
const topicBreakdown = document.querySelector("#topic-breakdown");
const componentBreakdown = document.querySelector("#component-breakdown");
const loBreakdown = document.querySelector("#lo-breakdown");
const disciplineBreakdown = document.querySelector("#discipline-breakdown");
const cognitiveBreakdown = document.querySelector("#cognitive-breakdown");
const notionSummaryText = document.querySelector("#notion-summary-text");
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
    startScreen.innerHTML = `<h2>No questions found</h2><p class="muted">Add at least one question to <code>questions.js</code>, then refresh this page.</p>`;
    return;
  }

  startButton.addEventListener("click", startQuiz);
  submitButton.addEventListener("click", submitAnswer);
  nextButton.addEventListener("click", goToNextQuestion);
  restartButton.addEventListener("click", restartQuiz);
  tryAgainButton.addEventListener("click", restartQuiz);
  copySummaryButton.addEventListener("click", selectNotionSummary);
}

function startQuiz() {
  currentIndex = 0;
  selectedIndex = null;
  score = 0;
  hasSubmitted = false;
  attempts = [];

  sessionQuestions = shuffle(sourceQuestions).map((question) => ({
    ...question,
    shuffledOptions: shuffle(question.options.map((text, originalIndex) => ({
      text,
      originalIndex,
      isCorrect: originalIndex === question.answer,
    }))),
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
  questionText.textContent = currentQuestion.question || currentQuestion.stem || "";
  leadInText.textContent = currentQuestion.leadIn || "";
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
    id: currentQuestion.id,
    question: currentQuestion.question || currentQuestion.stem || "",
    leadIn: currentQuestion.leadIn || "",
    selectedText: selectedOption?.text || "No answer selected",
    correctText: correctOption?.text || "Unknown",
    isCorrect,
    topic: currentQuestion.topic || "Uncategorised",
    component: currentQuestion.component || "Uncategorised",
    moduleLOs: normaliseArray(currentQuestion.moduleLOs),
    sessionLOs: normaliseArray(currentQuestion.sessionLOs),
    disciplines: normaliseArray(currentQuestion.disciplines),
    cognitiveLevel: currentQuestion.cognitiveLevel || "Uncategorised",
    revisionAction: currentQuestion.revisionAction || "Review this component and redo related questions.",
  });

  document.querySelectorAll(".option-row").forEach((row) => {
    const rowIndex = Number(row.dataset.index);
    const selectButton = row.querySelector(".option-select");
    const toolButtons = row.querySelectorAll(".option-tool");
    selectButton.disabled = true;
    toolButtons.forEach((button) => { button.disabled = true; });
    if (rowIndex === correctDisplayIndex) row.classList.add("correct");
    if (rowIndex === selectedIndex && !isCorrect) row.classList.add("incorrect");
  });

  feedback.classList.remove("hidden");
  feedback.innerHTML = `<strong>${isCorrect ? "Correct" : "Incorrect"}</strong><span>${escapeHtml(currentQuestion.explanation || "No explanation has been added for this question.")}</span>`;
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
  const breakdowns = buildAllBreakdowns(attempts);
  const priorities = buildPriorities(attempts);
  const summary = buildNotionSummary(percentage, breakdowns, priorities);

  resultTitle.textContent = percentage >= 80 ? "Strong performance" : percentage >= 50 ? "Good attempt" : "Needs review";
  resultScore.textContent = `${score}/${sessionQuestions.length}`;
  resultMessage.textContent = `${percentage}% correct. Use the breakdowns to identify which topics, LOs, disciplines and thinking levels need work.`;

  renderPriorities(priorities);
  renderBreakdown(topicBreakdown, breakdowns.topic);
  renderBreakdown(componentBreakdown, breakdowns.component);
  renderBreakdown(loBreakdown, breakdowns.moduleLO);
  renderBreakdown(disciplineBreakdown, breakdowns.discipline);
  renderBreakdown(cognitiveBreakdown, breakdowns.cognitiveLevel);
  notionSummaryText.value = summary;

  reviewList.innerHTML = attempts.map((attempt, index) => `
    <article class="review-item">
      <p class="status">${attempt.isCorrect ? "Correct" : "Incorrect"}</p>
      <p><strong>Question ${index + 1}.</strong> ${escapeHtml(attempt.question)}</p>
      ${attempt.leadIn ? `<p><strong>${escapeHtml(attempt.leadIn)}</strong></p>` : ""}
      <p class="muted">Your answer: ${escapeHtml(attempt.selectedText)}</p>
      ${attempt.isCorrect ? "" : `<p class="muted">Correct answer: ${escapeHtml(attempt.correctText)}</p>`}
      <p class="muted">Component: ${escapeHtml(attempt.component)} · Cognitive level: ${escapeHtml(attempt.cognitiveLevel)}</p>
    </article>
  `).join("");
}

function buildAllBreakdowns(items) {
  return {
    topic: buildBreakdown(items, (item) => [item.topic]),
    component: buildBreakdown(items, (item) => [item.component]),
    moduleLO: buildBreakdown(items, (item) => item.moduleLOs),
    discipline: buildBreakdown(items, (item) => item.disciplines),
    cognitiveLevel: buildBreakdown(items, (item) => [item.cognitiveLevel]),
  };
}

function buildBreakdown(items, getKeys) {
  const map = new Map();
  items.forEach((item) => {
    normaliseArray(getKeys(item)).forEach((key) => {
      if (!map.has(key)) map.set(key, { label: key, correct: 0, total: 0, revisionActions: new Set() });
      const entry = map.get(key);
      entry.total += 1;
      if (item.isCorrect) entry.correct += 1;
      if (!item.isCorrect && item.revisionAction) entry.revisionActions.add(item.revisionAction);
    });
  });
  return Array.from(map.values()).map((entry) => ({
    ...entry,
    percentage: Math.round((entry.correct / entry.total) * 100),
    revisionActions: Array.from(entry.revisionActions),
  })).sort((a, b) => a.percentage - b.percentage || b.total - a.total || a.label.localeCompare(b.label));
}

function buildPriorities(items) {
  const missed = items.filter((item) => !item.isCorrect);
  return buildBreakdown(items, (item) => [item.component])
    .filter((entry) => entry.correct < entry.total)
    .slice(0, 5)
    .map((entry) => {
      const relatedMisses = missed.filter((item) => item.component === entry.label);
      return {
        component: entry.label,
        score: `${entry.correct}/${entry.total}`,
        percentage: entry.percentage,
        topics: uniqueValues(relatedMisses.map((item) => item.topic)),
        cognitiveLevels: uniqueValues(relatedMisses.map((item) => item.cognitiveLevel)),
        actions: uniqueValues(relatedMisses.map((item) => item.revisionAction)),
      };
    });
}

function renderPriorities(items) {
  if (items.length === 0) {
    priorityList.innerHTML = `<article class="priority-item"><p><strong>No missed components in this session.</strong></p><p class="priority-meta">Repeat later with more questions to check retention.</p></article>`;
    return;
  }
  priorityList.innerHTML = items.map((item, index) => `
    <article class="priority-item">
      <p><strong>${index + 1}. ${escapeHtml(item.component)}</strong> — ${escapeHtml(item.score)} (${item.percentage}%)</p>
      <p class="priority-meta">Topic: ${escapeHtml(item.topics.join(", ") || "Uncategorised")} · Cognitive level: ${escapeHtml(item.cognitiveLevels.join(", ") || "Uncategorised")}</p>
      <p>${escapeHtml(item.actions[0] || "Review this component and redo related questions.")}</p>
    </article>
  `).join("");
}

function renderBreakdown(container, entries) {
  if (!entries.length) {
    container.innerHTML = `<p class="muted">No data yet.</p>`;
    return;
  }
  container.innerHTML = entries.map((entry) => `
    <div class="breakdown-row">
      <div class="breakdown-row-top"><span>${escapeHtml(entry.label)}</span><strong>${entry.correct}/${entry.total} (${entry.percentage}%)</strong></div>
      <div class="breakdown-bar" aria-hidden="true"><div class="breakdown-bar-fill" style="width: ${entry.percentage}%"></div></div>
    </div>
  `).join("");
}

function buildNotionSummary(percentage, breakdowns, priorities) {
  const date = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const actions = uniqueValues(priorities.flatMap((item) => item.actions).filter(Boolean));
  return [
    `Date: ${date}`,
    "Quiz: MCQ Practice",
    `Overall score: ${score}/${sessionQuestions.length} (${percentage}%)`,
    "",
    "Needs work:",
    `- Topics: ${formatWeakList(breakdowns.topic)}`,
    `- Components: ${priorities.map((item) => `${item.component} (${item.score})`).join(", ") || "None in this session"}`,
    `- Module LOs: ${formatWeakList(breakdowns.moduleLO)}`,
    `- Disciplines: ${formatWeakList(breakdowns.discipline)}`,
    `- Cognitive levels: ${formatWeakList(breakdowns.cognitiveLevel)}`,
    "",
    "Next actions:",
    ...(actions.length ? actions.slice(0, 6).map((action) => `- ${action}`) : ["- Repeat this set later to check retention."]),
    "",
    "Reflection:",
    "- What made the missed questions difficult?",
    "- Was the issue recall, mechanism, application, or interpretation?",
    "- What resource should be reviewed before retesting?",
  ].join("\n");
}

function formatWeakList(entries) {
  const weak = entries.filter((entry) => entry.correct < entry.total).slice(0, 5);
  return weak.length ? weak.map((entry) => `${entry.label} (${entry.correct}/${entry.total})`).join(", ") : "None in this session";
}

function selectNotionSummary() {
  notionSummaryText.focus();
  notionSummaryText.select();
  copySummaryButton.textContent = "Selected";
  setTimeout(() => { copySummaryButton.textContent = "Copy summary"; }, 1600);
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

function normaliseArray(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === "string" && value.trim()) return [value.trim()];
  return ["Uncategorised"];
}

function uniqueValues(values) {
  return Array.from(new Set(values.filter(Boolean)));
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

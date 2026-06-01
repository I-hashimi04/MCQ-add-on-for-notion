# MCQ add-on for Notion

A lightweight assessment-style multiple-choice quiz interface designed to be embedded inside a Notion page using GitHub Pages.

## Current features

- Five answer options per question.
- No A/B/C/D/E labels shown beside options.
- Answer options are shuffled each time a quiz session starts.
- Question order is shuffled each time a quiz session starts.
- Each option has a cross-out control for eliminating unlikely answers.
- Each option has a highlight control for marking answers to reconsider.
- Immediate correct/incorrect feedback after submission.
- End-of-session score and review.
- Performance breakdowns by topic, component, module LO, discipline and cognitive level.
- Priority revision list based on missed components.
- Selectable Notion summary for manual copy/paste into a Notion database.

## Files

- `index.html` contains the page structure.
- `style.css` controls the design.
- `script.js` controls the quiz behaviour and result breakdowns.
- `questions.js` contains the editable question bank.

## Editing questions

Open `questions.js` and edit the `window.quizQuestions` array.

Recommended metadata-rich format:

```js
{
  id: "thyroid-graves-pregnancy-001",
  module: "ELC",
  paper: "Paper 2",
  topic: "Thyroid",
  component: "Hyperthyroidism management in pregnancy",
  moduleLOs: ["LO4", "LO7", "LO9"],
  sessionLOs: [
    "Describe the causes, signs, symptoms and treatment of the common diseases causing hyper and hypothyroidism before and after birth"
  ],
  disciplines: ["pathology", "pharmacology", "clinical aspects"],
  cognitiveLevel: "apply",
  questionType: "single-best-answer",
  revisionAction: "Review Graves' disease treatment choices, especially PTU in the first trimester and radioactive iodine contraindication in pregnancy.",
  question: "A 27-year-old woman who is 9 weeks pregnant has weight loss, tremor and palpitations. Blood tests show suppressed TSH and raised free T4. Graves' disease is suspected.",
  leadIn: "Which treatment is the most appropriate antithyroid drug in the first trimester?",
  options: [
    "Propylthiouracil",
    "Carbimazole",
    "Radioactive iodine",
    "Levothyroxine",
    "Desmopressin"
  ],
  answer: 0,
  explanation: "Propylthiouracil is preferred in the first trimester. Carbimazole is usually avoided early in pregnancy, and radioactive iodine is contraindicated."
}
```

The `answer` value uses zero-based numbering based on the order written in `questions.js`:

- `0` = first option
- `1` = second option
- `2` = third option
- `3` = fourth option
- `4` = fifth option

The displayed order changes during practice, but the app still tracks the correct answer internally.

## Metadata fields

| Field | Purpose |
|---|---|
| `id` | Unique question identifier. |
| `module` | Module name, for example `ELC`. |
| `paper` | Paper or assessment group, for example `Paper 2`. |
| `topic` | Broad study area, for example `Thyroid`. |
| `component` | Specific assessable subtopic, for example `Hyperthyroidism management in pregnancy`. |
| `moduleLOs` | Module-level learning outcomes linked to the question. |
| `sessionLOs` | Session-level learning outcomes linked to the question. |
| `disciplines` | Subject lenses tested, for example anatomy, physiology, pharmacology or clinical aspects. |
| `cognitiveLevel` | Bloom-style level: `remember`, `understand`, `apply` or `analyse`. |
| `questionType` | Currently `single-best-answer`. |
| `revisionAction` | Action shown if the related component is missed. |
| `question` | Clinical stem or question stem. |
| `leadIn` | Precise cover-test style lead-in. |
| `options` | Five answer options. |
| `answer` | Correct option index in the written order. |
| `explanation` | Feedback shown after submitting. |

## Publishing with GitHub Pages

1. Open this repository on GitHub.
2. Go to **Settings**.
3. Open **Pages** in the sidebar.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/root` folder.
6. Save.

GitHub will provide a public Pages URL. It should look similar to:

```text
https://i-hashimi04.github.io/MCQ-add-on-for-notion/
```

## Embedding in Notion

1. Copy the GitHub Pages URL.
2. Paste it into a Notion page.
3. Choose **Embed**.
4. Resize the embedded frame to fit the quiz.

## Notes

- The app is fully static, so it does not need a backend or database.
- Results are only shown inside the current session; they are not saved permanently.
- The Notion summary is selected for manual copy/paste; this avoids exposing a Notion API key in browser code.
- To add persistent scores later, connect the app to a secure backend, webhook or automation layer.

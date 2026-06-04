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
- Focused ELC question banks selected by URL, for example `?set=elc1`.
- Performance breakdowns by topic, component, module LO, discipline and cognitive level.
- Priority revision list based on missed components.
- Selectable Notion summary for manual copy/paste into a Notion database.

## Focused ELC banks

The app uses one shared interface and multiple smaller question banks. Select a bank with the `set` query parameter:

| Bank | URL parameter | Focus |
|---|---|---|
| ELC1 | `?set=elc1` | Endocrine foundations, pituitary, prolactin, GH, ADH, DI, SIADH and dynamic endocrine testing. |
| ELC2 | `?set=elc2` | Thyroid, adrenal, calcium/PTH, insulin and diabetes. |
| ELC3 | `?set=elc3` | Reproductive anatomy, physiology, puberty, gametogenesis, HPG/HPT axes, contraception, fertility and lactation. |
| ELC4 | `?set=elc4` | Pregnancy, placenta, fetal growth, maternal adaptation, labour, PPH, neonatal transition and prematurity. |
| ELC5 | `?set=elc5` | Amenorrhoea, PCOS, STI, gynaecological pathology, fertility, menopause, cancer, screening, ageing and communication. |
| Mixed | `?set=mixed` | Mixed practice sampled from all available ELC banks. |

Example GitHub Pages URLs:

```text
https://i-hashimi04.github.io/MCQ-add-on-for-notion/?set=elc1
https://i-hashimi04.github.io/MCQ-add-on-for-notion/?set=elc2
https://i-hashimi04.github.io/MCQ-add-on-for-notion/?set=elc3
https://i-hashimi04.github.io/MCQ-add-on-for-notion/?set=elc4
https://i-hashimi04.github.io/MCQ-add-on-for-notion/?set=elc5
https://i-hashimi04.github.io/MCQ-add-on-for-notion/?set=mixed
```

## Files

- `index.html` contains the shared page structure.
- `style.css` controls the design.
- `script.js` controls quiz behaviour, bank selection and result breakdowns.
- `question-banks/elc1.js` to `question-banks/elc5.js` contain the focused ELC banks.
- `questions.js` is the old single-bank file and is kept for reference.
- `ELC_Paper_2_Assessment_Derived_Master_Blueprint.md` is the assessment-derived planning file. Add new questions only after they map to the blueprint.

## Editing questions

Open the relevant file in `question-banks/` and edit the `questions` array inside `window.quizBanks.<bankId>`.

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
  assessmentSkill: "drug-safety",
  variantType: "management",
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

The `answer` value uses zero-based numbering based on the order written in the question bank file:

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
| `assessmentSkill` | Main assessment direction, for example `mechanism`, `data-interpretation`, `management` or `drug-safety`. |
| `variantType` | More specific variant family for planning and review. |
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

1. Copy the GitHub Pages URL for the specific question bank, for example `https://i-hashimi04.github.io/MCQ-add-on-for-notion/?set=elc2`.
2. Paste it into a Notion page.
3. Choose **Embed**.
4. Resize the embedded frame to fit the quiz.

## Notes

- The app is fully static, so it does not need a backend or database.
- Results are only shown inside the current session; they are not saved permanently.
- The Notion summary is selected for manual copy/paste; this avoids exposing a Notion API key in browser code.
- To add persistent scores later, connect the app to a secure backend, webhook or automation layer.

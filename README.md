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

## Files

- `index.html` contains the page structure.
- `style.css` controls the design.
- `script.js` controls the quiz behaviour.
- `questions.js` contains the editable question bank.

## Editing questions

Open `questions.js` and edit the `window.quizQuestions` array.

Example:

```js
{
  topic: "Topic name",
  question: "Your question here?",
  options: [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5"
  ],
  answer: 2,
  explanation: "This explanation appears after the user submits an answer."
}
```

The `answer` value uses zero-based numbering based on the order written in `questions.js`:

- `0` = first option
- `1` = second option
- `2` = third option
- `3` = fourth option
- `4` = fifth option

The displayed order changes during practice, but the app still tracks the correct answer internally.

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
- To add persistent scores later, connect the app to a database or form endpoint.

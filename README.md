# MCQ add-on for Notion

A lightweight multiple-choice quiz interface designed to be embedded inside a Notion page using GitHub Pages.

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
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  answer: 2,
  explanation: "This explanation appears after the user submits an answer."
}
```

The `answer` value uses zero-based numbering:

- `0` = A
- `1` = B
- `2` = C
- `3` = D

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

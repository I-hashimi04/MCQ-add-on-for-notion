# ELC Distractor Quality Audit

Purpose: track the second-pass SBA quality review. Wave 1 populated the banks for coverage, but coverage is not the same as exam readiness. This audit exists because many first-pass questions used options that were too obviously wrong, from unrelated systems, or not in the same option category.

---

## 1. Quality rule

A question is not exam-ready unless the options are difficult for the right reason.

A good option set should:

- contain five options in the same category;
- use plausible distractors based on likely misconceptions;
- avoid joke or impossible distractors;
- avoid mixing unrelated systems unless the task is explicitly broad classification;
- avoid giving away the answer by option length or wording detail;
- have one best answer, not one obviously sensible answer and four random ones;
- still be answerable by the cover test before seeing the options.

---

## 2. Quality status labels

Use these labels in bank metadata or review notes.

| Label | Meaning |
|---|---|
| `coverage-draft` | Content is mapped, but distractors may be weak. Good for checking coverage only. |
| `distractor-review-needed` | Question is probably useful but needs option rewrite before serious practice. |
| `exam-ready-pass-1` | First same-category distractor rewrite completed. Still worth future peer review. |
| `exam-ready` | Same-category plausible options, clear cover-test lead-in, no obvious distractor flaw after final review. |
| `reject` | Question should be removed or fully rewritten. |

---

## 3. Current audit position

| Bank | Current count | Current quality status | Notes |
|---|---:|---|---|
| ELC1 | 25 | exam-ready-pass-1 | Endocrine foundations, pituitary, prolactin/GH and ADH/DI/SIADH distractors rewritten to closer same-category alternatives. |
| ELC2 | 27 | exam-ready-pass-1 | Endocrine, thyroid, adrenal, calcium and diabetes options rewritten to closer same-category alternatives. |
| ELC3 | 25 | exam-ready-pass-1 | Anatomy and physiology distractors rewritten to same-region or same-mechanism alternatives. |
| ELC4 | 25 | exam-ready-pass-1 | Pregnancy, labour, neonatal and drug-safety distractors rewritten to same-category alternatives. |
| ELC5 | 25 | exam-ready-pass-1 | STI, gynae pathology, screening, cancer and communication distractors rewritten to same-category alternatives. |

---

## 4. Remaining rewrite priority

1. Final spot-check of all banks for option-length clues and over-cued stems.
2. Update any individual items from `exam-ready-pass-1` to final `exam-ready` only after spot-check.
3. Start Wave 2 expansion only after the spot-check is complete.

---

## 5. Examples of bad-to-good option rewrites

### Pituitary mass localisation

Bad:

```text
Optic chiasm
Cerebellar vermis
Recurrent laryngeal nerve
Pudendal nerve
Zona glomerulosa
```

Better:

```text
Optic chiasm
Optic nerve
Optic tract
Cavernous sinus cranial nerves
Lateral geniculate nucleus
```

### Spiral artery remodelling

Bad:

```text
Trophoblast-mediated spiral artery remodelling
Closure of the ductus arteriosus
Capacitation of sperm
Corpus luteum regression
Peripheral deiodination of T4 to T3
```

Better:

```text
Extravillous trophoblast invasion of spiral arteries
Failure of syncytiotrophoblast hormone production
Reduced maternal IgG transfer
Failure of chorionic villus branching
Impaired GLUT1-mediated glucose transport
```

### Carbimazole adverse effect

Better option set:

```text
Stop carbimazole and arrange urgent full blood count
Continue carbimazole and repeat TFTs in 6 weeks
Add propranolol and continue carbimazole
Switch immediately to radioactive iodine
Reduce dose and check TSH only
```

---

## 6. Working principle for the next pass

Do not create more questions until all existing Wave 1 banks have been rewritten from `coverage-draft` into at least `exam-ready-pass-1` question sets.

Wave 1 distractor rewriting is now complete across ELC1–ELC5. The next pass should be a final spot-check for over-cued stems, option length imbalance and any remaining option-category drift.

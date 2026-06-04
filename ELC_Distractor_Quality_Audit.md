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
| `exam-ready` | Same-category plausible options, clear cover-test lead-in, no obvious distractor flaw. |
| `reject` | Question should be removed or fully rewritten. |

---

## 3. Current audit position

| Bank | Current count | Current quality status | Notes |
|---|---:|---|---|
| ELC1 | 25 | partial exam-ready pass started | ELC1 has been topped up and some options are improved, but it still needs a full line-by-line distractor audit before being counted as fully exam-ready. |
| ELC2 | 27 | distractor-review-needed | Many questions have coverage value but several option sets still include unrelated distractors. |
| ELC3 | 25 | distractor-review-needed | Anatomy coverage is broad, but distractors often cross unrelated anatomical systems. |
| ELC4 | 25 | distractor-review-needed | Pregnancy/neonatal coverage is good, but some options are too obviously unrelated. |
| ELC5 | 25 | distractor-review-needed | Good topic coverage, but some options mix unrelated diagnoses, investigations and mechanisms. |

---

## 4. Rewrite priority

1. ELC1 full distractor audit and option rewrite.
2. ELC2, because endocrine data interpretation benefits most from close distractors.
3. ELC4, because pregnancy/labour/neonatal management questions need plausible safety distractors.
4. ELC5, because STI/gynae/cancer questions need same-category clinical alternatives.
5. ELC3, because anatomy questions need same-region or same-structure-family distractors.

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

Do not create more questions until the existing Wave 1 banks have been rewritten from `coverage-draft` into `exam-ready` question sets.

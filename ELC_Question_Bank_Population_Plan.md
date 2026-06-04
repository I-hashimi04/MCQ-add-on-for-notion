# ELC Question Bank Population Plan

Purpose: define how to populate `question-banks/elc1.js` to `question-banks/elc5.js` from the assessment-derived master blueprint. This prevents the bank from becoming a random list of MCQs and keeps each focused interface diagnostic.

This plan sits under `ELC_Paper_2_Assessment_Derived_Master_Blueprint.md`. The blueprint defines what should be tested; this file defines the order and batching strategy for creating approved questions.

---

## 1. Population principles

1. Do not populate by writing isolated MCQs.
2. Populate by component family, using the master blueprint row as the source of truth.
3. Each question must have a planning header before it is added to a bank.
4. Each bank should contain a balanced spread of:
   - remember;
   - understand;
   - apply;
   - analyse.
5. Each bank should contain a balanced spread of assessment directions:
   - mechanism;
   - data interpretation;
   - clinical recognition;
   - management;
   - drug safety;
   - anatomical localisation or practical identification where relevant;
   - public health/screening or communication where relevant.
6. Do not mark a question as approved until the lead-in passes the cover test and all five options are plausible and same-category.
7. Seed a bank broadly before deepening it. It is better for ELC1–ELC5 each to have 20 well-mapped questions than one bank to have 100 while the others are empty.

---

## 2. Bank structure and target sizes

| Bank | Focus | First useful target | Strong bank target | Mature bank target |
|---|---|---:|---:|---:|
| ELC1 | Endocrine foundations, pituitary, prolactin, GH, ADH, DI, SIADH, dynamic tests | 25 | 50 | 70 |
| ELC2 | Thyroid, adrenal, calcium/PTH, insulin, diabetes | 25 | 60 | 80 |
| ELC3 | Reproductive anatomy, physiology, puberty, gametogenesis, axes, contraception, fertility, lactation | 25 | 60 | 80 |
| ELC4 | Pregnancy, placenta, fetal growth, labour, PPH, neonatal transition, preterm birth | 25 | 60 | 80 |
| ELC5 | Amenorrhoea, PCOS, STI, gynae pathology, fertility, menopause, cancer, screening, ageing, communication | 25 | 60 | 80 |
| Mixed | Auto-sampled from all banks | n/a | n/a | n/a |

First useful target = enough to make a focused Notion embed useful.
Strong bank target = enough to support repeated practice without memorising the order.
Mature bank target = close to the full planned coverage.

---

## 3. Populate in waves

### Wave 1 — Broad diagnostic seed

Goal: make every bank usable.

Target: 25 questions per bank.

Rules:

- Cover every major topic family at least once.
- Prioritise high-yield assessment directions from the lecture: integration, application, data interpretation, clinical recognition and management.
- Include at least 4 analyse/data questions per bank where relevant.
- Include at least 4 management/drug-safety questions in ELC2, ELC4 and ELC5.
- Include at least 4 anatomy/practical-localisation questions in ELC3.

Status: complete.

### Wave 2 — Assessment-angle deepening

Goal: turn each topic from single exposure into multiple variants.

Target: add 25–35 questions per bank.

Rules:

- Each high-yield component gets mechanism + clinical + data/management where appropriate.
- Add deliberate distractor variants based on common misconceptions.
- Add practical-style questions for anatomy, images, hormone panels, graphs, screening tables and tumour markers.

Status: partial. Expansion files have been added for each bank with 15 new exam-ready-pass-1 questions per bank.

### Wave 3 — Integration and mixed-paper readiness

Goal: make the mixed set feel like Paper 2-style synoptic practice.

Target: add 20–30 cross-cutting questions per bank, prioritising weak/underrepresented areas.

Rules:

- Use cross-cutting families from the master blueprint.
- Build questions that integrate at least two disciplines.
- Add screening/public health/communication items that are easy to under-revise.
- Ensure each bank has enough apply/analyse questions.

Status: not started.

---

## 4. Current tracking table

| Bank | Base questions | Wave 2 added | Current approved | Strong bank target | Mature target | Next priority |
|---|---:|---:|---:|---:|---:|---|
| ELC1 | 25 | 15 | 40 | 50 | 70 | Add 10 more cross-axis/dynamic-test variants. |
| ELC2 | 27 | 15 | 42 | 60 | 80 | Add 18 more endocrine hypertension, thyroid pregnancy and calcium/diabetes variants. |
| ELC3 | 25 | 15 | 40 | 60 | 80 | Add 20 more anatomy/practical and reproductive-physiology variants. |
| ELC4 | 25 | 15 | 40 | 60 | 80 | Add 20 more antenatal screening, Doppler, infection and neonatal variants. |
| ELC5 | 25 | 15 | 40 | 60 | 80 | Add 20 more STI, gynae pathology, screening, oncology and communication variants. |
| Mixed | 127 | 75 | 202 | n/a | n/a | Auto-samples from all loaded banks. |

---

## 5. Question drafting workflow

For each batch:

1. Select component rows from the master blueprint.
2. Create question planning headers first.
3. Draft questions in a temporary section or local working file.
4. Review each question against the approval checklist.
5. Move approved questions into the relevant `question-banks/elc*.js` file or a loaded expansion file.
6. Keep `status: "approved"` only for items that pass review.
7. After adding questions, check that the bank still loads and the mixed set can read it.

Required planning header:

```text
Component:
Source LO/session LO:
Topic:
Discipline(s):
Assessment direction:
Cognitive level:
Question family:
Stem type:
Lead-in type:
Distractor pattern:
Correct-answer logic:
Revision action:
Status:
```

---

## 6. Quality control before adding to a bank

A question may be added only if:

- [ ] It maps to a master blueprint row.
- [ ] It maps to an LO/session LO.
- [ ] It has an explicit assessment direction.
- [ ] It has the intended cognitive level.
- [ ] The lead-in passes the cover test.
- [ ] It has exactly five options.
- [ ] All options are same-category.
- [ ] There is one best answer.
- [ ] Distractors are plausible and based on known misconceptions.
- [ ] The explanation teaches the tested reasoning.
- [ ] The revision action points to a specific fix.
- [ ] The content stays within the uploaded examinable material.
- [ ] The wording is in British English.

---

## 7. Recommended next build order

Wave 2 is partially complete. Recommended next order:

1. Add remaining Wave 2 questions to ELC4 and ELC2.
2. Add remaining Wave 2 questions to ELC5 and ELC3.
3. Add remaining Wave 2 questions to ELC1.
4. Run final spot-check for over-cued stems and option-length clues.
5. Only then start Wave 3 mixed integration expansion.

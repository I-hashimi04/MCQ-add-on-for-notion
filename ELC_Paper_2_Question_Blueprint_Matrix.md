# ELC Paper 2 Question Blueprint Matrix

Purpose: this is the working canvas for turning mapped learning outcomes into exam-style SBA question variants for the Notion MCQ app.

Core rule: do not write random MCQs. Each question must come from a component, test a defined assessment angle, use plausible distractors, and produce useful feedback.

## Question-writing rules

Every SBA should:

1. Use a clinical or applied stem where useful.
2. Have a clear lead-in that passes the cover test.
3. Use five options.
4. Have one best answer only.
5. Avoid visible A/B/C/D/E labels.
6. Avoid “which of the following is true/false”.
7. Keep all options in the same category.
8. Use plausible distractors based on common misconceptions.
9. Tag the question by topic, component, LO, discipline, cognitive level and assessment skill.
10. Include an explanation, distractor rationale and revision action.

## Metadata schema

```js
{
  id: "",
  module: "ELC",
  paper: "Paper 2",
  topic: "",
  component: "",
  moduleLOs: [],
  sessionLOs: [],
  disciplines: [],
  cognitiveLevel: "remember | understand | apply | analyse",
  assessmentSkill: "diagnosis | mechanism | investigation | management | anatomical localisation | drug safety | data interpretation | clinical feature recognition | developmental timing | screening threshold | public health reasoning",
  variantType: "",
  questionType: "single-best-answer",
  stem: "",
  leadIn: "",
  options: [],
  answer: 0,
  explanation: "",
  distractorRationale: {},
  revisionAction: "",
  status: "draft | needs review | approved | rejected"
}
```

---

# Component × angle matrix

## Week 1 — Endocrine

### Hormone principles

| Component | Module LOs | Disciplines | Cognitive levels | Assessment skills | Required variants | Distractor patterns | Revision action |
|---|---|---|---|---|---|---|---|
| Definition of a hormone | LO1 | physiology | remember, understand | mechanism | Chemical messenger; bloodstream; distant target; receptor specificity | neurotransmitter only; paracrine signal; enzyme; metabolite | Review the definition of an endocrine hormone and how it differs from neural/paracrine signalling. |
| Hormone assays and low concentrations | LO1, LO12 | physiology, investigation | understand, apply | investigation | Why baseline values can mislead; why dynamic tests are used | routine metabolite-style measurement; single random cortisol; total hormone without context | Review why endocrine testing often needs stimulation/suppression rather than isolated baseline values. |
| Plasma protein binding | LO1 | physiology | understand, apply | data interpretation | Free vs total hormone; pregnancy raises TBG; free hormone remains normal | total T4 interpreted alone; binding protein mistaken for active hormone | Review free vs bound hormone and why free hormone is biologically active. |
| Receptor sensitivity and number | LO1 | physiology, pharmacology | understand | mechanism | Upregulation in low hormone states; downregulation in high hormone states; tolerance/rebound | enzyme induction; altered plasma binding; receptor destruction only | Review receptor up/downregulation and how it changes hormone/drug response. |
| Prohormones | LO1 | physiology | remember, understand | mechanism | T4 to T3; proinsulin to insulin and C-peptide | T3 as inactive prohormone; C-peptide as secreted hormone effect; TSH as prohormone | Review common prohormone examples and activation after secretion. |
| Negative/positive feedback | LO1, LO4 | physiology, clinical aspects | understand, analyse | data interpretation | Primary failure; secondary failure; tertiary failure; LH surge as positive feedback | primary vs secondary reversed; high stimulator with high target; all feedback assumed negative | Review endocrine axis feedback logic and primary/secondary/tertiary patterns. |
| Stimulation and suppression tests | LO5, LO13 | physiology, investigation | understand, apply, analyse | investigation, data interpretation | Dexamethasone suppression; short Synacthen; autonomous source fails suppression; failing gland fails stimulation | baseline-only testing; wrong test direction; normal response interpreted as disease | Review dynamic endocrine testing: suppression tests check autonomy; stimulation tests check reserve. |
| Endocrine vs neural control | LO1 | physiology | understand | mechanism | Slow/widespread/sustained vs fast/local/brief; catecholamines bridge both | endocrine as always local; neural as always systemic; catecholamines only neurotransmitters | Review differences and overlaps between endocrine and neural control. |

### Hypothalamus and pituitary

| Component | Module LOs | Disciplines | Cognitive levels | Assessment skills | Required variants | Distractor patterns | Revision action |
|---|---|---|---|---|---|---|---|
| Hypothalamic-pituitary connections | LO1 | anatomy, physiology | remember, understand | anatomical localisation, mechanism | Anterior pituitary portal system; posterior pituitary axonal connection | posterior via portal vessels; anterior via direct axons; stalk as lymphatic structure | Review anterior portal blood vs posterior neurosecretory axons. |
| Hypothalamic integration | LO1 | physiology | understand | mechanism | Inputs from limbic, brainstem, circadian clock, osmolality, hormones, temperature | pituitary as sole integrator; thyroid as central controller | Review hypothalamus as integrator of autonomic and endocrine responses. |
| Anterior pituitary control | LO1 | physiology | remember, understand | mechanism | TRH-TSH; CRH-ACTH; GnRH-LH/FSH; GHRH-GH; dopamine-prolactin inhibition | prolactin stimulated by dopamine; all anterior hormones tonically inhibited | Review stimulatory hypothalamic hormones and dopamine inhibition of prolactin. |
| Stalk effect | LO1, LO4 | anatomy, physiology, clinical aspects | understand, apply | mechanism, diagnosis | Raised prolactin plus low other anterior pituitary hormones | prolactinoma-level prolactin; posterior pituitary secretion of prolactin; thyroid primary failure | Review loss of dopamine inhibition in pituitary stalk compression. |
| Pituitary mass effects | LO1, LO4 | anatomy, clinical aspects | apply | anatomical localisation, diagnosis | Bitemporal hemianopia; cavernous sinus CN palsies; headache | homonymous hemianopia; optic neuritis; cerebellar signs | Review pituitary relations: optic chiasm superior, cavernous sinuses lateral. |
| Hypopituitarism patterns | LO4 | physiology, clinical aspects | apply, analyse | diagnosis, data interpretation | LH/FSH, TSH, ACTH, prolactin, GH deficiency patterns | primary gland failure; Addison's hyperpigmentation in secondary adrenal insufficiency; aldosterone lost in ACTH deficiency | Review secondary endocrine failure patterns and which hormones are affected. |
| Hyperpituitarism patterns | LO4 | physiology, clinical aspects | apply | diagnosis | Prolactinoma, acromegaly, Cushing disease, SIADH, rare TSH/GnRH excess | target-gland primary disease; posterior pituitary source for anterior hormones | Review clinical syndromes caused by excess pituitary hormones. |
| Pituitary tumour treatment | LO7 | pharmacology, clinical aspects | apply | management | Transsphenoidal surgery; cabergoline for prolactinoma; somatostatin analogue for acromegaly | levothyroxine for prolactinoma; radioactive iodine for pituitary adenoma; desmopressin for acromegaly | Review treatment by pituitary tumour type. |

### Posterior pituitary, ADH and oxytocin

| Component | Module LOs | Disciplines | Cognitive levels | Assessment skills | Required variants | Distractor patterns | Revision action |
|---|---|---|---|---|---|---|---|
| Posterior pituitary neurosecretion | LO1 | anatomy, physiology | remember, understand | mechanism | Supraoptic/paraventricular nuclei; axonal transport; release into capillaries | posterior makes hormones locally; anterior stores ADH | Review how ADH and oxytocin are made in hypothalamus and released from posterior pituitary. |
| Oxytocin control/actions | LO1 | physiology | remember, understand | mechanism | Uterine contraction; milk ejection; cervical stretch; suckling | milk synthesis; follicle recruitment; renal water retention | Review oxytocin actions and stimuli. |
| ADH action and control | LO1, LO4 | physiology | understand, apply | mechanism | V2 receptor; aquaporin-2; osmolality and volume triggers | V1 only; sodium excretion as main effect; PTH-mediated water retention | Review ADH control of water reabsorption in collecting duct. |
| Diabetes insipidus | LO4, LO7 | physiology, pathology, clinical aspects | apply, analyse | diagnosis, management, data interpretation | Central vs nephrogenic; dilute polyuria; hypernatraemia; desmopressin for cranial DI | SIADH; osmotic diuresis from glucose; primary polydipsia without context | Review DI presentation, causes and central vs nephrogenic treatment logic. |
| SIADH | LO4, LO7 | physiology, pathology, pharmacology, clinical aspects | apply, analyse | diagnosis, management, data interpretation | Euvolaemic hyponatraemia; concentrated urine; lung/CNS/drugs; fluid restriction; cautious hypertonic saline | dehydration hyponatraemia; DI; adrenal crisis; rapid correction as safe | Review SIADH pattern and safe management of severe hyponatraemia. |

### Prolactin and prolactinoma

| Component | Module LOs | Disciplines | Cognitive levels | Assessment skills | Required variants | Distractor patterns | Revision action |
|---|---|---|---|---|---|---|---|
| Causes of hyperprolactinaemia | LO4, LO7 | physiology, pharmacology, clinical aspects | remember, apply | diagnosis | Pregnancy, breastfeeding, stress, D2 antagonists, stalk compression, hypothyroidism, renal failure, prolactinoma | D2 agonists; hyperthyroidism alone; adrenal failure | Review physiological, drug, stalk and endocrine causes of raised prolactin. |
| Prolactinoma features | LO4 | physiology, clinical aspects | apply | clinical feature recognition, diagnosis | Amenorrhoea, galactorrhoea, infertility; erectile dysfunction; mass effects | ovarian failure alone; posterior pituitary lesion; primary adrenal disorder | Review sex-specific clinical features and mass effects of prolactinoma. |
| Prolactinoma treatment | LO7 | pharmacology, clinical aspects | apply | management, drug safety | Cabergoline first line; dopamine agonist shrinks tumour; impulse control counselling | dopamine antagonist; surgery first line for all; desmopressin | Review dopamine agonist treatment and counselling for prolactinoma. |

### Growth hormone

| Component | Module LOs | Disciplines | Cognitive levels | Assessment skills | Required variants | Distractor patterns | Revision action |
|---|---|---|---|---|---|---|---|
| GH physiology and control | LO1, LO4 | physiology | remember, understand | mechanism | GHRH stimulates; somatostatin inhibits; IGF-1 mediates growth; nocturnal pulsatility | dopamine main control; IGF-1 from pituitary; GH lowers glucose | Review direct and IGF-1 mediated actions of GH. |
| Acromegaly/gigantism | LO4, LO7 | pathology, clinical aspects | apply | diagnosis, management | Adult vs child excess; hands/feet, prognathism, sweating, diabetes, HTN, sleep apnoea | hypothyroidism; Cushing's; primary diabetes only | Review clinical clues and complications of GH excess. |
| Acromegaly treatment | LO7 | pharmacology, clinical aspects | apply | management | Transsphenoidal surgery; octreotide; radiotherapy if persistent | cabergoline as main; metyrapone; levothyroxine | Review treatment hierarchy for GH-secreting adenoma. |
| GH deficiency | LO1, LO4 | physiology, clinical aspects | apply | diagnosis | Short stature in children; fatigue/reduced QoL in adults | adrenal crisis; precocious puberty; thyrotoxicosis | Review GH deficiency effects in children vs adults. |

### Thyroid

| Component | Module LOs | Disciplines | Cognitive levels | Assessment skills | Required variants | Distractor patterns | Revision action |
|---|---|---|---|---|---|---|---|
| Thyroid anatomy and surgical risk | LO1, LO10 | anatomy, clinical aspects | remember, apply | anatomical localisation | Superior/inferior thyroid arteries; recurrent laryngeal nerve injury; hoarseness | external laryngeal nerve for all hoarseness; carotid artery as main supply; vagus in thyroid capsule | Review thyroid relations, blood supply and recurrent laryngeal nerve risk. |
| Thyroid hormone synthesis | LO1 | physiology | remember, understand | mechanism | Iodide trapping; TPO organification; thyroglobulin; T4/T3 release | deiodinase inside follicle as only step; calcitonin synthesis pathway | Review follicular synthesis of T4/T3. |
| T4 prohormone/T3 active hormone | LO1 | physiology | understand | mechanism | Peripheral deiodinase; T3 active; T4 main secreted | T4 active final hormone; TSH converted to T3; reverse T3 as main active | Review peripheral conversion of T4 to active T3. |
| TRH/TSH feedback | LO1 | physiology | understand, analyse | data interpretation | TRH -> TSH -> T4/T3; negative feedback; primary vs secondary patterns | high TSH with high T4 as typical Graves; low TSH low T4 as primary thyroid failure | Review thyroid axis interpretation. |
| Thyroid hormone actions | LO1 | physiology | remember, understand | mechanism | BMR, heat, cardiac output, lipolysis, gluconeogenesis, neural development | lowers BMR; reduces cardiac output; postnatal-only neural role | Review metabolic, cardiovascular and developmental thyroid hormone effects. |
| Fetal/neonatal thyroid | LO1 | physiology, clinical aspects | apply | developmental timing, screening threshold | Neural maturation; neonatal CHT heel-prick day 5; untreated developmental delay | adult BMR only; screening at birth only; maternal TSH crosses as main protection | Review fetal/neonatal thyroid role and congenital hypothyroidism screening. |
| Iodine importance | LO1, LO11 | nutrition, physiology | remember, apply | mechanism, public health | Iodine substrate; deficiency goitre/CHT | iodine as enzyme cofactor unrelated to thyroid; hypercalcaemia | Review iodine as substrate for thyroid hormone. |
| Hyperthyroidism causes/features/treatment | LO4, LO7, LO9 | pathology, pharmacology, clinical aspects | apply | diagnosis, management | Graves, toxic nodular disease, adenoma, thyroiditis; symptoms; carbimazole, PTU pregnancy, RAI contraindications | levothyroxine; beta-blocker alone; RAI in pregnancy; carbimazole with fever ignored | Review hyperthyroidism causes, clinical features and treatment contexts. |
| Hypothyroidism causes/features/treatment | LO4, LO7, LO9 | pathology, pharmacology, clinical aspects | apply | diagnosis, management | Hashimoto, iodine deficiency, post-surgery/RAI, amiodarone/lithium; levothyroxine; pregnancy higher dose | carbimazole; PTU; beta-blocker only | Review hypothyroidism causes and levothyroxine principles. |
| Graves vs Hashimoto immunology | LO4 | immunology, pathology | understand, apply | mechanism, diagnosis | TRAb stimulating vs anti-TPO destructive; opposite functional outcomes | both cause same hormone pattern; Hashimoto causes ophthalmopathy; TRAb destroys gland | Review autoimmune thyroid disease mechanisms. |
| Thyroid eye disease | LO4 | immunology, clinical aspects | apply | clinical feature recognition | Graves-specific orbit fibroblast inflammation; proptosis, lid signs, diplopia, optic nerve compression; smoking | Hashimoto as typical cause; cataracts; diabetic retinopathy | Review Graves' eye disease features and smoking risk. |

### Adrenal cortex and medulla

| Component | Module LOs | Disciplines | Cognitive levels | Assessment skills | Required variants | Distractor patterns | Revision action |
|---|---|---|---|---|---|---|---|
| Adrenal anatomy and venous drainage | LO1 | anatomy | remember, apply | anatomical localisation | Right adrenal vein short to IVC; left to renal vein; surgical risk | both drain to renal vein; adrenal in pelvis; single artery only | Review adrenal blood supply and venous drainage asymmetry. |
| Adrenal stress response | LO1 | physiology | understand | mechanism | Immediate medulla catecholamines; slower HPA cortisol | aldosterone as main acute stress hormone; thyroid axis | Review two arms of adrenal stress response. |
| Adrenal cortex zones | LO1 | anatomy, physiology | remember, understand | mechanism | Glomerulosa aldosterone; fasciculata cortisol; reticularis androgens; medulla catecholamines | ACTH drives aldosterone as main regulator; medulla produces cortisol | Review adrenal zonation and outputs. |
| Aldosterone physiology | LO1 | physiology | understand, apply | mechanism | RAAS regulation; sodium retention; potassium excretion | ACTH primary control; PTH control; lowers sodium | Review aldosterone regulation and renal effects. |
| Cortisol physiology | LO1 | physiology | understand | mechanism | HPA axis; gluconeogenesis, catabolism, anti-inflammatory, vascular tone | insulin-like anabolic only; RAAS-driven | Review cortisol regulation and systemic effects. |
| Adrenal androgens/CAH | LO1, LO4 | physiology, pathology, embryology | apply | mechanism, diagnosis | DHEA, ACTH driven; 21-hydroxylase deficiency; androgen shunt; virilisation/salt-wasting | excess cortisol; low ACTH; DHT deficiency only | Review CAH pathway logic and fetal/newborn consequences. |
| Cushing syndrome | LO4, LO7 | pathology, pharmacology, clinical aspects | apply | diagnosis, management | Exogenous steroids, pituitary ACTH, adrenal adenoma, ectopic ACTH; purple striae, myopathy, diabetes; treatment by cause | Addison's; Conn's; acromegaly; simple obesity only | Review cortisol excess causes, features and management. |
| Addison/adrenal insufficiency | LO4 | physiology, pathology, clinical aspects | apply, analyse | diagnosis, data interpretation | Primary adrenal failure vs secondary ACTH deficiency; pigmentation/aldosterone differences | secondary has hyperpigmentation; aldosterone always ACTH-driven | Review primary vs secondary adrenal insufficiency patterns. |
| Conn syndrome | LO4 | physiology, pathology, clinical aspects | apply, analyse | diagnosis, data interpretation, management | Hypertension, hypokalaemia, metabolic alkalosis; high aldosterone low renin; adrenalectomy vs spironolactone | phaeochromocytoma; Cushing; renal artery stenosis with high renin | Review primary hyperaldosteronism presentation, testing and treatment. |
| Phaeochromocytoma | LO4 | pathology, clinical aspects, pharmacology | apply | diagnosis, management, drug safety | Headache, palpitations, sweating, paroxysmal HTN; metanephrines; alpha then beta blockade | beta first; Conn; panic disorder only | Review catecholamine tumour features and alpha-before-beta treatment. |
| Endocrine hypertension screen | LO1, LO4 | physiology, clinical aspects | apply | diagnosis | Young/resistant HTN, hypokalaemia, paroxysms, endocrine features | essential HTN always; diabetes alone | Review clues that hypertension has an endocrine cause. |

### Calcium and parathyroid

| Component | Module LOs | Disciplines | Cognitive levels | Assessment skills | Required variants | Distractor patterns | Revision action |
|---|---|---|---|---|---|---|---|
| Parathyroid anatomy/surgical risk | LO1 | anatomy, clinical aspects | remember, apply | anatomical localisation | 4 glands behind thyroid; inferior thyroid artery; post-thyroidectomy hypocalcaemia | adrenal source; superior thyroid only; posterior pituitary | Review parathyroid relation to thyroid and surgical hypocalcaemia. |
| PTH/vitamin D/calcitonin physiology | LO1 | physiology | remember, understand | mechanism | PTH raises Ca lowers phosphate; vitamin D raises both; calcitonin minor | PTH lowers calcium; vitamin D lowers phosphate; calcitonin main regulator | Review calcium regulators and their effects on calcium/phosphate. |
| Basic calcium regulation | LO1 | physiology | understand | mechanism | Low calcium -> PTH -> bone/kidney/gut -> calcium rises | high calcium triggers PTH; ADH controls calcium | Review negative feedback in calcium homeostasis. |
| Hypercalcaemia causes/features | LO4 | pathology, clinical aspects | apply | diagnosis, clinical feature recognition | Primary HPT community; malignancy hospital; stones/bones/abdominal moans/psychic groans | vitamin D deficiency; hypoparathyroidism; SIADH | Review common causes and symptoms of hypercalcaemia. |
| Hypocalcaemia causes/features | LO4 | pathology, clinical aspects | apply | diagnosis, clinical feature recognition | Vitamin D deficiency; post-thyroidectomy; hypoparathyroidism; CKD; tetany, paraesthesia, seizures, Chvostek/Trousseau | primary HPT; malignancy; Conn | Review common causes and signs of hypocalcaemia. |
| Paired calcium and PTH interpretation | LO5 | physiology, pathology, clinical aspects | analyse | data interpretation | High Ca + high/normal PTH; high Ca + low PTH; low Ca + low PTH; low Ca + high PTH | primary HPT vs malignancy; vitamin D deficiency vs hypoparathyroidism; CKD confusion | Review paired calcium/PTH framework. |
| Calcium disorder management | LO7 | pharmacology, clinical aspects | apply | management | Acute hypercalcaemia IV saline/bisphosphonate; hypocalcaemia oral Ca/vit D, IV calcium gluconate if severe | fluid restriction; desmopressin; carbimazole | Review acute and chronic management of calcium disorders. |

### Insulin physiology and metabolism

| Component | Module LOs | Disciplines | Cognitive levels | Assessment skills | Required variants | Distractor patterns | Revision action |
|---|---|---|---|---|---|---|---|
| Insulin identity and glucose homeostasis | LO1 | physiology | remember, understand | mechanism | Peptide from beta cells; lowers glucose; tissue uptake; suppresses hepatic output | alpha cell insulin; raises glucose; adrenal medulla source | Review insulin source and broad actions. |
| Insulin actions by tissue | LO1 | physiology | understand, apply | mechanism | Liver glycogenesis; muscle GLUT4; adipose lipogenesis; anti-lipolysis | liver GLUT4; muscle gluconeogenesis; adipose glycogenolysis | Review insulin effects in liver, muscle and adipose tissue. |
| Anabolic vs catabolic metabolism | LO1 | physiology | understand | mechanism | Insulin anabolic; glucagon/cortisol/GH/adrenaline catabolic | GH as purely anabolic; glucagon as storage hormone | Review anabolic vs catabolic hormone actions. |
| Fed/fasted/starved states | LO1 | physiology | apply | mechanism, data interpretation | Fed insulin high; fasted glucagon; prolonged fasting ketogenesis | brain never uses ketones; insulin high in starvation | Review metabolic state transitions and dominant hormones. |

---

# Question-generation queue

Use this queue to generate reviewed question batches.

## Batch 1 — Endocrine foundations

Target: 25 questions.

Coverage:
- Hormone principles: 5
- Pituitary/prolactin/GH: 6
- ADH/DI/SIADH: 4
- Thyroid: 5
- Adrenal: 3
- Calcium: 2

Cognitive mix:
- remember: 4
- understand: 7
- apply: 9
- analyse: 5

## Batch 2 — Endocrine clinical interpretation

Target: 25 questions.

Coverage:
- Thyroid blood tests and treatment: 6
- Pituitary mass/hormone patterns: 4
- Adrenal hypertension/adrenal insufficiency: 5
- Calcium/PTH interpretation: 5
- DI/SIADH sodium/osmolality interpretation: 5

Cognitive mix:
- understand: 4
- apply: 9
- analyse: 12

## Batch 3 — ELC reproductive and pregnancy

Pending expansion from the topic-led LO document.

---

# Quality control checklist

Before a question is approved, check:

- [ ] It maps to a component in this matrix.
- [ ] It maps to module LO(s) and session LO(s).
- [ ] It tests the intended cognitive level.
- [ ] The lead-in passes the cover test.
- [ ] There are exactly five options.
- [ ] One option is clearly best.
- [ ] All distractors are plausible and same-category.
- [ ] The correct answer is not obvious from length/detail.
- [ ] No option is a joke/irrelevant filler.
- [ ] The explanation teaches the tested logic.
- [ ] The revision action points to a specific fix.
- [ ] The question does not go beyond the supplied examinable content.

# ELC Paper 2 Assessment-Derived Master Question Blueprint

Purpose: this file is the planning layer that must sit above `questions.js`. It translates the assessment lecture, examinable ELC content and the existing component matrix into a full question blueprint. Questions should not be written directly from memory or from isolated notes. A question should only enter the bank after it has a mapped component, learning outcome, assessment direction, cognitive level and distractor logic.

This file deliberately does not contain finished MCQs. It defines what the MCQs must cover, the direction in which each component should be tested, and how the bank should be expanded without becoming random.

---

## 1. Assessment rules extracted from the assessment lecture

### 1.1 Synoptic direction

The Year 2 knowledge assessment is synoptic. The intended direction is not isolated factual recall. It tests whether the student can integrate knowledge, apply it, and show breadth and depth across the subjects taught in Year 2. Year 1 knowledge may also be tested where it underpins Year 2 material because the curriculum is spiral.

Practical implication for this bank:

- Questions should usually be topic-led or condition-led.
- Major topics should include cross-discipline questions, not just single-discipline recall.
- Anatomy, physiology, pathology, pharmacology, embryology, genetics, nutrition, public health, communication and psychosocial content can all be brought into the same theme where the teaching supports it.

### 1.2 Blueprinting direction

The exam is blueprinted. Question proportions depend on taught content, contact hours, subject distribution and topic importance. The exam cannot test every teaching session, so the bank should include coverage breadth, while the actual practice sets can sample from the bank.

Practical implication for this bank:

- High-volume or clinically central components require multiple variants.
- Smaller components still need representation, but usually fewer variants.
- The plan should be component-based before it is question-based.

### 1.3 Alignment direction

Assessment is aligned with the taught curriculum. Questions must map to module LOs, session LOs or clearly taught content. A question that cannot be traced to one of those sources should not be added.

### 1.4 Topic/disease-based direction

The lecture emphasised topic- or disease-based assessment. A condition can test normal anatomy, normal physiology, pathology, pharmacology, investigation, management, complications and wider professional knowledge.

Examples of valid integrated directions:

- Pituitary mass: sellar anatomy, optic chiasm, cavernous sinus, hormone excess/deficiency, treatment.
- Thyroid disease: hormone synthesis, feedback, immunology, drug safety, pregnancy, surgery complications.
- Placental insufficiency: trophoblast invasion, spiral artery remodelling, fetal growth restriction, Doppler interpretation, maternal future cardiovascular risk.
- Diabetes in pregnancy: insulin physiology, pharmacology, screening, fetal risk, future maternal risk, communication.

### 1.5 SBA construction direction

Most MCQs should be MLA-style single-best-answer questions:

- stem or scenario;
- precise lead-in;
- five options;
- one best answer;
- lead-in passes the cover test;
- distractors are plausible and same-category;
- no visible A/B/C/D/E labels;
- avoid true/false-style stems;
- explanation teaches the tested logic;
- revision action points to a specific fix.

### 1.6 Cognitive direction

MCQs may test remember, understand, apply and analyse. The integrated practical paper tests identify, function and application. The Notion MCQ bank should therefore contain both standard SBA directions and practical-style directions where suitable.

---

## 2. Direction taxonomy

Use these labels consistently in planning and question metadata.

| Direction label | Use when the question mainly tests | Typical lead-in |
|---|---|---|
| definition-discrimination | whether a concept can be defined and separated from similar concepts | Which statement best defines...? |
| mechanism | how a process works | Which mechanism best explains...? |
| axis-logic | endocrine/reproductive feedback patterns | Which level of the axis is failing? |
| data-interpretation | blood tests, hormone panels, screening tests, graphs, Dopplers, tumour markers | Which interpretation best fits these results? |
| clinical-recognition | typical presentation or syndrome recognition | Which diagnosis is most likely? |
| management | initial/best treatment, escalation, treatment by cause | What is the most appropriate management? |
| drug-safety | contraindication, pregnancy/breastfeeding risk, adverse effect counselling | Which drug should be avoided? |
| anatomical-localisation | lesion/structure/nerve/vessel/space causing a clinical sign | Which structure is affected? |
| practical-identification | specimen/image/radiology/histology/gross structure identification | Identify the labelled structure. |
| function | function of a labelled or described structure/process | What is the main function of this structure? |
| developmental-timing | embryology, puberty, pregnancy, neonatal transition, screening timing | At which stage does this occur? |
| public-health-screening | screening principles, false positives, population testing, Wilson-Jungner criteria | Which feature makes this suitable for screening? |
| psychosocial-communication | patient-centred reasoning, MI, stigma, ageing, sexuality, perinatal wellbeing | Which response is most appropriate? |
| integration | deliberately combines two or more disciplines around a topic | Which explanation best integrates these findings? |

---

## 3. Metadata schema for planned questions

Every drafted question should start from this planning header before conversion into `questions.js`.

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
Status: planned | drafted | reviewed | approved | rejected
```

For `questions.js`, extend the question object where possible:

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
  assessmentSkill: "",
  variantType: "",
  questionType: "single-best-answer",
  question: "",
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

## 4. Master component-direction matrix

Minimum variants are planning targets for the full bank, not a promise that all variants must be generated in one pass. A high-stakes data-heavy component may need more variants than shown here.

### 4.1 Endocrine foundations

| Topic | Component | LO(s) | Discipline(s) | Assessment direction | Cognitive level | Minimum variants | Distractor pattern | Practical/IP angle |
|---|---|---|---|---|---|---:|---|---|
| Hormone principles | Definition of a hormone | LO1 | physiology | definition-discrimination | remember, understand | 1 | neurotransmitter only; paracrine signal; enzyme; metabolite | none |
| Hormone principles | Low hormone concentrations and assays | LO1, LO12 | physiology, investigation | mechanism, data-interpretation | understand, apply | 2 | random baseline test; total value without context; metabolite-style measurement | interpreting a simple assay statement |
| Hormone principles | Plasma protein binding | LO1 | physiology | mechanism, data-interpretation | understand, analyse | 2 | total hormone mistaken as active; binding protein mistaken as hormone; pregnancy TBG trap | thyroid/pregnancy result interpretation |
| Hormone principles | Receptor sensitivity and number | LO1 | physiology, pharmacology | mechanism | understand, apply | 1 | enzyme induction; altered binding only; receptor destruction only | none |
| Hormone principles | Prohormones | LO1 | physiology | mechanism | remember, understand | 1 | T3 as prohormone; TSH as prohormone; C-peptide as active endocrine driver | none |
| Hormone principles | Negative and positive feedback | LO1, LO4 | physiology, clinical aspects | axis-logic, data-interpretation | understand, analyse | 4 | primary/secondary reversed; all feedback negative; high target/high stimulator confusion | hormone panel |
| Hormone principles | Stimulation and suppression tests | LO5, LO13 | physiology, investigation | data-interpretation | apply, analyse | 4 | baseline-only reasoning; suppression/stimulation reversed; normal response called disease | table of pre/post hormone levels |
| Hormone principles | Endocrine versus neural control | LO1 | physiology | mechanism | understand | 1 | endocrine always local; neural always systemic; catecholamines only neurotransmitters | none |

### 4.2 Hypothalamus, pituitary, ADH, prolactin and GH

| Topic | Component | LO(s) | Discipline(s) | Assessment direction | Cognitive level | Minimum variants | Distractor pattern | Practical/IP angle |
|---|---|---|---|---|---|---:|---|---|
| Pituitary | Anterior versus posterior connection | LO1 | anatomy, physiology | anatomical-localisation, mechanism | remember, understand | 2 | posterior via portal vessels; anterior via direct axons; stalk as lymphatic structure | identify pituitary connection |
| Pituitary | Hypothalamic integration | LO1 | physiology | mechanism | understand | 1 | pituitary as sole integrator; thyroid as central controller | none |
| Pituitary | Anterior pituitary control | LO1 | physiology | axis-logic | remember, understand | 3 | dopamine stimulates prolactin; all hormones tonically inhibited; wrong releasing hormone pairs | axis diagram |
| Pituitary | Stalk effect | LO1, LO4 | anatomy, physiology, clinical aspects | mechanism, clinical-recognition, data-interpretation | understand, apply, analyse | 4 | prolactinoma-level prolactin; posterior pituitary prolactin; primary thyroid failure | pituitary stalk image/label |
| Pituitary | Pituitary mass effects | LO1, LO4 | anatomy, clinical aspects | anatomical-localisation, clinical-recognition | apply | 3 | homonymous hemianopia; optic neuritis; cerebellar signs; retinal lesion | sellar MRI/gross anatomy |
| Pituitary | Cavernous sinus involvement | LO1, LO4 | anatomy, clinical aspects | anatomical-localisation | apply | 2 | optic nerve only; facial nerve; cerebellar signs | labelled cavernous sinus relation |
| Pituitary | Hypopituitarism patterns | LO4 | physiology, clinical aspects | data-interpretation | apply, analyse | 4 | primary gland failure; aldosterone lost in ACTH deficiency; hyperpigmentation in secondary AI | hormone panel |
| Pituitary | Hyperpituitarism patterns | LO4 | physiology, clinical aspects | clinical-recognition | apply | 4 | target-gland primary disease; posterior pituitary source for anterior hormones | none |
| Pituitary | Prolactinoma features | LO4 | physiology, clinical aspects | clinical-recognition | apply | 2 | ovarian failure alone; posterior pituitary lesion; adrenal disorder | none |
| Pituitary | Prolactinoma treatment | LO7 | pharmacology, clinical aspects | management, drug-safety | apply | 3 | dopamine antagonist; surgery first line for all; desmopressin | none |
| Growth hormone | GH control and IGF-1 | LO1, LO4 | physiology | mechanism | remember, understand | 2 | dopamine main control; IGF-1 from pituitary; GH lowers glucose | graph/pulse pattern |
| Growth hormone | Acromegaly and gigantism | LO4, LO7 | pathology, clinical aspects, pharmacology | clinical-recognition, management | apply | 4 | hypothyroidism; Cushing; diabetes alone; cabergoline as main treatment | image/hand/face clue |
| Posterior pituitary | Posterior neurosecretion | LO1 | anatomy, physiology | mechanism | remember, understand | 1 | posterior makes hormones locally; anterior stores ADH | diagram |
| Posterior pituitary | Oxytocin control and actions | LO1 | physiology, reproductive physiology | mechanism, developmental-timing | understand, apply | 2 | milk synthesis; follicle recruitment; renal water retention | labour/lactation scenario |
| ADH | ADH action and control | LO1, LO4 | physiology | mechanism | understand, apply | 3 | V1 as main water receptor; sodium excretion as main effect; PTH water control | nephron diagram |
| ADH | Diabetes insipidus | LO4, LO7 | physiology, pathology, clinical aspects | data-interpretation, management | apply, analyse | 4 | SIADH; osmotic diuresis; primary polydipsia; wrong desmopressin logic | urine/plasma osmolality table |
| ADH | SIADH | LO4, LO7 | physiology, pathology, pharmacology, clinical aspects | data-interpretation, management, drug-safety | apply, analyse | 5 | dehydration hyponatraemia; DI; adrenal crisis; rapid correction as safe | sodium/osmolality table |

### 4.3 Thyroid, adrenal, calcium, insulin and diabetes

| Topic | Component | LO(s) | Discipline(s) | Assessment direction | Cognitive level | Minimum variants | Distractor pattern | Practical/IP angle |
|---|---|---|---|---|---|---:|---|---|
| Thyroid | Thyroid anatomy and surgical risk | LO1, LO10 | anatomy, clinical aspects | anatomical-localisation | remember, apply | 3 | external laryngeal nerve for all hoarseness; carotid as main supply; vagus in capsule | neck anatomy/image |
| Thyroid | Thyroid hormone synthesis | LO1 | physiology | mechanism | remember, understand | 2 | calcitonin pathway; deiodinase as follicle-only step; iodine irrelevant | follicle diagram |
| Thyroid | T4 prohormone and T3 active hormone | LO1 | physiology | mechanism | understand | 1 | T4 active final hormone; TSH converted to T3 | none |
| Thyroid | TRH/TSH feedback | LO1 | physiology | axis-logic, data-interpretation | understand, analyse | 4 | high TSH/high T4 as usual Graves; low TSH/low T4 as primary thyroid failure | thyroid result table |
| Thyroid | Thyroid hormone actions | LO1 | physiology | mechanism, clinical-recognition | remember, understand | 2 | lowers BMR; reduces cardiac output; postnatal-only neural role | none |
| Thyroid | Fetal/neonatal thyroid and CHT screening | LO1 | physiology, clinical aspects | developmental-timing, public-health-screening | apply | 3 | screening at birth only; adult BMR only; maternal TSH crosses as protection | day-5 screen result |
| Thyroid | Iodine importance | LO1, LO11 | nutrition, physiology | mechanism, public-health-screening | remember, apply | 1 | iodine as unrelated cofactor; hypercalcaemia link | none |
| Thyroid | Hyperthyroidism causes/features/treatment | LO4, LO7, LO9 | pathology, pharmacology, clinical aspects | clinical-recognition, management, drug-safety | apply | 6 | levothyroxine; beta-blocker alone; RAI in pregnancy; carbimazole fever ignored | TFTs/scenario |
| Thyroid | Hypothyroidism causes/features/treatment | LO4, LO7, LO9 | pathology, pharmacology, clinical aspects | clinical-recognition, management | apply | 4 | carbimazole; PTU; beta-blocker only; no pregnancy dose change | TFTs/scenario |
| Thyroid | Graves versus Hashimoto immunology | LO4 | immunology, pathology | mechanism, clinical-recognition | understand, apply | 3 | both same hormone pattern; Hashimoto eye disease; TRAb destroys gland | antibody table |
| Thyroid | Thyroid eye disease | LO4 | immunology, clinical aspects | clinical-recognition | apply | 2 | Hashimoto as typical cause; cataracts; diabetic retinopathy | image/sign description |
| Adrenal | Adrenal anatomy and venous drainage | LO1 | anatomy | anatomical-localisation | remember, apply | 2 | both veins to renal vein; adrenal in pelvis; single artery only | surgical anatomy |
| Adrenal | Stress response | LO1 | physiology | mechanism | understand | 1 | aldosterone as main acute stress hormone; thyroid axis | none |
| Adrenal | Cortex zones | LO1 | anatomy, physiology | mechanism | remember, understand | 3 | ACTH as main aldosterone regulator; medulla cortisol; reticularis aldosterone | adrenal histology/diagram |
| Adrenal | Aldosterone physiology | LO1 | physiology | mechanism, data-interpretation | understand, apply | 2 | ACTH primary control; PTH control; lowers sodium | electrolytes/renin table |
| Adrenal | Cortisol physiology | LO1 | physiology | mechanism | understand, apply | 2 | insulin-like anabolic only; RAAS driven | none |
| Adrenal | CAH and fetal adrenal disorder | LO1, LO4 | physiology, pathology, embryology | mechanism, clinical-recognition, data-interpretation | apply, analyse | 4 | excess cortisol; low ACTH; DHT deficiency only | steroid pathway |
| Adrenal | Cushing syndrome | LO4, LO7 | pathology, pharmacology, clinical aspects | clinical-recognition, data-interpretation, management | apply, analyse | 5 | Addison; Conn; acromegaly; simple obesity only | cortisol/ACTH table |
| Adrenal | Addison/adrenal insufficiency | LO4 | physiology, pathology, clinical aspects | data-interpretation | apply, analyse | 4 | secondary has hyperpigmentation; aldosterone always ACTH-driven | ACTH/cortisol table |
| Adrenal | Conn syndrome | LO4 | physiology, pathology, clinical aspects | data-interpretation, management | apply, analyse | 4 | phaeochromocytoma; renal artery stenosis with high renin; Cushing | aldosterone/renin/electrolyte table |
| Adrenal | Phaeochromocytoma | LO4 | pathology, pharmacology, clinical aspects | clinical-recognition, management, drug-safety | apply | 4 | beta-blockade first; Conn; panic disorder only | none |
| Adrenal | Endocrine hypertension screen | LO1, LO4 | physiology, clinical aspects | clinical-recognition | apply | 2 | essential hypertension always; diabetes alone | scenario triage |
| Calcium | Parathyroid anatomy and surgical risk | LO1 | anatomy, clinical aspects | anatomical-localisation | remember, apply | 2 | adrenal source; superior thyroid only; posterior pituitary | thyroidectomy complication |
| Calcium | PTH/vitamin D/calcitonin physiology | LO1 | physiology | mechanism | remember, understand | 3 | PTH lowers calcium; vitamin D lowers phosphate; calcitonin main regulator | graph/table |
| Calcium | Calcium regulation | LO1 | physiology | mechanism | understand | 1 | high calcium triggers PTH; ADH controls calcium | none |
| Calcium | Hypercalcaemia causes/features | LO4 | pathology, clinical aspects | clinical-recognition | apply | 3 | vitamin D deficiency; hypoparathyroidism; SIADH | scenario |
| Calcium | Hypocalcaemia causes/features | LO4 | pathology, clinical aspects | clinical-recognition | apply | 3 | primary HPT; malignancy; Conn | signs scenario |
| Calcium | Paired calcium and PTH interpretation | LO5 | physiology, pathology, clinical aspects | data-interpretation | analyse | 6 | primary HPT versus malignancy; vit D deficiency versus hypoparathyroidism; CKD confusion | calcium/PTH table |
| Calcium | Calcium disorder management | LO7 | pharmacology, clinical aspects | management | apply | 3 | fluid restriction; desmopressin; carbimazole | acute management scenario |
| Insulin/diabetes | Insulin identity and glucose homeostasis | LO1 | physiology | mechanism | remember, understand | 2 | alpha-cell insulin; raises glucose; adrenal medulla source | none |
| Insulin/diabetes | Insulin actions by tissue | LO1 | physiology | mechanism | understand, apply | 3 | liver GLUT4; muscle gluconeogenesis; adipose glycogenolysis | metabolic state table |
| Insulin/diabetes | Fed/fasted/starved states | LO1 | physiology | data-interpretation | apply, analyse | 3 | brain never uses ketones; insulin high in starvation | metabolism graph |
| Diabetes | Diabetes in pregnancy | LO5, LO7, LO9 | endocrinology, obstetrics, pharmacology | screening, management, data-interpretation, drug-safety | apply, analyse | 5 | HbA1c for GDM diagnosis; statins/ACEi continued; no future T2DM risk | OGTT/HbA1c scenario |
| Diabetes | Collaborative communication in diabetes | LO14 | communication, clinical aspects | psychosocial-communication | apply | 2 | paternalistic instruction; ignores lived 24/7 burden | consultation response |

### 4.4 Reproductive anatomy, perineum, breast and development

| Topic | Component | LO(s) | Discipline(s) | Assessment direction | Cognitive level | Minimum variants | Distractor pattern | Practical/IP angle |
|---|---|---|---|---|---|---:|---|---|
| Male reproductive anatomy | Testis, epididymis, ductus deferens, prostate, seminal vesicles | LO1 | anatomy | practical-identification, function | remember, understand | 4 | epididymis versus vas; ureter relation; prostate relation confusion | cadaver/model/radiology |
| Gonadal development | Indifferent gonad, SRY, descent | LO1 | embryology, anatomy | developmental-timing, clinical-recognition | understand, apply | 3 | ovary SRY-driven; testis descends after birth; cryptorchidism harmless | embryology scenario |
| Pelvis | Bony and ligamentous pelvis | LO1 | anatomy | practical-identification, anatomical-localisation | remember, apply | 2 | male/female pelvis reversed; wrong pubic arch | pelvis image |
| Female reproductive anatomy | Ovaries, uterus, vagina, uterine position | LO1 | anatomy | anatomical-localisation, practical-identification | remember, apply | 3 | retroversion as always pathological; ovary inside uterus | pelvic diagram |
| Broad ligament | Mesometrium, mesosalpinx, mesovarium | LO1 | anatomy | practical-identification, function | remember, understand | 2 | wrong structure supported by each part | labelled pelvis |
| Pelvic pouches | Pouch of Douglas and vesicouterine pouch | LO1 | anatomy, clinical aspects | anatomical-localisation, clinical-recognition | apply | 3 | bladder as lowest point; male pouch confusion | fluid collection scenario |
| Breast anatomy | Lobules, ducts, Cooper ligaments | LO1 | anatomy | practical-identification, function | remember, understand | 2 | lymph node mistaken for duct; Cooper ligament function wrong | breast image |
| Breast lymphatics | Axillary/internal mammary/supraclavicular drainage | LO1 | anatomy, oncology | anatomical-localisation, clinical-recognition | apply | 3 | all lymph to internal mammary; supraclavicular early only | lymph node staging diagram |
| Perineum | Urogenital triangle and perineal pouches | LO1 | anatomy | practical-identification, function | remember, understand | 3 | superficial/deep pouch contents swapped | labelled perineum |
| Perineal body | Episiotomy and anal sphincter risk | LO1 | anatomy, obstetrics | anatomical-localisation, management | apply | 3 | midline cut safest; ignores sphincter complex | episiotomy diagram |
| Ischioanal fossa | Boundaries and abscess spread | LO1 | anatomy, pathology | anatomical-localisation, clinical-recognition | apply | 3 | abscess cannot cross; fossa inside anal canal | cross-section |
| External genitalia | Erectile tissues, erection, emission, ejaculation | LO1 | anatomy, physiology | mechanism, function | understand, apply | 3 | sympathetic erection; parasympathetic ejaculation; wrong erectile tissue | anatomy image |
| Pudendal nerve | Course, branches, pudendal block | LO1 | anatomy, obstetrics | anatomical-localisation, management | apply | 4 | femoral nerve; sciatic spine wrong landmark; transabdominal approach | pudendal block diagram |
| Mesonephric/paramesonephric ducts | Wolffian/Mullerian derivatives | LO1, LO10 | embryology, radiology | developmental-timing, anatomical-localisation | understand, apply | 4 | AMH preserves Mullerian; testosterone drives female tract; fusion failure irrelevant | pelvic imaging |
| External genital development | DHT, 5-alpha-reductase, genital tubercle/folds | LO1 | embryology, endocrine | mechanism, clinical-recognition | understand, apply | 3 | testosterone not DHT; female requires active hormone | DSD scenario |

### 4.5 Reproductive physiology, puberty, contraception, fertility and lactation

| Topic | Component | LO(s) | Discipline(s) | Assessment direction | Cognitive level | Minimum variants | Distractor pattern | Practical/IP angle |
|---|---|---|---|---|---|---:|---|---|
| Puberty | Kisspeptin, GnRH, MKRN3, adrenarche versus gonadarche | LO1, LO3 | physiology, development | developmental-timing, axis-logic | understand, apply | 4 | adrenarche equals gonadarche; childhood high GnRH; MKRN3 stimulates puberty | axis graph |
| Growth | GH and sex steroids in growth plates | LO3 | physiology | mechanism, developmental-timing | understand, apply | 2 | sex steroids only lengthen indefinitely; GH closes plates | growth curve |
| Female gametogenesis | Meiotic arrest and fertilisation timing | LO1 | embryology, physiology | developmental-timing | understand | 3 | oocytes made after birth; meiosis II before fertilisation | cycle diagram |
| Menstrual cycle | Follicular/luteal phases and LH surge | LO1 | physiology | axis-logic, data-interpretation | understand, analyse | 5 | progesterone peak before ovulation; no positive feedback; luteal length variable | hormone graph |
| HPO axis | GnRH, LH/FSH, oestrogen/progesterone/inhibin | LO1 | physiology | axis-logic, data-interpretation | understand, analyse | 4 | inhibin suppresses LH; progesterone triggers LH surge; pituitary independent | axis diagram |
| Follicle and corpus luteum | Follicle development, ovulation, CL role | LO1 | physiology | mechanism, developmental-timing | understand, apply | 3 | corpus luteum before ovulation; no hCG rescue | cycle scenario |
| Male gametogenesis | Spermatogenesis and Sertoli/Leydig function | LO1 | physiology | mechanism, function | understand | 3 | Leydig makes sperm; Sertoli makes testosterone; one-day cycle | histology/function |
| HPT axis | GnRH, LH/testosterone, FSH/Sertoli/inhibin | LO1 | physiology | axis-logic, data-interpretation | understand, analyse | 3 | inhibin suppresses LH; FSH acts on Leydig cells | hormone table |
| Fertilisation | Capacitation and acrosome reaction | LO1 | physiology, embryology | mechanism | understand | 2 | acrosome before female tract; capacitation in testis | none |
| Contraception | COCP/POP/IUS/IUD/barrier/permanent/emergency mechanisms | LO1, LO7 | physiology, pharmacology, clinical aspects | management, mechanism, drug-safety | apply | 7 | copper IUD hormonal; condom no STI protection; levonorgestrel 5 days best | counselling scenario |
| Lactation | Mammary anatomy and development | LO1, LO3 | anatomy, physiology | function, mechanism | understand | 2 | milk from ducts only; no alveoli; Cooper ligament makes milk | breast diagram |
| Lactation | Prolactin, oxytocin, dopamine | LO1, LO3, LO7 | physiology, pharmacology | mechanism, drug-safety | understand, apply | 5 | prolactin ejects milk; oxytocin makes milk; D2 agonists raise prolactin | lactation scenario |
| Lactation | Milk components | LO1, LO3, LO11 | nutrition, physiology | mechanism, clinical-recognition | understand, apply | 2 | high vitamin K/D; no IgA; colostrum low immune value | none |
| Lactation | Drugs avoided in breastfeeding | LO7, LO11 | pharmacology, clinical aspects | drug-safety | apply | 4 | amoxicillin/lactulose distractors; ignores lithium/amiodarone/cytotoxics | prescribing scenario |
| Lactational amenorrhoea | Prolactin suppresses GnRH; criteria | LO7 | physiology, clinical aspects | mechanism, management | apply | 2 | effective despite mixed feeding; beyond 6 months; menstruation irrelevant | counselling scenario |
| Fertility | Causes of subfertility | LO7 | reproductive medicine | clinical-recognition, data-interpretation | apply, analyse | 4 | female-only investigation; age irrelevant; PID no tubal risk | couple scenario |
| Fertility | Treatments: ovulation induction, IVF, ICSI, donor gametes | LO7 | pharmacology, clinical aspects | management | apply | 4 | ICSI for tubal cause; clomiphene for azoospermia; donor gametes as first-line all | treatment choice |

### 4.6 Placenta, maternal adaptation, labour, neonatal transition and preterm birth

| Topic | Component | LO(s) | Discipline(s) | Assessment direction | Cognitive level | Minimum variants | Distractor pattern | Practical/IP angle |
|---|---|---|---|---|---|---:|---|---|
| Fetal growth | Measurement by SFH and ultrasound biometry | LO1, LO2, LO6 | obstetrics, physiology | management, data-interpretation | apply | 3 | single fundal height definitive; no role for serial ultrasound | growth chart |
| Fetal growth | IUGR versus SGA, macrosomia | LO9 | obstetrics, pathology | clinical-recognition, data-interpretation | apply, analyse | 4 | SGA always pathological; macrosomia no birth risk | growth/Doppler scenario |
| Placenta | Trophoblast, chorionic villi, syncytiotrophoblast | LO1, LO2 | embryology, physiology | mechanism, function | understand, apply | 3 | maternal blood inside fetal vessels; no hormone production | placenta diagram |
| Placenta | Spiral artery remodelling | LO1, LO2 | embryology, pathology, clinical aspects | mechanism, clinical-recognition | apply, analyse | 5 | ductus arteriosus; fertilisation event; corpus luteum regression | PET/IUGR scenario |
| Placenta | Transport mechanisms | LO1, LO2, LO11 | physiology, pharmacology, nutrition | mechanism, drug-safety | understand, apply | 4 | glucose active transport; IgG early first trimester only; all drugs blocked | transport table |
| Maternal adaptation | CV/respiratory/renal/metabolic/coagulation changes | LO2 | physiology, clinical aspects | mechanism, data-interpretation | understand, analyse | 5 | true anaemia not dilutional; reduced GFR; reduced VTE risk | pregnancy physiology table |
| Pregnancy nutrition | undernutrition, over-supply, DOHaD | LO2, LO10, LO11 | nutrition, public health | public-health-screening, mechanism | understand, apply | 3 | fetal environment no adult effect; macrosomia unrelated to GDM | scenario |
| Pregnancy as stress test | GDM to T2DM, PET to CV risk | LO2, LO8 | public health, clinical aspects | integration, public-health-screening | understand, apply | 3 | pregnancy outcome ends at delivery; no future risk counselling | postnatal counselling |
| Labour initiation | placental CRH, prostaglandins, oxytocin sensitivity, stretch | LO2 | physiology | mechanism | understand | 2 | single fully known trigger; fetal kidney signal only | none |
| Labour stages | three stages and normal progression | LO1, LO2 | obstetrics | developmental-timing, clinical-recognition | remember, apply | 2 | placental delivery first; no 10 cm threshold | labour chart |
| Labour contraction | oxytocin Gq/Ca, prostaglandins, Ferguson reflex | LO1, LO2 | physiology, pharmacology | mechanism, management | understand, apply | 4 | oxytocin via cAMP; prostaglandins relax cervix only; negative feedback | labour drug scenario |
| Labour analgesia | Entonox, opioids, epidural | LO7 | pharmacology, obstetrics | management, drug-safety | apply | 3 | opioid near delivery no neonatal effect; epidural no effect on instrumental delivery | scenario |
| PPH pharmacology | oxytocin, ergometrine, carboprost, misoprostol, TXA | LO7 | pharmacology, obstetrics | management, drug-safety | apply | 6 | ergometrine in PET; carboprost in asthma; oxytocin not first line | emergency scenario |
| Abortion induction | mifepristone then misoprostol | LO7 | pharmacology, reproductive health | mechanism, management | apply | 2 | progesterone agonist; misoprostol first only | none |
| Labour risk | fetal hypoxia, shoulder dystocia, PPH, sepsis, eclampsia | LO9 | obstetrics, pathology | clinical-recognition, management | apply | 4 | labour risk only fetal; ignores maternal complications | case scenario |
| Perinatal mortality | stillbirth plus early neonatal death | LO9, LO14 | public health | definition-discrimination, public-health-screening | remember, understand | 1 | includes all infant deaths; excludes stillbirth | none |
| Neonatal maturity | surfactant, thermoregulation, feeding, circulation | LO2 | physiology, neonatal | developmental-timing, mechanism | understand, apply | 5 | surfactant mature at 20 weeks; no brown fat; fetal shunts irrelevant | neonatal scenario |
| Neonatal transition | first breath, PVR fall, DA/FO closure, glucose adaptation | LO2, LO9 | physiology, pathology | mechanism, data-interpretation | apply, analyse | 5 | PGE closes ductus; indomethacin keeps it open; diabetic babies low insulin | neonatal case |
| Preterm definitions | <37 weeks; subcategories; PPROM | LO9 | obstetrics | definition-discrimination | remember | 2 | PPROM after labour; late preterm <28 weeks | none |
| Preterm causes/predictors | infection, multiple pregnancy, short cervix, fetal fibronectin | LO9 | obstetrics, pathology | clinical-recognition, data-interpretation | apply, analyse | 4 | long cervix high risk; previous preterm irrelevant | TVUS/fFN data |
| Preterm management | steroids, tocolysis, MgSO4, antibiotics, in-utero transfer | LO7, LO9 | pharmacology, obstetrics | management, drug-safety | apply | 6 | steroids after 37 weeks routine; MgSO4 after term; tocolysis cures labour | management scenario |
| Prematurity consequences | RDS, IVH, NEC, sepsis, ROP, BPD, hypoglycaemia | LO9 | neonatal, pathology | clinical-recognition | apply | 4 | hypoglycaemia impossible; RDS from excess surfactant | neonatal scenario |

### 4.7 Pregnancy drugs, infections, congenital abnormalities and screening

| Topic | Component | LO(s) | Discipline(s) | Assessment direction | Cognitive level | Minimum variants | Distractor pattern | Practical/IP angle |
|---|---|---|---|---|---|---:|---|---|
| Pregnancy drugs | Teratogen definition and critical periods | LO7, LO9, LO11 | pharmacology, embryology | developmental-timing, drug-safety | understand, apply | 4 | organogenesis after birth; first two weeks structural malformations always | timeline scenario |
| Pregnancy drugs | Altered pharmacokinetics in pregnancy | LO7 | pharmacology, physiology | mechanism, data-interpretation | understand, apply | 3 | lower plasma volume; lower GFR; increased protein binding | prescribing scenario |
| Pregnancy drugs | Drug classes of concern | LO7, LO11 | pharmacology | drug-safety | apply | 8 | ACEi/ARB safe; valproate safe; NSAIDs late safe; retinoids harmless | safe prescribing scenario |
| Pregnancy substances | smoking, alcohol, cocaine, opioids | LO7, LO11 | public health, pharmacology | drug-safety, psychosocial-communication | apply | 4 | alcohol safe threshold; smoking no IUGR; opioids no neonatal withdrawal | counselling scenario |
| Pregnancy infection | HIV/HBV management and neonatal PEP | LO7, LO9 | infection, pharmacology, obstetrics | management, drug-safety | apply | 4 | breastfeed in UK HIV; no neonatal PEP; HBV screen irrelevant | antenatal scenario |
| Pregnancy infection | Neonatal HSV | LO7, LO9 | infection, neonatal | clinical-recognition, management | apply | 3 | reassuring because maternal history absent; oral antibiotics only | sepsis-like baby |
| Pregnancy infection | Varicella exposure | LO7, LO9 | infection, pharmacology | management | apply | 3 | live vaccine in pregnancy; ignore immunity; no newborn treatment | exposure scenario |
| Pregnancy immunology | Th1/Th2 shift, Treg, HLA-G, autoimmune flares | LO2 | immunology | mechanism, clinical-recognition | understand, apply | 3 | trophoblast expresses HLA-A/B strongly; all autoimmune diseases improve | mechanism scenario |
| Maternal immunity | IgG transfer, breast milk IgA, vaccination | LO2, LO14 | immunology, public health | mechanism, public-health-screening | apply | 4 | IgM crosses placenta; first trimester main IgG; live vaccines routine | vaccination scenario |
| Congenital abnormalities | aetiologies: chromosomal, monogenic, multifactorial, teratogen, deformation, disruption | LO9 | genetics, embryology | definition-discrimination, clinical-recognition | understand, apply | 5 | all inherited; all chromosomal; deformation/disruption confusion | anomaly scenario |
| Screening principles | screening versus diagnostic test | LO6 | public health | definition-discrimination, public-health-screening | understand, apply | 3 | screening must be specific/invasive; diagnostic for asymptomatic all | test scenario |
| Screening programmes | Wilson-Jungner criteria and harms | LO6, LO14 | public health | public-health-screening, data-interpretation | apply, analyse | 4 | no false positives; natural history irrelevant; treatment not needed | programme design |
| Antenatal screening | combined test, NIPT, anomaly scan | LO6 | public health, genetics, obstetrics | public-health-screening, data-interpretation | apply, analyse | 5 | NIPT diagnostic; anomaly scan rules out all disorders | risk result |
| Newborn screening | day 5 heel prick, CHT and other conditions | LO6, LO9 | public health, neonatal | public-health-screening, developmental-timing | apply | 3 | screening at birth only; screening equals diagnosis | newborn result |

### 4.8 Amenorrhoea, PCOS, STI, gynaecological pathology, cancer, menopause and ageing

| Topic | Component | LO(s) | Discipline(s) | Assessment direction | Cognitive level | Minimum variants | Distractor pattern | Practical/IP angle |
|---|---|---|---|---|---|---:|---|---|
| Amenorrhoea | Primary versus secondary causes | LO4 | anatomy, physiology, genetics | data-interpretation, clinical-recognition | apply, analyse | 5 | primary/secondary reversed; ignores pregnancy; anatomy/genetics excluded | algorithm/table |
| Amenorrhoea | Turner, AIS, outflow obstruction, hypothalamic/pituitary/ovarian causes | LO4 | genetics, anatomy, endocrine | clinical-recognition, axis-logic | apply, analyse | 5 | AIS as 46XX; Turner high oestrogen; imperforate hymen endocrine failure | case scenario |
| PCOS | Hyperandrogenism, anovulation, metabolic risk | LO4 | endocrine, reproductive medicine | clinical-recognition, data-interpretation | apply, analyse | 5 | low androgens; regular ovulation; no T2DM risk | hormone/metabolic table |
| STI epidemiology | chlamydia, gonorrhoea resistance, syphilis, HIV, mpox | LO4 | infection, public health | clinical-recognition, public-health-screening | remember, apply | 3 | gonorrhoea no resistance; chlamydia rare; no co-screening | none |
| STI risk/co-screening | one STI triggers screening for others and HIV | LO4, LO14 | infection, public health, communication | management, psychosocial-communication | apply | 3 | treat only named STI; no HIV test; no partner notification | consultation scenario |
| STI diagnosis/treatment | chlamydia, gonorrhoea, syphilis, HSV, HPV, HIV, trichomonas | LO4, LO5, LO7 | infection, pharmacology | clinical-recognition, investigation, management | apply | 8 | wrong test/treatment pairs; ignores resistance culture; aciclovir cure | symptom scenario |
| Gyn pathology | Pathological principles causing symptoms | LO4 | pathology, clinical aspects | mechanism, clinical-recognition | understand, apply | 3 | mass effect causing cyclical bleeding only; invasion harmless | symptom mechanism |
| Endometriosis | Ectopic endometrial tissue, cyclical pain, subfertility | LO4 | pathology, clinical aspects | clinical-recognition | apply | 4 | fibroids; PID; ovarian cancer; simple dysmenorrhoea | scenario |
| Endometrial cancer | PMB, unopposed oestrogen risks | LO4 | pathology, oncology | clinical-recognition, management | apply | 4 | reassure PMB; low oestrogen risk; HPV cause | scenario |
| Fibroids | Oestrogen-responsive smooth muscle tumour | LO4 | pathology, clinical aspects | clinical-recognition | apply | 3 | ovarian cyst; cervical cancer; adenomyosis only | scenario |
| Ovarian neoplasm | epithelial/high-grade serous/BRCA/CA-125/late symptoms | LO4 | pathology, oncology | clinical-recognition, data-interpretation | apply, analyse | 4 | early obvious bleeding; PSA marker; squamous cell commonest | tumour marker scenario |
| Cervical cancer/screening | HPV, CIN, screening intervals, vaccine | LO4, LO6, LO7 | pathology, infection, public health | public-health-screening, mechanism | apply, analyse | 5 | HPV 6/11 main cancer; cervical smear diagnostic for all; vaccine treats cancer | screening result |
| Male reproductive cancer | testicular/prostate cancer and tumour markers | LO4, LO5, LO7 | pathology, oncology | clinical-recognition, data-interpretation | apply, analyse | 4 | CA-125 for testis; painless testicular lump ignored; PSA diagnostic only | marker table |
| Menopause | HPG axis, symptoms, high FSH/LH | LO4, LO7 | endocrine, reproductive medicine | axis-logic, clinical-recognition | apply, analyse | 3 | low FSH/LH; pregnancy hormone pattern; puberty pattern | hormone table |
| Menopause treatment | HRT, progesterone if uterus, non-hormonal options, bone protection | LO7 | pharmacology, clinical aspects | management, drug-safety | apply | 5 | unopposed oestrogen with uterus; testosterone first-line all; no vaginal oestrogen | prescribing scenario |
| Breast cancer | multimodality treatment | LO7 | oncology, anatomy, pharmacology | management, integration | apply | 4 | surgery only; no axillary staging; ignores endocrine/HER2 status | pathway scenario |
| Cancer in ageing | frailty, comorbidity, polypharmacy, trial evidence | LO7, LO14 | oncology, ageing, communication | psychosocial-communication, management | apply | 3 | chronological age alone; standard chemo for all; no CGA | consultation scenario |
| Sexuality and ageing | patient as individual, avoid stereotypes | LO8, LO14 | communication, sociology | psychosocial-communication | apply | 2 | stereotyping; assumes no sexuality; ignores patient priorities | consultation response |

---

## 5. Cross-cutting integration families

These should be tagged separately because they can generate high-quality synoptic questions across several topics.

| Family | Components it connects | Assessment direction | Minimum variants |
|---|---|---|---:|
| Axis logic through life | HPG fetal life, childhood, puberty, cycles, pregnancy, menopause; HPA/HPT axes | axis-logic, data-interpretation | 8 |
| Primary versus secondary endocrine failure | thyroid, adrenal, gonadal, pituitary, calcium where relevant | data-interpretation | 8 |
| Dynamic testing | dexamethasone suppression, Synacthen, OGTT, screening thresholds | data-interpretation | 6 |
| Anatomy to complication | pituitary/chiasm, thyroid/RLN, parathyroid, adrenal vein, pudendal nerve, pouches, breast lymphatics | anatomical-localisation, practical-identification | 12 |
| Drug safety in pregnancy/breastfeeding | thyroid drugs, diabetes drugs, teratogens, PPH drugs, breastfeeding contraindications, infection drugs | drug-safety | 12 |
| Dopamine/prolactin pharmacology | stalk effect, prolactinoma, lactation suppression/promotion, antipsychotic side effects | mechanism, drug-safety | 5 |
| Steroid pharmacology | HRT, tamoxifen, aromatase inhibitors, GnRH agonists, androgen blockers, corticosteroids | mechanism, drug-safety | 8 |
| Autoimmunity recurrence | Graves, Hashimoto, Addison, T1DM, POI | mechanism, clinical-recognition | 5 |
| Pregnancy as stress test | GDM, PET, IUGR, future maternal risk | integration, public-health-screening | 4 |
| DOHaD | undernutrition, smoking, GDM, offspring CV/metabolic risk | public-health-screening, mechanism | 3 |
| Screening principles | antenatal, NIPT, anomaly scan, heel-prick, cervical, breast, bowel, AAA | public-health-screening, data-interpretation | 10 |
| Communication/MI/person-centred care | diabetes, weight, smoking, contraception, STI, ageing, perinatal mental health | psychosocial-communication | 8 |

---

## 6. Question quota strategy

These are planning targets for a full robust bank. They are deliberately larger than a single exam paper because the bank needs enough items to allow repeated practice without memorising answers.

| Area | Minimum planned SBA variants | Rationale |
|---|---:|---|
| Endocrine foundations and dynamic testing | 16 | Core logic for later endocrine disease interpretation. |
| Pituitary, ADH, prolactin and GH | 35 | High integration of anatomy, physiology, pathology and pharmacology. |
| Thyroid | 35 | Strong axis, drug safety, pregnancy, anatomy and screening angles. |
| Adrenal, calcium, insulin and diabetes | 45 | Heavy data interpretation and management content. |
| Reproductive anatomy, perineum, breast and development | 45 | Needed for practical-style and applied anatomy coverage. |
| Reproductive physiology, contraception, fertility and lactation | 45 | Axis logic, pharmacology and clinical counselling. |
| Placenta, labour, neonatal transition and preterm birth | 50 | High integration and management/drug safety density. |
| Pregnancy drugs, infection, congenital abnormality and screening | 40 | Public health, pharmacology and developmental timing. |
| STI, gynaecological pathology, cancer, menopause and ageing | 50 | Clinical recognition, investigation, management and communication. |
| Cross-cutting integration families | 30 | Prevents compartmentalised learning. |
| **Total planned pool** | **391** | Full bank target before pruning/review. |

A shorter first-pass build can target 120 to 150 approved questions, but the planning matrix should remain larger so coverage is not lost.

---

## 7. Drafting batches

### Batch A: Endocrine foundations and axes

Target: 40 questions.

Coverage:

- Hormone principles and feedback: 10
- Pituitary/stalk/hypopituitarism/hyperpituitarism: 10
- ADH/DI/SIADH: 8
- Dynamic endocrine testing: 6
- Cross-cutting primary/secondary/tertiary failure: 6

Cognitive mix:

- remember: 5
- understand: 12
- apply: 12
- analyse: 11

### Batch B: Thyroid, adrenal, calcium, diabetes

Target: 50 questions.

Coverage:

- Thyroid: 16
- Adrenal: 14
- Calcium/PTH: 8
- Insulin/metabolism/diabetes: 6
- Pregnancy endocrine overlaps: 6

Cognitive mix:

- remember: 5
- understand: 12
- apply: 18
- analyse: 15

### Batch C: Reproductive anatomy and physiology

Target: 50 questions.

Coverage:

- Reproductive anatomy/perineum/breast: 18
- Embryology and duct derivatives: 8
- Puberty/gametogenesis/HPO/HPT axes: 12
- Contraception and fertility: 12

Cognitive mix:

- remember: 8
- understand: 16
- apply: 18
- analyse: 8

### Batch D: Pregnancy, placenta, labour and neonatal transition

Target: 50 questions.

Coverage:

- Placenta/fetal growth: 10
- Maternal adaptations and pregnancy as stress test: 8
- Labour and PPH pharmacology: 10
- Neonatal transition and prematurity: 12
- Pregnancy drugs/infections/immunology: 10

Cognitive mix:

- remember: 4
- understand: 12
- apply: 22
- analyse: 12

### Batch E: Reproductive pathology, STI, cancer, screening and communication

Target: 50 questions.

Coverage:

- Amenorrhoea/PCOS/subfertility: 10
- STI: 10
- Gynaecological pathology: 10
- Cancer/menopause/ageing: 10
- Screening and communication: 10

Cognitive mix:

- remember: 4
- understand: 10
- apply: 24
- analyse: 12

---

## 8. Approval checklist

Before a question is marked `approved`, check:

- [ ] It maps to a row in this master blueprint.
- [ ] It maps to at least one module LO/session LO.
- [ ] The assessment direction is explicit.
- [ ] The cognitive level is appropriate for the verb in the LO and the assessment lecture.
- [ ] The question is SBA format unless deliberately marked practical-style.
- [ ] The lead-in passes the cover test.
- [ ] There are exactly five answer options.
- [ ] There is one best answer.
- [ ] Distractors are plausible and same-category.
- [ ] Distractors reflect common misconceptions from the matrix.
- [ ] The answer is not obvious by option length/detail.
- [ ] The explanation teaches the reasoning, not just the fact.
- [ ] The revision action tells the learner what to fix.
- [ ] It does not exceed the supplied examinable content.
- [ ] It is written in British English.
- [ ] It avoids emojis and informal wording.

---

## 9. Rule for adding to `questions.js`

A drafted item should only be added to `questions.js` after it has:

1. a blueprint row;
2. a planning header;
3. a checked lead-in;
4. five plausible options;
5. an explanation;
6. a revision action;
7. status changed from `draft` to `approved`.

This prevents the question bank from becoming a pile of random MCQs and keeps it aligned with the assessment lecture.
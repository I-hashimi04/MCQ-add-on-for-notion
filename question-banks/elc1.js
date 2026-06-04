window.quizBanks = window.quizBanks || {};
window.quizBanks.elc1 = {
  id: "elc1",
  title: "ELC1 — Endocrine foundations and axes",
  shortTitle: "ELC1",
  description: "Hormone principles, pituitary, prolactin, GH, ADH, DI, SIADH and dynamic endocrine testing.",
  blueprintBatch: "Batch A",
  questions: [
    {
      id: "endo-hormone-feedback-001",
      module: "ELC",
      paper: "Paper 2",
      topic: "Hormone principles",
      component: "Primary vs secondary endocrine failure",
      moduleLOs: ["LO1", "LO4"],
      sessionLOs: [
        "Describe the principles of negative and positive feedback control mechanisms and identify primary and secondary causes of abnormal hormone secretion"
      ],
      disciplines: ["physiology", "clinical aspects"],
      cognitiveLevel: "analyse",
      assessmentSkill: "axis-logic",
      variantType: "data-interpretation",
      questionType: "single-best-answer",
      revisionAction: "Review endocrine feedback-loop logic: primary failure gives low target hormone with high stimulating hormone; secondary failure gives both low.",
      question: "A patient has fatigue, weight gain and cold intolerance. Blood tests show low free T4 and low TSH.",
      leadIn: "Which level of the endocrine axis is most likely failing?",
      options: [
        "Pituitary",
        "Thyroid gland",
        "Peripheral thyroid hormone receptor",
        "Thyroid-binding globulin",
        "Iodide transport in the thyroid follicle"
      ],
      answer: 0,
      explanation: "Low free T4 with low TSH suggests secondary hypothyroidism due to pituitary failure. In primary thyroid failure, TSH would usually be high."
    },
    {
      id: "pituitary-stalk-effect-001",
      module: "ELC",
      paper: "Paper 2",
      topic: "Hypothalamus and pituitary",
      component: "Prolactin regulation and stalk effect",
      moduleLOs: ["LO1", "LO4"],
      sessionLOs: [
        "Explain how anterior pituitary hormone secretion is under the control of stimulatory and inhibitory hormones from the hypothalamus",
        "Describe the clinical signs and symptoms of structural pituitary abnormalities"
      ],
      disciplines: ["anatomy", "physiology", "clinical aspects"],
      cognitiveLevel: "understand",
      assessmentSkill: "mechanism",
      variantType: "clinical-recognition",
      questionType: "single-best-answer",
      revisionAction: "Review dopamine inhibition of prolactin and why pituitary stalk compression raises prolactin while other anterior pituitary hormones fall.",
      question: "A pituitary mass compresses the pituitary stalk. Prolactin is mildly raised while several other anterior pituitary hormones are reduced.",
      leadIn: "Which mechanism best explains the raised prolactin?",
      options: [
        "Loss of hypothalamic dopamine inhibition",
        "Direct secretion of prolactin by the posterior pituitary",
        "Increased peripheral conversion of T4 to T3",
        "Reduced renal clearance of cortisol",
        "Excess stimulation by ACTH"
      ],
      answer: 0,
      explanation: "Prolactin is tonically inhibited by dopamine. Stalk compression reduces dopamine delivery to the anterior pituitary, so prolactin rises."
    }
  ]
};

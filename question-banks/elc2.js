window.quizBanks = window.quizBanks || {};
window.quizBanks.elc2 = {
  id: "elc2",
  title: "ELC2 — Thyroid, adrenal, calcium and diabetes",
  shortTitle: "ELC2",
  description: "Thyroid disease, adrenal disorders, calcium/PTH interpretation, insulin physiology and diabetes in pregnancy.",
  blueprintBatch: "Batch B",
  questions: [
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
    },
    {
      id: "calcium-pth-interpretation-001",
      module: "ELC",
      paper: "Paper 2",
      topic: "Calcium",
      component: "Paired calcium and PTH interpretation",
      moduleLOs: ["LO4", "LO5"],
      sessionLOs: [
        "Have a clear diagnostic and workup plan for calcium disorders",
        "Understand the most common causes of calcium disorders"
      ],
      disciplines: ["physiology", "pathology", "clinical aspects"],
      cognitiveLevel: "analyse",
      assessmentSkill: "data-interpretation",
      variantType: "biochemistry-pattern",
      questionType: "single-best-answer",
      revisionAction: "Review the paired calcium and PTH framework: high calcium plus suppressed PTH points away from primary hyperparathyroidism and towards malignancy or another PTH-independent cause.",
      question: "A patient has confusion, constipation and bone pain. Blood tests show raised adjusted calcium and suppressed PTH.",
      leadIn: "Which cause is most consistent with these results?",
      options: [
        "Malignancy-associated hypercalcaemia",
        "Primary hyperparathyroidism",
        "Post-thyroidectomy hypoparathyroidism",
        "Vitamin D deficiency",
        "Chronic kidney disease causing secondary hyperparathyroidism"
      ],
      answer: 0,
      explanation: "High calcium with suppressed PTH suggests a PTH-independent cause such as malignancy-associated hypercalcaemia. Primary hyperparathyroidism would have inappropriately normal or high PTH."
    }
  ]
};

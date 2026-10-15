export interface AeoArticleData {
  url: string;
  categoryLabel: string;
  readTime: string;
  lastReviewedDate: string;
  leadParagraph: string;
  primaryDirectQuestion: {
    questionH2: string;
    directAnswer: string;
    furtherDetail: string[];
  };
  clinicalSections: {
    headingH2: string;
    isQuestion?: boolean;
    directAnswer?: string;
    paragraphs: string[];
    bulletList?: string[];
    comparisonTable?: {
      headers: string[];
      rows: string[][];
    };
    calloutBox?: {
      title: string;
      text: string;
      type: 'info' | 'caution' | 'fact';
    };
  }[];
  faqItems?: {
    question: string;
    answer: string;
  }[];
  suggestedReads: {
    title: string;
    url: string;
    snippet: string;
  }[];
}

export const AEO_ARTICLES_RECORD: Record<string, AeoArticleData> = {
  "/understand-vitiligo/segmental-vitiligo/": {
    url: "/understand-vitiligo/segmental-vitiligo/",
    categoryLabel: "Clinical Types",
    readTime: "6 min read",
    lastReviewedDate: "October 2026",
    leadParagraph: "Segmental vitiligo represents a distinct, fascinating subset of vitiligo that behaves very differently from widespread bilateral types. While most vitiligo develops symmetrically across both sides of the body, segmental vitiligo restricts itself to a specific unilateral distribution.",
    primaryDirectQuestion: {
      questionH2: "What Is Segmental Vitiligo?",
      directAnswer: "Segmental vitiligo is a distinct form of vitiligo that occurs on only one side or a specific segment of the body, often along a dermatomal pattern. It typically begins early in childhood, progresses rapidly over 6 to 24 months, and then reaches long-term clinical stability without crossing the body's midline.",
      furtherDetail: [
        "Unlike generalized vitiligo, which can fluctuate over a lifetime, segmental vitiligo is characterized by this rapid onset followed by spontaneous arrest.",
        "Because it stabilizes permanently in most individuals, segmental vitiligo is considered one of the best candidates for advanced cellular transplantation procedures once inactive."
      ]
    },
    clinicalSections: [
      {
        headingH2: "How Does Segmental Vitiligo Differ from Non-Segmental Vitiligo?",
        isQuestion: true,
        directAnswer: "Segmental vitiligo differs primarily in its symmetry, age of onset, and disease velocity. It is strictly unilateral, rarely crosses the body's vertical midline, often involves early follicular hair whitening (poliosis), and stabilizes rapidly compared to fluctuating non-segmental disease.",
        paragraphs: [
          "Dermatologists use the following clinical distinctions when examining patients under both natural illumination and long-wave ultraviolet light (Wood's lamp):"
        ],
        comparisonTable: {
          headers: ["Clinical Feature", "Segmental Vitiligo", "Non-Segmental Vitiligo"],
          rows: [
            ["Body Distribution", "Unilateral (one side only)", "Bilateral & roughly symmetrical"],
            ["Typical Age of Onset", "Early childhood / adolescence", "Any age (frequently 15–30)"],
            ["Natural Course", "Rapid spread 6–24 mo, then stable", "Chronic relapsing-remitting course"],
            ["Hair Involvement (Poliosis)", "Early and frequent in the patch", "Variable; occurs later in disease"],
            ["Autoimmune Comorbidities", "Less commonly linked to thyroid disease", "Higher association with thyroid/Hashimoto's"]
          ]
        }
      },
      {
        headingH2: "The Neuro-Immune Hypothesis of Segmental Depigmentation",
        isQuestion: false,
        paragraphs: [
          "Researchers believe segmental vitiligo involves localized somatic mosaicism combined with neurogenic mediators. During embryonic development, a clone of cells within a specific neural crest or skin segment may carry increased vulnerability to oxidative stress or immune surveillance.",
          "When local sympathetic nerve endings release neuropeptides, local melanocytes can become distressed, attracting cytotoxic T cells to that solitary dermatome. Once those susceptible melanocytes are cleared, the immune activity halts because the surrounding skin lacks that mosaic vulnerability."
        ],
        calloutBox: {
          title: "Surgical Melanocyte Grafting Suitability",
          text: "Because segmental vitiligo achieves stable status naturally, qualified patients are frequently candidates for non-cultured melanocyte-keratinocyte transplantation (MKTP) or suction blister grafting, achieving excellent repigmentation rates.",
          type: "fact"
        }
      },
      {
        headingH2: "Does Segmental Vitiligo Spread Over Time?",
        isQuestion: true,
        directAnswer: "Segmental vitiligo generally does not spread after its initial 6 to 24-month progression phase. Once this initial activity ceases, the patches typically remain stable indefinitely, making spontaneous expansion to distant body areas exceedingly uncommon.",
        paragraphs: [
          "In exceptionally rare situations (less than 3% of patients), an individual with stable segmental vitiligo may years later develop bilateral symmetrical patches elsewhere. Dermatologists classify this rare scenario as 'mixed vitiligo', which represents dual mechanisms."
        ]
      }
    ],
    faqItems: [
      {
        question: "Can segmental vitiligo affect hair follicles?",
        answer: "Yes. Early follicular leukotrichia (poliosis) is a hallmark of segmental vitiligo. Because hair root melanocyte stem cells are often cleared early, medical repigmentation with creams alone can be slower than on non-segmental skin."
      },
      {
        question: "Is segmental vitiligo associated with thyroid disorders?",
        answer: "Less frequently than non-segmental vitiligo. While patients with generalized vitiligo routinely receive annual thyroid screening, segmental vitiligo has a substantially lower incidence of comorbid autoimmune thyroiditis."
      }
    ],
    suggestedReads: [
      { title: "What Are the Different Types of Vitiligo?", url: "/understand-vitiligo/types-of-vitiligo/", snippet: "Overview of generalized, acrofacial, mucosal, and segmental classifications." },
      { title: "Stable vs Active Vitiligo Differences", url: "/understand-vitiligo/stable-vs-active-vitiligo/", snippet: "Learn the clinical signs indicating whether skin patches are stable or active." },
      { title: "Vitiligo Treatment Options Explained", url: "/vitiligo-treatment/", snippet: "Evidence-based topicals, phototherapy, and specialized surgical grafting." }
    ]
  },

  "/understand-vitiligo/non-segmental-vitiligo/": {
    url: "/understand-vitiligo/non-segmental-vitiligo/",
    categoryLabel: "Clinical Types",
    readTime: "6 min read",
    lastReviewedDate: "October 2026",
    leadParagraph: "Non-segmental vitiligo (NSV) is the most prevalent clinical presentation of vitiligo, accounting for approximately 85% to 90% of all diagnosed cases worldwide. Understanding its symmetrical distribution and autoimmune nature empowers patients to navigate treatment choices effectively.",
    primaryDirectQuestion: {
      questionH2: "What Is Non-Segmental Vitiligo?",
      directAnswer: "Non-segmental vitiligo is a chronic autoimmune condition where depigmented macules and patches develop symmetrically on both sides of the body. It commonly affects wrists, hands, elbows, knees, and perioral facial skin, following a variable course with alternating phases of stability and activity.",
      furtherDetail: [
        "In non-segmental vitiligo, the immune system's cytotoxic CD8+ T cells circulate systemically and recognize specific melanocyte surface proteins, causing gradual or episodic loss of epidermal pigment.",
        "Because it is an autoimmune process, dermatologists frequently recommend periodic screening for other common autoimmune conditions, most notably thyroiditis."
      ]
    },
    clinicalSections: [
      {
        headingH2: "Common Subtypes of Non-Segmental Vitiligo",
        isQuestion: false,
        paragraphs: [
          "Non-segmental vitiligo is an umbrella category encompassing several distinctive anatomical distribution patterns:",
          "• Generalized Vitiligo: Bilateral, widely scattered patches across multiple body regions.",
          "• Acrofacial Vitiligo: Concentrated on the extremities (fingertips, hands, toes) and facial orifices (lips, nose, eyelids).",
          "• Mucosal Vitiligo: Involving oral, genital, or vermilion lip boundaries.",
          "• Universal Vitiligo: Widespread involvement covering over 80% to 90% of total body surface area."
        ]
      },
      {
        headingH2: "Can Non-Segmental Vitiligo Be Managed?",
        isQuestion: true,
        directAnswer: "Non-segmental vitiligo can be managed through evidence-based dermatological therapies designed to stabilize active spreading and stimulate melanocyte recovery. First-line treatments include topical JAK inhibitors, calcineurin inhibitors, and narrowband UVB phototherapy.",
        paragraphs: [
          "Modern therapeutic strategies emphasize two distinct phases: first, calming the autoimmune inflammation with targeted topicals; and second, stimulating follicular melanocyte stem cells to migrate and repigment the epidermis."
        ],
        calloutBox: {
          title: "Symmetry and the Koebner Effect",
          text: "Because symmetrical joints experience equal daily friction, patches often appear in mirroring pairs on elbows, wrists, and knees. Avoiding tight garments or repetitive micro-trauma helps minimize friction-induced patches.",
          type: "info"
        }
      }
    ],
    faqItems: [
      {
        question: "Is non-segmental vitiligo hereditary?",
        answer: "There is a polygenic susceptibility component, but direct inheritance is low. About 80% of individuals with non-segmental vitiligo have no direct family history of the condition."
      },
      {
        question: "How long does treatment take to show results?",
        answer: "Melanocyte proliferation requires patience. Topical regimens and narrowband UVB typically require 3 to 6 months of consistency before dermatologists evaluate clinical repigmentation progress."
      }
    ],
    suggestedReads: [
      { title: "What Are the Current Medical Treatments for Vitiligo?", url: "/vitiligo-treatment/", snippet: "Topical creams, phototherapy cabins, and laser protocols." },
      { title: "Topical Treatments for Vitiligo", url: "/vitiligo-treatment/topical-treatments-for-vitiligo/", snippet: "Corticosteroids, tacrolimus, and topical JAK inhibitors." },
      { title: "Nutrition and Vitiligo Facts", url: "/vitiligo-nutrition/", snippet: "Understanding dietary support without false miracle promises." }
    ]
  },

  "/understand-vitiligo/types-of-vitiligo/": {
    url: "/understand-vitiligo/types-of-vitiligo/",
    categoryLabel: "Clinical Types",
    readTime: "7 min read",
    lastReviewedDate: "October 2026",
    leadParagraph: "When a healthcare provider evaluates vitiligo, one of their first steps is determining the exact clinical type. The type informs expected progression, indicates how well different body areas may respond to light therapy or topicals, and guides clinical monitoring.",
    primaryDirectQuestion: {
      questionH2: "What Are the Main Types of Vitiligo?",
      directAnswer: "Vitiligo is classified into two primary categories: non-segmental vitiligo (which includes generalized, acrofacial, mucosal, and universal subtypes) and segmental vitiligo. A rare third category, mixed vitiligo, features both segmental and non-segmental patterns in the same individual.",
      furtherDetail: [
        "Non-segmental vitiligo is by far the most common, accounting for nearly 9 out of 10 cases, and presents bilaterally.",
        "Segmental vitiligo is unilateral, restricted to one dermatome, and typically stabilizes within 1 to 2 years."
      ]
    },
    clinicalSections: [
      {
        headingH2: "Clinical Breakdown of Major Vitiligo Classifications",
        isQuestion: false,
        paragraphs: [
          "The Vitiligo Global Issues Consensus Conference (VGICC) standardized international terminology into the following clinical schema:"
        ],
        comparisonTable: {
          headers: ["Type Name", "Category", "Distribution", "Progression Profile"],
          rows: [
            ["Generalized", "Non-Segmental", "Bilateral symmetrical across limbs & torso", "Relapsing-remitting variable course"],
            ["Acrofacial", "Non-Segmental", "Fingertips, hands, toes, and facial orifices", "Face responds well; hands recalcitrant"],
            ["Mucosal", "Non-Segmental", "Lips, oral mucosa, and genital borders", "May remain isolated or generalize"],
            ["Segmental", "Segmental", "Unilateral along a single nerve dermatome", "Rapid onset, early poliosis, stabilizes early"],
            ["Universal", "Non-Segmental", "Extensive loss covering >80-90% body surface", "Advanced long-term progression"]
          ]
        }
      },
      {
        headingH2: "Descriptive Subtypes: Focal, Trichrome, and Confetti Patches",
        isQuestion: false,
        paragraphs: [
          "Dermatologists also use descriptive terminology to characterize how lesions look at the margins:",
          "• Focal Vitiligo: A solitary macule that has not spread or established a segmental or bilateral pattern.",
          "• Trichrome Vitiligo: A lesion showing three shades of color (normal skin, light brown halo, and chalk-white center), which often signals active disease.",
          "• Confetti-Like Vitiligo: Dozens of tiny 1–5 mm punctate white spots that cluster together, strongly indicating rapid active progression that warrants clinical stabilization."
        ]
      }
    ],
    faqItems: [
      {
        question: "Can one type of vitiligo turn into another?",
        answer: "Generally, segmental vitiligo remains segmental. However, in mixed vitiligo, symmetrical patches can develop years after a segmental patch has stabilized."
      },
      {
        question: "How does a doctor determine my vitiligo type?",
        answer: "Through careful clinical mapping under normal room light and Wood's lamp examination, accompanied by detailed history of how and where patches first emerged."
      }
    ],
    suggestedReads: [
      { title: "Segmental Vitiligo Guide", url: "/understand-vitiligo/segmental-vitiligo/", snippet: "Unilateral patterns and rapid stabilization characteristics." },
      { title: "Non-Segmental Vitiligo Guide", url: "/understand-vitiligo/non-segmental-vitiligo/", snippet: "Symmetrical bilateral vitiligo mechanisms and care." },
      { title: "Stable vs Active Vitiligo Differences", url: "/understand-vitiligo/stable-vs-active-vitiligo/", snippet: "Clinical signs of disease velocity and therapeutic timing." }
    ]
  },

  "/vitiligo-nutrition/foods-for-vitiligo/": {
    url: "/vitiligo-nutrition/foods-for-vitiligo/",
    categoryLabel: "Nutrition & Diet",
    readTime: "6 min read",
    lastReviewedDate: "October 2026",
    leadParagraph: "Few topics surrounding vitiligo attract more online curiosity — and more misleading claims — than food. People naturally wonder if specific fruits, spices, or elimination diets can stimulate melanin production or halt depigmentation.",
    primaryDirectQuestion: {
      questionH2: "Can Certain Foods Help People With Vitiligo?",
      directAnswer: "No specific food or diet has been medically proven to cure or repigment vitiligo. A wholesome diet rich in antioxidants, vitamins, and minerals supports general immune health and prevents nutritional deficiencies, but food cannot replace prescribed dermatological treatments.",
      furtherDetail: [
        "Vitiligo is an antigen-targeted autoimmune condition involving cytotoxic memory T cells; eating specific foods cannot reprogram these specialized immune cells.",
        "However, people with vitiligo often experience low vitamin D levels due to sun protection, making balanced dietary awareness clinically valuable."
      ]
    },
    clinicalSections: [
      {
        headingH2: "Nutrient-Dense Foods to Support General Health",
        isQuestion: false,
        paragraphs: [
          "Rather than seeking a non-existent 'cure food,' focus on balanced Mediterranean-style whole foods that provide micronutrients for overall physiological vigor:"
        ],
        comparisonTable: {
          headers: ["Food Category", "Key Nutrient Contributions", "Scientific Evidence Status"],
          rows: [
            ["Dark Leafy Greens (Spinach, Kale)", "Folate, iron, lutein, and magnesium", "General nutritional support; not a cure"],
            ["Fatty Fish (Wild Salmon, Sardines)", "Omega-3 fatty acids, dietary Vitamin D", "Cardiovascular & general health support"],
            ["Nuts & Seeds (Walnuts, Pumpkin Seeds)", "Zinc, copper, plant ALA, Vitamin E", "Essential trace enzyme cofactors"],
            ["Legumes (Lentils, Chickpeas)", "Plant protein, complex fiber, zinc", "Blood sugar stability & micronutrients"],
            ["Citrus & Berries (Blueberries, Oranges)", "Vitamin C, bioflavonoids, antioxidants", "Cellular antioxidant defense; not a cure"]
          ]
        }
      },
      {
        headingH2: "Why Internet 'Vitiligo Cure Diets' Fail Medical Scrutiny",
        isQuestion: false,
        paragraphs: [
          "Social media frequently promotes restrictive regimens (such as cutting out all gluten, nightshades, or acidic foods) claiming they 'cure' vitiligo. No peer-reviewed randomized controlled trial supports these claims.",
          "Unnecessary elimination diets can lead to caloric and micronutrient deficits, adding unnecessary anxiety to daily life. Dermatology consensus emphasizes a colorful, diverse, unrestrictive diet unless a patient has an independently diagnosed medical condition like celiac disease."
        ],
        calloutBox: {
          title: "Medical Consensus",
          text: "Always discuss dietary changes with your dermatologist or a registered dietitian. Never discontinue prescribed medical therapies in favor of unverified dietary protocols.",
          type: "caution"
        }
      }
    ],
    faqItems: [
      {
        question: "Do citrus fruits make vitiligo worse?",
        answer: "No. The myth that lemons, oranges, or sour foods worsen vitiligo has zero scientific basis. Citrus fruits provide valuable dietary vitamin C and flavonoids."
      },
      {
        question: "Does drinking celery juice cure vitiligo?",
        answer: "No. Celery juice provides hydration, but cannot stop autoimmune T cells from targeting melanocytes."
      }
    ],
    suggestedReads: [
      { title: "Vitamin D and Vitiligo", url: "/vitiligo-nutrition/vitamin-d-and-vitiligo/", snippet: "Why sun avoidance often leads to low vitamin D and how to address it." },
      { title: "Vitiligo Diet Myths Debunked", url: "/vitiligo-nutrition/vitiligo-diet-myths/", snippet: "Examining claims about turmeric, fish-milk, and amla." },
      { title: "Does Diet Change by Vitiligo Type?", url: "/vitiligo-nutrition/diet-by-vitiligo-type/", snippet: "Evidence regarding segmental vs generalized vitiligo nutrition." }
    ]
  },

  "/vitiligo-treatment/phototherapy-for-vitiligo/": {
    url: "/vitiligo-treatment/phototherapy-for-vitiligo/",
    categoryLabel: "Medical Treatment",
    readTime: "7 min read",
    lastReviewedDate: "October 2026",
    leadParagraph: "Phototherapy represents one of the most rigorously studied and effective first-line therapeutic modalities for vitiligo. By exposing depigmented skin to highly purified wavelengths of therapeutic ultraviolet light, dermatologists can halt local immune destruction and prompt dormant pigment cells to awake.",
    primaryDirectQuestion: {
      questionH2: "How Does Phototherapy Work for Vitiligo?",
      directAnswer: "Phototherapy works by administering controlled doses of specific ultraviolet wavelengths (predominantly narrowband UVB at 311–312 nm) to suppress cutaneous T-cell inflammation in the epidermis while simultaneously stimulating melanocyte stem cells nestled inside hair follicles to proliferate, migrate, and produce melanin.",
      furtherDetail: [
        "Treatment is typically conducted 2 to 3 times per week over 6 to 18 months under strict medical supervision.",
        "Repigmentation usually appears first as tiny freckle-like perifollicular dots that expand and merge over time."
      ]
    },
    clinicalSections: [
      {
        headingH2: "Narrowband UVB Cabin vs. Targeted 308 nm Excimer Laser",
        isQuestion: false,
        paragraphs: [
          "Dermatologists utilize two primary phototherapy formats based on how widespread patches are across the body:"
        ],
        comparisonTable: {
          headers: ["Feature", "Narrowband UVB (NB-UVB)", "Targeted 308 nm Excimer Laser"],
          rows: [
            ["Wavelength", "311–312 nm ultraviolet light", "308 nm monochromatic laser / light"],
            ["Best Suited For", "Widespread or generalized vitiligo", "Localized, focal, or segmental patches"],
            ["Surrounding Skin Exposure", "Exposes whole body inside light cabin", "Delivers beam strictly to patches, sparing normal skin"],
            ["Typical Session Time", "Seconds to 2–3 minutes per session", "Rapid spot pulses over individual lesions"],
            ["Clinical Response Rate", "High for face and neck; lower for hands", "High for facial lesions; lower for feet"]
          ]
        }
      },
      {
        headingH2: "Why Does the Face Repigment Faster Than the Hands in Phototherapy?",
        isQuestion: true,
        directAnswer: "The face repigments faster because facial skin has an exceptionally high density of hair follicles, which house dormant melanocyte stem cell reservoirs. In contrast, hands, wrists, and feet have few or zero hair follicles, leaving fewer stem cells available to be stimulated by ultraviolet light.",
        paragraphs: [
          "Understanding this anatomical reality helps patients set realistic expectations. While facial patches can show encouraging repigmentation within 12 to 24 sessions, acral patches on fingertips require substantially longer or may remain resistant."
        ]
      }
    ],
    faqItems: [
      {
        question: "Does medical phototherapy increase melanoma skin cancer risk in vitiligo?",
        answer: "Long-term epidemiological studies have shown that patients with vitiligo undergoing narrowband UVB do not show an elevated risk of melanoma compared to the general population, although dermatological monitoring is standard."
      },
      {
        question: "Can I use commercial tanning beds instead of phototherapy?",
        answer: "No. Commercial tanning beds emit broad, uncontrolled UVA radiation that can cause severe solar burns, increase photoaging, and accelerate vitiligo via the Koebner effect without therapeutic benefit."
      }
    ],
    suggestedReads: [
      { title: "Topical Treatments for Vitiligo", url: "/vitiligo-treatment/topical-treatments-for-vitiligo/", snippet: "Combining phototherapy with topical JAK inhibitors and calcineurin inhibitors." },
      { title: "Sun Protection for Vitiligo", url: "/living-with-vitiligo/sun-protection-for-vitiligo/", snippet: "How controlled medical UV differs from uncontrolled solar radiation." },
      { title: "Prepare for Dermatologist Visit", url: "/prepare-for-dermatologist-visit/", snippet: "Questions to ask your doctor before starting light therapy." }
    ]
  }
};

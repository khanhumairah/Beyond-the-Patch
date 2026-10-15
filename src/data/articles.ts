import { Article } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero-vitiligo-hands-natural-pattern.jpg';
export const BIOLOGY_IMAGE = '/src/assets/images/skin-biology-cross-section-illustration.jpg';
export const STORY_IMAGE = '/src/assets/images/community-story-portrait-lifestyle.jpg';
export const NUTRITION_IMAGE = '/src/assets/images/nourishing-whole-foods-nutrition-table.jpg';

export const MEDICAL_SOURCES_LIST = [
  {
    name: "American Academy of Dermatology (AAD)",
    url: "https://www.aad.org/public/diseases/a-z/vitiligo-overview",
    description: "Clinical guidelines on diagnosis, non-segmental classifications, and evidence-based topical & phototherapy management."
  },
  {
    name: "DermNet New Zealand",
    url: "https://dermnetnz.org/topics/vitiligo",
    description: "Peer-reviewed clinical compendium with differential diagnoses, dermoscopy patterns, and histological criteria."
  },
  {
    name: "National Institutes of Health (NIH / NIAMS)",
    url: "https://www.niams.nih.gov/health-topics/vitiligo",
    description: "Epidemiological data, autoimmune mechanisms, and ongoing clinical trial registries for innovative biologics."
  },
  {
    name: "British Association of Dermatologists (BAD)",
    url: "https://www.bad.org.uk/patient-information-leaflets/vitiligo/",
    description: "Guidelines on phototherapy protocols, psychodermatological care, and sun protection best practices."
  },
  {
    name: "The Lancet & New England Journal of Medicine (NEJM)",
    url: "https://www.nejm.org",
    description: "Pivotal double-blind randomized clinical trial publications on topical JAK1/2 inhibitors and memory T-cell pathways."
  }
];

export const GENERAL_MEDICAL_DISCLAIMER = 
  "This website is for educational purposes and does not replace professional medical diagnosis, advice, or treatment. Always consult a board-certified dermatologist or qualified healthcare provider regarding any skin changes or medical condition.";

export const ARTICLES_DATA: Article[] = [
  {
    id: "what-is-vitiligo",
    slug: "what-is-vitiligo",
    title: "What Is Vitiligo? Beyond the Visual Surface",
    subtitle: "A compassionate, clear medical explanation of an autoimmune condition that touches millions worldwide.",
    category: "SCIENCE",
    readTime: "5 min read",
    lastReviewed: "October 2026",
    isMedicallyReviewed: true,
    imagePath: BIOLOGY_IMAGE,
    leadParagraph: "At first glance, vitiligo is often described as simply 'white patches on the skin.' But medically, physiologically, and humanly, it is far more nuanced. Vitiligo is a chronic autoimmune condition where the body's immune system mistakenly targets its own pigment-producing cells, known as melanocytes.",
    keyTakeaways: [
      "Vitiligo is an autoimmune condition, not an infection or contagious illness.",
      "It affects roughly 0.5% to 2% of people across all skin tones and ethnic backgrounds worldwide.",
      "Melanocytes stop making melanin in affected patches, resulting in stark, chalk-white macules.",
      "It is physically painless, but carries meaningful psychological and social dimensions."
    ],
    sections: [
      {
        heading: "The Cellular Mechanism in Plain Terms",
        content: [
          "Our skin color is determined by a natural pigment called melanin. Melanin is manufactured by specialized cells called melanocytes, which live in the lower layer of the epidermis and inside hair follicle roots.",
          "In someone with vitiligo, specific immune cells called CD8+ cytotoxic T lymphocytes mistakenly identify melanocytes as foreign or dangerous. The immune system releases signaling proteins (chemokines like CXCL9 and CXCL10) that attract more T cells to the area, causing melanocytes to cease functioning or undergo apoptosis (cell death)."
        ],
        pullQuote: "Vitiligo is not a flaw in your skin; it is a conversation between your immune system and your pigment cells."
      },
      {
        heading: "Who Does Vitiligo Affect?",
        content: [
          "Vitiligo knows no geographical, racial, or gender boundaries. It affects approximately 1 in 100 to 1 in 200 people globally.",
          "About half of all people with vitiligo develop their first patch before the age of 20, though it can emerge at any age from early toddlerhood into senior years. While the biological frequency is identical across ethnicities, the visual contrast is naturally more pronounced in individuals with darker skin tones."
        ],
        calloutBox: {
          title: "Crucial Medical Clarification",
          body: "Vitiligo is not skin cancer, it is not an allergic reaction to food, and it cannot be passed to another person through touch, clothing, or intimacy.",
          type: "fact"
        }
      },
      {
        heading: "How It Differs from Other Skin Changes",
        content: [
          "Unlike conditions caused by fungi (like tinea versicolor) or dry skin eczema (like pityriasis alba), vitiligo skin is completely devoid of melanin in the center of the patch, giving it a distinctive chalk-white or porcelain appearance with sharp, well-defined borders.",
          "Under a doctor's examination, the texture of the skin remains completely normal: it is not thick, scaly, or scarred. It simply lacks the pigment layer that shields against UV radiation."
        ]
      }
    ],
    sources: [
      "Spritz RA, Andersen GH. Genetics of Vitiligo. Dermatol Clin. 2017.",
      "Picardo M, et al. Vitiligo. Nat Rev Dis Primers. 2015;1:15011.",
      "American Academy of Dermatology (AAD) Clinical Guideline on Vitiligo."
    ],
    relatedSlugs: ["what-causes-vitiligo", "what-happens-to-melanocytes", "types-of-vitiligo"]
  },
  {
    id: "what-causes-vitiligo",
    slug: "what-causes-vitiligo",
    title: "What Causes Vitiligo? Genes, Immunity & Triggers",
    subtitle: "Untangling the complex web of genetics, oxidative cellular stress, and immune confusion.",
    category: "SCIENCE",
    readTime: "6 min read",
    lastReviewed: "September 2026",
    isMedicallyReviewed: true,
    leadParagraph: "One of the most distressing questions people ask upon noticing a patch is: 'What did I do wrong?' The answer from dermatology is unanimous and unequivocal: you did nothing to cause this. Vitiligo is the result of an intricate convergence of genetic susceptibility, internal cellular stress, and targeted autoimmunity.",
    keyTakeaways: [
      "No single lifestyle choice, food, or hygiene habit causes vitiligo.",
      "Genetics accounts for about 20% to 30% of familial susceptibility across dozens of immune-modulating genes.",
      "Melanocytes in vitiligo have intrinsic oxidative stress sensitivity, generating an internal alarm call.",
      "Physical skin trauma (cuts, friction, severe sunburns) can act as an external trigger via the Koebner phenomenon."
    ],
    sections: [
      {
        heading: "1. The Genetic Architecture",
        content: [
          "Genome-wide association studies (GWAS) have identified over 50 specific genetic locations associated with vitiligo. Strikingly, the vast majority of these genes regulate immune function (such as HLA class I and II genes, PTPN22, and CTLA4) rather than skin biology itself.",
          "Having a relative with vitiligo slightly increases your statistical probability, but it is not a direct dominant inheritance. About 80% of individuals with vitiligo have no direct family history of the condition."
        ]
      },
      {
        heading: "2. The Melanocyte Stress Signal",
        content: [
          "Healthy melanocytes produce melanin through biochemical enzymatic processes that naturally create reactive oxygen species (ROS). In people predisposed to vitiligo, the cells' internal antioxidant defense enzymes (such as catalase and superoxide dismutase) are slightly less efficient.",
          "As reactive oxygen accumulates, the cell experiences endoplasmic reticulum stress. In response, stressed melanocytes release a protein called Heat Shock Protein 70 (HSP70i). This protein acts like a flare gun in the epidermal layer, alerting nearby dendritic immune cells."
        ],
        pullQuote: "The melanocyte doesn't just get attacked quietly; in a stressed state, it releases chemical signals that summon the immune system."
      },
      {
        heading: "3. Environmental & Physical Triggers (The Koebner Phenomenon)",
        content: [
          "While genetics and cellular stress set the stage, specific triggers often precede the appearance of patches. A well-known phenomenon is Koebnerization: developing a new vitiligo patch at the exact site of physical trauma, such as a deep scratch, friction from a tight belt, an aggressive chemical peel, or a severe sunburn.",
          "Severe psychological stress can also elevate systemic inflammatory hormones, which may act as an accelerant in an already active immune landscape."
        ]
      }
    ],
    sources: [
      "Richmond JM, et al. Innate immune mechanisms in vitiligo. Autoimmun Rev. 2013.",
      "Spritz RA. Six decades of vitiligo genetics. J Invest Dermatol. 2020.",
      "National Institute of Arthritis and Musculoskeletal and Skin Diseases (NIAMS)."
    ],
    relatedSlugs: ["what-is-vitiligo", "what-happens-to-melanocytes", "stable-vs-active"]
  },
  {
    id: "what-happens-to-melanocytes",
    slug: "what-happens-to-melanocytes",
    title: "What Happens to Melanocytes Under the Patch?",
    subtitle: "A microscopic journey into the epidermal niche where pigment cells live, pause, and recover.",
    category: "SCIENCE",
    readTime: "5 min read",
    lastReviewed: "August 2026",
    isMedicallyReviewed: true,
    imagePath: BIOLOGY_IMAGE,
    leadParagraph: "Under a high-powered microscope, human skin is an architectural wonder. Sitting along the basement membrane of the epidermis are dendritic cells with long, finger-like arms reaching out to touch dozens of surrounding keratinocytes. These are melanocytes. What happens to them when vitiligo develops?",
    keyTakeaways: [
      "Melanocytes transfer pigment packages (melanosomes) to roughly 36 neighboring keratinocytes in healthy skin.",
      "During active vitiligo, autoreactive cytotoxic CD8+ T cells induce apoptosis (programmed cell death) in epidermal melanocytes.",
      "Importantly, a dormant backup reservoir of melanocyte stem cells often survives deep inside the hair follicle outer root sheath.",
      "These follicular stem cells are the reason repigmentation often begins as tiny freckles centered around hair roots during phototherapy."
    ],
    sections: [
      {
        heading: "The Epidermal Melanin Unit",
        content: [
          "In normally pigmented skin, each melanocyte acts like a factory supplying melanin to approximately 36 neighboring skin cells (keratinocytes). These cells place melanin like microscopic umbrellas over their DNA to shield it from ultraviolet radiation.",
          "When autoimmune T cells attack, the connection breaks down. Epidermal melanocytes are dismantled, and without their ongoing pigment synthesis, the epidermis rapidly turns completely white."
        ]
      },
      {
        heading: "The Hair Follicle: A Hidden Reservoir of Hope",
        content: [
          "One of the most remarkable discoveries in cutaneous biology is that hair follicles possess an 'immune privilege' zone. Even when epidermal melanocytes on the flat surface of the skin are completely cleared, melanocyte stem cells nestled deep within the hair follicle bulge often remain safe and intact.",
          "When dermatologists apply narrowband UVB light or topical treatments, signaling molecules prompt these follicular stem cells to divide, crawl up the hair follicle canal, and migrate outward onto the surface of the skin. This is why repigmentation classically appears as tiny round islands of color centered around hairs."
        ],
        pullQuote: "Every dark hair growing inside a vitiligo patch carries a secret reservoir of dormant pigment stem cells."
      }
    ],
    sources: [
      "Cui J, et al. Role of hair follicle melanocytes in vitiligo repigmentation. J Dermatol Sci. 2019.",
      "Boniface K, et al. Vitiligo skin is targeted by skin-homing CXCR3+ memory T cells. J Invest Dermatol. 2018."
    ],
    relatedSlugs: ["what-is-vitiligo", "types-of-vitiligo", "topical-treatments"]
  },
  {
    id: "stable-vs-active",
    slug: "stable-vs-active",
    title: "Stable vs. Active Vitiligo: Why the Difference Matters",
    subtitle: "How dermatologists determine disease velocity and why stability dictates the right treatment.",
    category: "TREATMENT",
    readTime: "5 min read",
    lastReviewed: "September 2026",
    isMedicallyReviewed: true,
    leadParagraph: "Not all vitiligo behaves the same way at every moment in time. Dermatologists broadly categorize vitiligo into two distinct physiological states: active (progressive) and stable. Recognizing which state you are currently in is essential, because a treatment appropriate for a stable patch can be ineffective or even counterproductive during an active phase.",
    keyTakeaways: [
      "Active vitiligo features expanding borders, trichrome gradients, or confetti-like punctate lesions.",
      "Stable vitiligo means no new patches, no border expansion, and no trauma-induced patches for at least 1–2 years.",
      "Active vitiligo prioritizes medical stabilization to put out the immune 'fire'.",
      "Surgical melanocyte grafting is strictly contraindicated during active disease and only considered for proven stable patches."
    ],
    sections: [
      {
        heading: "Hallmarks of Active Vitiligo",
        content: [
          "Active vitiligo indicates ongoing immune attack. Signs that dermatologists look for include:",
          "• Confetti depigmentation: dozens of tiny (1–5 mm) white flecks appearing rapidly near borders.",
          "• Trichrome borders: an intermediate light-brown band between normal skin and the chalk-white center.",
          "• Koebner phenomenon: small cuts, scratches, or friction areas turning into new patches.",
          "• Hypopigmented ill-defined margins that appear fuzzy under Wood's lamp evaluation."
        ]
      },
      {
        heading: "What Stable Vitiligo Looks Like",
        content: [
          "Stable vitiligo occurs when the autoimmune storm has quieted. The edges of the patch are sharp, well-demarcated, and hyperpigmented (sometimes featuring a darker border where surrounding melanocytes are healthy).",
          "There have been no new lesions, no expansion of existing lesions, and cuts or abrasions heal normally without losing color for at least 12 to 24 continuous months."
        ]
      },
      {
        heading: "Treatment Implications: Extinguishing vs. Rebuilding",
        content: [
          "Think of active vitiligo like a house fire: you cannot remodel the walls while the fire is actively burning. The primary dermatological goal in active vitiligo is medical stabilization — using targeted topicals, systemic steroids in short bursts if needed, or phototherapy to halt the immune attack.",
          "Once patches are strictly stable, the focus shifts to stimulation (narrowband UVB, excimer) or, in select stable candidates, surgical transplantation of melanocytes."
        ]
      }
    ],
    sources: [
      "van Geel N, et al. Clinical signs of disease activity in vitiligo: a systematic review. Br J Dermatol. 2019.",
      "Vitiligo Global Issues Consensus Conference (VGICC) definitions."
    ],
    relatedSlugs: ["types-of-vitiligo", "topical-treatments", "phototherapy"]
  },
  {
    id: "sun-protection-vitiligo",
    slug: "sun-protection-vitiligo",
    title: "Sun Protection & Vitiligo: Separating Fear from Fact",
    subtitle: "Why you do not need to hide in the shadows, but why smart UV shielding is non-negotiable.",
    category: "LIFESTYLE",
    readTime: "4 min read",
    lastReviewed: "October 2026",
    isMedicallyReviewed: true,
    imagePath: HERO_IMAGE,
    leadParagraph: "A pervasive myth suggests that having vitiligo means you can never enjoy a sunny morning, step onto a beach, or walk in a park. While depigmented skin is fundamentally more vulnerable to sunburn, living with vitiligo is not a sentence of perpetual indoor confinement.",
    keyTakeaways: [
      "Depigmented skin has an intrinsic natural SPF of 1 (no melanin protection against UV-induced DNA erythema).",
      "Sunburns can trigger patch expansion through the Koebner phenomenon.",
      "Tanning surrounding skin increases the visual contrast of patches.",
      "Consistent broad-spectrum SPF 50+, UPF clothing, and sensible shade enable a full, outdoor lifestyle."
    ],
    sections: [
      {
        heading: "Why Depigmented Skin Sunburns Faster",
        content: [
          "Melanin is nature's physical sunscreen: it absorbs and dissipates over 99% of absorbed UV radiation as heat. Inside a vitiligo patch, where melanin is absent, solar radiation penetrates directly into living epidermal cells.",
          "This means skin in a vitiligo patch can develop painful sunburn (solar erythema) in a fraction of the time that normally pigmented skin would take."
        ]
      },
      {
        heading: "The Paradox of UV: Harm vs. Healing",
        content: [
          "Many people wonder: 'If dermatologists use ultraviolet light in phototherapy clinics, why should I protect against the sun?'",
          "The difference lies in wavelength precision and dosage control. Narrowband UVB uses a highly purified, fractionated band of light (311 nm) administered for exact seconds under controlled medical monitoring. Sunlight, by contrast, contains intense, fluctuating mixes of UVA, broad UVB, and infrared that can easily cause uncontrolled burning and cellular DNA damage."
        ],
        calloutBox: {
          title: "Everyday Sun Protocol",
          body: "Apply broad-spectrum mineral or organic SPF 50+ 20 minutes before heading out. Wear UPF 50+ long-sleeve rashguards for swimming and wide-brimmed hats for prolonged sun.",
          type: "info"
        }
      }
    ],
    sources: [
      "American Academy of Dermatology: Sun Protection for People with Vitiligo.",
      "British Association of Dermatologists Photodermatology Guidelines."
    ],
    relatedSlugs: ["skincare-daily", "what-is-vitiligo", "topical-treatments"]
  },
  {
    id: "nutrition-general-health",
    slug: "nutrition-general-health",
    title: "Nutrition & Vitiligo: What Science Actually Tells Us",
    subtitle: "A clear, evidence-centered look at micronutrients, dietary patterns, and the myth of the 'cure diet'.",
    category: "FOOD",
    readTime: "6 min read",
    lastReviewed: "October 2026",
    isMedicallyReviewed: true,
    imagePath: NUTRITION_IMAGE,
    leadParagraph: "The internet is overflowing with claims that specific superfoods, restrictive elimination diets, or exotic herbal supplements can 'erase' or 'cure' vitiligo in weeks. As people navigating a visible skin difference, it is natural to want dietary agency. But medical honesty is paramount: there is currently no proven diet that cures vitiligo.",
    keyTakeaways: [
      "Food cannot and does not cure vitiligo; claims to the contrary are unsupported by clinical trials.",
      "A wholesome, nutrient-dense diet supports general immune equilibrium and tissue health.",
      "Sun avoidance practices often cause Vitamin D deficiency, which should be checked and supplemented as needed.",
      "Avoid predatory cleanses or severe restrictive diets that can induce nutritional deficiencies without dermatological benefit."
    ],
    sections: [
      {
        heading: "The Crucial Boundary: Supportive vs. Curative",
        content: [
          "Nutrition plays a profound role in human physiology. Eating a rich spectrum of whole plant foods, healthy fats, and quality proteins provides the building blocks for immune regulation, cell membrane fluidity, and wound healing.",
          "However, supporting general cellular well-being is biologically distinct from halting an active antigen-specific cytotoxic T-cell attack on melanocytes. Eating more blueberries or turmeric cannot tell autoreactive CD8+ memory T cells to ignore melanocyte proteins."
        ]
      },
      {
        heading: "Nutrients Worth Discussing with Your Doctor",
        content: [
          "Rather than embarking on expensive or restrictive fad diets, focus on verified nutritional markers:",
          "• Vitamin D: Critical for innate and adaptive immune cell signaling. Because people with vitiligo protect themselves from the sun, blood levels frequently drop.",
          "• Vitamin B12 & Folate: Important for cellular turnover and homocysteine regulation. Routine screening is standard clinical practice.",
          "• Zinc & Copper: Essential micronutrient cofactors for cellular antioxidant enzymes."
        ],
        pullQuote: "Food is nourishment for your whole being — not a secret magic key to force pigment into autoimmune skin."
      }
    ],
    sources: [
      "Speeckaert R, et al. Nutritional factors in vitiligo: what do we know? Autoimmun Rev. 2017.",
      "Dermatology Nutrition Working Group Consensus."
    ],
    relatedSlugs: ["what-is-vitiligo", "what-causes-vitiligo"]
  }
];

export const PEOPLE_ASK_QUESTIONS = [
  {
    id: "q1",
    question: "Can vitiligo spread?",
    shortAnswer: "Yes, but not always, and never predictably. Vitiligo can remain stable for decades or experience periods of change. Early dermatological care can help stabilize active spread.",
    category: "Progression"
  },
  {
    id: "q2",
    question: "Can vitiligo disappear on its own?",
    shortAnswer: "Spontaneous complete repigmentation is rare, though partial spontaneous repigmentation (especially around hair follicles in facial areas) does occur. Most repigmentation requires medical therapy.",
    category: "Progression"
  },
  {
    id: "q3",
    question: "Can I wear makeup or camouflage?",
    shortAnswer: "Absolutely. Wearing corrective camouflage makeup, self-tanning lotions, or nothing at all are all completely valid, personal choices. Makeup does not harm or worsen vitiligo.",
    category: "Lifestyle"
  },
  {
    id: "q4",
    question: "Can I swim in chlorinated or salt water?",
    shortAnswer: "Yes! Swimming is completely safe. Just apply water-resistant broad-spectrum SPF 50+ to protect patches from sunburn, and rinse with fresh water and moisturize afterward.",
    category: "Lifestyle"
  },
  {
    id: "q5",
    question: "Can I travel to sunny destinations?",
    shortAnswer: "Yes. People with vitiligo travel all over the world. Packing broad-spectrum sunscreen, UPF 50+ clothing, sunglasses, and a wide-brimmed hat allows you to enjoy holidays safely.",
    category: "Travel"
  },
  {
    id: "q6",
    question: "Can vitiligo affect hair color?",
    shortAnswer: "Yes. When pigment loss extends into the hair follicle bulb (poliosis or leukotrichia), the hair growing in that patch can turn white or silver.",
    category: "Biology"
  },
  {
    id: "q7",
    question: "Can children develop vitiligo?",
    shortAnswer: "Yes. About 25% of all vitiligo cases begin before age 10. Segmental vitiligo in particular frequently presents in childhood. Pediatric dermatologists have safe, tailored treatments.",
    category: "Demographics"
  },
  {
    id: "q8",
    question: "Can food or a special diet cure vitiligo?",
    shortAnswer: "No. There is currently no scientifically proven diet or food that cures vitiligo. A balanced diet supports general health, but should not replace dermatological treatments.",
    category: "Nutrition"
  }
];

export const JOURNEY_STAGES = [
  {
    id: "noticed-patch",
    number: "01",
    label: "I NOTICED A PATCH",
    subtext: "What to do first & what it might be",
    targetNav: "UNDERSTAND",
    targetTopic: "what-is-vitiligo",
    advice: "First, stay calm. A lighter patch can be several different benign conditions. Schedule an evaluation with a board-certified dermatologist and take clear photos with good lighting for your personal records."
  },
  {
    id: "getting-diagnosed",
    number: "02",
    label: "I'M GETTING DIAGNOSED",
    subtext: "What to expect at the doctor's office",
    targetNav: "EXPLORE",
    targetTopic: "derm-prep",
    advice: "Your dermatologist will look at your skin with normal room light and often a Wood's lamp (UV blacklight). They may ask about family medical history and check thyroid levels with a routine blood test."
  },
  {
    id: "want-to-understand",
    number: "03",
    label: "I WANT TO UNDERSTAND IT",
    subtext: "The science of melanocytes & immunity",
    targetNav: "UNDERSTAND",
    targetTopic: "what-happens-to-melanocytes",
    advice: "Learn how melanocytes, melanin, and immune cells interact. Understanding that it is an autoimmune condition and not your fault brings profound peace of mind."
  },
  {
    id: "exploring-treatments",
    number: "04",
    label: "I'M EXPLORING TREATMENTS",
    subtext: "Topicals, light therapy & modern care",
    targetNav: "TREATMENT",
    targetTopic: "all-treatments",
    advice: "Treatment options range from targeted topicals (JAK inhibitors, calcineurin inhibitors) to narrowband UVB phototherapy. Discuss goals, timelines, and realistic expectations with your doctor."
  },
  {
    id: "learning-to-live",
    number: "05",
    label: "I'M LEARNING TO LIVE WITH IT",
    subtext: "Sunscreen, confidence & social situations",
    targetNav: "LIVE WITH IT",
    targetTopic: "skincare-daily",
    advice: "From smart SPF 50 habits to reframing public stares, living well with vitiligo is about taking care of your skin barrier while building unshakeable inner ease."
  },
  {
    id: "hear-stories",
    number: "06",
    label: "I WANT TO HEAR OTHER STORIES",
    subtext: "Real voices, artists & advocates worldwide",
    targetNav: "STORIES",
    targetTopic: "community-stories",
    advice: "Connect with how dancers, marathoners, architects, and advocates across the globe navigated their diagnosis and found genuine freedom in their own skin."
  }
];

export const MYTH_BUSTER_ITEMS = [
  {
    id: "myth-contagious",
    myth: "Vitiligo is a contagious infection that spreads through touch or water.",
    fact: "Vitiligo is an autoimmune condition. It is 100% non-contagious.",
    explanation: "You cannot catch vitiligo from physical contact, shaking hands, sharing utensils, swimming pools, or sexual intimacy. It involves the person's own immune system, not an external virus or bacterium.",
    citation: "American Academy of Dermatology (AAD)"
  },
  {
    id: "myth-diet-cause",
    myth: "Eating fish and drinking milk together causes white spots on the skin.",
    fact: "Dietary pairings have zero causal connection to vitiligo.",
    explanation: "This folklore originated centuries ago in several cultures. Vitiligo has an immunological and genetic basis; no food pairing triggers melanocyte destruction.",
    citation: "International Journal of Dermatology"
  },
  {
    id: "myth-hygiene",
    myth: "Vitiligo is caused by poor hygiene or dirty water.",
    fact: "Hygiene plays no role in the development or progression of vitiligo.",
    explanation: "Vitiligo is not an infection or parasite. Washing more or less frequently does not prevent or alter vitiligo in any way.",
    citation: "National Institutes of Health (NIH)"
  },
  {
    id: "myth-marriage",
    myth: "People with vitiligo have compromised fertility or pass it directly to all children.",
    fact: "Vitiligo does not affect fertility or general physical reproductive health.",
    explanation: "While there is a genetic susceptibility component, the likelihood of a parent with vitiligo having a child who also develops vitiligo is low (typically under 5% to 7%).",
    citation: "Global Vitiligo Foundation (GVF)"
  },
  {
    id: "myth-sunburn-only",
    myth: "Vitiligo is just an extreme reaction to a bad sunburn.",
    fact: "A sunburn can act as a trigger (via Koebnerization), but is not the root cause.",
    explanation: "In someone already genetically predisposed to autoimmune vitiligo, severe UV skin injury can induce the Koebner phenomenon, but normal skin heals from sunburn without chronic autoimmune depigmentation.",
    citation: "DermNet New Zealand"
  },
  {
    id: "myth-cosmetics",
    myth: "Wearing makeup or camouflage foundation will make vitiligo spread faster.",
    fact: "Cosmetics do not harm melanocytes or accelerate vitiligo.",
    explanation: "Dermatologically tested makeup, camouflage creams, and self-tanners act purely on the dead outer stratum corneum layer of skin and have no impact on follicular or epidermal melanocyte autoimmunity.",
    citation: "British Association of Dermatologists"
  },
  {
    id: "myth-miracle-herb",
    myth: "Exotic herbal pastes or internet root extracts can permanently cure vitiligo.",
    fact: "No over-the-counter herbal cure has proven safety and efficacy in clinical trials.",
    explanation: "Some unregulated online herbal mixtures have even tested positive for heavy metals or undisclosed potent steroids. Stick to verified evidence-based dermatological therapies.",
    citation: "FDA Consumer Health Bulletin"
  },
  {
    id: "myth-stress-sole",
    myth: "If you just eliminate stress completely, your vitiligo will disappear.",
    fact: "Vitiligo is biologically driven, not a purely psychological condition.",
    explanation: "While severe emotional stress can elevate inflammatory cytokines and act as an accelerant, vitiligo requires genetic predisposition and specific cytotoxic T-cell memory that does not vanish merely by relaxing.",
    citation: "Journal of Investigative Dermatology"
  }
];

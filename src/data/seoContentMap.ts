export interface SeoPageDefinition {
  pageName: string;
  url: string; // clean lowercase slug e.g. "/understand-vitiligo/segmental-vitiligo/"
  primaryKeyword: string;
  secondaryKeyword1: string;
  secondaryKeyword2: string;
  seoTitle: string; // 50-60 chars target
  metaDescription: string; // 140-160 chars target
  h1: string;
  searchIntent: 'Informational' | 'Practical / Evaluative' | 'Lifestyle / Support';
  suggestedInternalLinks: { label: string; url: string }[];
  imageAltText: string;
  breadcrumbs: { label: string; url: string }[];
  category: 'Home' | 'Understand' | 'Treatment' | 'Nutrition' | 'Lifestyle' | 'Stories' | 'Resources' | 'Explore' | 'Audit';
  lastReviewed: string;
  isIndexable: boolean;
  citationSources: string[];
}

export const SEO_CONTENT_MAP: SeoPageDefinition[] = [
  {
    pageName: "Home",
    url: "/",
    primaryKeyword: "vitiligo",
    secondaryKeyword1: "understanding vitiligo",
    secondaryKeyword2: "vitiligo education",
    seoTitle: "Beyond The Patch: Understanding Vitiligo Beyond What You See",
    metaDescription: "Explore evidence-based science, medical treatments, nutrition, and personal stories about vitiligo without medical jargon or false cure promises.",
    h1: "Understanding Vitiligo Beyond What You See",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Understand Vitiligo", url: "/understand-vitiligo/" },
      { label: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/" },
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" },
      { label: "Nutrition and Vitiligo", url: "/vitiligo-nutrition/" },
      { label: "Community Stories", url: "/vitiligo-stories/" }
    ],
    imageAltText: "Hands showing natural vitiligo pigmentation resting on warm linen fabric.",
    breadcrumbs: [{ label: "Home", url: "/" }],
    category: "Home",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: [
      "American Academy of Dermatology (AAD)",
      "National Institutes of Health (NIAMS)",
      "DermNet New Zealand"
    ]
  },
  {
    pageName: "Understand Vitiligo Overview",
    url: "/understand-vitiligo/",
    primaryKeyword: "what is vitiligo",
    secondaryKeyword1: "vitiligo causes",
    secondaryKeyword2: "autoimmune skin condition",
    seoTitle: "What Is Vitiligo? Causes, Symptoms & Cellular Biology",
    metaDescription: "Learn what vitiligo is, how the autoimmune system interacts with melanocytes, and how loss of melanin creates distinctive lighter skin patches.",
    h1: "What Is Vitiligo and How Does It Develop?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/" },
      { label: "What Causes Vitiligo", url: "/understand-vitiligo/what-causes-vitiligo/" },
      { label: "Biology of Melanocytes", url: "/understand-vitiligo/what-happens-to-melanocytes/" },
      { label: "Causes of Lighter Skin Patches", url: "/understand-vitiligo/causes-of-lighter-skin-patches/" }
    ],
    imageAltText: "Botanical scientific cross-section illustration of skin layers and melanocytes.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand Vitiligo", url: "/understand-vitiligo/" }
    ],
    category: "Understand",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["DermNet NZ", "Lancet Dermatology", "AAD Vitiligo Guidelines"]
  },
  {
    pageName: "Types of Vitiligo",
    url: "/understand-vitiligo/types-of-vitiligo/",
    primaryKeyword: "types of vitiligo",
    secondaryKeyword1: "different types of vitiligo",
    secondaryKeyword2: "vitiligo classification",
    seoTitle: "Types of Vitiligo: Patterns, Symptoms and Differences",
    metaDescription: "Learn about the main types of vitiligo, how their patterns differ, and how dermatologists classify non-segmental and segmental skin conditions.",
    h1: "What Are the Different Types of Vitiligo?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Segmental Vitiligo", url: "/understand-vitiligo/segmental-vitiligo/" },
      { label: "Non-Segmental Vitiligo", url: "/understand-vitiligo/non-segmental-vitiligo/" },
      { label: "Generalized Vitiligo", url: "/understand-vitiligo/generalized-vitiligo/" },
      { label: "Acrofacial Vitiligo", url: "/understand-vitiligo/acrofacial-vitiligo/" }
    ],
    imageAltText: "Infographic illustrating non-segmental and segmental vitiligo distributions.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/" }
    ],
    category: "Understand",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Vitiligo Global Issues Consensus Conference (VGICC)", "British Association of Dermatologists"]
  },
  {
    pageName: "Segmental Vitiligo",
    url: "/understand-vitiligo/segmental-vitiligo/",
    primaryKeyword: "segmental vitiligo",
    secondaryKeyword1: "unilateral vitiligo",
    secondaryKeyword2: "segmental vitiligo symptoms",
    seoTitle: "Segmental Vitiligo: Symptoms, Progression and Diagnosis",
    metaDescription: "Learn about segmental vitiligo, its typical unilateral pattern, how it differs from generalized types, and how dermatologists evaluate progression.",
    h1: "What Is Segmental Vitiligo?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Non-Segmental Vitiligo", url: "/understand-vitiligo/non-segmental-vitiligo/" },
      { label: "Stable vs Active Vitiligo", url: "/understand-vitiligo/stable-vs-active-vitiligo/" },
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" }
    ],
    imageAltText: "Clinical diagram showing unilateral dermatomal distribution of segmental vitiligo.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "Segmental Vitiligo", url: "/understand-vitiligo/segmental-vitiligo/" }
    ],
    category: "Understand",
    lastReviewed: "September 2026",
    isIndexable: true,
    citationSources: ["Journal of the European Academy of Dermatology and Venereology", "AAD"]
  },
  {
    pageName: "Non-Segmental Vitiligo",
    url: "/understand-vitiligo/non-segmental-vitiligo/",
    primaryKeyword: "non-segmental vitiligo",
    secondaryKeyword1: "bilateral vitiligo",
    secondaryKeyword2: "symmetrical vitiligo",
    seoTitle: "Non-Segmental Vitiligo: Patterns, Causes and Course",
    metaDescription: "Understand non-segmental vitiligo, the most common form of the condition characterized by symmetrical bilateral patches and variable progression.",
    h1: "Understanding Non-Segmental Vitiligo and Its Patterns",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Generalized Vitiligo", url: "/understand-vitiligo/generalized-vitiligo/" },
      { label: "Acrofacial Vitiligo", url: "/understand-vitiligo/acrofacial-vitiligo/" },
      { label: "Topical Treatments for Vitiligo", url: "/vitiligo-treatment/topical-treatments-for-vitiligo/" }
    ],
    imageAltText: "Illustration of symmetrical non-segmental vitiligo distribution across wrists and knees.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "Non-Segmental Vitiligo", url: "/understand-vitiligo/non-segmental-vitiligo/" }
    ],
    category: "Understand",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["British Journal of Dermatology", "NIAMS"]
  },
  {
    pageName: "Generalized Vitiligo",
    url: "/understand-vitiligo/generalized-vitiligo/",
    primaryKeyword: "generalized vitiligo",
    secondaryKeyword1: "vitiligo vulgaris",
    secondaryKeyword2: "widespread vitiligo patches",
    seoTitle: "Generalized Vitiligo: Clinical Features and Management",
    metaDescription: "Learn about generalized vitiligo (vitiligo vulgaris), where patches appear across multiple symmetrical body areas, and how doctors assess stability.",
    h1: "What Is Generalized Vitiligo?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/" },
      { label: "Phototherapy for Vitiligo", url: "/vitiligo-treatment/phototherapy-for-vitiligo/" },
      { label: "Vitiligo Skincare", url: "/living-with-vitiligo/vitiligo-skincare/" }
    ],
    imageAltText: "Anatomical schematic showing widespread bilateral patches of generalized vitiligo.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "Generalized Vitiligo", url: "/understand-vitiligo/generalized-vitiligo/" }
    ],
    category: "Understand",
    lastReviewed: "September 2026",
    isIndexable: true,
    citationSources: ["DermNet NZ", "Pigment Cell & Melanoma Research"]
  },
  {
    pageName: "Acrofacial Vitiligo",
    url: "/understand-vitiligo/acrofacial-vitiligo/",
    primaryKeyword: "acrofacial vitiligo",
    secondaryKeyword1: "vitiligo on hands and face",
    secondaryKeyword2: "acral vitiligo",
    seoTitle: "Acrofacial Vitiligo: Hands, Feet and Facial Patches",
    metaDescription: "Discover why acrofacial vitiligo concentrates on digits and around facial orifices, why hands repigment differently, and care considerations.",
    h1: "Acrofacial Vitiligo: Understanding Hands and Facial Pigmentation",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Topical Treatments for Vitiligo", url: "/vitiligo-treatment/topical-treatments-for-vitiligo/" },
      { label: "Sun Protection for Vitiligo", url: "/living-with-vitiligo/sun-protection-for-vitiligo/" },
      { label: "Makeup for Vitiligo", url: "/living-with-vitiligo/makeup-for-vitiligo/" }
    ],
    imageAltText: "Editorial close up of hands showing natural acral vitiligo patterns on fingers.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "Acrofacial Vitiligo", url: "/understand-vitiligo/acrofacial-vitiligo/" }
    ],
    category: "Understand",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Journal of the American Academy of Dermatology", "AAD"]
  },
  {
    pageName: "Mucosal Vitiligo",
    url: "/understand-vitiligo/mucosal-vitiligo/",
    primaryKeyword: "mucosal vitiligo",
    secondaryKeyword1: "vitiligo on lips",
    secondaryKeyword2: "mucous membrane vitiligo",
    seoTitle: "Mucosal Vitiligo: Lips, Oral Mucosa and Sensitive Areas",
    metaDescription: "Understand mucosal vitiligo affecting the lips and mucous membranes, how dermatologists distinguish it from other conditions, and gentle care options.",
    h1: "Mucosal Vitiligo: Features, Diagnosis and Considerations",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/" },
      { label: "Topical Treatments for Vitiligo", url: "/vitiligo-treatment/topical-treatments-for-vitiligo/" },
      { label: "Causes of Lighter Skin Patches", url: "/understand-vitiligo/causes-of-lighter-skin-patches/" }
    ],
    imageAltText: "Medical illustration of mucosal boundary on the vermilion border of lips.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "Mucosal Vitiligo", url: "/understand-vitiligo/mucosal-vitiligo/" }
    ],
    category: "Understand",
    lastReviewed: "September 2026",
    isIndexable: true,
    citationSources: ["Oral Surgery, Oral Medicine, Oral Pathology and Oral Radiology", "AAD"]
  },
  {
    pageName: "Causes, Genetics & Triggers",
    url: "/understand-vitiligo/what-causes-vitiligo/",
    primaryKeyword: "vitiligo causes",
    secondaryKeyword1: "vitiligo genetics",
    secondaryKeyword2: "what triggers vitiligo",
    seoTitle: "What Causes Vitiligo? Genetics, Immunity and Triggers",
    metaDescription: "Explore the scientific causes of vitiligo: autoimmune T-cell confusion, genetic susceptibility, cellular oxidative stress, and the Koebner phenomenon.",
    h1: "What Causes Vitiligo? Genetics, Immunity and Environmental Triggers",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Biology of Melanocytes", url: "/understand-vitiligo/what-happens-to-melanocytes/" },
      { label: "Stable vs Active Vitiligo", url: "/understand-vitiligo/stable-vs-active-vitiligo/" },
      { label: "Vitiligo Myths", url: "/vitiligo-myths/" }
    ],
    imageAltText: "Diagram illustrating genetic predisposition and cellular oxidative stress triggering autoimmune response.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "What Causes Vitiligo", url: "/understand-vitiligo/what-causes-vitiligo/" }
    ],
    category: "Understand",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Nature Reviews Disease Primers", "Spritz RA Genetics of Vitiligo", "NIAMS"]
  },
  {
    pageName: "Melanocyte Biology",
    url: "/understand-vitiligo/what-happens-to-melanocytes/",
    primaryKeyword: "melanocytes and vitiligo",
    secondaryKeyword1: "melanin production in skin",
    secondaryKeyword2: "hair follicle melanocyte stem cells",
    seoTitle: "What Happens to Melanocytes in Vitiligo? Biology Explained",
    metaDescription: "Follow what happens to pigment-producing melanocytes during vitiligo, why hair follicle stem cells survive, and how repigmentation can occur.",
    h1: "What Happens to Melanocytes Under a Vitiligo Patch?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Understand Vitiligo", url: "/understand-vitiligo/" },
      { label: "Phototherapy for Vitiligo", url: "/vitiligo-treatment/phototherapy-for-vitiligo/" },
      { label: "Vitiligo Research Explained", url: "/vitiligo-research-explained/" }
    ],
    imageAltText: "Microscopic artistic illustration showing melanocyte dendrites transferring melanin melanosomes to keratinocytes.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "Melanocyte Biology", url: "/understand-vitiligo/what-happens-to-melanocytes/" }
    ],
    category: "Understand",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Journal of Investigative Dermatology", "Cui J et al. Hair Follicle Stem Cells"]
  },
  {
    pageName: "Stable vs Active Vitiligo",
    url: "/understand-vitiligo/stable-vs-active-vitiligo/",
    primaryKeyword: "stable vs active vitiligo",
    secondaryKeyword1: "signs of active vitiligo",
    secondaryKeyword2: "vitiligo disease progression",
    seoTitle: "Stable vs Active Vitiligo: Signs, Differences and Care",
    metaDescription: "Learn how dermatologists distinguish active vitiligo from stable vitiligo, why disease activity matters for treatment, and clinical markers to observe.",
    h1: "Stable vs. Active Vitiligo: Why Disease Velocity Dictates Care",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/" },
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" },
      { label: "Prepare for Dermatologist Visit", url: "/prepare-for-dermatologist-visit/" }
    ],
    imageAltText: "Illustration of confetti depigmentation and trichrome borders representing active vitiligo signs.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "Stable vs Active", url: "/understand-vitiligo/stable-vs-active-vitiligo/" }
    ],
    category: "Understand",
    lastReviewed: "September 2026",
    isIndexable: true,
    citationSources: ["van Geel N et al. British Journal of Dermatology", "VGICC Clinical Criteria"]
  },
  {
    pageName: "Causes of Lighter Skin Patches",
    url: "/understand-vitiligo/causes-of-lighter-skin-patches/",
    primaryKeyword: "causes of white patches on skin",
    secondaryKeyword1: "vitiligo differential diagnosis",
    secondaryKeyword2: "hypopigmentation vs vitiligo",
    seoTitle: "White Patches on Skin: Vitiligo vs Other Causes Compared",
    metaDescription: "Compare vitiligo with pityriasis alba, tinea versicolor, post-inflammatory hypopigmentation, and scars. Learn common differences and when to see a doctor.",
    h1: "What Can White or Lighter Patches on the Skin Be?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "What Is Vitiligo", url: "/understand-vitiligo/" },
      { label: "Prepare for Dermatologist Visit", url: "/prepare-for-dermatologist-visit/" },
      { label: "Vitiligo Glossary", url: "/vitiligo-glossary/" }
    ],
    imageAltText: "Comparison chart demonstrating visual differences between pityriasis alba, fungal tinea versicolor, and vitiligo.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Understand", url: "/understand-vitiligo/" },
      { label: "Lighter Patches Compared", url: "/understand-vitiligo/causes-of-lighter-skin-patches/" }
    ],
    category: "Understand",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["DermNet NZ Differential Diagnoses", "American Family Physician"]
  },
  {
    pageName: "Vitiligo Treatment Options",
    url: "/vitiligo-treatment/",
    primaryKeyword: "vitiligo treatment",
    secondaryKeyword1: "vitiligo treatment options",
    secondaryKeyword2: "evidence based vitiligo therapy",
    seoTitle: "Vitiligo Treatment Options: Evidence, Methods and Reality",
    metaDescription: "Explore evidence-based vitiligo treatment options including topicals, phototherapy, surgery, and newer JAK inhibitors. Understand timelines and limits.",
    h1: "What Are the Current Medical Treatments for Vitiligo?",
    searchIntent: "Practical / Evaluative",
    suggestedInternalLinks: [
      { label: "Topical Treatments for Vitiligo", url: "/vitiligo-treatment/topical-treatments-for-vitiligo/" },
      { label: "Phototherapy for Vitiligo", url: "/vitiligo-treatment/phototherapy-for-vitiligo/" },
      { label: "Prepare for Dermatologist Visit", url: "/prepare-for-dermatologist-visit/" }
    ],
    imageAltText: "Medical illustration of topical creams and phototherapy light wavelengths used in dermatology.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Vitiligo Treatment", url: "/vitiligo-treatment/" }
    ],
    category: "Treatment",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["American Academy of Dermatology (AAD)", "New England Journal of Medicine", "British Association of Dermatologists"]
  },
  {
    pageName: "Topical Treatments for Vitiligo",
    url: "/vitiligo-treatment/topical-treatments-for-vitiligo/",
    primaryKeyword: "topical vitiligo treatments",
    secondaryKeyword1: "vitiligo creams and ointments",
    secondaryKeyword2: "jak inhibitors for vitiligo",
    seoTitle: "Topical Treatments for Vitiligo: Corticosteroids to JAK Inhibitors",
    metaDescription: "Review prescription topical treatments for vitiligo: corticosteroids, calcineurin inhibitors, and modern topical JAK inhibitors with clear safety guidance.",
    h1: "Topical Treatments for Vitiligo: How Creams and Ointments Work",
    searchIntent: "Practical / Evaluative",
    suggestedInternalLinks: [
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" },
      { label: "Phototherapy for Vitiligo", url: "/vitiligo-treatment/phototherapy-for-vitiligo/" },
      { label: "Prepare for Dermatologist Visit", url: "/prepare-for-dermatologist-visit/" }
    ],
    imageAltText: "Illustration of topical cream application targeting epidermal immune pathways.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Treatment", url: "/vitiligo-treatment/" },
      { label: "Topical Treatments", url: "/vitiligo-treatment/topical-treatments-for-vitiligo/" }
    ],
    category: "Treatment",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["NEJM Ruxolitinib Phase 3 Trials", "AAD Practice Guidelines"]
  },
  {
    pageName: "Phototherapy for Vitiligo",
    url: "/vitiligo-treatment/phototherapy-for-vitiligo/",
    primaryKeyword: "phototherapy for vitiligo",
    secondaryKeyword1: "narrowband uvb vitiligo",
    secondaryKeyword2: "excimer laser for vitiligo",
    seoTitle: "Phototherapy for Vitiligo: Narrowband UVB and Excimer Light",
    metaDescription: "Understand how medical phototherapy (NB-UVB 311nm and excimer lasers) stimulates follicular melanocytes while calming skin inflammation.",
    h1: "How Does Phototherapy Work for Vitiligo?",
    searchIntent: "Practical / Evaluative",
    suggestedInternalLinks: [
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" },
      { label: "Topical Treatments for Vitiligo", url: "/vitiligo-treatment/topical-treatments-for-vitiligo/" },
      { label: "Sun Protection for Vitiligo", url: "/living-with-vitiligo/sun-protection-for-vitiligo/" }
    ],
    imageAltText: "Diagram illustrating 311nm narrowband UVB rays stimulating follicular melanocyte stem cells.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Treatment", url: "/vitiligo-treatment/" },
      { label: "Phototherapy", url: "/vitiligo-treatment/phototherapy-for-vitiligo/" }
    ],
    category: "Treatment",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["BAD Guidelines for the Management of Vitiligo", "Dermatologic Clinics"]
  },
  {
    pageName: "Prepare for Dermatologist Visit",
    url: "/prepare-for-dermatologist-visit/",
    primaryKeyword: "dermatologist visit for vitiligo",
    secondaryKeyword1: "questions to ask dermatologist vitiligo",
    secondaryKeyword2: "vitiligo diagnosis checklist",
    seoTitle: "Prepare for Your Dermatologist Visit: Vitiligo Checklist & Questions",
    metaDescription: "Prepare for your appointment with an interactive history checklist and personalized questions to ask your dermatologist about vitiligo diagnosis and care.",
    h1: "How to Prepare for Your Dermatologist Visit for Vitiligo",
    searchIntent: "Practical / Evaluative",
    suggestedInternalLinks: [
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" },
      { label: "Stable vs Active Vitiligo", url: "/understand-vitiligo/stable-vs-active-vitiligo/" },
      { label: "Patch Diary", url: "/patch-diary/" }
    ],
    imageAltText: "Interactive clinical checklist and question preparation sheet for doctor consultation.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Treatment", url: "/vitiligo-treatment/" },
      { label: "Dermatologist Visit Prep", url: "/prepare-for-dermatologist-visit/" }
    ],
    category: "Treatment",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["American Academy of Dermatology Patient Care Resources"]
  },
  {
    pageName: "Vitiligo Nutrition Hub",
    url: "/vitiligo-nutrition/",
    primaryKeyword: "vitiligo nutrition",
    secondaryKeyword1: "vitiligo diet evidence",
    secondaryKeyword2: "can food cure vitiligo",
    seoTitle: "Nutrition and Vitiligo: Evidence, Myths and Micronutrients",
    metaDescription: "Understand the scientific reality of nutrition and vitiligo. Learn why food cannot cure vitiligo, but how balanced nutrients support overall vitality.",
    h1: "Nutrition and Vitiligo: What Science Actually Tells Us",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Foods for Vitiligo", url: "/vitiligo-nutrition/foods-for-vitiligo/" },
      { label: "Vitamin B12 and Vitiligo", url: "/vitiligo-nutrition/vitamin-b12-and-vitiligo/" },
      { label: "Vitamin D and Vitiligo", url: "/vitiligo-nutrition/vitamin-d-and-vitiligo/" },
      { label: "Vitiligo Diet Myths", url: "/vitiligo-nutrition/vitiligo-diet-myths/" },
      { label: "Diet by Vitiligo Type", url: "/vitiligo-nutrition/diet-by-vitiligo-type/" }
    ],
    imageAltText: "Still life arrangement of whole nourishing foods including leafy greens, walnuts, lentils, and citrus.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Vitiligo Nutrition", url: "/vitiligo-nutrition/" }
    ],
    category: "Nutrition",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Speeckaert R et al. Nutritional factors in vitiligo", "Dermatology Nutrition Working Group"]
  },
  {
    pageName: "Foods for Vitiligo",
    url: "/vitiligo-nutrition/foods-for-vitiligo/",
    primaryKeyword: "foods for vitiligo",
    secondaryKeyword1: "diet and vitiligo",
    secondaryKeyword2: "vitiligo food guide",
    seoTitle: "Foods for Vitiligo: Wholesome Nutrition, Evidence and Facts",
    metaDescription: "Explore how diet relates to vitiligo, which foods provide essential nutrients, and what research says about balanced eating without false cure claims.",
    h1: "Can Certain Foods Help People With Vitiligo?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Vitiligo Nutrition Hub", url: "/vitiligo-nutrition/" },
      { label: "Vitiligo Diet Myths", url: "/vitiligo-nutrition/vitiligo-diet-myths/" },
      { label: "Vitamin D and Vitiligo", url: "/vitiligo-nutrition/vitamin-d-and-vitiligo/" }
    ],
    imageAltText: "Balanced selection of whole grains, leafy greens, healthy fats, and berries on a rustic table.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Nutrition", url: "/vitiligo-nutrition/" },
      { label: "Foods for Vitiligo", url: "/vitiligo-nutrition/foods-for-vitiligo/" }
    ],
    category: "Nutrition",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Autoimmunity Reviews", "American Academy of Dermatology"]
  },
  {
    pageName: "Vitamin B12 & Micronutrients",
    url: "/vitiligo-nutrition/vitamin-b12-and-vitiligo/",
    primaryKeyword: "vitamin b12 and vitiligo",
    secondaryKeyword1: "folate deficiency in vitiligo",
    secondaryKeyword2: "vitiligo micronutrients",
    seoTitle: "Vitamin B12 and Vitiligo: What Does Medical Science Show?",
    metaDescription: "Examine the connection between Vitamin B12, folate, and autoimmune vitiligo. Understand why screening matters and what evidence supports.",
    h1: "Vitamin B12, Folate and Vitiligo: Understanding the Medical Connection",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Vitamin D and Vitiligo", url: "/vitiligo-nutrition/vitamin-d-and-vitiligo/" },
      { label: "Vitiligo Nutrition Hub", url: "/vitiligo-nutrition/" },
      { label: "What Causes Vitiligo", url: "/understand-vitiligo/what-causes-vitiligo/" }
    ],
    imageAltText: "Educational diagram of cellular methylation and red blood cell cofactors including B12 and folate.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Nutrition", url: "/vitiligo-nutrition/" },
      { label: "Vitamin B12 and Vitiligo", url: "/vitiligo-nutrition/vitamin-b12-and-vitiligo/" }
    ],
    category: "Nutrition",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Clinical and Experimental Dermatology", "NIH Office of Dietary Supplements"]
  },
  {
    pageName: "Vitamin D & Vitiligo",
    url: "/vitiligo-nutrition/vitamin-d-and-vitiligo/",
    primaryKeyword: "vitamin d and vitiligo",
    secondaryKeyword1: "vitamin d deficiency vitiligo",
    secondaryKeyword2: "sun protection and vitamin d",
    seoTitle: "Vitamin D and Vitiligo: Deficiency Risks, Sun and Immunity",
    metaDescription: "Learn why individuals with vitiligo often experience low vitamin D due to sun avoidance, the role of vitamin D in immune health, and testing advice.",
    h1: "Why Is Vitamin D Discussed So Frequently in Vitiligo?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Sun Protection for Vitiligo", url: "/living-with-vitiligo/sun-protection-for-vitiligo/" },
      { label: "Vitiligo Nutrition Hub", url: "/vitiligo-nutrition/" },
      { label: "Vitamin B12 and Vitiligo", url: "/vitiligo-nutrition/vitamin-b12-and-vitiligo/" }
    ],
    imageAltText: "Visual of sunlight filtering through window onto natural healthy food sources of vitamin D.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Nutrition", url: "/vitiligo-nutrition/" },
      { label: "Vitamin D and Vitiligo", url: "/vitiligo-nutrition/vitamin-d-and-vitiligo/" }
    ],
    category: "Nutrition",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Journal of the European Academy of Dermatology and Venereology", "NIH"]
  },
  {
    pageName: "Vitiligo Diet Myths",
    url: "/vitiligo-nutrition/vitiligo-diet-myths/",
    primaryKeyword: "vitiligo diet myths",
    secondaryKeyword1: "turmeric vitiligo cure myth",
    secondaryKeyword2: "citrus and vitiligo myth",
    seoTitle: "Vitiligo Diet Myths Debunked: Turmeric, Citrus, Fish and Milk",
    metaDescription: "Debunk widespread diet myths surrounding vitiligo. Discover what dermatological science says about turmeric, citrus, fish-milk combinations, and amla.",
    h1: "Can Food or Diet Myths Cause or Cure Vitiligo?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Vitiligo Nutrition Hub", url: "/vitiligo-nutrition/" },
      { label: "Diet by Vitiligo Type", url: "/vitiligo-nutrition/diet-by-vitiligo-type/" },
      { label: "Vitiligo Myths", url: "/vitiligo-myths/" }
    ],
    imageAltText: "Myth vs evidence breakdown showing culinary spices and citrus fruit alongside verified research.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Nutrition", url: "/vitiligo-nutrition/" },
      { label: "Diet Myths", url: "/vitiligo-nutrition/vitiligo-diet-myths/" }
    ],
    category: "Nutrition",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["International Journal of Dermatology", "AAD"]
  },
  {
    pageName: "Diet by Vitiligo Type",
    url: "/vitiligo-nutrition/diet-by-vitiligo-type/",
    primaryKeyword: "diet for vitiligo types",
    secondaryKeyword1: "diet for segmental vitiligo",
    secondaryKeyword2: "diet for non-segmental vitiligo",
    seoTitle: "Does Your Vitiligo Type Change What You Should Eat?",
    metaDescription: "Find out if segmental, non-segmental, generalized, or mucosal vitiligo require different diets, and what dermatologists recommend regarding nutrition.",
    h1: "Does Your Vitiligo Type Change What You Should Eat?",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Vitiligo Nutrition Hub", url: "/vitiligo-nutrition/" },
      { label: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/" },
      { label: "Foods for Vitiligo", url: "/vitiligo-nutrition/foods-for-vitiligo/" }
    ],
    imageAltText: "Comparative matrix showing dietary balance across clinical vitiligo classifications.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Nutrition", url: "/vitiligo-nutrition/" },
      { label: "Diet by Type", url: "/vitiligo-nutrition/diet-by-vitiligo-type/" }
    ],
    category: "Nutrition",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["British Association of Dermatologists", "AAD"]
  },
  {
    pageName: "Living With Vitiligo Hub",
    url: "/living-with-vitiligo/",
    primaryKeyword: "living with vitiligo",
    secondaryKeyword1: "vitiligo lifestyle",
    secondaryKeyword2: "vitiligo coping strategies",
    seoTitle: "Living With Vitiligo: Skincare, Confidence and Daily Life",
    metaDescription: "Navigate daily life with vitiligo: evidence-based skincare routines, sun protection habits, confidence strategies, relationships, and self-expression.",
    h1: "Living With Vitiligo: Skincare, Mindset and Everyday Freedom",
    searchIntent: "Lifestyle / Support",
    suggestedInternalLinks: [
      { label: "Vitiligo Skincare", url: "/living-with-vitiligo/vitiligo-skincare/" },
      { label: "Sun Protection for Vitiligo", url: "/living-with-vitiligo/sun-protection-for-vitiligo/" },
      { label: "Makeup for Vitiligo", url: "/living-with-vitiligo/makeup-for-vitiligo/" },
      { label: "Vitiligo and Confidence", url: "/living-with-vitiligo/vitiligo-and-confidence/" }
    ],
    imageAltText: "Lifestyle portrait of an individual with visible vitiligo smiling outdoors in natural light.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Living With Vitiligo", url: "/living-with-vitiligo/" }
    ],
    category: "Lifestyle",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["British Journal of Dermatology Psychodermatology Studies", "AAD"]
  },
  {
    pageName: "Vitiligo Skincare",
    url: "/living-with-vitiligo/vitiligo-skincare/",
    primaryKeyword: "vitiligo skincare",
    secondaryKeyword1: "skincare routine for vitiligo",
    secondaryKeyword2: "skin barrier support in vitiligo",
    seoTitle: "Vitiligo Skincare Routine: Barrier Care and Friction Relief",
    metaDescription: "Build a calming skincare routine for vitiligo: fragrance-free moisturizers, ceramide barrier support, and reducing friction to prevent the Koebner effect.",
    h1: "Everyday Skincare for Vitiligo: Hydration, Barrier Health & Friction Relief",
    searchIntent: "Lifestyle / Support",
    suggestedInternalLinks: [
      { label: "Sun Protection for Vitiligo", url: "/living-with-vitiligo/sun-protection-for-vitiligo/" },
      { label: "Living With Vitiligo", url: "/living-with-vitiligo/" },
      { label: "Makeup for Vitiligo", url: "/living-with-vitiligo/makeup-for-vitiligo/" }
    ],
    imageAltText: "Gentle skincare bottles and creams on natural stone bathroom counter.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Lifestyle", url: "/living-with-vitiligo/" },
      { label: "Skincare", url: "/living-with-vitiligo/vitiligo-skincare/" }
    ],
    category: "Lifestyle",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["AAD Patient Skincare Guides", "DermNet NZ"]
  },
  {
    pageName: "Sun Protection for Vitiligo",
    url: "/living-with-vitiligo/sun-protection-for-vitiligo/",
    primaryKeyword: "sun protection for vitiligo",
    secondaryKeyword1: "vitiligo sunscreen spf",
    secondaryKeyword2: "can people with vitiligo go in the sun",
    seoTitle: "Sun Protection and Vitiligo: SPF, Outdoor Safety and Myths",
    metaDescription: "Learn why depigmented skin needs broad-spectrum SPF 50+, how to avoid sunburn triggers without fear of daylight, and smart outdoor habits.",
    h1: "Sun Protection and Vitiligo: Separating Fear from Fact",
    searchIntent: "Lifestyle / Support",
    suggestedInternalLinks: [
      { label: "Vitiligo Skincare", url: "/living-with-vitiligo/vitiligo-skincare/" },
      { label: "Vitamin D and Vitiligo", url: "/vitiligo-nutrition/vitamin-d-and-vitiligo/" },
      { label: "Phototherapy for Vitiligo", url: "/vitiligo-treatment/phototherapy-for-vitiligo/" }
    ],
    imageAltText: "Individual wearing protective sun hat and linen shirt outdoors in soft sunlight.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Lifestyle", url: "/living-with-vitiligo/" },
      { label: "Sun Protection", url: "/living-with-vitiligo/sun-protection-for-vitiligo/" }
    ],
    category: "Lifestyle",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["BAD Sun Protection Guidelines", "Skin Cancer Foundation", "AAD"]
  },
  {
    pageName: "Makeup for Vitiligo",
    url: "/living-with-vitiligo/makeup-for-vitiligo/",
    primaryKeyword: "makeup for vitiligo",
    secondaryKeyword1: "vitiligo camouflage makeup",
    secondaryKeyword2: "color correcting vitiligo",
    seoTitle: "Makeup for Vitiligo: Camouflage Tips and Natural Choices",
    metaDescription: "Explore makeup for vitiligo as a personal creative choice: color correction methods, long-wear body camouflage, and the empowering option of bare skin.",
    h1: "Makeup for Vitiligo: Camouflage Techniques and the Choice of Bare Skin",
    searchIntent: "Lifestyle / Support",
    suggestedInternalLinks: [
      { label: "Vitiligo and Confidence", url: "/living-with-vitiligo/vitiligo-and-confidence/" },
      { label: "Vitiligo Skincare", url: "/living-with-vitiligo/vitiligo-skincare/" },
      { label: "Living With Vitiligo", url: "/living-with-vitiligo/" }
    ],
    imageAltText: "Selection of warm cosmetic correctors and natural blending brushes on neutral marble.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Lifestyle", url: "/living-with-vitiligo/" },
      { label: "Makeup", url: "/living-with-vitiligo/makeup-for-vitiligo/" }
    ],
    category: "Lifestyle",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["British Association of Skin Camouflage", "DermNet NZ"]
  },
  {
    pageName: "Vitiligo and Confidence",
    url: "/living-with-vitiligo/vitiligo-and-confidence/",
    primaryKeyword: "vitiligo and confidence",
    secondaryKeyword1: "dealing with stares vitiligo",
    secondaryKeyword2: "vitiligo mental health support",
    seoTitle: "Vitiligo and Confidence: Handling Stares and Social Ease",
    metaDescription: "Practical psychological strategies for handling curious stares, dating conversations, workplace questions, and cultivating genuine body ease with vitiligo.",
    h1: "Vitiligo and Confidence: Navigating Visibility, Stares and Self-Possession",
    searchIntent: "Lifestyle / Support",
    suggestedInternalLinks: [
      { label: "Community Stories", url: "/vitiligo-stories/" },
      { label: "Living With Vitiligo", url: "/living-with-vitiligo/" },
      { label: "Vitiligo Myths", url: "/vitiligo-myths/" }
    ],
    imageAltText: "Warm documentary photograph representing authentic connection and self-acceptance.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Lifestyle", url: "/living-with-vitiligo/" },
      { label: "Confidence", url: "/living-with-vitiligo/vitiligo-and-confidence/" }
    ],
    category: "Lifestyle",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["British Journal of Dermatology Psychodermatology Studies", "Vitiligo Support International"]
  },
  {
    pageName: "Community Stories Hub",
    url: "/vitiligo-stories/",
    primaryKeyword: "vitiligo stories",
    secondaryKeyword1: "people with vitiligo experiences",
    secondaryKeyword2: "vitiligo community narratives",
    seoTitle: "Vitiligo Stories: Personal Journeys, Turning Points and Voice",
    metaDescription: "Read real stories from individuals living with vitiligo across the world, exploring diagnosis, turning points, self-expression, and professional life.",
    h1: "My Skin, My Story: Real Voices and Journeys With Vitiligo",
    searchIntent: "Lifestyle / Support",
    suggestedInternalLinks: [
      { label: "Living With Vitiligo", url: "/living-with-vitiligo/" },
      { label: "Vitiligo and Confidence", url: "/living-with-vitiligo/vitiligo-and-confidence/" },
      { label: "Vitiligo Around the World", url: "/vitiligo-around-the-world/" }
    ],
    imageAltText: "Portraits of diverse community members sharing their vitiligo journeys.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Vitiligo Stories", url: "/vitiligo-stories/" }
    ],
    category: "Stories",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Community Story Submissions & Editorial Review", "Global Vitiligo Foundation"]
  },
  {
    pageName: "Vitiligo Myths Debunked",
    url: "/vitiligo-myths/",
    primaryKeyword: "vitiligo myths",
    secondaryKeyword1: "is vitiligo contagious",
    secondaryKeyword2: "vitiligo misconceptions",
    seoTitle: "Vitiligo Myths Debunked: Facts, Medical Science and Citations",
    metaDescription: "Bust 10 major myths about vitiligo: contagion, marriage, food triggers, hygiene, and miracle cures, with clear medical explanations and citations.",
    h1: "Debunking Common Myths and Misconceptions About Vitiligo",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Fact or Fiction Quiz", url: "/vitiligo-fact-or-fiction/" },
      { label: "What Causes Vitiligo", url: "/understand-vitiligo/what-causes-vitiligo/" },
      { label: "Vitiligo Diet Myths", url: "/vitiligo-nutrition/vitiligo-diet-myths/" }
    ],
    imageAltText: "Visual fact check comparison cards distinguishing dermatological science from social myths.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Resources", url: "/vitiligo-resources/" },
      { label: "Vitiligo Myths", url: "/vitiligo-myths/" }
    ],
    category: "Resources",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["American Academy of Dermatology", "National Institutes of Health", "DermNet NZ"]
  },
  {
    pageName: "Fact or Fiction Interactive",
    url: "/vitiligo-fact-or-fiction/",
    primaryKeyword: "vitiligo fact or fiction",
    secondaryKeyword1: "vitiligo quiz",
    secondaryKeyword2: "test vitiligo knowledge",
    seoTitle: "Vitiligo: Fact or Fiction? Interactive Knowledge Quiz",
    metaDescription: "Test your understanding of vitiligo with our 10-question interactive fact-or-fiction challenge. Learn accurate biology, progression, and daily facts.",
    h1: "Vitiligo: Fact or Fiction? Interactive Educational Experience",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Vitiligo Myths", url: "/vitiligo-myths/" },
      { label: "Understand Vitiligo", url: "/understand-vitiligo/" },
      { label: "Vitiligo Glossary", url: "/vitiligo-glossary/" }
    ],
    imageAltText: "Interactive game interface showing Fact or Fiction question cards with scoring.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Resources", url: "/vitiligo-resources/" },
      { label: "Fact or Fiction", url: "/vitiligo-fact-or-fiction/" }
    ],
    category: "Resources",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Consensus Guidelines in Dermatology", "AAD"]
  },
  {
    pageName: "Vitiligo Glossary",
    url: "/vitiligo-glossary/",
    primaryKeyword: "vitiligo glossary",
    secondaryKeyword1: "vitiligo medical terms",
    secondaryKeyword2: "melanocyte definitions",
    seoTitle: "A to Z Vitiligo Glossary: Clinical Terms Explained Simply",
    metaDescription: "Browse our comprehensive A–Z clinical glossary of vitiligo terminology. Toggle between formal medical definitions and plain-English simple explanations.",
    h1: "A–Z Vitiligo Glossary: Medical Terms Explained Simply",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Understand Vitiligo", url: "/understand-vitiligo/" },
      { label: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/" },
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" }
    ],
    imageAltText: "Illustrated glossary card layout showing medical terminology and simplified metaphors.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Resources", url: "/vitiligo-resources/" },
      { label: "Glossary", url: "/vitiligo-glossary/" }
    ],
    category: "Resources",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Stedman's Medical Dictionary", "AAD Dermatology Lexicon"]
  },
  {
    pageName: "Research Explained",
    url: "/vitiligo-research-explained/",
    primaryKeyword: "vitiligo research",
    secondaryKeyword1: "vitiligo clinical trials",
    secondaryKeyword2: "new vitiligo discoveries",
    seoTitle: "Vitiligo Research Without the PhD: Studies and Evidence",
    metaDescription: "Understand the latest clinical trials and scientific discoveries in vitiligo without academic jargon. Clear evidence tiers from established to unknown.",
    h1: "Vitiligo Research Without the PhD: What Scientists Studied and Found",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" },
      { label: "Melanocyte Biology", url: "/understand-vitiligo/what-happens-to-melanocytes/" },
      { label: "Sources and Medical Review", url: "/sources-and-medical-review/" }
    ],
    imageAltText: "Scientific research overview showing evidence badges and study methodologies.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Resources", url: "/vitiligo-resources/" },
      { label: "Research Explained", url: "/vitiligo-research-explained/" }
    ],
    category: "Resources",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["New England Journal of Medicine", "Science Translational Medicine", "Journal of Investigative Dermatology"]
  },
  {
    pageName: "Skin Tone & Anatomy",
    url: "/skin-tone-and-anatomy/",
    primaryKeyword: "vitiligo on different skin tones",
    secondaryKeyword1: "fitzpatrick skin types vitiligo",
    secondaryKeyword2: "vitiligo body areas",
    seoTitle: "Vitiligo Across Skin Tones and Body Anatomy: Visual Study",
    metaDescription: "Explore how vitiligo appears across Fitzpatrick skin tones I through VI, how contrast differs, and why follicular reservoirs affect repigmentation.",
    h1: "Vitiligo Across Skin Tones and Anatomical Locations",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Types of Vitiligo", url: "/understand-vitiligo/types-of-vitiligo/" },
      { label: "Vitiligo Skincare", url: "/living-with-vitiligo/vitiligo-skincare/" },
      { label: "Vitiligo Around the World", url: "/vitiligo-around-the-world/" }
    ],
    imageAltText: "Comparative Fitzpatrick skin tone swatches and anatomical diagram showing hair follicle density.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Explore", url: "/skin-tone-and-anatomy/" }
    ],
    category: "Explore",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["Journal of the American Academy of Dermatology", "Dermatologic Clinics"]
  },
  {
    pageName: "Vitiligo Around the World",
    url: "/vitiligo-around-the-world/",
    primaryKeyword: "vitiligo around the world",
    secondaryKeyword1: "world vitiligo day",
    secondaryKeyword2: "global vitiligo advocacy",
    seoTitle: "Vitiligo Around the World: Global Cultures, Advocacy & Care",
    metaDescription: "Discover how vitiligo is understood across India, the Middle East, Africa, Europe, the Americas, and Australia, and the impact of World Vitiligo Day.",
    h1: "Vitiligo Around the World: Cultural Perspectives and Global Advocacy",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Community Stories", url: "/vitiligo-stories/" },
      { label: "Skin Tone and Anatomy", url: "/skin-tone-and-anatomy/" },
      { label: "Vitiligo Myths", url: "/vitiligo-myths/" }
    ],
    imageAltText: "World map highlighting regional vitiligo initiatives and World Vitiligo Day milestones.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Explore", url: "/vitiligo-around-the-world/" }
    ],
    category: "Explore",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: ["World Vitiligo Day Scientific Committee", "Global Vitiligo Foundation"]
  },
  {
    pageName: "Patch Diary Tool",
    url: "/patch-diary/",
    primaryKeyword: "vitiligo tracking diary",
    secondaryKeyword1: "vitiligo patch journal",
    secondaryKeyword2: "track vitiligo progression",
    seoTitle: "Patch Diary: Private Personal Vitiligo Timeline Tracker",
    metaDescription: "Use our private, browser-based personal timeline to document vitiligo patch observations, appointment notes, and personal reflections securely.",
    h1: "Patch Diary: A Private Tool to Track Your Personal Journey",
    searchIntent: "Practical / Evaluative",
    suggestedInternalLinks: [
      { label: "Prepare for Dermatologist Visit", url: "/prepare-for-dermatologist-visit/" },
      { label: "Stable vs Active Vitiligo", url: "/understand-vitiligo/stable-vs-active-vitiligo/" },
      { label: "Vitiligo Skincare", url: "/living-with-vitiligo/vitiligo-skincare/" }
    ],
    imageAltText: "Timeline interface showing private entries of patch observations and doctor visits.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Explore", url: "/patch-diary/" }
    ],
    category: "Explore",
    lastReviewed: "October 2026",
    isIndexable: false, // Private utility tool, marked noindex per prompt instructions
    citationSources: ["Personal health journaling methodology", "AAD Visit Guidelines"]
  },
  {
    pageName: "Sources & Medical Review",
    url: "/sources-and-medical-review/",
    primaryKeyword: "vitiligo medical sources",
    secondaryKeyword1: "vitiligo peer reviewed research",
    secondaryKeyword2: "vitiligo clinical guidelines",
    seoTitle: "Sources and Medical Review: Our Editorial & Clinical Standards",
    metaDescription: "Review the peer-reviewed sources, clinical guidelines, and medical societies that inform Beyond The Patch, alongside our strict ethics policy.",
    h1: "Sources, Clinical Citations and Medical Review Policy",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Understand Vitiligo", url: "/understand-vitiligo/" },
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" },
      { label: "Vitiligo Research Explained", url: "/vitiligo-research-explained/" }
    ],
    imageAltText: "Academic compendium of clinical dermatology journals and official medical societies.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "Resources", url: "/sources-and-medical-review/" }
    ],
    category: "Resources",
    lastReviewed: "October 2026",
    isIndexable: true,
    citationSources: [
      "American Academy of Dermatology (AAD)",
      "National Institutes of Health (NIAMS)",
      "DermNet New Zealand",
      "British Association of Dermatologists (BAD)",
      "New England Journal of Medicine (NEJM)"
    ]
  },
  {
    pageName: "SEO & AEO Audit",
    url: "/seo-content-audit/",
    primaryKeyword: "vitiligo seo content audit",
    secondaryKeyword1: "aeo vitiligo content map",
    secondaryKeyword2: "website audit report",
    seoTitle: "Beyond The Patch: 15-Column SEO & AEO Content Audit",
    metaDescription: "Comprehensive automated 15-column SEO and AEO audit matrix of all implemented pages on Beyond The Patch, verifying titles, meta descriptions, and links.",
    h1: "Central SEO Content Map & Automated 15-Column Audit Matrix",
    searchIntent: "Informational",
    suggestedInternalLinks: [
      { label: "Home", url: "/" },
      { label: "Understand Vitiligo", url: "/understand-vitiligo/" },
      { label: "Vitiligo Treatment Options", url: "/vitiligo-treatment/" }
    ],
    imageAltText: "Structured SEO audit matrix displaying character counts, keywords, and indexability statuses.",
    breadcrumbs: [
      { label: "Home", url: "/" },
      { label: "SEO Audit", url: "/seo-content-audit/" }
    ],
    category: "Audit",
    lastReviewed: "October 2026",
    isIndexable: false,
    citationSources: ["Google Search Central SEO Guidelines", "W3C Semantic HTML Standards"]
  }
];

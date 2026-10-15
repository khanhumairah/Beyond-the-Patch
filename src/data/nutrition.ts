import { FoodItem, FoodClaim } from '../types';

export const NUTRITION_OPENING_STATEMENT = 
  "There is currently no proven diet that cures vitiligo. A balanced diet can support overall health and help prevent nutritional deficiencies, but food should not be presented as a replacement for medical treatment.";

export interface NutrientGuideline {
  name: string;
  roleInBody: string;
  whyDiscussedInVitiligo: string;
  evidenceStatus: string;
  foodSources: string;
}

export const ESSENTIAL_NUTRIENTS: NutrientGuideline[] = [
  {
    name: "Vitamin D",
    roleInBody: "Regulates calcium homeostasis, bone density, and supports normal innate and adaptive immune cell signaling.",
    whyDiscussedInVitiligo: "Many individuals with vitiligo practice strict sun avoidance to avoid sunburns on depigmented skin, which often leads to sub-optimal cutaneous vitamin D synthesis. Clinicians frequently check serum 25(OH)D levels.",
    evidenceStatus: "Supplementation corrects documented deficiency; no clinical evidence that high-dose vitamin D cures vitiligo.",
    foodSources: "Fortified plant milks, oily fish (salmon, sardines), egg yolks, UV-exposed mushrooms, or physician-recommended supplements."
  },
  {
    name: "Vitamin B12 & Folate",
    roleInBody: "Essential cofactors for DNA synthesis, red blood cell maturation, cellular repair, and homocysteine metabolism.",
    whyDiscussedInVitiligo: "Earlier observational studies noted elevated homocysteine and mild deficiencies in some vitiligo cohorts. Because vitiligo is autoimmune, screening for comorbid autoimmune gastritis or pernicious anemia is common practice.",
    evidenceStatus: "Supports cellular metabolism and neurological health; not a standalone repigmentation therapy.",
    foodSources: "Dark leafy greens, lentils, chickpeas, nutritional yeast, eggs, lean poultry, dairy products, or fortified cereals."
  },
  {
    name: "Zinc & Copper",
    roleInBody: "Essential trace minerals that serve as enzyme cofactors. Tyrosinase (the key enzyme in melanin synthesis) contains copper ions.",
    whyDiscussedInVitiligo: "Biochemically, tyrosinase requires copper to convert tyrosine into melanin precursor molecules. Zinc acts as an antioxidant and immune modulator.",
    evidenceStatus: "Normal physiological levels are necessary for baseline enzymatic function; megadosing does not reverse autoimmune destruction.",
    foodSources: "Pumpkin seeds, sesame seeds, oysters, whole oats, lentils, cashew nuts, and chickpeas."
  },
  {
    name: "Antioxidants (Vitamins C, E, Polyphenols)",
    roleInBody: "Neutralize reactive oxygen species (ROS) and protect cellular membranes from lipid peroxidation.",
    whyDiscussedInVitiligo: "Oxidative stress is known to occur within vitiligo melanocytes, causing cellular distress that may trigger the autoimmune cascade.",
    evidenceStatus: "Dietary antioxidants provide systemic cellular protection; oral antioxidant foods do not selectively halt autoimmune attacks.",
    foodSources: "Berries, colorful peppers, citrus, green tea, walnuts, pomegranate, tomatoes, and extra virgin olive oil."
  },
  {
    name: "Omega-3 Fatty Acids",
    roleInBody: "Structural components of cell membranes that produce anti-inflammatory resolving mediators.",
    whyDiscussedInVitiligo: "Studied across diverse autoimmune and inflammatory dermatological conditions for general immune modulation.",
    evidenceStatus: "Supports cardiovascular and general systemic health; does not cure vitiligo.",
    foodSources: "Flaxseeds, chia seeds, walnuts, hemp hearts, wild-caught fatty fish (mackerel, salmon), and algae oil."
  },
  {
    name: "Complete Protein & Amino Acids (Tyrosine, Phenylalanine)",
    roleInBody: "Provide the fundamental building blocks for tissue repair, enzymes, and peptide neurotransmitters.",
    whyDiscussedInVitiligo: "L-tyrosine is the biochemical amino acid precursor for melanin synthesis in melanocytes.",
    evidenceStatus: "Adequate dietary protein is vital for whole-body health; excess amino acid supplementation does not force melanin production in depigmented patches.",
    foodSources: "Beans, tofu, tempeh, eggs, poultry, yogurt, quinoa, and pumpkin seeds."
  }
];

export const FOOD_EXPLORER_ITEMS: FoodItem[] = [
  {
    id: "spinach",
    name: "Spinach",
    category: "Vegetables",
    keyNutrients: ["Folate", "Iron", "Vitamin C", "Lutein"],
    whyInclude: "Contributes to a diverse, nutrient-dense diet supporting red blood cell formation and tissue vitality.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "wild-salmon",
    name: "Wild Salmon",
    category: "Protein",
    keyNutrients: ["Omega-3 Fatty Acids", "Vitamin D", "Protein", "Selenium"],
    whyInclude: "Provides bioavailable vitamin D (important for those practicing sun protection) and high-quality protein.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "walnuts",
    name: "Walnuts",
    category: "Nuts & Seeds",
    keyNutrients: ["Alpha-linolenic Acid (ALA)", "Vitamin E", "Polyphenols"],
    whyInclude: "Offers healthy polyunsaturated fats and plant-based antioxidant polyphenols for cellular membrane integrity.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "blueberries",
    name: "Blueberries",
    category: "Fruits",
    keyNutrients: ["Anthocyanins", "Vitamin C", "Manganese", "Fiber"],
    whyInclude: "Rich in diverse flavonoids that contribute to a balanced antioxidant intake.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "lentils",
    name: "Lentils",
    category: "Legumes",
    keyNutrients: ["Folate", "Zinc", "Iron", "Dietary Fiber", "Protein"],
    whyInclude: "Nutrient powerhouse that supports steady blood sugar and delivers essential trace minerals like zinc.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "rolled-oats",
    name: "Rolled Whole Oats",
    category: "Whole Grains",
    keyNutrients: ["Beta-glucan Fiber", "B Vitamins", "Zinc", "Magnesium"],
    whyInclude: "Sustained-release complex carbohydrates that nurture a healthy gut microbiome.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "extra-virgin-olive-oil",
    name: "Extra Virgin Olive Oil",
    category: "Healthy Fats",
    keyNutrients: ["Monounsaturated Oleic Acid", "Oleocanthal", "Vitamin E"],
    whyInclude: "Standard cornerstone of cardioprotective Mediterranean-style dietary patterns.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    category: "Nuts & Seeds",
    keyNutrients: ["Zinc", "Copper", "Magnesium", "Plant Protein"],
    whyInclude: "Convenient whole-food source of trace minerals involved in normal enzymatic biochemical processes.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "oranges-citrus",
    name: "Oranges & Citrus",
    category: "Fruits",
    keyNutrients: ["Vitamin C", "Bioflavonoids", "Hydration", "Folate"],
    whyInclude: "Vitamin C is essential for collagen synthesis and dietary non-heme iron absorption.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment. (Note: Old myths claiming citrus worsens vitiligo have zero scientific basis)."
  },
  {
    id: "greek-yogurt",
    name: "Fermented Yogurt / Kefir",
    category: "Protein",
    keyNutrients: ["Probiotics", "Calcium", "Vitamin B12", "Protein"],
    whyInclude: "Supports gastrointestinal microbial diversity and provides easily digestible protein and B12.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "sweet-potatoes",
    name: "Sweet Potatoes",
    category: "Vegetables",
    keyNutrients: ["Beta-carotene", "Vitamin B6", "Potassium", "Fiber"],
    whyInclude: "Vibrant source of carotenoids converted by the body to vitamin A as needed.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  },
  {
    id: "chia-seeds",
    name: "Chia Seeds",
    category: "Nuts & Seeds",
    keyNutrients: ["Soluble Fiber", "Omega-3 ALA", "Calcium", "Antioxidants"],
    whyInclude: "Easily incorporated into smoothies or oats to enhance daily fiber and healthy fats.",
    evidenceStatus: "Supports general nutrition — not a proven vitiligo treatment."
  }
];

export const FOOD_MYTH_CLAIMS: FoodClaim[] = [
  {
    id: "turmeric",
    foodName: "Turmeric (Curcumin)",
    claim: "Eating turmeric paste or turmeric pills will remove vitiligo patches.",
    evidence: "No clinical trial or peer-reviewed medical guideline shows that consuming turmeric cures or repigments vitiligo.",
    realisticRole: "A flavorful culinary spice with mild natural anti-inflammatory polyphenols that can be enjoyed as part of normal cooking.",
    scientificConsensus: "Myth Debunked"
  },
  {
    id: "citrus",
    foodName: "Citrus Fruits & Sour Foods",
    claim: "Eating sour foods, lemons, or oranges triggers or accelerates vitiligo spread.",
    evidence: "A widespread folk misconception with zero scientific or dermatological backing. Citrus fruits contain vitamin C and polyphenols beneficial to overall health.",
    realisticRole: "A healthy fruit family supporting hydration, vitamin C intake, and dietary fiber.",
    scientificConsensus: "Myth Debunked"
  },
  {
    id: "papaya",
    foodName: "Papaya",
    claim: "Rubbing or eating papaya directly stimulates melanocytes to produce color.",
    evidence: "Papaya contains digestive enzymes (papain) and vitamin A precursors, but neither topical application nor ingestion reverses autoimmune destruction.",
    realisticRole: "A nutrient-rich fruit that supports general digestion and micronutrient intake.",
    scientificConsensus: "No Evidence for Cure"
  },
  {
    id: "carrots",
    foodName: "Carrots",
    claim: "Drinking excessive carrot juice will restore natural skin color in vitiligo.",
    evidence: "Carrots contain high levels of beta-carotene. Consuming extreme amounts can cause carotenodermia (a temporary yellowish hue to outer skin), but does not generate melanin or restore melanocyte function.",
    realisticRole: "A crunchy vegetable rich in carotenoids and fiber.",
    scientificConsensus: "No Evidence for Cure"
  },
  {
    id: "fish-milk",
    foodName: "Fish & Milk Together",
    claim: "Consuming fish and milk in the same meal causes vitiligo to appear.",
    evidence: "An ancient cultural myth completely unsupported by physiology or immunology. Vitiligo is an autoimmune process, not an allergic reaction to food pairings.",
    realisticRole: "Both are standard sources of protein and micronutrients that can be consumed whenever personal dietary preferences allow.",
    scientificConsensus: "Myth Debunked"
  },
  {
    id: "amla",
    foodName: "Amla (Indian Gooseberry)",
    claim: "Amla extract permanently reverses vitiligo.",
    evidence: "Amla is exceptionally high in vitamin C and antioxidants. While studied in laboratory dishes for antioxidant properties, it does not cure vitiligo in human patients.",
    realisticRole: "A traditional tart fruit rich in vitamin C that supports baseline immune health.",
    scientificConsensus: "No Evidence for Cure"
  },
  {
    id: "almonds",
    foodName: "Almonds",
    claim: "Soaking almonds overnight cures autoimmune skin disorders.",
    evidence: "Almonds provide vitamin E and healthy fats, but there is no mechanism through which soaked nuts stop cytotoxic T-cell attacks on melanocytes.",
    realisticRole: "A wholesome nut offering plant protein, vitamin E, and minerals for heart and metabolic health.",
    scientificConsensus: "Supports General Health"
  },
  {
    id: "eggs",
    foodName: "Eggs",
    claim: "Eating white-shelled eggs causes white patches to form on the skin.",
    evidence: "A folkloric association based purely on visual analogy (white food = white patches). Food color has zero biological connection to skin pigmentation.",
    realisticRole: "A complete protein source containing choline, lutein, and vitamin B12.",
    scientificConsensus: "Myth Debunked"
  }
];

export const DIET_BY_VITILIGO_TYPE_EXPLANATION = 
  "Currently, there is no established diet specific to segmental, non-segmental, generalized, acrofacial, mucosal or universal vitiligo. Management of all subtypes relies on dermatological diagnosis, targeted therapies, and overall nutritional balance rather than subtype-specific eating rules.";

export const VITILIGO_TYPE_DIET_CARDS = [
  {
    type: "Segmental Vitiligo",
    guidance: "Focus on overall balanced nutrition. Because segmental vitiligo follows a localized neuro-immune mechanism and stabilizes rapidly, there is no proven segmental-specific diet."
  },
  {
    type: "Non-Segmental Vitiligo",
    guidance: "Focus on overall nutrition and address documented deficiencies (such as Vitamin D or B12) under professional guidance. No restrictive diet halts systemic activity."
  },
  {
    type: "Generalized Vitiligo",
    guidance: "Broad nutritional support and wholesome whole foods support general metabolic and immune health, but no food or supplement has been shown to reverse generalized vitiligo."
  },
  {
    type: "Mucosal Vitiligo",
    guidance: "No specific food has been established to treat mucosal vitiligo. Avoid spicy or harsh acidic foods only if local tissue irritation or discomfort occurs."
  },
  {
    type: "Universal Vitiligo",
    guidance: "No special food has been proven to restore pigmentation in universal vitiligo. Focus on general well-being and lifelong, meticulous sun protection habits."
  }
];

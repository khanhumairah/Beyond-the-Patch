export interface SkinToneLevel {
  fitzpatrick: string;
  toneName: string;
  melaninLevel: string;
  visualContrastDescription: string;
  clinicalNuances: string;
  sampleHex: string;
}

export const SKIN_TONE_DATA: SkinToneLevel[] = [
  {
    fitzpatrick: "Type I – II",
    toneName: "Fair to Light Porcelain",
    melaninLevel: "Low basal eumelanin",
    visualContrastDescription: "Patches may appear subtle or only faintly lighter than background skin in winter, becoming starkly noticeable after sun exposure when surrounding skin tans.",
    clinicalNuances: "Wood's lamp (UV blacklight) examination in a dark room is especially helpful for dermatologists to detect subtle patch borders in fair skin.",
    sampleHex: "#F7D8C4"
  },
  {
    fitzpatrick: "Type III – IV",
    toneName: "Medium, Olive, Warm Golden",
    melaninLevel: "Moderate eumelanin",
    visualContrastDescription: "A distinct, clear contrast between the chalk-white macule and surrounding golden-tan or olive skin. Intermediate 'trichrome' zones are frequently recognizable here.",
    clinicalNuances: "Surrounding skin readily produces melanin in response to UV light, which can create high-contrast borders if sunscreen is skipped.",
    sampleHex: "#D8AB82"
  },
  {
    fitzpatrick: "Type V – VI",
    toneName: "Rich Brown, Deep Espresso",
    melaninLevel: "High basal eumelanin",
    visualContrastDescription: "High-contrast visual demarcation between rich melanin-dense skin and depigmented porcelain-white patches. Borders may occasionally feature hyperpigmented rim margins.",
    clinicalNuances: "Because visual contrast is naturally highest, social visibility and psychosocial stigma have historically carried disproportionate weight, requiring empathetic cultural care.",
    sampleHex: "#6B4423"
  }
];

export interface BodyAreaDetail {
  id: string;
  area: string;
  characteristics: string;
  follicularReservoir: string;
  typicalResponseRate: string;
}

export const BODY_AREA_DETAILS: BodyAreaDetail[] = [
  {
    id: "face",
    area: "Face & Neck",
    characteristics: "Perioral (around mouth), periorbital (around eyes), and cheeks. Delicate epidermal layer with rich vascularization.",
    follicularReservoir: "Dense hair follicle concentration provides ample reservoir of dormant melanocyte stem cells.",
    typicalResponseRate: "Highest repigmentation potential among all anatomical sites under standard therapies."
  },
  {
    id: "hands",
    area: "Hands, Wrists & Feet",
    characteristics: "Dorsal hands, fingertips, toes, and lateral wrists (acral skin). Frequently exposed to mechanical friction and handwashing.",
    follicularReservoir: "Very low follicular density (fingertips and nail beds have zero follicles); fewer stem cell reservoirs to recruit.",
    typicalResponseRate: "Typically more recalcitrant to medical repigmentation; camouflage or acceptance strategies often play a key role."
  },
  {
    id: "trunk",
    area: "Trunk, Chest & Abdomen",
    characteristics: "Often symmetrical or following friction points from waistbands and bra underwires.",
    follicularReservoir: "Moderate follicular density with intermediate stem cell reservoirs.",
    typicalResponseRate: "Moderate, consistent response to narrowband UVB phototherapy over several months."
  },
  {
    id: "legs",
    area: "Knees & Shins",
    characteristics: "Bony prominences prone to minor bumps, friction, and pressure (Koebner-prone areas).",
    follicularReservoir: "Moderate follicular density on shins; lower density directly over knees and patella.",
    typicalResponseRate: "Responds moderately, though pressure-relief habits can support stability."
  },
  {
    id: "hair",
    area: "Scalp, Eyebrows & Hair (Poliosis)",
    characteristics: "Depigmentation extends to the follicular bulb, turning hair strands white or silver.",
    follicularReservoir: "Indicates depletion of the follicular melanocyte stem cell niche inside that specific follicle.",
    typicalResponseRate: "White hairs rarely spontaneously repigment medically; however, hair can be dyed safely if desired."
  },
  {
    id: "mucosal",
    area: "Lips & Mucocutaneous Borders",
    characteristics: "Vermilion border of lips and mucous membranes. Zero hair follicles; highly delicate thin mucosal epithelium.",
    follicularReservoir: "No hair follicles present.",
    typicalResponseRate: "Requires non-atrophic topical agents (such as calcineurin inhibitors) with moderate response."
  }
];

export interface WorldRegionData {
  id: string;
  region: string;
  prevalenceRange: string;
  culturalPerspective: string;
  advocacyHighlights: string;
  communityInitiatives: string;
}

export const WORLD_REGIONS: WorldRegionData[] = [
  {
    id: "india",
    region: "India & South Asia",
    prevalenceRange: "Estimated 1.0% – 4.0% (higher reported attendance in clinic registries)",
    culturalPerspective: "Historically burdened by the colloquial confusion with 'shweta kushtha' (leprosy) and marriage-related stigmas, leading to intense social pressure.",
    advocacyHighlights: "Pioneering dermatologists and advocacy coalitions have led massive de-stigmatization campaigns, legal protections against marital discrimination, and education in schools.",
    communityInitiatives: "Active national support networks, marital matchmaking platforms celebrating transparency, and widespread public skin health rallies."
  },
  {
    id: "middle-east",
    region: "Middle East & North Africa",
    prevalenceRange: "Estimated 0.8% – 2.0%",
    culturalPerspective: "Traditional folk theories often attributed patches to dietary pairings (fish and milk) or sudden grief. Cultural value on porcelain or flawless complexion added pressure.",
    advocacyHighlights: "Growing presence of young dermatologists and influencers across the Gulf and Levant reframing vitiligo as a neutral autoimmune condition.",
    communityInitiatives: "World Vitiligo Day symposia, Arabic-language evidence platforms, and youth creative arts showcases celebrating diverse beauty."
  },
  {
    id: "africa",
    region: "Sub-Saharan Africa",
    prevalenceRange: "Estimated 0.5% – 1.8%",
    culturalPerspective: "High visual contrast against rich melanin skin. In some rural regions, traditional healers were consulted before formal dermatology clinics were accessed.",
    advocacyHighlights: "Grassroots African Vitiligo organizations work to promote sun-safety awareness in equatorial sun, access to UPF clothing, and medical education.",
    communityInitiatives: "Fashion initiatives featuring models with vitiligo in Lagos, Nairobi, and Johannesburg, challenging post-colonial beauty standards."
  },
  {
    id: "europe",
    region: "Europe & UK",
    prevalenceRange: "Estimated 0.4% – 1.0%",
    culturalPerspective: "High access to specialized NHS and European phototherapy centers, alongside prominent psychodermatology clinics addressing mental well-being.",
    advocacyHighlights: "The Vitiligo Society UK and European academies have championed patient rights, funding for research into topical JAK inhibitors, and school empathy curricula.",
    communityInitiatives: "World Vitiligo Day (June 25) observed annually with parliamentary roundtables and patient empowerment workshops."
  },
  {
    id: "north-america",
    region: "North America (USA & Canada)",
    prevalenceRange: "Estimated 0.5% – 1.5%",
    culturalPerspective: "Significant consumer advocacy led by organizations like the Global Vitiligo Foundation (GVF) and Vitiligo Support International (VSI).",
    advocacyHighlights: "Breakthrough FDA approvals of molecular targeted topicals, widespread media campaigns, and high-visibility public figures celebrating their skin.",
    communityInitiatives: "Annual patient conferences, mentorship programs for teenagers, and insurance advocacy coalitions for phototherapy coverage."
  },
  {
    id: "south-america",
    region: "Latin America",
    prevalenceRange: "Estimated 0.5% – 1.2%",
    culturalPerspective: "A diverse spectrum of skin tones across mestizo, Afro-descendant, and indigenous populations, with increasing dermatological awareness.",
    advocacyHighlights: "Brazilian and Argentine dermatological societies have driven regional epidemiological research and public park awareness campaigns.",
    communityInitiatives: "Support groups in São Paulo and Buenos Aires fostering body neutrality and outdoor sun protection workshops."
  },
  {
    id: "australia",
    region: "Australia & Oceania",
    prevalenceRange: "Estimated 0.5% – 1.0%",
    culturalPerspective: "Australia experiences intense solar UV levels, making sun protection a primary everyday health priority for all residents, especially those with depigmentation.",
    advocacyHighlights: "Strong collaboration with the Australasian College of Dermatologists on broad-spectrum UV protection, skin cancer surveillance, and psychological support.",
    communityInitiatives: "Vitiligo Association of Australia providing peer mentorship, school action plans, and sun-safe recreation groups."
  }
];

export interface DifferentialItem {
  id: string;
  name: string;
  whatItMayLookLike: string;
  commonCharacteristics: string;
  howItDiffersFromVitiligo: string;
  whenToSeekEvaluation: string;
}

export const DIFFERENTIAL_COMPARISONS: DifferentialItem[] = [
  {
    id: "pityriasis-alba",
    name: "Pityriasis Alba",
    whatItMayLookLike: "Faint, slightly lighter (hypopigmented) patches with subtle, fine surface scale, most often seen on children's cheeks and arms.",
    commonCharacteristics: "Closely associated with atopic dermatitis (eczema) and dry skin; patches have ill-defined, blurry borders rather than stark white edges.",
    howItDiffersFromVitiligo: "Vitiligo lesions are completely depigmented (chalk-white) with crisp borders and no surface scaling. Pityriasis alba retains partial pigment and typically resolves with hydration and mild emollients.",
    whenToSeekEvaluation: "If patches don't improve with moisturizers, expand, or develop chalk-white porcelain centers."
  },
  {
    id: "tinea-versicolor",
    name: "Tinea Versicolor (Pityriasis Versicolor)",
    whatItMayLookLike: "Multiple small, oval patches that can be lighter (hypopigmented), pinkish, or light brown on the upper chest, back, and shoulders.",
    commonCharacteristics: "Caused by an overgrowth of harmless skin-surface yeast (Malassezia). May have very fine powdery scale when gently scraped.",
    howItDiffersFromVitiligo: "An infectious fungal overgrowth, not autoimmune. Responds promptly to topical or oral antifungal shampoos/creams, after which pigment gradually normalizes.",
    whenToSeekEvaluation: "Whenever spreading patches occur on the chest and back with mild itch, especially after humid weather or sweating."
  },
  {
    id: "post-inflammatory",
    name: "Post-Inflammatory Hypopigmentation",
    whatItMayLookLike: "Lighter areas appearing at the exact site of previous acne, burns, eczema, cuts, chemical irritation, or aggressive cosmetic peels.",
    commonCharacteristics: "Follows an identifiable history of prior skin injury or inflammation in that exact location.",
    howItDiffersFromVitiligo: "Represents injured or fatigued melanocytes that usually recover slowly over months to years; does not expand beyond the borders of the original injury.",
    whenToSeekEvaluation: "If the lighter areas continue to enlarge outward beyond the original scar or injury perimeter."
  },
  {
    id: "nevus-depigmentosus",
    name: "Nevus Depigmentosus",
    whatItMayLookLike: "A pale, localized birthmark-like macule or patch present since infancy or early childhood with stable, irregular serrated borders.",
    commonCharacteristics: "Remains constant in relative proportion to body growth over a person's entire lifetime; does not spread to distant sites.",
    howItDiffersFromVitiligo: "Hypopigmented rather than totally depigmented. Contains a normal number of melanocytes, but their melanin transfer is genetically reduced. Vitiligo begins later and can fluctuate.",
    whenToSeekEvaluation: "To confirm a stable congenital mark versus an early onset of segmental vitiligo."
  },
  {
    id: "scarring",
    name: "Traumatic Scarring / Atrophy",
    whatItMayLookLike: "Pale or shiny skin overlying an area of past surgical excision, deep thermal burn, or severe laceration.",
    commonCharacteristics: "Often features textural changes: firm (fibrotic), depressed (atrophic), or raised (hypertrophic) skin with loss of normal skin pore lines.",
    howItDiffersFromVitiligo: "Vitiligo skin has identical skin texture, skin folds, and softness as adjacent normal skin; it is simply devoid of pigment. Scars involve disrupted dermal collagen architecture.",
    whenToSeekEvaluation: "If skin around a surgical scar develops spreading chalk-white borders (suggesting Koebner-induced vitiligo)."
  }
];

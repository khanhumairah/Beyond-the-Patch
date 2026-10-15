import { VitiligoTypeDetail } from '../types';

export const VITILIGO_TYPES_DISCLAIMER = 
  "Only a qualified healthcare professional can diagnose vitiligo and determine its clinical pattern. Patterns may overlap or evolve over time.";

export const VITILIGO_TYPES: VitiligoTypeDetail[] = [
  {
    id: "generalized",
    name: "Generalized Vitiligo",
    category: "Non-Segmental",
    whatItMeans: "The most common clinical pattern of vitiligo, characterized by bilateral and often roughly symmetrical pigment loss across multiple regions of the body.",
    whereItAppears: "Commonly affects wrists, hands, elbows, knees, ankles, the perioral area (around the mouth), and the trunk.",
    howItMayLook: "Well-demarcated chalk-white macules and patches that mirror each other on both the left and right sides of the body.",
    howItMayProgress: "Tends to follow an unpredictable, relapsing-remitting course. Periods of stability can be punctuated by gradual expansion or new patch emergence, often influenced by physical friction or immune triggers.",
    howItIsDiagnosed: "Through visual clinical examination under ambient light and Wood's lamp (ultraviolet light), paired with clinical medical history to rule out post-inflammatory hypopigmentation.",
    importantNote: "Because it involves systemic autoimmune pathways, dermatologists may periodically screen for associated conditions like autoimmune thyroiditis (Hashimoto's).",
    distributionPattern: "Bilateral & Symmetrical"
  },
  {
    id: "acrofacial",
    name: "Acrofacial Vitiligo",
    category: "Non-Segmental",
    whatItMeans: "A specific variant of non-segmental vitiligo localized primarily to the distal extremities (acral sites) and the periorificial facial areas.",
    whereItAppears: "Fingertips, nail beds, hands, toes, wrists, and around the mouth, nose, and eyes.",
    howItMayLook: "Depigmented areas hugging the tips of digits ('gloves and socks' tendency) alongside circumoral or periorbital patches on the face.",
    howItMayProgress: "The facial patches frequently respond favorably to topicals and phototherapy due to rich follicular density, whereas acral (hands and feet) patches have fewer hair follicles and are classically more resistant to repigmentation.",
    howItIsDiagnosed: "Identified by its distinctive anatomical distribution on the extremities and facial orifices.",
    importantNote: "Sun protection and friction minimization on hands and feet are especially vital for this subtype.",
    distributionPattern: "Distal Extremities & Face"
  },
  {
    id: "mucosal",
    name: "Mucosal Vitiligo",
    category: "Non-Segmental",
    whatItMeans: "Pigment loss specifically involving mucosal membranes, either isolated or occurring as part of generalized vitiligo.",
    whereItAppears: "Lips (vermilion border), oral mucosa, genital regions, and peri-anal tissue.",
    howItMayLook: "Sharply demarcated porcelain-white or ivory areas within mucosal or mucocutaneous junction borders.",
    howItMayProgress: "Can remain localized to a single mucous membrane or herald the subsequent emergence of generalized cutaneous patches elsewhere on the body.",
    howItIsDiagnosed: "Careful dermatological and oral examination. Must be clinically differentiated from mucosal lichen planus, leukoplakia, or lichen sclerosus.",
    importantNote: "Mucosal tissue is sensitive; non-steroidal topical calcineurin inhibitors are frequently chosen over high-potency corticosteroids in delicate mucosal areas.",
    distributionPattern: "Mucous Membranes & Borders"
  },
  {
    id: "universal",
    name: "Universal Vitiligo",
    category: "Non-Segmental",
    whatItMeans: "An extensive form of vitiligo in which pigment loss covers the overwhelming majority of the body surface area (typically defined as greater than 80% to 90%).",
    whereItAppears: "Virtually the entire skin envelope, frequently including extensive scalp hair and body hair depigmentation.",
    howItMayLook: "The vast majority of the skin takes on a uniform porcelain-white or fair tone, sometimes leaving small islands of original pigment on sun-protected areas.",
    howItMayProgress: "Usually represents the advanced long-term evolution of generalized non-segmental vitiligo over decades.",
    howItIsDiagnosed: "Clinical assessment of total body surface area (TBSA) involvement and clinical history of progression.",
    importantNote: "For individuals with universal vitiligo, repigmentation is rarely realistic or desirable; management focuses on comprehensive lifelong sun safety or elective uniform depigmentation under strict medical oversight.",
    distributionPattern: ">80–90% Body Surface Area"
  },
  {
    id: "segmental",
    name: "Segmental Vitiligo",
    category: "Segmental",
    whatItMeans: "A distinct clinical form that typically develops in a unilateral, localized pattern corresponding roughly to a dermatome or neural segment.",
    whereItAppears: "Usually one side of the face, neck, trunk, or a single limb; does not cross the midline of the body.",
    howItMayLook: "Clustered macules on one half of the body, often with early involvement of local hair follicles (follicular leukotrichia).",
    howItMayProgress: "Characteristically begins in childhood or adolescence, progresses rapidly over 6 to 24 months, and then reaches long-term stability without spontaneous spreading.",
    howItIsDiagnosed: "Recognized by its unilateral distribution, early age of onset, and rapid stabilization.",
    importantNote: "Because segmental vitiligo quickly becomes stable, once inactive it can be an excellent candidate for specialized surgical melanocyte grafting procedures in qualified candidates.",
    distributionPattern: "Unilateral / Dermatomal"
  },
  {
    id: "mixed",
    name: "Mixed Vitiligo",
    category: "Mixed",
    whatItMeans: "A rare presentation where segmental vitiligo and generalized non-segmental vitiligo occur in the same individual at different phases.",
    whereItAppears: "Begins as a unilateral segmental patch, and months or years later, bilateral symmetrical patches develop on other areas of the body.",
    howItMayLook: "A well-established unilateral focal segment alongside newly emerging symmetrical patches on wrists, knees, or face.",
    howItMayProgress: "The segmental portion remains stable while the non-segmental patches may follow the typical fluctuating course of generalized vitiligo.",
    howItIsDiagnosed: "Requires longitudinal patient tracking by a dermatologist noting the two distinct chronologies and spatial distributions.",
    importantNote: "Highlights the dual mechanisms involving localized somatic neuro-immune events and systemic autoimmune predispositions.",
    distributionPattern: "Unilateral + Bilateral Symmetrical"
  },
  {
    id: "focal",
    name: "Focal Vitiligo",
    category: "Descriptive / Less Common",
    whatItMeans: "One or a few isolated macules or small patches in a single anatomical area without a dermatomal or bilateral distribution.",
    whereItAppears: "Any isolated spot, such as a single elbow, a small patch on the neck, or a cheek.",
    howItMayLook: "A quiet, small area of depigmentation without active inflammatory halo or bilateral mirroring.",
    howItMayProgress: "May remain isolated for many years (focal vitiligo) or may occasionally represent the very early initial presentation of evolving generalized vitiligo.",
    howItIsDiagnosed: "Clinical observation over 1–2 years is often necessary before concluding it will remain solitary.",
    importantNote: "Classification is provisional; dermatologists often observe focal patches over time before confirming whether it remains solitary.",
    distributionPattern: "Isolated Single Area"
  },
  {
    id: "trichrome",
    name: "Trichrome Vitiligo",
    category: "Descriptive / Less Common",
    whatItMeans: "A descriptive clinical pattern featuring three distinct color zones: normal skin, an intermediate hypopigmented (partially lighter) zone, and a central chalk-white completely depigmented zone.",
    whereItAppears: "At the expanding outer perimeter of active vitiligo patches.",
    howItMayLook: "A stepped, three-tone gradation of skin color resembling concentric contour lines or a target pattern.",
    howItMayProgress: "Often serves as a clinical marker of active disease progression, indicating ongoing autoimmune destruction of melanocytes at the patch margins.",
    howItIsDiagnosed: "Direct visual inspection, enhanced with dermoscopy and Wood's lamp to highlight the intermediate hypopigmented transitional band.",
    importantNote: "The presence of trichrome borders often prompts dermatologists to initiate active stabilization therapies to halt further spread.",
    distributionPattern: "Three-Zone Stepped Gradation"
  },
  {
    id: "confetti",
    name: "Confetti-Like (Punctate) Vitiligo",
    category: "Descriptive / Less Common",
    whatItMeans: "Dozens of tiny (1–5 mm), chalk-white, punctate macules scattered like confetti around the edges of larger lesions or on distant skin.",
    whereItAppears: "Frequently observed near expanding patches, over bony prominences, or areas of repeated mechanical microtrauma.",
    howItMayLook: "Tiny stippled drops or confetti specks of complete pigment loss.",
    howItMayProgress: "Strong clinical indicator of rapidly active or unstabilized vitiligo requiring prompt dermatological attention.",
    howItIsDiagnosed: "Identified clinically by the characteristic size and high-density clustering of miniature depigmented lesions.",
    importantNote: "Dermatologists consider confetti depigmentation a primary sign of disease activity when deciding on systemic stabilization.",
    distributionPattern: "Punctate Tiny Macules"
  }
];

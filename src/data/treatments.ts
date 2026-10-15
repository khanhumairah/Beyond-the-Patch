export interface TreatmentModalItem {
  id: string;
  name: string;
  category: 'Topical Therapies' | 'Light & Laser' | 'Surgical Modalities' | 'Systemic & Emerging' | 'Uniform Depigmentation';
  whatIsIt: string;
  howDoesItWork: string;
  whoMayConsiderIt: string;
  whatAreTheLimitations: string;
  whatShouldIAsk: string[];
  evidenceLevel: 'First-Line Established' | 'Standard Clinical Option' | 'Specialized / Strict Criteria' | 'Emerging / Clinical Trials';
}

export const TREATMENTS_DATA: TreatmentModalItem[] = [
  {
    id: "topical-corticosteroids",
    name: "Topical Corticosteroids (TCS)",
    category: "Topical Therapies",
    whatIsIt: "Anti-inflammatory prescription creams or ointments (often medium to high potency, such as clobetasol, mometasone, or betamethasone) applied directly to vitiligo patches.",
    howDoesItWork: "Suppresses local T-cell immune activity and cytokine release around hair follicles and epidermis, giving surviving melanocytes an opportunity to recover and produce melanin.",
    whoMayConsiderIt: "Often considered as a first-line treatment for localized, newly active patches or early vitiligo, especially on the body and limbs under physician supervision.",
    whatAreTheLimitations: "Prolonged uninterrupted use can cause cutaneous adverse effects including skin thinning (atrophy), telangiectasias (visible spider veins), striae (stretch marks), or folliculitis. Dermatologists often cycle usage (e.g. 2 weeks on, 1–2 weeks off). Not typically recommended long-term for delicate facial or intertriginous skin.",
    whatShouldIAsk: [
      "What is the recommended application schedule and cycle length to avoid skin thinning?",
      "Can I use this potency safely on facial or sensitive areas, or should I use an alternative?",
      "How long should I try this before we evaluate whether it is stabilizing my patches?"
    ],
    evidenceLevel: "First-Line Established"
  },
  {
    id: "calcineurin-inhibitors",
    name: "Topical Calcineurin Inhibitors (TCIs)",
    category: "Topical Therapies",
    whatIsIt: "Non-steroidal prescription topical ointments/creams such as tacrolimus (0.03% or 0.1%) and pimecrolimus (1.0%).",
    howDoesItWork: "Inhibits calcineurin, an intracellular phosphatase required for T-lymphocyte activation, thereby reducing autoimmune inflammation without interfering with collagen synthesis.",
    whoMayConsiderIt: "Frequently prescribed for sensitive anatomical sites such as the face, eyelids, neck, and genital/mucosal regions where corticosteroid skin thinning must be avoided.",
    whatAreTheLimitations: "May cause temporary local burning, stinging, or warmth upon application during the first 1–2 weeks. Does not cause skin atrophy, but can take 3 to 6 months of twice-daily consistency to determine response.",
    whatShouldIAsk: [
      "Is tacrolimus appropriate for my facial or sensitive patches?",
      "How can I manage the mild stinging sensation during the first few days?",
      "Can this be safely combined with gentle natural sun exposure or scheduled phototherapy?"
    ],
    evidenceLevel: "First-Line Established"
  },
  {
    id: "topical-jak-inhibitors",
    name: "Topical JAK Inhibitors (e.g., Ruxolitinib)",
    category: "Topical Therapies",
    whatIsIt: "A modern class of targeted molecular topical treatments (such as ruxolitinib cream) specifically approved in various countries for non-segmental vitiligo in patients meeting specific age criteria.",
    howDoesItWork: "Targets the Janus kinase (JAK1/JAK2) signaling pathway downstream of interferon-gamma (IFN-γ), specifically interrupting the biochemical communication loop that directs cytotoxic CD8+ T cells to destroy melanocytes.",
    whoMayConsiderIt: "Individuals aged 12 and older with non-segmental vitiligo with facial or body involvement under the clinical management of a dermatologist.",
    whatAreTheLimitations: "Requires dedicated twice-daily application over many months (often 6 to 12 months or longer for optimal repigmentation). Common local reactions include mild acne or erythema at application sites. High cost and regulatory availability vary internationally.",
    whatShouldIAsk: [
      "Am I a candidate for topical JAK inhibitor therapy based on my age and patch distribution?",
      "What realistic milestones should we expect at 3, 6, and 12 months?",
      "What happens if we pause or discontinue therapy once repigmentation occurs?"
    ],
    evidenceLevel: "First-Line Established"
  },
  {
    id: "phototherapy-nb-uvb",
    name: "Narrowband UVB Phototherapy (NB-UVB)",
    category: "Light & Laser",
    whatIsIt: "Medically controlled exposure to a specific wavelength of ultraviolet light (311–312 nm) administered inside a specialized medical light cabin or handheld unit 2 to 3 times weekly.",
    howDoesItWork: "Exerts local immunosuppressive effects on skin T cells while simultaneously stimulating stem cell melanocytes residing inside hair follicle sheaths to proliferate, migrate outwards, and produce melanin.",
    whoMayConsiderIt: "Individuals with widespread, generalized, or rapidly progressing vitiligo affecting more than 5–10% of their body surface area, or localized lesions unresponsive to topicals alone.",
    whatAreTheLimitations: "Requires a substantial time commitment (clinic visits 2–3 times per week for 6 to 18 months). Mild erythema (sunburn-like redness) or xerosis (dry skin) can occur. Response varies by anatomical location: the face and neck repigment most readily, while hands, wrists, and feet are notoriously recalcitrant due to scarce hair follicles.",
    whatShouldIAsk: [
      "Is whole-body or targeted light therapy more appropriate for my specific distribution?",
      "What is the protocol for titrating the dose gradually to prevent burns?",
      "What is the recommended maximum duration of continuous phototherapy?"
    ],
    evidenceLevel: "First-Line Established"
  },
  {
    id: "excimer-laser",
    name: "Targeted Excimer Laser / Light (308 nm)",
    category: "Light & Laser",
    whatIsIt: "A targeted device delivering concentrated 308 nm monochromatic UVB light directly to localized vitiligo patches, sparing surrounding uninvolved pigmented skin.",
    howDoesItWork: "Delivers higher-energy therapeutic UV photons precisely to focal lesions, inducing local T-cell apoptosis and triggering follicular melanocyte activation without exposing healthy skin to UV radiation.",
    whoMayConsiderIt: "Patients with focal vitiligo, segmental vitiligo, or stubborn localized patches on the face or body comprising limited surface area.",
    whatAreTheLimitations: "Impractical for widespread or generalized disease. Equipment is specialized and may involve higher per-session out-of-pocket expenses. Mild blistering or hyperpigmentation of adjacent margins can happen if the beam overlaps.",
    whatShouldIAsk: [
      "Can targeted excimer laser accelerate repigmentation on my focal patches?",
      "How many total sessions are typically needed before evaluating progress?",
      "Will the surrounding normal skin develop a temporary darker border?"
    ],
    evidenceLevel: "Standard Clinical Option"
  },
  {
    id: "surgical-grafting",
    name: "Surgical Melanocyte Grafting (Blister, Punch & MKTP)",
    category: "Surgical Modalities",
    whatIsIt: "Surgical procedures that transfer healthy, pigment-producing melanocytes from a donor site (like the upper thigh or buttock) into depigmented patches. Techniques include suction blister epidermal grafting, mini-punch grafting, and non-cultured melanocyte-keratinocyte transplant procedure (MKTP).",
    howDoesItWork: "Directly re-seeds functional melanocytes into an area where native pigment cells have been lost, followed by phototherapy to stimulate cellular integration and melanin synthesis.",
    whoMayConsiderIt: "Strictly reserved for patients with strictly stable vitiligo (no new patches and no patch expansion for at least 12 to 24 months, with no Koebner phenomenon). Excellent for stable segmental vitiligo.",
    whatAreTheLimitations: "Completely contraindicated during active vitiligo, as the surgical trauma can trigger new vitiligo at both the donor and recipient sites (Koebner effect). Risk of cobblestoning, color mismatch, textural irregularities, or partial graft failure.",
    whatShouldIAsk: [
      "Has my vitiligo demonstrated the strict clinical stability criteria needed for surgical consideration?",
      "Which grafting technique (suction blister vs. cellular suspension/MKTP) is best suited for my patch location?",
      "What are the realistic risks of scarring or color mismatch?"
    ],
    evidenceLevel: "Specialized / Strict Criteria"
  },
  {
    id: "systemic-jak-emerging",
    name: "Oral JAK Inhibitors & Biologics (Under Investigation)",
    category: "Systemic & Emerging",
    whatIsIt: "Oral targeted small molecules (e.g., baricitinib, upadacitinib, ritlecitinib) and monoclonal antibodies targeting cytokines like interleukin-15 (anti-IL-15) currently undergoing clinical trial evaluation.",
    howDoesItWork: "Systemically interrupts the immune receptor pathways responsible for memory T-cell residency in the skin, aiming to clear auto-reactive cells and permit lasting repigmentation.",
    whoMayConsiderIt: "Patients with rapidly progressive, severe generalized vitiligo participating in approved clinical trials or under advanced academic dermatology centers.",
    whatAreTheLimitations: "Systemic medications carry systemic consideration risks (infections, laboratory monitoring requirements). Most oral options are still in investigative phases or restricted indications; long-term durability after cessation remains under active study.",
    whatShouldIAsk: [
      "Are there active clinical trials for systemic therapies that I qualify for?",
      "What are the known safety profiles and routine monitoring tests required?",
      "How do newer systemic approaches compare to current phototherapy standards?"
    ],
    evidenceLevel: "Emerging / Clinical Trials"
  },
  {
    id: "monobenzone-depigmentation",
    name: "Depigmentation Therapy (Monobenzone / MBEH)",
    category: "Uniform Depigmentation",
    whatIsIt: "A permanent chemical depigmenting topical agent (monobenzone ether of hydroquinone) applied to remaining normally pigmented areas of skin.",
    howDoesItWork: "Selectively destroys remaining melanocytes, leading to complete and irreversible loss of all remaining skin pigment to create a uniform, singular skin tone.",
    whoMayConsiderIt: "Only adults with extensive, universal vitiligo (typically covering over 80–90% of the body) where attempts at repigmentation have failed or are physically and psychologically burdensome.",
    whatAreTheLimitations: "The process is permanent and irreversible. Once depigmented, the entire skin envelope has zero baseline UV protection and remains permanently vulnerable to severe sunburns, requiring strict lifelong sun avoidance and protective measures. Requires extensive psychological counseling prior to initiation.",
    whatShouldIAsk: [
      "Have all conservative repigmentation options been thoroughly evaluated?",
      "What will my lifelong sun protection and lifestyle routine look like after full depigmentation?",
      "Can we discuss the psychological counseling recommended before starting this irreversible process?"
    ],
    evidenceLevel: "Specialized / Strict Criteria"
  }
];

export const DERM_VISIT_CHECKLIST_QUESTIONS = [
  "When did you first notice the very first patch of pigment loss?",
  "Have any new patches appeared in the past 6 to 12 months?",
  "Have existing patches changed size, shape, or borders?",
  "Do any patches exhibit trichrome (three-tone) or confetti-like borders?",
  "Do patches ever itch, tingle, or feel inflamed before or during color loss?",
  "Do new patches form in areas of cuts, scratches, or friction (e.g. waistbands, watchbands)?",
  "Has the hair inside any patch turned white or silver (poliosis)?",
  "Does anyone in your biological family have vitiligo, thyroid disorders, or other autoimmune conditions?",
  "What topical creams, home remedies, or supplements have you tried, and for how long?",
  "How significantly is your vitiligo affecting your emotional well-being, work, or social life?"
];

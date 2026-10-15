import { FactQuestion } from '../types';

export const FACT_QUESTIONS: FactQuestion[] = [
  {
    id: 1,
    statement: "Vitiligo is contagious.",
    isFact: false,
    explanation: "Vitiligo is not contagious at all. It is an autoimmune condition, not an infection caused by bacteria, viruses, or fungi. You cannot catch it from physical touch, shared items, swimming pools, or proximity.",
    detailedContext: "Because vitiligo causes visible pigment loss, historical misunderstandings often confused it with infectious skin conditions like leprosy. In reality, it involves the body's own immune system interacting with melanocytes.",
    category: "Transmission & Safety"
  },
  {
    id: 2,
    statement: "Vitiligo always spreads continuously across the entire body.",
    isFact: false,
    explanation: "Vitiligo progression is unpredictable and varies greatly between individuals. Some people experience stable patches that remain unchanged for decades, while others experience gradual or episodic changes.",
    detailedContext: "Segmental vitiligo, for instance, typically stabilizes after 1 to 2 years. In non-segmental vitiligo, active phases can be followed by prolonged periods of stability or spontaneous partial repigmentation.",
    category: "Progression"
  },
  {
    id: 3,
    statement: "Stress is the sole cause of vitiligo.",
    isFact: false,
    explanation: "Stress does not single-handedly cause vitiligo. Vitiligo arises from a multifactorial interplay of genetic susceptibility, autoimmune pathways, oxidative stress within melanocytes, and environmental triggers.",
    detailedContext: "While physical trauma to the skin (Koebner phenomenon) or severe psychological stress may act as triggers in genetically predisposed individuals, neither acts as a solitary root cause.",
    category: "Causes & Triggers"
  },
  {
    id: 4,
    statement: "People with vitiligo can never go out in the sun.",
    isFact: false,
    explanation: "People with vitiligo can safely enjoy the outdoors with appropriate sun protection. Because depigmented skin lacks protective melanin, it sunburns much more easily and requires broad-spectrum SPF and protective clothing.",
    detailedContext: "Careful, medically supervised ultraviolet light exposure (such as narrowband UVB phototherapy) is actually one of the primary therapeutic modalities used by dermatologists to stimulate repigmentation.",
    category: "Sunlight & Lifestyle"
  },
  {
    id: 5,
    statement: "Vitiligo can affect hair color in the involved patches.",
    isFact: true,
    explanation: "Depigmentation can extend to hair follicles (a phenomenon known as poliosis or leukotrichia), causing hair on the scalp, eyebrows, eyelashes, or body hair within affected patches to turn white or silver.",
    detailedContext: "When hair in a patch turns white, it indicates that follicular melanocyte reservoirs are also depigmented, which is why dermatologists assess hair color when evaluating potential treatment responsiveness.",
    category: "Biology & Manifestations"
  },
  {
    id: 6,
    statement: "Everyone with vitiligo develops the exact same pattern and distribution.",
    isFact: false,
    explanation: "Vitiligo presents in distinct clinical patterns. Non-segmental vitiligo usually appears symmetrically on both sides of the body, whereas segmental vitiligo follows unilateral dermatomal or segment distributions.",
    detailedContext: "There are also focal, mucosal, acrofacial (hands and face), and universal presentations. No two individuals with vitiligo share the exact same pattern, rate of change, or response to therapies.",
    category: "Clinical Types"
  },
  {
    id: 7,
    statement: "Vitiligo can affect psychological confidence and emotional well-being.",
    isFact: true,
    explanation: "Living with visible skin differences can significantly impact self-esteem, social confidence, and mental health due to public staring, misconceptions, and cultural stigmas.",
    detailedContext: "Dermatological guidelines increasingly emphasize holistic care that pairs medical management with psychological support, peer communities, and counseling when helpful.",
    category: "Psychological Impact"
  },
  {
    id: 8,
    statement: "There is one universal diet that permanently cures vitiligo.",
    isFact: false,
    explanation: "There is currently no proven diet, supplement, or food regimen that cures vitiligo. Balanced nutrition supports overall immune and metabolic health, but cannot replace targeted dermatological care.",
    detailedContext: "No peer-reviewed clinical trial has demonstrated that eliminating or adding specific foods permanently reverses melanocyte loss. Claims that turmeric, celery juice, or strict elimination diets 'cure' vitiligo are unsupported myths.",
    category: "Nutrition & Myths"
  },
  {
    id: 9,
    statement: "Vitiligo can occur in people of any natural skin tone.",
    isFact: true,
    explanation: "Vitiligo affects individuals across all ethnicities and Fitzpatrick skin types equally, with an estimated global prevalence of roughly 0.5% to 2% of the world's population.",
    detailedContext: "While the condition occurs at similar rates globally, the visual contrast between pigmented and depigmented skin is naturally more pronounced in people with richer, deeper melanin tones.",
    category: "Epidemiology"
  },
  {
    id: 10,
    statement: "A dermatologist can help determine the specific type of vitiligo and guide evidence-based treatment.",
    isFact: true,
    explanation: "A board-certified dermatologist uses clinical examination, Wood's lamp evaluation, and personal history to distinguish vitiligo from other lighter skin conditions and design a tailored management plan.",
    detailedContext: "Because early intervention in active vitiligo can help stabilize spreading and explore topical or phototherapy options, seeking professional clinical evaluation is the most reliable first step.",
    category: "Diagnosis & Care"
  }
];

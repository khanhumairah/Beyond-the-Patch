export interface ThingSomeoneSays {
  id: string;
  statement: string;
  context: string;
  howItMightFeel: string;
  responseOptions: {
    label: string;
    text: string;
  }[];
  perspectiveTip: string;
}

export const THINGS_PEOPLE_SAY: ThingSomeoneSays[] = [
  {
    id: "contagious",
    statement: "Is that contagious? Can I catch it from you?",
    context: "Asked by a stranger, classmate, or person in a gym/swimming pool.",
    howItMightFeel: "It can sting, feel alienating, or make you feel like people are avoiding physical contact.",
    responseOptions: [
      {
        label: "Quick & Direct",
        text: "No, not at all! It’s called vitiligo — it’s just my immune system taking away skin pigment. You couldn't catch it even if you tried."
      },
      {
        label: "Lighthearted",
        text: "Completely harmless! Just my skin showing off its own natural artwork. Zero chance of catching it."
      },
      {
        label: "Short Boundary",
        text: "It’s a benign skin condition called vitiligo. It's completely non-contagious."
      }
    ],
    perspectiveTip: "Curiosity often stems from simple lack of awareness rather than hostility. A relaxed, calm tone disarms tension immediately."
  },
  {
    id: "spill",
    statement: "Did you spill bleach or paint on your skin?",
    context: "Asked by a coworker, friend, or curious bystander noticing a patch on hands or arms.",
    howItMightFeel: "Can feel jarring or reduce something personal into a clumsy accident joke.",
    responseOptions: [
      {
        label: "Educational",
        text: "It does look like that at first glance! But it's actually vitiligo. My skin simply doesn't produce melanin in those spots."
      },
      {
        label: "Humorous",
        text: "Nope, no paint spills here — just custom factory paintwork from my own immune system!"
      },
      {
        label: "Brief",
        text: "That's just my natural skin pigmentation."
      }
    ],
    perspectiveTip: "People grasp visual analogies quickly. A simple 'it's just where my skin doesn't make pigment' usually resolves their curiosity in seconds."
  },
  {
    id: "cure",
    statement: "Can you cure it? Have you tried drinking celery juice or rubbing turmeric?",
    context: "Offered by well-meaning relatives, acquaintances, or social media commenters.",
    howItMightFeel: "Exhausting. It can feel like uninvited unsolicited medical advice that implies you haven't researched your own condition.",
    responseOptions: [
      {
        label: "Gracious & Clear",
        text: "Thanks for thinking of me! Vitiligo is an autoimmune condition, so there isn't a simple food or home cure. I work closely with my dermatologist on real medical care."
      },
      {
        label: "Firm & Friendly",
        text: "I appreciate the thought, but medical science doesn't work that way. My skin is healthy and I'm very comfortable with where things stand."
      },
      {
        label: "Topic-Changer",
        text: "My dermatologist takes great care of that, thanks! How was your weekend, by the way?"
      }
    ],
    perspectiveTip: "You do not owe anyone a detailed defense of your medical history or diet. A polite acknowledgment followed by a topic change is completely valid."
  },
  {
    id: "pain",
    statement: "Does it hurt or burn?",
    context: "Asked by children or empathetic friends who see the contrasting borders.",
    howItMightFeel: "Gentle curiosity that often comes from genuine care or worry for your comfort.",
    responseOptions: [
      {
        label: "Reassuring",
        text: "Not at all! It doesn't hurt or itch. The skin just has less pigment, so it only burns if I forget to put sunscreen on in strong sun."
      },
      {
        label: "For Kids",
        text: "Nope, it feels just like your skin does! Just two different colors living on the same body."
      }
    ],
    perspectiveTip: "Reassuring people that vitiligo is pain-free relieves their anxiety and normalizes the visual difference."
  },
  {
    id: "why-skin",
    statement: "Why is your skin like that? What happened to you?",
    context: "Asked bluntly by a child or directly by someone unfamiliar with skin variations.",
    howItMightFeel: "Can trigger feelings of being singled out or placed under a microscope.",
    responseOptions: [
      {
        label: "Simple Explanation",
        text: "It's called vitiligo. Some cells in my body decided to stop making color, so my skin has lighter patches. We all have different skin!"
      },
      {
        label: "Confident & Normalizing",
        text: "It's just how my body makes melanin. Some people have freckles or birthmarks; I have patches."
      }
    ],
    perspectiveTip: "Children in particular respond wonderfully to matter-of-fact comparisons with freckles, hair color, or eye color."
  }
];

export interface LifestyleGuideSection {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  tips: {
    heading: string;
    details: string;
  }[];
  expertQuote?: {
    text: string;
    author: string;
  };
}

export const LIFESTYLE_GUIDES: LifestyleGuideSection[] = [
  {
    id: "skincare-daily",
    category: "Skincare",
    title: "Daily Skincare & Sun Savvy",
    subtitle: "Protecting depigmented skin without living in fear of daylight.",
    tips: [
      {
        heading: "Prioritize Broad-Spectrum SPF 50+",
        details: "Because depigmented patches lack melanin (nature's natural UV shield), they are vulnerable to rapid solar erythema (sunburn). Apply mineral or broad-spectrum sunscreen 20 minutes before outdoors, reapplying every 2 hours."
      },
      {
        heading: "Support Your Skin Barrier",
        details: "Use fragrance-free ceramide creams to keep the stratum corneum hydrated. Intact, supple skin is less susceptible to micro-abrasions that can spark the Koebner phenomenon."
      },
      {
        heading: "Mind Friction Points (Koebner Prevention)",
        details: "Repeated mechanical friction from tight bra bands, stiff collars, tight watchbands, or footwear can trigger new vitiligo patches. Choose softer seamless garments whenever possible."
      }
    ],
    expertQuote: {
      text: "Sun protection isn't about avoiding life or hiding inside. It’s about giving your skin the shield that melanin normally provides so you can live freely.",
      author: "Dr. Elena Rostova, Board-Certified Dermatologist"
    }
  },
  {
    id: "makeup-camouflage",
    category: "Makeup & Camouflage",
    title: "Makeup as a Choice, Not an Obligation",
    subtitle: "From high-coverage camouflage techniques to the freedom of bare skin.",
    tips: [
      {
        heading: "Color Correction Fundamentals",
        details: "Because vitiligo patches lack warm undertones, standard foundation alone can look ashy. Applying a peach, coral, or warm corrector underneath neutralizes the contrast before foundation."
      },
      {
        heading: "Long-Wearing Body Camouflage",
        details: "Waterproof medical camouflage foundations set with fine micronized fixing powders resist sweat, clothing rub-off, and brief water immersion."
      },
      {
        heading: "DHA Self-Tanning Stains",
        details: "Dihydroxyacetone (DHA) creates a temporary brown stain on top-layer keratinocytes that doesn't depend on melanocytes. A soft makeup brush can blend patch edges for 3–5 days of subtle evening out."
      },
      {
        heading: "The Power of Leaving It Bare",
        details: "Many people find that wearing makeup for special occasions while leaving patches natural in everyday life brings the greatest mental peace and confidence."
      }
    ]
  },
  {
    id: "confidence-mindset",
    category: "Mindset & Confidence",
    title: "Navigating Stares & Reframing Visibility",
    subtitle: "Practical psychological strategies for social ease and body acceptance.",
    tips: [
      {
        heading: "The 'Curiosity vs. Judgment' Mindset",
        details: "Remind yourself that 95% of stares are simply visual curiosity (the human eye naturally tracks contrast), not judgment or disgust. They are wondering what it is, not thinking less of you."
      },
      {
        heading: "The Two-Second Smile",
        details: "If you catch someone staring, offer a calm, friendly half-smile or nod. It immediately transforms an awkward standoff into a human connection and usually makes them look away politely."
      },
      {
        heading: "Curating Your Mental Ingroup",
        details: "Follow creators, athletes, and models with vitiligo. Seeing your skin type celebrated in art, high fashion, and everyday joyful living recalibrates your internal standard of normal beauty."
      }
    ]
  },
  {
    id: "relationships-dating",
    category: "Relationships & Dating",
    title: "Intimacy, Dating, and Opening Up",
    subtitle: "How to talk about vitiligo with partners and prospective companions.",
    tips: [
      {
        heading: "Own the Narrative Early, Casually",
        details: "Mentioning it naturally on a second or third date ('By the way, my skin has vitiligo patches — just an autoimmune thing') removes any awkward build-up and sets a confident, relaxed precedent."
      },
      {
        heading: "Partners Take Their Cue from You",
        details: "If you treat your patches as a casual, neutral biological fact, your partner will almost always mirror that energy and see it as just another unique feature of who you are."
      },
      {
        heading: "Intimacy & Vulnerability",
        details: "Genital or torso patches can cause intimacy anxieties. Clear, honest communication before intimacy helps your partner understand it is completely non-contagious and painless."
      }
    ]
  },
  {
    id: "travel-sun",
    category: "Travel & Leisure",
    title: "Beaches, Flights, and Sunny Destinations",
    subtitle: "Enjoying vacations, swimming pools, and active exploration safely.",
    tips: [
      {
        heading: "UPF 50+ Swimwear & Rashguards",
        details: "Stylish long-sleeve rashguards and wide-brimmed hats provide effortless all-day sun shielding at beaches and pools without constant sunscreen reapplication."
      },
      {
        heading: "Travel Pack Your Prescription Topicals",
        details: "Always carry topical medications in original labeled containers in your carry-on luggage with a copy of your dermatologist's prescription letter."
      },
      {
        heading: "Rinse After Chlorine & Saltwater",
        details: "Chlorine and ocean salt can dry delicate skin; rinse with fresh water and reapply a gentle barrier moisturizer to keep the skin supple."
      }
    ]
  }
];

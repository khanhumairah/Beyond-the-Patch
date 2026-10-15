import { CommunityStory, InterviewProfile } from '../types';

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: "story-maya",
    authorAlias: "Maya K.",
    ageRange: "28–32",
    location: "London, UK",
    yearNoticed: "Age 14 (high school)",
    title: "My hands used to be the first thing I noticed. Now they're just my hands.",
    experience: "I first noticed a nickel-sized white spot over my right knuckle during summer term. Within six months, both hands had symmetrical patches. For four years, I wore long sleeves even in scorching July heat and tucked my hands into coat pockets whenever anyone looked my way. Meeting people was an internal panic attack. In university, I finally stopped hiding them when an art classmate asked if they could draw my hands because the pattern looked like marble veins. That single interaction cracked the cage open.",
    biggestMisconception: "That I must constantly be looking for a miracle cure or grieving my skin. People assume anyone with vitiligo is perpetually unhappy with how they look.",
    wishPeopleKnew: "Skin is a living tapestry, not an immutable paint job. Having two colors on your hands doesn't make you broken; it just makes you distinct.",
    whereTheyAreToday: "I work as an architectural designer and regularly present client pitches with zero camouflage makeup. My hands are my working tools, and I love them as they are."
  },
  {
    id: "story-tariq",
    authorAlias: "Tariq A.",
    ageRange: "35–40",
    location: "Cairo & Dubai",
    yearNoticed: "Age 22 (university finals)",
    title: "Learning that strength isn't having flawless skin — it's having peace with yourself.",
    experience: "In my culture, clear skin was traditionally tied to marriage prospects and health status. When patches appeared across my jawline and eyelids during my final engineering exams, my extended family went into emergency mode. We visited herbalists, drank bitter concoctions, and tried bizarre remedies before finally seeing an evidence-based dermatologist. The turning point was realizing that my anxiety about what others thought was doing far more damage to my health than the actual pigment loss ever could.",
    biggestMisconception: "That it was caused by bad karma, a curse, or drinking milk after eating grilled fish.",
    wishPeopleKnew: "Vitiligo is an autoimmune reaction, nothing more and nothing less. It holds zero power over your character, intellect, or ability to build a beautiful family.",
    whereTheyAreToday: "Happily married with two daughters, running a renewable energy consultancy, and mentoring newly diagnosed young men across the MENA region."
  },
  {
    id: "story-ananya",
    authorAlias: "Ananya R.",
    ageRange: "23–27",
    location: "Bengaluru, India",
    yearNoticed: "Age 9",
    title: "Redefining beauty on my own terms in a world obsessed with uniform tone.",
    experience: "Growing up in South India with deep brown skin, the contrast of vitiligo was stark. Relatives whispered at weddings, asking my mother what had gone wrong. For years I tried every possible cream, laser, and phototherapy session. While some facial areas repigmented, my knees and elbows stayed chalk white. In college, I decided my happiness couldn't be conditional on clinical repigmentation percentages. I took up classical Bharatanatyam dance and refused to apply body foundation for performances.",
    biggestMisconception: "That vitiligo is leprosy (leukoderma myths still linger in rural areas) or that it is contagious.",
    wishPeopleKnew: "Confidence is not the absence of difference; it's the refusal to let difference diminish your presence in a room.",
    whereTheyAreToday: "A software product designer and passionate dancer. I treat my patches as part of my personal story and cultural celebration."
  },
  {
    id: "story-marcus",
    authorAlias: "Marcus B.",
    ageRange: "40–45",
    location: "Chicago, USA",
    yearNoticed: "Age 31",
    title: "Developing vitiligo in adulthood taught me empathy I never had before.",
    experience: "I was an active marathoner when patches showed up on my shins and wrists. Initially, I thought it was sun bleaching or friction from running gear. The diagnosis of generalized vitiligo surprised me. As a Black man, the contrast was immediately visible. What surprised me most was how much it softened my perspective on other people's unseen struggles. It made me slow down, listen to my body, and connect with people on a far deeper level.",
    biggestMisconception: "That developing it as an adult means your health is collapsing. In reality, with standard thyroid checks and good dermatological care, my overall vitality is great.",
    wishPeopleKnew: "You can be an athlete, an executive, or a parent with vitiligo and not miss a single beat of an active, vibrant life.",
    whereTheyAreToday: "I just completed my sixth Boston Marathon wearing UPF sun-sleeves, feeling healthier and more grounded than in my twenties."
  }
];

export const ONE_MINUTE_INTERVIEWS: InterviewProfile[] = [
  {
    id: "interview-derm",
    name: "Dr. Alistair Vance, MD, FAAD",
    role: "Clinical Professor of Dermatology & Autoimmune Skin Disorders",
    titleRole: "Dermatologist",
    quote: "The golden rule of vitiligo care: distinguish medical reality from folklore, and treat the whole human being, not just the patch.",
    qas: [
      {
        question: "What is the single biggest misconception you hear from patients?",
        answer: "Patients constantly ask if their diet or something they ate caused the condition. I reassure them: you did not cause this. It is a complex genetic and autoimmune mechanism, not a punishment for your lifestyle or nutrition."
      },
      {
        question: "What do you wish every newly diagnosed patient knew?",
        answer: "We are in a golden era of scientific understanding. Between targeted topical JAK inhibitors, refined phototherapy protocols, and promising pipeline biologics, our therapeutic toolkit is stronger than it has ever been."
      },
      {
        question: "What is your primary piece of advice for someone today?",
        answer: "Find a board-certified dermatologist who listens. Establish whether your condition is currently active or stable, protect your skin diligently from solar burns, and take things one realistic milestone at a time."
      }
    ]
  },
  {
    id: "interview-advocate",
    name: "Zainab Bello",
    role: "Global Vitiligo Awareness Ambassador & Creative Director",
    titleRole: "Person living with Vitiligo",
    quote: "Once you stop treating your skin like an apology, everyone else stops treating it like a question.",
    qas: [
      {
        question: "What was the most liberating milestone on your journey?",
        answer: "The day I threw away my heavy waterproof camouflage foundation. Not because makeup is bad — it can be fun — but because applying it had become an emotional tax I was paying every single morning just to leave the apartment."
      },
      {
        question: "How do you handle intrusive stares in public?",
        answer: "I look directly at them with a polite smile. Nine times out of ten, they smile back and realize they were staring without thinking. Dignity disarms discomfort immediately."
      },
      {
        question: "What message would you give to a 15-year-old just diagnosed?",
        answer: "The years when people tease or stare will pass faster than you think. The character, resilience, and unique magnetism you build through this will stay with you forever."
      }
    ]
  },
  {
    id: "interview-artist",
    name: "Clara Dupont",
    role: "Editorial & Corrective Makeup Artist",
    titleRole: "Makeup Artist",
    quote: "Makeup should be a creative wardrobe option, never an emotional mask.",
    qas: [
      {
        question: "What is the key technical tip for those who choose to wear makeup?",
        answer: "Warm color correction is everything. If you apply a standard olive or cool foundation directly onto a depigmented patch, it can turn chalky. A soft peach or amber tint underneath brings the patch into harmonic alignment with surrounding skin."
      },
      {
        question: "What is the biggest mistake you see people make?",
        answer: "Layering heavy thick pastes that crack and dehydrate throughout the day. Thin, buildable layers set with fine silica powder feel feather-light and look far more natural."
      },
      {
        question: "What do you say to clients who feel pressure to cover up?",
        answer: "I always tell them: wear makeup because you felt like creating a look today, not because you owe the world a uniform tone. Your skin without makeup is already complete."
      }
    ]
  },
  {
    id: "interview-psych",
    name: "Dr. Soren Lindqvist, PhD",
    role: "Psychodermatologist & Health Psychologist",
    titleRole: "Psychologist",
    quote: "Our skin is our primary boundary with the social world. When it changes, our identity renegotiates itself.",
    qas: [
      {
        question: "Why does vitiligo carry such a distinct psychological weight?",
        answer: "Unlike internal illnesses, skin conditions are visually public. Humans are social creatures wired to seek belonging. When visual differences emerge, the brain's threat-detection system can trigger acute social anxiety."
      },
      {
        question: "What cognitive tool helps most with public anxiety?",
        answer: "Cognitive reframing: switching from 'Everyone is judging me' to 'People are simply noticing contrast'. Contrast is an involuntary visual trigger; it does not equal negative moral assessment."
      },
      {
        question: "What advice do you give to family members?",
        answer: "Stop making every conversation about the skin. Don't scrutinize patches under bright lights when they visit. Support them by loving the whole person, not by constantly hunting for remedies."
      }
    ]
  },
  {
    id: "interview-photographer",
    name: "Kenji Sato",
    role: "Documentary & Portrait Photographer",
    titleRole: "Photographer",
    quote: "Lighting skin with vitiligo is a masterclass in organic texture, geometry, and human individuality.",
    qas: [
      {
        question: "How do you approach photographing vitiligo?",
        answer: "Soft, directional natural daylight. Hard flashes can blow out lighter patches, while gentle window light illuminates the subtle tonal gradations and the dignity in the subject's gaze."
      },
      {
        question: "What do you see in the mirror through your lens?",
        answer: "Uniqueness. In a commercial culture saturated with identical filtered faces, skin that carries its own narrative is genuinely breathtaking."
      },
      {
        question: "What should subjects know when being photographed?",
        answer: "Lean into your posture and eyes. The most striking portraits in photography history are those where the subject is wholly at home in their own skin."
      }
    ]
  },
  {
    id: "interview-researcher",
    name: "Dr. Miriam Osei, PhD",
    role: "Immunologist & Cutaneous Biology Investigator",
    titleRole: "Researcher",
    quote: "We now map the exact cytokines and memory T cells behind pigment loss. Discovery is accelerating.",
    qas: [
      {
        question: "What is the most exciting frontier in vitiligo science?",
        answer: "Targeting tissue-resident memory T cells (TRM). While current topicals calm the immediate inflammatory fire, clearing the memory cells that persist in the hair follicles could one day prevent patches from recurring after treatment stops."
      },
      {
        question: "How do you counter exaggerated science headlines online?",
        answer: "By reminding the public that a Petri dish finding or mouse model is an exploratory stepping stone, not a clinical prescription. Real science takes rigorous human trials, safety profiling, and reproducible data."
      },
      {
        question: "What message gives you the most optimism for the next decade?",
        answer: "Vitiligo is no longer an underfunded mystery. Global collaborative dermatological registries and molecular targeted therapeutics have brought this condition into the vanguard of precision immunology."
      }
    ]
  }
];

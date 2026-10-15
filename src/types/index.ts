export type Category = 'SCIENCE' | 'TREATMENT' | 'LIFESTYLE' | 'FOOD' | 'STORIES' | 'MYTHS' | 'RESEARCH';

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  readTime: string;
  lastReviewed: string;
  leadParagraph: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    content: string[];
    pullQuote?: string;
    calloutBox?: {
      title: string;
      body: string;
      type?: 'info' | 'caution' | 'fact';
    };
  }[];
  sources: string[];
  relatedSlugs: string[];
  imagePath?: string;
  isMedicallyReviewed?: boolean;
}

export interface FactQuestion {
  id: number;
  statement: string;
  isFact: boolean;
  explanation: string;
  detailedContext: string;
  category: string;
}

export interface VitiligoTypeDetail {
  id: string;
  name: string;
  category: 'Non-Segmental' | 'Segmental' | 'Mixed' | 'Descriptive / Less Common';
  whatItMeans: string;
  whereItAppears: string;
  howItMayLook: string;
  howItMayProgress: string;
  howItIsDiagnosed: string;
  importantNote: string;
  distributionPattern: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: 'Fruits' | 'Vegetables' | 'Protein' | 'Whole Grains' | 'Nuts & Seeds' | 'Legumes' | 'Healthy Fats';
  keyNutrients: string[];
  whyInclude: string;
  evidenceStatus: string;
  cautionOrMyth?: string;
}

export interface FoodClaim {
  id: string;
  foodName: string;
  claim: string;
  evidence: string;
  realisticRole: string;
  scientificConsensus: 'No Evidence for Cure' | 'Supports General Health' | 'Myth Debunked';
}

export interface CommunityStory {
  id: string;
  authorAlias: string;
  ageRange: string;
  location: string;
  yearNoticed: string;
  title: string;
  experience: string;
  biggestMisconception: string;
  wishPeopleKnew: string;
  whereTheyAreToday: string;
  imageAlt?: string;
}

export interface InterviewProfile {
  id: string;
  name: string;
  role: string;
  titleRole: 'Dermatologist' | 'Person living with Vitiligo' | 'Makeup Artist' | 'Photographer' | 'Psychologist' | 'Researcher';
  quote: string;
  qas: {
    question: string;
    answer: string;
  }[];
}

export interface ResearchItem {
  id: string;
  title: string;
  studyYear: string;
  journal: string;
  evidenceTier: 'ESTABLISHED' | 'PROMISING' | 'EARLY RESEARCH' | 'UNKNOWN';
  whatScientistsStudied: string;
  whatTheyFound: string;
  whatItMeans: string;
  whatItDoesNotMean: string;
  whyItMatters: string;
  whatWeStillDontKnow: string;
}

export interface DiaryEntry {
  id: string;
  date: string;
  bodyArea: string;
  observation: string;
  treatmentOrAppointment?: string;
  personalNotes: string;
}

export interface GlossaryTerm {
  term: string;
  pronunciation?: string;
  formalDefinition: string;
  simpleExplanation: string;
  category: 'Biology' | 'Clinical Types' | 'Treatments' | 'Skin Anatomy';
}

export interface ShelfItem {
  id: string;
  title: string;
  category: string;
  snippet: string;
  type: 'article' | 'story' | 'research' | 'question';
  dateSaved: string;
}

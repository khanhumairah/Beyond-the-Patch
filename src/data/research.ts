import { ResearchItem } from '../types';

export const RESEARCH_ARTICLES: ResearchItem[] = [
  {
    id: "jak-stat-pathway",
    title: "Targeting the IFN-γ-CXCL10 Chemokine Axis via JAK Inhibition",
    studyYear: "2022–2024 Phase 3 Trials & Post-Hoc Analyses",
    journal: "New England Journal of Medicine & Journal of Investigative Dermatology",
    evidenceTier: "ESTABLISHED",
    whatScientistsStudied: "Researchers investigated whether blocking Janus kinase enzymes (specifically JAK1 and JAK2) with topical ruxolitinib could disrupt the inflammatory cascade driven by interferon-gamma (IFN-γ) that leads cytotoxic T cells to target melanocytes.",
    whatTheyFound: "In randomized double-blind clinical trials involving hundreds of patients, approximately 50% or more achieved at least a 75% improvement in facial vitiligo score (F-VASI 75) after 52 weeks of continuous twice-daily topical application.",
    whatItMeans: "Confirming that IFN-γ and its downstream chemokines (CXCL9/CXCL10) are central molecular drivers of vitiligo, and that targeted topical enzymatic inhibition can successfully halt ongoing immune destruction and allow follicular melanocytes to repigment.",
    whatItDoesNotMean: "It does not mean every single person repigments completely, nor does it guarantee permanent immunity from patches recurring if the treatment is completely discontinued, because tissue-resident memory T cells can persist in dormant states.",
    whyItMatters: "Represents the first class of mechanistically targeted, molecular therapies specifically evaluated and regulatory-approved for vitiligo, transforming modern dermatological practice.",
    whatWeStillDontKnow: "The optimal maintenance dosing protocol to prevent patch recurrence over 3 to 5 years after successful repigmentation, and comparative efficacy across recalcitrant acral (hand/foot) sites."
  },
  {
    id: "resident-memory-t-cells",
    title: "Targeting CD8+ Tissue-Resident Memory T Cells (TRM) via Anti-IL-15 Receptor",
    studyYear: "2023–2025 Preclinical & Phase 1/2 Studies",
    journal: "Science Translational Medicine & Nature Communications",
    evidenceTier: "PROMISING",
    whatScientistsStudied: "Why vitiligo patches often recur in the exact same physical locations once topical treatment stops. Scientists investigated CD8+ tissue-resident memory T cells (TRM) that remain anchored in the epidermis and express CD122 (the IL-15 receptor subunit).",
    whatTheyFound: "In animal models and early human tissue samples, blocking interleukin-15 (IL-15) signaling stripped TRM cells of their survival signal, causing them to clear from the skin. When these memory cells were cleared, repigmentation was durable long after therapy ended.",
    whatItMeans: "Provides the first biological blueprint for potentially preventing vitiligo relapses at the root immunological source, moving beyond ongoing suppression toward long-term immunological resets.",
    whatItDoesNotMean: "It is NOT an immediate commercial drug available at the pharmacy tomorrow. It is currently in active Phase 2 human clinical trials and requires careful safety profiling before any wide clinical release.",
    whyItMatters: "Addresses the single most frustrating aspect of vitiligo care: the tendency of patches to reappear in previously cleared spots once medications are paused.",
    whatWeStillDontKnow: "Long-term human safety of depleting cutaneous memory T cells, optimal treatment durations, and potential systemic off-target effects."
  },
  {
    id: "oxidative-stress-melanocyte",
    title: "Intracellular Oxidative Stress & Unfolded Protein Response in Melanocytes",
    studyYear: "2021–2023 Laboratory Cellular Investigations",
    journal: "Journal of Dermatological Science & Pigment Cell & Melanoma Research",
    evidenceTier: "EARLY RESEARCH",
    whatScientistsStudied: "Why melanocytes from people with vitiligo appear more intrinsically sensitive to oxidative stress and produce excess reactive oxygen species (ROS) even before the immune system attacks them.",
    whatTheyFound: "Vitiligo melanocytes exhibit defects in antioxidant defense enzymes (like catalase) and accumulate unfolded proteins in the endoplasmic reticulum, prompting the cells to secrete heat-shock protein 70 (HSP70i), which acts as an 'alarm call' activating dendritic immune cells.",
    whatItMeans: "Vitiligo is not merely an immune system mistake; melanocyte intrinsic cellular fragility plays an equal initial role in sounding the immunological alarm.",
    whatItDoesNotMean: "It does NOT mean that drinking green tea, taking oral antioxidant pills, or rubbing antioxidant vitamin pastes will cure vitiligo. Systemic dietary antioxidants do not replicate intracellular enzymatic balance inside the epidermal niche.",
    whyItMatters: "May enable future topical molecular therapies that fortify melanocyte stress resilience directly, protecting them before an autoimmune attack is triggered.",
    whatWeStillDontKnow: "Whether intracellular antioxidant therapies can be delivered into human epidermis at sufficient concentrations without disrupting normal cellular signaling."
  },
  {
    id: "diet-microbiome-autoimmunity",
    title: "Gut Microbiome Diversity & Autoimmune Skin Manifestations",
    studyYear: "2022–2024 Observational Cohort Studies",
    journal: "Frontiers in Immunology & Clinical & Experimental Dermatology",
    evidenceTier: "UNKNOWN",
    whatScientistsStudied: "Whether the composition of bacterial colonies in the digestive tract (gut microbiome) differs between individuals with autoimmune vitiligo versus control populations without skin conditions.",
    whatTheyFound: "Preliminary observational pilot studies have noted modest statistical variations in the abundance of certain bacterial taxa (such as Firmicutes and Bacteroidetes ratios) between small cohorts.",
    whatItMeans: "The gut microbiome communicates closely with the systemic immune system (the gut-skin axis), and general microbiome diversity supports baseline immune homeostasis.",
    whatItDoesNotMean: "It does NOT prove that gut dysbiosis causes vitiligo, nor does it support claims that probiotic supplements, colon cleanses, or restrictive anti-inflammatory diets can reverse vitiligo.",
    whyItMatters: "Helps dermatologists refute predatory online marketing that claims leaky gut or food allergies cause vitiligo, while encouraging sound whole-food nutrition.",
    whatWeStillDontKnow: "Whether observed microbial differences are a secondary consequence of systemic immune differences, or whether modifying the microbiome has any therapeutic effect on melanocyte repigmentation."
  }
];

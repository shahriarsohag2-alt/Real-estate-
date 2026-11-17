export interface CueCta {
  label: string;
  href: string;
}

export interface CueConfig {
  id: string;
  align: "left" | "right" | "center";
  from: number;
  to: number;
  topClass: string;
  titleLines: string[];
  isH1?: boolean;
  line: string;
  cta?: CueCta;
}

export interface ClipConfig {
  id: string;
  file: string;
  videoSrc: string;
  mobileVideoSrc: string;
  posterSrc: string;
  label: string;
  scroll: number;
  heightClass: string;
  pace: number[];
  enter?: "fade" | "slide" | "pan-left" | "door" | "cut";
  endMove?: "left" | "door" | "right-door";
  cues: CueConfig[];
}

export const CLIPS: ClipConfig[] = [
  {
    id: "approach",
    file: "villa-approach",
    videoSrc: "/assets/scrub/d/villa-approach.mp4",
    mobileVideoSrc: "/assets/scrub/m/villa-approach.mp4",
    posterSrc: "/assets/aistudio/villa-approach_2e9b5fb2.jpg",
    label: "The approach",
    scroll: 240,
    heightClass: "h-[240svh]",
    pace: [
      0.0, 0.079, 0.145, 0.206, 0.262, 0.315, 0.368, 0.421, 0.476, 0.53,
      0.582, 0.631, 0.682, 0.73, 0.775, 0.828, 0.867, 0.895, 0.922, 0.952, 1.0,
    ],
    cues: [
      {
        id: "approach-hero",
        align: "center",
        from: -1,
        to: 0.13,
        topClass: "top-[33%]",
        titleLines: ["Altura"],
        isH1: true,
        line: "One coastal residence, walked in a single take. Scroll to enter.",
        cta: {
          label: "Book a viewing",
          href: "#viewings-enquiry",
        },
      },
      {
        id: "approach-pool",
        align: "left",
        from: 0.3,
        to: 0.56,
        topClass: "top-[58%]",
        titleLines: ["The pool", "terrace"],
        line: "An infinity edge suspended directly above the bay.",
      },
      {
        id: "approach-doors",
        align: "right",
        from: 0.72,
        to: 0.93,
        topClass: "top-[26%]",
        titleLines: ["The front", "doors"],
        line: "Tall timber pivot doors opening straight toward the sea.",
      },
    ],
  },
  {
    id: "wellness",
    file: "wellness-stair",
    videoSrc: "/assets/scrub/d/wellness-stair.mp4",
    mobileVideoSrc: "/assets/scrub/m/wellness-stair.mp4",
    posterSrc: "/assets/aistudio/wellness-stair_61438d95.jpg",
    label: "Gym, stair and sea suite",
    scroll: 320,
    heightClass: "h-[320svh]",
    pace: [
      0.0, 0.048, 0.101, 0.154, 0.205, 0.257, 0.308, 0.362, 0.409, 0.458,
      0.507, 0.557, 0.618, 0.707, 0.812, 0.859, 0.885, 0.912, 0.938, 0.961, 1.0,
    ],
    cues: [
      {
        id: "wellness-gym",
        align: "right",
        from: 0.12,
        to: 0.32,
        topClass: "top-[54%]",
        titleLines: ["The gym"],
        line: "Glass-walled and stone-lined, lit for training at any hour.",
      },
      {
        id: "wellness-stair",
        align: "left",
        from: 0.4,
        to: 0.64,
        topClass: "top-[24%]",
        titleLines: ["The lit", "stair"],
        line: "Floating marble treads illuminated softly from beneath.",
      },
      {
        id: "wellness-suite",
        align: "right",
        from: 0.74,
        to: 0.94,
        topClass: "top-[22%]",
        titleLines: ["The sea", "suite"],
        line: "A quiet bedroom framed to face the last light over the horizon.",
      },
    ],
  },
  {
    id: "suite",
    file: "suite-staging",
    videoSrc: "/assets/scrub/d/suite-staging.mp4",
    mobileVideoSrc: "/assets/scrub/m/suite-staging.mp4",
    posterSrc: "/assets/aistudio/suite-staging_0fed0c83.jpg",
    label: "Principal suite",
    scroll: 130,
    heightClass: "h-[130svh]",
    pace: [
      0.0, 0.064, 0.114, 0.18, 0.26, 0.338, 0.413, 0.476, 0.535, 0.606, 0.679,
      0.712, 0.739, 0.766, 0.793, 0.821, 0.848, 0.875, 0.902, 0.932, 1.0,
    ],
    cues: [
      {
        id: "suite-principal",
        align: "left",
        from: 0.16,
        to: 0.9,
        topClass: "top-[22%]",
        titleLines: ["Principal", "suite"],
        line: "An empty architectural volume, furnished piece by piece as you scroll.",
      },
    ],
  },
  {
    id: "lounge",
    file: "lounge-living",
    videoSrc: "/assets/scrub/d/lounge-living.mp4",
    mobileVideoSrc: "/assets/scrub/m/lounge-living.mp4",
    posterSrc: "/assets/aistudio/lounge-living_poster.jpg",
    label: "Living lounge and salon",
    scroll: 260,
    heightClass: "h-[260svh]",
    enter: "cut",
    endMove: "door",
    pace: [
      0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
      0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0,
    ],
    cues: [
      {
        id: "lounge-seating",
        align: "right",
        from: 0.1,
        to: 0.42,
        topClass: "top-[24%]",
        titleLines: ["The living", "lounge"],
        line: "Warm oak floors and tailored seating bathed in soft daylight.",
      },
      {
        id: "lounge-salon",
        align: "left",
        from: 0.54,
        to: 0.82,
        topClass: "top-[24%]",
        titleLines: ["The salon"],
        line: "A veined marble table, frosted pocket doors, and calm proportions.",
      },
    ],
  },
  {
    id: "chalet",
    file: "chalet-living",
    videoSrc: "/assets/scrub/d/chalet-living.mp4",
    mobileVideoSrc: "/assets/scrub/m/chalet-living.mp4",
    posterSrc: "/assets/aistudio/chalet-living_poster.jpg",
    label: "Dining room and stone kitchen",
    scroll: 280,
    heightClass: "h-[280svh]",
    enter: "door",
    endMove: "right-door",
    pace: [
      0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
      0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0,
    ],
    cues: [
      {
        id: "chalet-timber",
        align: "left",
        from: 0.12,
        to: 0.42,
        topClass: "top-[24%]",
        titleLines: ["The dining", "room"],
        line: "Warm timber joinery, velvet seating, and soft curtains in alpine daylight.",
      },
      {
        id: "chalet-table",
        align: "right",
        from: 0.52,
        to: 0.78,
        topClass: "top-[24%]",
        titleLines: ["The stone", "kitchen"],
        line: "A honed stone island, walnut cabinetry, and a sunlit balcony.",
      },
    ],
  },
  {
    id: "terrace",
    file: "terrace-pergola",
    videoSrc: "/assets/scrub/d/terrace-pergola.mp4",
    mobileVideoSrc: "/assets/scrub/m/terrace-pergola.mp4",
    posterSrc: "/assets/aistudio/terrace-pergola_poster.jpg",
    label: "Pergola terrace and interior",
    scroll: 280,
    heightClass: "h-[280svh]",
    enter: "door",
    pace: [
      0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
      0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0,
    ],
    cues: [
      {
        id: "terrace-pergola",
        align: "right",
        from: 0.1,
        to: 0.42,
        topClass: "top-[24%]",
        titleLines: ["The pergola", "terrace"],
        line: "Slatted timber shade, woven seating, and sunlit coastal palms.",
      },
      {
        id: "terrace-interior",
        align: "left",
        from: 0.56,
        to: 0.9,
        topClass: "top-[24%]",
        titleLines: ["Through", "the residence"],
        line: "Open-plan living, kitchen bar, and the suite framed in soft daylight.",
      },
    ],
  },
  {
    id: "patio",
    file: "patio-return",
    videoSrc: "/assets/scrub/d/patio-return.mp4",
    mobileVideoSrc: "/assets/scrub/m/patio-return.mp4",
    posterSrc: "/assets/aistudio/patio-return_poster.jpg",
    label: "Garden room to courtyard",
    scroll: 280,
    heightClass: "h-[280svh]",
    enter: "cut",
    pace: [
      0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6,
      0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1.0,
    ],
    cues: [
      {
        id: "patio-living",
        align: "right",
        from: 0.1,
        to: 0.42,
        topClass: "top-[24%]",
        titleLines: ["Back through", "the hall"],
        line: "Passing the bedroom and warm lounge in one unhurried reverse glide.",
      },
      {
        id: "patio-deck",
        align: "left",
        from: 0.56,
        to: 0.9,
        topClass: "top-[24%]",
        titleLines: ["Out to", "the deck"],
        line: "Stepping through glass sliders back onto the private timber terrace.",
      },
    ],
  },
  {
    id: "exit",
    file: "villa-exit",
    videoSrc: "/assets/scrub/d/villa-exit.mp4",
    mobileVideoSrc: "/assets/scrub/m/villa-exit.mp4",
    posterSrc: "/assets/aistudio/villa-exit_82d6f102.jpg",
    label: "Back out to the coast",
    scroll: 210,
    heightClass: "h-[210svh]",
    enter: "cut",
    pace: [
      0.0, 0.059, 0.115, 0.167, 0.216, 0.258, 0.298, 0.343, 0.387, 0.432,
      0.478, 0.525, 0.574, 0.622, 0.669, 0.716, 0.764, 0.816, 0.87, 0.93, 1.0,
    ],
    cues: [
      {
        id: "exit-viewings",
        align: "center",
        from: 0.2,
        to: 0.5,
        topClass: "top-[30%]",
        titleLines: ["Come and", "see it"],
        line: "Private viewings are arranged daily by appointment.",
        cta: {
          label: "Request a viewing",
          href: "#viewings-enquiry",
        },
      },
    ],
  },
];

import { themeMap, themePresets, type ThemePreset } from "./themes";

export type GeneratorInput = {
  productName: string;
  focus: string;
  audience: string;
  tone: "visionary" | "grounded" | "luxe";
};

export type LandingMetric = {
  label: string;
  value: string;
};

export type LandingFeature = {
  title: string;
  description: string;
  highlight: string;
  icon: string;
};

export type LandingVariant = {
  productName: string;
  slogan: string;
  headline: string;
  subheadline: string;
  narrative: string;
  promise: string;
  callToAction: {
    primary: string;
    secondary: string;
  };
  features: LandingFeature[];
  metrics: LandingMetric[];
  vibe: string;
  heroLabel: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
};

const defaultInputs: GeneratorInput = {
  productName: "",
  focus: "immersive product storytelling",
  audience: "visionary founders",
  tone: "visionary"
};

const toneDescriptors: Record<GeneratorInput["tone"], string[]> = {
  visionary: ["courageous", "future-forward", "luminous", "catalytic", "imaginative"],
  grounded: ["deliberate", "trusted", "measured", "balanced", "intelligent"],
  luxe: ["artful", "couture-level", "opulent", "statement-making", "seductive"]
};

const baseNames = [
  "Nebula",
  "Vanta",
  "Halcyon",
  "Prism",
  "Astra",
  "Lumen",
  "Zephyr",
  "Flux",
  "Celest",
  "Arcadia"
];

const baseSuffixes = [
  "Atlas",
  "Forge",
  "Canvas",
  "Studio",
  "Grid",
  "Pulse",
  "Verse",
  "System",
  "Works",
  "Lab"
];

const themeCopy = {
  "aurora-neon": {
    heroLabels: ["Spectral OS", "Photon Engine", "Zephyr Stack"],
    tones: [
      "A luminous interface for teams architecting tomorrow.",
      "Command center-grade clarity for interstellar product teams.",
      "Spectral velocity for crews building the impossible."
    ],
    promises: [
      "Translate complex journeys into cinematic digital experiences.",
      "Design feedback loops that hum at light-speed precision.",
      "Deploy immersive narratives powered by generative intelligence."
    ],
    slogans: [
      "Light up your next release.",
      "Stage your product like a cinematic universe.",
      "Broadcast brilliance. Orbit results."
    ],
    features: [
      {
        title: "Quantum Canvas",
        description: "Compose adaptive hero narratives with AI-assisted choreography.",
        highlight: "Generates synchronized launch visuals on the fly.",
        icon: "🪐"
      },
      {
        title: "Pulse Architect",
        description: "Map experiential flows using holographic user telemetry.",
        highlight: "Reveals resonance gaps before they ship.",
        icon: "🌌"
      },
      {
        title: "Spectral Sync",
        description: "Align marketing, product, and ops with photonic clarity.",
        highlight: "Keeps distributed teams in constant rhythm.",
        icon: "🛰️"
      },
      {
        title: "Continuum Vault",
        description: "Archive every iteration in a cinematic timeline.",
        highlight: "Rewind and remix any milestone instantly.",
        icon: "🧬"
      }
    ],
    metrics: [
      { label: "Launch Velocity", value: "4.3× faster" },
      { label: "Momentum Lift", value: "+182%" },
      { label: "Signal Clarity", value: "98.1%" }
    ],
    testimonials: [
      {
        quote: "Our roadmap presentations now feel like sci-fi premieres.",
        author: "Zara Chen",
        role: "Head of Product Vision, LuminaX"
      }
    ],
    ctas: {
      primary: ["Activate Spectral Mode", "Run The Aurora Sprint"],
      secondary: ["Preview motion system", "Inspect orchestration map"]
    },
    vibes: ["Futuristic cinematic studio", "Neon-drenched control deck"]
  },
  "noir-brutalism": {
    heroLabels: ["Editorial Grid", "Monolith Layer", "Contrast Engine"],
    tones: [
      "A brutalist statement for decisive product teams.",
      "Precision-crafted layouts with editorial bravado.",
      "Harness contrast to tell product stories with conviction."
    ],
    promises: [
      "Deliver clarity at a glance across every funnel interaction.",
      "Forge product narratives with unapologetic confidence.",
      "Project trust through typographic authority and rhythm."
    ],
    slogans: [
      "Command attention. Convert intent.",
      "Carve your signature into the market.",
      "Bold grids for bold decisions."
    ],
    features: [
      {
        title: "Brutal Grid System",
        description: "Snap sections into asymmetric layouts with pixel-perfect tension.",
        highlight: "Editorial geometry with instant responsiveness.",
        icon: "🧱"
      },
      {
        title: "Type Director",
        description: "Curate typographic hierarchies that amplify conviction.",
        highlight: "Adaptive pairing engine tuned for conversions.",
        icon: "📰"
      },
      {
        title: "Momentum Ledger",
        description: "Quantify narrative impact with brutalist reporting panels.",
        highlight: "Deconstructs performance across every section.",
        icon: "📊"
      },
      {
        title: "Contrast Automator",
        description: "Automate micro-interactions with uncompromising clarity.",
        highlight: "Ensures readability in every viewport and state.",
        icon: "⚡"
      }
    ],
    metrics: [
      { label: "Conversion Uplift", value: "+236%" },
      { label: "Attention Span", value: "3.4× longer" },
      { label: "Brand Recall", value: "92%" }
    ],
    testimonials: [
      {
        quote: "Feels like launching our brand through a design museum.",
        author: "Mateo Reeves",
        role: "Creative Director, Obsidian Labs"
      }
    ],
    ctas: {
      primary: ["Launch Brutalist Layout", "Draft Editorial Narrative"],
      secondary: ["See typographic system", "Download layout schematic"]
    },
    vibes: ["Architectural minimalism", "Museum-grade storytelling"]
  },
  "biophilic-serenity": {
    heroLabels: ["Living System", "BioFlow Studio", "Verdant Framework"],
    tones: [
      "Nature-steeped digital experiences for mindful innovation.",
      "Organic choreography for wellness-first products.",
      "A regenerative storytelling engine for human-centric brands."
    ],
    promises: [
      "Invite audiences into restorative product journeys.",
      "Design adaptive experiences that breathe with your users.",
      "Weave biomimicry principles into every conversion path."
    ],
    slogans: [
      "Design in rhythm with nature.",
      "Sustain intuition at scale.",
      "Where calm intelligence converts."
    ],
    features: [
      {
        title: "Chrono Garden",
        description: "Grow layered landing sections guided by circadian storytelling.",
        highlight: "Adjusts tone dynamically throughout the launch cycle.",
        icon: "🌿"
      },
      {
        title: "Biome Metrics",
        description: "Read user sentiment as living ecosystems, not funnels.",
        highlight: "Maps wellness impact in real time.",
        icon: "🍃"
      },
      {
        title: "Harmonic Flows",
        description: "Conduct transitions inspired by tidal rhythms and airflow.",
        highlight: "Creates serene yet high-performing motion.",
        icon: "🌊"
      },
      {
        title: "Eden Library",
        description: "Curate imagery that feels tactile, artisanal, and balanced.",
        highlight: "Generates palettes from biophilic references.",
        icon: "🪴"
      }
    ],
    metrics: [
      { label: "Calm Index", value: "97%" },
      { label: "Return Visitors", value: "+168%" },
      { label: "Session Depth", value: "5.1×" }
    ],
    testimonials: [
      {
        quote: "Our wellness launches now feel alive, ritualistic, and premium.",
        author: "Amaia Flores",
        role: "Founder, Resonant Retreats"
      }
    ],
    ctas: {
      primary: ["Plant A Living Landing", "Curate Biome Journey"],
      secondary: ["Preview organic motion", "Download sensorial spec"]
    },
    vibes: ["Calm innovation garden", "Tactile wellness lab"]
  },
  "afterglow-art-deco": {
    heroLabels: ["Luxe Signal", "Afterglow Atelier", "Deco Circuit"],
    tones: [
      "Art deco opulence fused with avant-garde product storytelling.",
      "Sculpt bold symmetry with luminous gradient flourishes.",
      "Elevate every release into a couture-grade digital experience."
    ],
    promises: [
      "Commission decadent hero experiences that feel couture.",
      "Layer adaptive glamor across every conversion moment.",
      "Deliver artful launch theatrics without sacrificing performance."
    ],
    slogans: [
      "Design the afterglow.",
      "Couture-grade storytelling, on demand.",
      "Opulence with conversion discipline."
    ],
    features: [
      {
        title: "Golden Ratio Grid",
        description: "Draft asymmetrical compositions with deco precision.",
        highlight: "Generates luxe diagonals and frame motifs.",
        icon: "💫"
      },
      {
        title: "Radiant Vault",
        description: "Store emotional color stories for every launch chapter.",
        highlight: "Blends gradients inspired by dusk skylines.",
        icon: "🎨"
      },
      {
        title: "Lumen Concierge",
        description: "AI stylist curating typography, iconography, and luxe motion.",
        highlight: "Pairs opulent treatments with brand consistency.",
        icon: "🕰️"
      },
      {
        title: "Gala Mode",
        description: "Switch the entire experience into event-grade dramatics.",
        highlight: "Includes couture CTA choreography and testimonials.",
        icon: "✨"
      }
    ],
    metrics: [
      { label: "Aspirational Lift", value: "+312%" },
      { label: "High-Intent Leads", value: "4.7×" },
      { label: "Experience Rating", value: "9.6/10" }
    ],
    testimonials: [
      {
        quote: "Every launch now feels like a premiere at a digital MoMA.",
        author: "Selene Ward",
        role: "Chief Brand Officer, Atelier One"
      }
    ],
    ctas: {
      primary: ["Enter Afterglow Mode", "Design A Gala Hero"],
      secondary: ["Download deco palette", "Review couture toolkit"]
    },
    vibes: ["Luminous art deco theatre", "Gradient couture runway"]
  },
  "solar-punk": {
    heroLabels: ["Sunrise Array", "Helio Lattice", "Skyline Circuit"],
    tones: [
      "Solarpunk optimism woven into adaptive digital ecosystems.",
      "Harness renewable narratives for regenerative product launches.",
      "Transform every scroll into sunlit momentum."
    ],
    promises: [
      "Broadcast eco-tech stories with radiant conviction.",
      "Pair regenerative visuals with data-rich storytelling.",
      "Tether product momentum to community-powered hope."
    ],
    slogans: [
      "Build the sunlit future.",
      "Radiate optimism into every release.",
      "Solarpunk stories that convert."
    ],
    features: [
      {
        title: "Helio Composer",
        description: "Arrange hero flows powered by solar geometry.",
        highlight: "Animates sun-tracking interactions in real-time.",
        icon: "🌞"
      },
      {
        title: "Canopy Index",
        description: "Quantify community and climate resonance in one dashboard.",
        highlight: "Surfaces positive impact metrics automatically.",
        icon: "🌱"
      },
      {
        title: "Renewal Loop",
        description: "Automate nurture sequences themed around ecological rituals.",
        highlight: "Keeps audiences engaged through storytelling cycles.",
        icon: "🔄"
      },
      {
        title: "Skyline Synth",
        description: "Blend retro-futuristic skyline renders with your brand system.",
        highlight: "Generates cinematic illustration suites.",
        icon: "🌇"
      }
    ],
    metrics: [
      { label: "Impact Alignment", value: "96%" },
      { label: "Community Growth", value: "+221%" },
      { label: "Launch Momentum", value: "3.8×" }
    ],
    testimonials: [
      {
        quote: "Feels like a sunrise for our entire community every launch.",
        author: "Elliot Noor",
        role: "Founder, Horizon Mesh"
      }
    ],
    ctas: {
      primary: ["Ignite Solar Narrative", "Run Helio Builder"],
      secondary: ["View climate metrics", "Download impact dossier"]
    },
    vibes: ["Sun-drenched skyline studio", "Retro-futuristic greenhouse"]
  }
} satisfies Record<string, ThemeCopy>;

type ThemeCopy = {
  heroLabels: string[];
  tones: string[];
  promises: string[];
  slogans: string[];
  features: LandingFeature[];
  metrics: LandingMetric[];
  testimonials: LandingVariant["testimonial"][];
  ctas: {
    primary: string[];
    secondary: string[];
  };
  vibes: string[];
};

const toneTaglines: Record<GeneratorInput["tone"], string[]> = {
  visionary: [
    "Where moonshot roadmaps become market-ready realities.",
    "Engineered for teams fluent in audacity.",
    "When you need to broadcast the future—today."
  ],
  grounded: [
    "Craft purposeful experiences rooted in trust.",
    "Deliver clarity without theatrics, precision without noise.",
    "Reliable conversions for thoughtful operators."
  ],
  luxe: [
    "Seduce high-intent buyers with couture-level polish.",
    "When premium isn't a price point—it's a feeling.",
    "Immerse your audience in hand-crafted digital splendor."
  ]
};

function pickRandom<T>(items: T[], rng = Math.random): T {
  return items[Math.floor(rng() * items.length)];
}

function buildProductName(input: GeneratorInput, rng: () => number): string {
  if (input.productName.trim().length > 2) {
    return input.productName.trim();
  }

  const base = pickRandom(baseNames, rng);
  const suffix = pickRandom(baseSuffixes, rng);
  return `${base} ${suffix}`;
}

function createRandomGenerator(seed: number): () => number {
  let value = seed % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

export function getThemeById(id: string): ThemePreset {
  return themeMap.get(id) ?? themePresets[0];
}

export function generateLandingVariant(
  themeId: string,
  userInput?: Partial<GeneratorInput>,
  seed = Date.now()
): LandingVariant {
  const theme = getThemeById(themeId);
  const mergedInput: GeneratorInput = {
    ...defaultInputs,
    ...userInput
  };

  const rng = createRandomGenerator(seed);
  const copy =
    themeCopy[theme.id as keyof typeof themeCopy] ?? themeCopy["aurora-neon"];

  const productName = buildProductName(mergedInput, rng);
  const descriptor = mergedInput.focus.trim() || defaultInputs.focus;
  const audience = mergedInput.audience.trim() || defaultInputs.audience;

  const heroLabel = pickRandom(copy.heroLabels, rng);
  const slogan = pickRandom(copy.slogans, rng);
  const heroTone = pickRandom(copy.tones, rng);
  const promise = pickRandom(copy.promises, rng);
  const vibe = pickRandom(copy.vibes, rng);

  const toneDescriptor = pickRandom(toneDescriptors[mergedInput.tone], rng);
  const toneTagline = pickRandom(toneTaglines[mergedInput.tone], rng);

  const features = shuffle(copy.features, rng).slice(0, 3);
  const metrics = shuffle(copy.metrics, rng).slice(0, 3);
  const testimonial = pickRandom(copy.testimonials, rng);

  const callToAction = {
    primary: pickRandom(copy.ctas.primary, rng),
    secondary: pickRandom(copy.ctas.secondary, rng)
  };

  const headline = `${toneDescriptor.toUpperCase()} ${descriptor}`;

  const subheadline = `${productName} orchestrates ${descriptor} for ${audience}, pairing ${toneDescriptor} design systems with measurable growth.`;

  const narrative = `${heroTone} ${toneTagline}`;

  return {
    productName,
    slogan,
    headline,
    subheadline,
    promise,
    narrative,
    callToAction,
    features,
    metrics,
    vibe,
    heroLabel,
    testimonial
  };
}

function shuffle<T>(array: T[], rng: () => number): T[] {
  const clone = array.slice();
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

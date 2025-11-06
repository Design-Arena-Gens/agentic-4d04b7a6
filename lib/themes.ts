export type ThemePreset = {
  id: string;
  name: string;
  description: string;
  palette: {
    background: string;
    surface: string;
    surfaceStrong: string;
    surfaceAccent: string;
    accent: string;
    accentMuted: string;
    gradient: string;
    highlight: string;
    glow: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  badges: string[];
  patterns: {
    hero: string;
    spotlight: string;
    overlay: string;
  };
};

export const themePresets: ThemePreset[] = [
  {
    id: "aurora-neon",
    name: "Aurora Neon",
    description: "Futuristic gradients with iridescent glows and cinematic depth.",
    palette: {
      background: "#020617",
      surface: "rgba(13, 35, 64, 0.52)",
      surfaceStrong: "rgba(12, 31, 58, 0.85)",
      surfaceAccent: "rgba(11, 37, 84, 0.92)",
      accent: "#5EEAD4",
      accentMuted: "rgba(94, 234, 212, 0.18)",
      gradient: "linear-gradient(135deg,#0ea5e9 0%,#22d3ee 45%,#22d3ee 60%,#9333ea 100%)",
      highlight: "rgba(59, 130, 246, 0.45)",
      glow: "0 0 80px rgba(94, 234, 212, 0.35)"
    },
    fonts: {
      heading: "var(--font-grotesk)",
      body: "var(--font-manrope)"
    },
    badges: ["Futuristic", "Iridescent", "Dark UI"],
    patterns: {
      hero: "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.25), transparent 55%)",
      spotlight: "rgba(94, 234, 212, 0.35)",
      overlay: "linear-gradient(120deg, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.25))"
    }
  },
  {
    id: "noir-brutalism",
    name: "Noir Brutalism",
    description: "High-contrast brutalist composition with sharp typography and grids.",
    palette: {
      background: "#050505",
      surface: "rgba(14, 14, 14, 0.92)",
      surfaceStrong: "rgba(16, 16, 16, 0.95)",
      surfaceAccent: "rgba(23, 23, 23, 0.95)",
      accent: "#FDE047",
      accentMuted: "rgba(253, 224, 71, 0.15)",
      gradient: "linear-gradient(135deg,#fde047,#f59e0b,#f97316)",
      highlight: "rgba(253, 224, 71, 0.45)",
      glow: "0 0 60px rgba(253, 224, 71, 0.35)"
    },
    fonts: {
      heading: "var(--font-dm-serif)",
      body: "var(--font-inter)"
    },
    badges: ["Brutalist", "Editorial", "High Contrast"],
    patterns: {
      hero: "linear-gradient(120deg, rgba(253, 224, 71, 0.15), rgba(249, 115, 22, 0.15))",
      spotlight: "rgba(253, 224, 71, 0.25)",
      overlay: "linear-gradient(90deg, rgba(253, 224, 71, 0.12), rgba(249, 115, 22, 0.18))"
    }
  },
  {
    id: "biophilic-serenity",
    name: "Biophilic Serenity",
    description: "Organic shapes and biophilic color palettes evoking calm innovation.",
    palette: {
      background: "#02130F",
      surface: "rgba(8, 45, 36, 0.78)",
      surfaceStrong: "rgba(9, 58, 45, 0.92)",
      surfaceAccent: "rgba(10, 78, 55, 0.88)",
      accent: "#4ADE80",
      accentMuted: "rgba(74, 222, 128, 0.15)",
      gradient: "linear-gradient(140deg,#22c55e,#16a34a,#0f766e)",
      highlight: "rgba(34, 197, 94, 0.35)",
      glow: "0 0 80px rgba(34, 197, 94, 0.3)"
    },
    fonts: {
      heading: "var(--font-playfair)",
      body: "var(--font-inter)"
    },
    badges: ["Organic", "Wellness", "Sustainable"],
    patterns: {
      hero: "radial-gradient(circle at 0% 20%, rgba(34,197,94,0.25), transparent 55%)",
      spotlight: "rgba(74, 222, 128, 0.35)",
      overlay: "linear-gradient(160deg, rgba(74, 222, 128, 0.12), rgba(8, 145, 178, 0.2))"
    }
  },
  {
    id: "afterglow-art-deco",
    name: "Afterglow Art Deco",
    description: "Art deco geometry with luminous afterglow gradients and luxe accents.",
    palette: {
      background: "#0C0612",
      surface: "rgba(35, 22, 53, 0.78)",
      surfaceStrong: "rgba(42, 26, 64, 0.92)",
      surfaceAccent: "rgba(48, 30, 73, 0.85)",
      accent: "#F472B6",
      accentMuted: "rgba(244, 114, 182, 0.18)",
      gradient: "linear-gradient(130deg,#f472b6,#c084fc,#8b5cf6,#38bdf8)",
      highlight: "rgba(244, 114, 182, 0.45)",
      glow: "0 0 90px rgba(192, 132, 252, 0.35)"
    },
    fonts: {
      heading: "var(--font-dm-serif)",
      body: "var(--font-manrope)"
    },
    badges: ["Luxe", "Art Deco", "Gradient"],
    patterns: {
      hero: "linear-gradient(120deg, rgba(244,114,182,0.16), rgba(139,92,246,0.18))",
      spotlight: "rgba(192, 132, 252, 0.4)",
      overlay: "linear-gradient(135deg, rgba(244, 114, 182, 0.2), rgba(56, 189, 248, 0.18))"
    }
  },
  {
    id: "solar-punk",
    name: "Solar Punk Horizon",
    description: "Optimistic solarpunk aesthetic with sun-kissed gradients and tech flora.",
    palette: {
      background: "#061214",
      surface: "rgba(10, 43, 52, 0.78)",
      surfaceStrong: "rgba(12, 52, 63, 0.88)",
      surfaceAccent: "rgba(27, 64, 64, 0.92)",
      accent: "#FACC15",
      accentMuted: "rgba(250, 204, 21, 0.14)",
      gradient: "linear-gradient(140deg,#22d3ee,#facc15,#f97316)",
      highlight: "rgba(250, 204, 21, 0.38)",
      glow: "0 0 75px rgba(250, 204, 21, 0.32)"
    },
    fonts: {
      heading: "var(--font-grotesk)",
      body: "var(--font-inter)"
    },
    badges: ["Solarpunk", "Eco Tech", "Optimistic"],
    patterns: {
      hero: "radial-gradient(circle at 80% 20%, rgba(250,204,21,0.22), transparent 58%)",
      spotlight: "rgba(34, 211, 238, 0.35)",
      overlay: "linear-gradient(130deg, rgba(250, 204, 21, 0.18), rgba(34, 211, 238, 0.16))"
    }
  }
];

export const themeMap = new Map(themePresets.map((theme) => [theme.id, theme]));

export const getThemeById = (id: string): ThemePreset =>
  themeMap.get(id) ?? themePresets[0];

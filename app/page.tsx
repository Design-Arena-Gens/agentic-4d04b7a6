"use client";

import clsx from "clsx";
import { useMemo, useState } from "react";
import LandingPreview from "@/components/landing-preview";
import ThemeSelector from "@/components/theme-selector";
import {
  generateLandingVariant,
  type GeneratorInput,
  type LandingVariant
} from "@/lib/generator";
import { getThemeById, themePresets } from "@/lib/themes";

const toneOptions: { label: string; value: GeneratorInput["tone"]; description: string }[] = [
  {
    label: "Visionary",
    value: "visionary",
    description: "Audacious, future-forward storytelling for moonshot teams."
  },
  {
    label: "Grounded",
    value: "grounded",
    description: "Measured, trustworthy voice for operations-first launches."
  },
  {
    label: "Luxe",
    value: "luxe",
    description: "High-fashion, sensorial language for premium experiences."
  }
];

const createSeed = () => Date.now() + Math.floor(Math.random() * 10_000);

export default function HomePage() {
  const [activeThemeId, setActiveThemeId] = useState<string>(themePresets[0].id);
  const [seed, setSeed] = useState<number>(createSeed());
  const [input, setInput] = useState<GeneratorInput>({
    productName: "",
    focus: "",
    audience: "",
    tone: "visionary"
  });

  const activeTheme = useMemo(() => getThemeById(activeThemeId), [activeThemeId]);
  const variant = useMemo<LandingVariant>(
    () => generateLandingVariant(activeThemeId, input, seed),
    [activeThemeId, input, seed]
  );

  const updateInput = <K extends keyof GeneratorInput>(key: K, value: GeneratorInput[K]) => {
    setInput((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const randomizeVariant = () => {
    setSeed(createSeed());
  };

  const randomizeTheme = () => {
    const nextPool = themePresets.filter((theme) => theme.id !== activeThemeId);
    const nextTheme = nextPool[Math.floor(Math.random() * nextPool.length)];
    setActiveThemeId(nextTheme.id);
    setSeed(createSeed());
  };

  return (
    <div className="relative overflow-hidden pb-24">
      <div className="noise-overlay" />
      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:px-10 lg:py-20">
        <header className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="theme-pill bg-slate-900/70 px-5 py-2 text-xs uppercase tracking-[0.4em] text-slate-300/80">
            Landing Page Forge
          </span>
          <h1 className="text-balance text-4xl font-semibold text-slate-50 md:text-5xl">
            Generate couture-grade landing pages with cinematic design systems.
          </h1>
          <p className="text-lg text-slate-300/90">
            Compose immersive hero narratives, signature feature sections, and luminous CTAs in
            seconds. Select from curated design universes or let randomness uncover your next
            aesthetic north star.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={randomizeVariant}
              className="theme-gradient shimmer rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-950 transition-transform duration-300 hover:-translate-y-1"
            >
              Generate Variation
            </button>
            <button
              type="button"
              onClick={randomizeTheme}
              className="theme-pill px-7 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/40"
            >
              Surprise Theme
            </button>
          </div>
        </header>

        <div className="grid gap-10 lg:grid-cols-[420px,minmax(0,1fr)] xl:gap-12">
          <aside className="control-card sticky top-10 h-max space-y-8 border border-slate-800/40 px-7 py-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-sm uppercase tracking-[0.35em] text-slate-400">Narrative DNA</h2>
                <p className="mt-2 text-sm text-slate-400/80">
                  Define what you&apos;re launching and who you&apos;re inviting so the generator can
                  tailor language and structure.
                </p>
              </div>
              <div className="space-y-5">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    Product Name
                  </span>
                  <input
                    value={input.productName}
                    onChange={(event) => updateInput("productName", event.target.value)}
                    placeholder="e.g. Lumen Atlas"
                    className="mt-2 w-full rounded-xl border border-slate-700/60 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-400/70 focus:ring-2 focus:ring-slate-500/40"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    Product Focus
                  </span>
                  <input
                    value={input.focus}
                    onChange={(event) => updateInput("focus", event.target.value)}
                    placeholder="e.g. interactive analytics for creative teams"
                    className="mt-2 w-full rounded-xl border border-slate-700/60 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-400/70 focus:ring-2 focus:ring-slate-500/40"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    Audience
                  </span>
                  <input
                    value={input.audience}
                    onChange={(event) => updateInput("audience", event.target.value)}
                    placeholder="e.g. venture-backed founders"
                    className="mt-2 w-full rounded-xl border border-slate-700/60 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-slate-400/70 focus:ring-2 focus:ring-slate-500/40"
                  />
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Voice &amp; Tone
                </h3>
                <p className="mt-2 text-sm text-slate-400/80">
                  Select a tonal universe to influence narrative cadence and emphasis.
                </p>
              </div>
              <div className="grid gap-3">
                {toneOptions.map((option) => {
                  const active = input.tone === option.value;
                  return (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() => updateInput("tone", option.value)}
                      className={clsx(
                        "theme-card relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition",
                        active
                          ? "border-slate-200/60 bg-slate-900/60 shadow-glow-md"
                          : "border-slate-800/60 bg-slate-900/40 hover:-translate-y-0.5 hover:border-slate-500/60"
                      )}
                    >
                      <div className="relative z-10 space-y-2">
                        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                          {option.label}
                        </p>
                        <p className="text-sm text-slate-200/85">{option.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <ThemeSelector
              themes={themePresets}
              activeThemeId={activeThemeId}
              onSelect={(themeId) => {
                setActiveThemeId(themeId);
                setSeed(createSeed());
              }}
            />
          </aside>

          <div>
            <LandingPreview theme={activeTheme} variant={variant} />
          </div>
        </div>
      </main>
    </div>
  );
}

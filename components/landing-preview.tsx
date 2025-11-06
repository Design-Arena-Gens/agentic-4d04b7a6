'use client';

import clsx from "clsx";
import type { CSSProperties } from "react";
import type { LandingVariant } from "@/lib/generator";
import type { ThemePreset } from "@/lib/themes";

type LandingPreviewProps = {
  theme: ThemePreset;
  variant: LandingVariant;
};

export default function LandingPreview(props: LandingPreviewProps) {
  const { theme, variant } = props;

  const themeStyles = {
    "--theme-surface": theme.palette.surface,
    "--theme-surface-strong": theme.palette.surfaceStrong,
    "--theme-surface-accent": theme.palette.surfaceAccent,
    "--theme-accent": theme.palette.accent,
    "--theme-accent-muted": theme.palette.accentMuted,
    "--theme-gradient": theme.palette.gradient,
    "--theme-highlight": theme.palette.highlight,
    "--theme-glow": theme.palette.glow,
    "--theme-heading-font": theme.fonts.heading,
    "--theme-body-font": theme.fonts.body
  } as CSSProperties & Record<string, string>;

  return (
    <div className="relative">
      <div className="theme-root relative">
        <div
          className="landing-shell neon-border theme-transition relative overflow-hidden rounded-[2.5rem] border border-slate-900/60 p-10 md:p-12"
          style={themeStyles}
        >
          <div
            className="grid-backdrop"
            style={{ backgroundImage: theme.patterns.overlay }}
          />
          <div
            className="theme-grid-spotlight"
            style={
              {
                "--spotlight-x": "62%",
                "--spotlight-y": "32%",
                background: `radial-gradient(circle at var(--spotlight-x, 60%) var(--spotlight-y, 32%), ${theme.patterns.spotlight}, transparent 60%)`
              } as CSSProperties
            }
          />
          <div className="orbital-ring" style={{ background: theme.patterns.hero }} />
          <div className="relative z-10 space-y-12">
            <header className="relative space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="theme-pill px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-200/80">
                  {variant.heroLabel}
                </span>
                <span className="theme-pill px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200/70">
                  {variant.vibe}
                </span>
              </div>
              <div className="space-y-5">
                <p className="theme-subtle text-sm uppercase tracking-[0.5em]">
                  {variant.slogan}
                </p>
                <h1
                  className="theme-heading text-5xl font-semibold leading-tight text-slate-50 md:text-[3.6rem]"
                  style={{ textShadow: theme.palette.glow }}
                >
                  {variant.headline}
                </h1>
                <p className="max-w-3xl text-lg text-slate-200/85">
                  {variant.subheadline}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button className="theme-gradient shimmer relative z-10 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-slate-950 transition-transform duration-300 hover:-translate-y-1">
                  {variant.callToAction.primary}
                </button>
                <button className="theme-pill px-8 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/40">
                  {variant.callToAction.secondary}
                </button>
              </div>
            </header>

            <div className="glass-panel relative overflow-hidden rounded-3xl border border-slate-700/30 p-8 sm:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/30" />
              <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px]">
                <div className="space-y-4">
                  <h2 className="theme-heading text-2xl font-semibold text-slate-50">
                    Narrative Arc
                  </h2>
                  <p className="text-base leading-relaxed text-slate-200/85">
                    {variant.narrative}
                  </p>
                  <p className="theme-subtle text-sm">{variant.promise}</p>
                </div>
                <div className="rounded-2xl border border-slate-700/50 bg-slate-900/30 p-6">
                  <h3 className="theme-heading text-base font-semibold text-slate-100">
                    Signal Benchmarks
                  </h3>
                  <div className="mt-5 grid gap-4">
                    {variant.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-2xl font-semibold text-slate-50">
                          {metric.value}
                        </p>
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <h2 className="theme-heading text-2xl font-semibold text-slate-50">
                  Signature Systems
                </h2>
                <span className="theme-pill px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate-300/80">
                  {variant.productName}
                </span>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {variant.features.map((feature) => (
                  <article
                    key={feature.title}
                    className={clsx(
                      "theme-feature-card group relative overflow-hidden border p-6 transition-transform duration-500"
                    )}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
                    <div className="relative flex flex-col gap-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <span className="theme-pill px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-slate-300/80">
                          Feature
                        </span>
                      </div>
                      <h3 className="theme-heading text-xl font-semibold text-slate-100">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-200/80">{feature.description}</p>
                      <p className="theme-subtle text-xs uppercase tracking-[0.35em]">
                        {feature.highlight}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="glass-panel relative overflow-hidden rounded-3xl border border-slate-700/40 p-8 md:p-10">
              <div className="absolute inset-0 opacity-60 mix-blend-screen">
                <div
                  className="h-full w-full"
                  style={{ background: theme.patterns.hero }}
                />
              </div>
              <div className="relative z-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_240px] md:items-center">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-300/80">
                    Community Signal
                  </p>
                  <blockquote className="theme-heading text-2xl font-semibold leading-relaxed text-slate-50">
                    “{variant.testimonial.quote}”
                  </blockquote>
                  <p className="theme-subtle text-sm">
                    {variant.testimonial.author} · {variant.testimonial.role}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700/50 bg-slate-950/40 p-6 text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    Launch Ritual
                  </p>
                  <p className="mt-3 theme-heading text-xl font-semibold text-slate-50">
                    {variant.callToAction.primary}
                  </p>
                  <p className="mt-3 text-sm text-slate-300/80">
                    Align the entire crew around a sensorial launch rehearsal.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

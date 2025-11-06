'use client';

import clsx from "clsx";
import type { ThemePreset } from "@/lib/themes";

type ThemeSelectorProps = {
  themes: ThemePreset[];
  activeThemeId: string;
  onSelect: (themeId: string) => void;
};

const themeAccentStyle = (theme: ThemePreset) => ({
  background: theme.patterns.hero,
  boxShadow: theme.palette.glow,
  borderColor: theme.palette.accentMuted
});

export default function ThemeSelector(props: ThemeSelectorProps) {
  const { themes, activeThemeId, onSelect } = props;

  return (
    <div className="mt-8 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Theme Library
        </h3>
        <span className="rounded-full bg-slate-900/60 px-3 py-1 text-xs text-slate-400">
          {themes.length} options
        </span>
      </div>
      <div className="grid gap-4">
        {themes.map((theme) => (
          <button
            type="button"
            key={theme.id}
            onClick={() => onSelect(theme.id)}
            className={clsx(
              "theme-card relative overflow-hidden rounded-2xl border px-5 py-5 text-left transition-transform duration-500 ease-out",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900",
              activeThemeId === theme.id
                ? "border-emerald-200/60 bg-slate-900/50 shadow-glow-md"
                : "border-slate-700/40 bg-slate-900/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/35"
            )}
            style={themeAccentStyle(theme)}
          >
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Design DNA
                </p>
                <h4
                  className="mt-1 text-xl font-semibold text-slate-50"
                  style={{ fontFamily: theme.fonts.heading }}
                >
                  {theme.name}
                </h4>
              </div>
              <span
                className={clsx(
                  "theme-pill px-3 py-1 text-xs font-medium",
                  activeThemeId === theme.id ? "text-white" : "text-slate-300/80"
                )}
              >
                {activeThemeId === theme.id ? "Selected" : "Preview"}
              </span>
            </div>
            <p className="relative z-10 mt-3 text-sm text-slate-200/85">
              {theme.description}
            </p>
            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {theme.badges.map((badge) => (
                <span
                  key={badge}
                  className="theme-badge rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-100/90"
                >
                  {badge}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

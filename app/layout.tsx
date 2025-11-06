import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Inter,
  Manrope,
  Playfair_Display,
  Space_Grotesk
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "600", "700"]
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"]
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Landing Page Forge",
  description:
    "Generate striking, themed landing pages with imaginative visuals and copy using the Landing Page Forge."
};

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html
      lang="en"
      className={[
        inter.variable,
        manrope.variable,
        playfair.variable,
        grotesk.variable,
        dmSerif.variable
      ].join(" ")}
    >
      <body className="bg-slate-950 text-slate-100 antialiased">
        {props.children}
      </body>
    </html>
  );
}

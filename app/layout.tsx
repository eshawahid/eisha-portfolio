import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/resume";
import ThemeProvider from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

// NOTE: This build environment has no network access to fonts.googleapis.com,
// so font loading falls back to a system stack defined in globals.css.
// On Vercel (or any environment with internet access), swap this back to:
//
//   import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
//   const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
//   const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
//   const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
//
// ...and add `${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`
// to the <body> className below. See README.md for details.

const siteUrl = "https://eishawahid.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — AI Engineer Portfolio`,
    template: `%s — ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Eisha Wahid",
    "AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision",
    "Generative AI",
    "RAG",
    "LLM Engineer Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  openGraph: {
    title: `${profile.name} — AI Engineer Portfolio`,
    description: profile.summary,
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — AI Engineer Portfolio`,
    description: profile.summary,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-body antialiased">
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

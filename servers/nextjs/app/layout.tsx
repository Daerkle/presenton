import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { LayoutProvider } from "./(presentation-generator)/context/LayoutContext";
import { Toaster } from "@/components/ui/sonner";


const inter = localFont({
  src: [
    {
      path: "./fonts/Inter.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://schwarm.ai"),
  title: "SCHWARM - KI-Präsentationsgenerator",
  description:
    "Open-Source KI-Präsentationsgenerator mit anpassbaren Layouts, Multi-Modell-Unterstützung (OpenAI, Gemini, Ollama) und PDF/PPTX-Export. Eine kostenlose Gamma-Alternative.",
  keywords: [
    "KI Präsentationsgenerator",
    "Daten-Storytelling",
    "Datenvisualisierung Tool",
    "KI Datenpräsentation",
    "Präsentationsgenerator",
    "Daten zu Präsentation",
    "interaktive Präsentationen",
    "professionelle Folien",
  ],
  openGraph: {
    title: "SCHWARM - KI-Präsentationsgenerator",
    description:
      "Open-Source KI-Präsentationsgenerator mit anpassbaren Layouts, Multi-Modell-Unterstützung (OpenAI, Gemini, Ollama) und PDF/PPTX-Export. Eine kostenlose Gamma-Alternative.",
    url: "https://schwarm.ai",
    siteName: "SCHWARM",
    images: [
      {
        url: "https://schwarm.ai/schwarm-feature-graphics.png",
        width: 1200,
        height: 630,
        alt: "SCHWARM Logo",
      },
    ],
    type: "website",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://schwarm.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCHWARM - KI-Präsentationsgenerator",
    description:
      "Open-Source KI-Präsentationsgenerator mit anpassbaren Layouts, Multi-Modell-Unterstützung (OpenAI, Gemini, Ollama) und PDF/PPTX-Export. Eine kostenlose Gamma-Alternative.",
    images: ["https://schwarm.ai/schwarm-feature-graphics.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} ${instrument_sans.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50`}
      >
        <Providers>
          <LayoutProvider>
            {children}
          </LayoutProvider>
        </Providers>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

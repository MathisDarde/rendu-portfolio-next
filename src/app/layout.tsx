import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const tt_travels = localFont({
  src: [
    {
      path: "../../public/fonts/tt_travels_next_trial_bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tt_travels",
});

const jmhtypewriter = localFont({
  src: [
    {
      path: "../../public/fonts/jmh_typewriter-webfont.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-jmhtypewriter",
});
const stamped = localFont({
  src: [
    {
      path: "../../public/fonts/stamped_personal_use-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stamped",
});
const helveticacompressed = localFont({
  src: [
    {
      path: "../../public/fonts/helvetica_compressed_regular-webfont.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-helveticacompressed",
});

export const metadata: Metadata = {
  title: "Mathis Dardé",
  description: "Bienvenue sur mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="scroll-smooth">
        <div
          className={`${tt_travels.variable} ${jmhtypewriter.variable} ${stamped.variable} ${helveticacompressed.variable}`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}

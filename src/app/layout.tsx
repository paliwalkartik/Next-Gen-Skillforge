import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ... (keep your existing metadata exactly as is)
  title: "NXT-GEN SKILLFORGE",
  description: "Skill-intelligence platform for job matching, gap analysis, and guided upskilling.",
  keywords: ["Skillforge", "job matching", "skills", "upskilling", "career intelligence", "Next.js"],
  authors: [{ name: "Next Gen Builders" }],
  openGraph: {
    title: "NXT-GEN SKILLFORGE",
    description: "Skill-intelligence platform for job matching and upskilling.",
    siteName: "NXT-GEN SKILLFORGE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NXT-GEN SKILLFORGE",
    description: "Skill-intelligence platform for job matching and upskilling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-200`}
      >
        {/* Wrap your children in the Providers component */}
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
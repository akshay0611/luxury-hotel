import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import { EnvVarWarning } from "@/components/env-var-warning";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Luxury Hotel & Resort",
  description: "Experience luxury and comfort at our premium hotel and resort",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} ${inter.className} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-20">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
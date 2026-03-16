import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innovait Systems",
  description:
    "Innovait is a Chennai-born, globally-minded technology company building intelligent web apps, mobile apps, SaaS platforms, and AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Chatbot />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}

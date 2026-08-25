"use client";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import TechAndStandards from "@/app/components/TechAndStandards";
import Work from "@/app/components/Work";
import Testimonials from "@/app/components/Testimonials";
import Blog from "@/app/components/Blog";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Innovait Systems — Publishing production and custom software</title>
        <meta
          name="description"
          content="Innovait Systems is a Chennai-based technology company delivering publishing production — typesetting, EPUB, and PDF/UA accessibility — alongside custom web, mobile, and SaaS software."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Innovait Systems — Publishing production and custom software" />
        <meta property="og:description" content="Publishing production and custom software, built to accessibility and quality standards." />
        <meta name="theme-color" content="#0A1628" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechAndStandards />
        <Work />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

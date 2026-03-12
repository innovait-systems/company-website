"use client";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";
import Testimonials from "@/app/components/Testimonials";
import Blog from "@/app/components/Blog";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Innovait — Where Intelligence Meets Innovation</title>
        <meta
          name="description"
          content="Innovait is a Chennai-based technology company building intelligent web apps, mobile apps, and SaaS products for businesses that refuse to settle."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Innovait — Where Intelligence Meets Innovation" />
        <meta property="og:description" content="Web apps, mobile apps, and SaaS products built with intelligence at the core." />
        <meta name="theme-color" content="#0A1628" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/brand/Navbar";
import { HeroSection } from "@/components/brand/HeroSection";
import { CapabilitiesSection } from "@/components/brand/CapabilitiesSection";
import { SelectedWorkSection } from "@/components/brand/SelectedWorkSection";
import { BlogSection } from "@/components/brand/BlogSection";
import { ExperiencesSection } from "@/components/brand/ExperiencesSection";
import { AboutSection } from "@/components/brand/AboutSection";
import { ContactSection } from "@/components/brand/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammad Alkhayouti — Let me show you what I can do" },
      {
        name: "description",
        content:
          "Mohammad Alkhayouti. I write, research, prepare content, handle customers, and manage print operations. Looking for work Online or Offline in Damascus.",
      },
      {
        property: "og:title",
        content: "Mohammad Alkhayouti — Let me show you what I can do",
      },
      {
        property: "og:description",
        content:
          "Mohammad Alkhayouti. I write, research, prepare content, handle customers, and manage print operations. Looking for work Online or Offline in Damascus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // If opening or refreshing without a hash anchor, ensure viewport starts at top
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#C7DDE8] text-[#09263B] selection:bg-[#1677B7] selection:text-[#FFFFFF] transition-colors duration-200">
        <Navbar />
        <main>
          <HeroSection />
          <CapabilitiesSection />
          <SelectedWorkSection />
          <BlogSection />
          <ExperiencesSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
}

"use client"

import Chat from "@/components/Chat";
import CTASection from "@/components/CTASection";
import ExpertsSection from "@/components/ExpertsSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InstitutionsSection from "@/components/InstitutionsSection";
import SafetySection from "@/components/SafetySection";
import WellbeingQuiz from "@/components/WellBeingQuiz";
import { useState } from "react";


function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onStartQuiz={() => setShowQuiz(true)} />
      <Features />
      <SafetySection />
      <ExpertsSection />
      <InstitutionsSection />
      <CTASection onStartQuiz={() => setShowQuiz(true)} />
      <Footer />
      {showQuiz && <WellbeingQuiz onClose={() => setShowQuiz(false)} />}
      <div className="fixed bottom-10 right-10"><Chat /></div>
    </div>
  );
}

export default App;
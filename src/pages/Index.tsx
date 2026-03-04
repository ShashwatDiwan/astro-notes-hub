import GlobalBackground from "@/components/GlobalBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import FeaturesSection from "@/components/FeaturesSection";
import ProgressSection from "@/components/ProgressSection";
import StudySheetsSection from "@/components/StudySheetsSection";
import TrustedBySection from "@/components/TrustedBySection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full relative overflow-x-hidden">
      <GlobalBackground />
      <Navbar />
      <main className="relative z-10 flex-grow pt-[72px]">
        <HeroSection />
        <DashboardPreview />
        <FeaturesSection />
        <ProgressSection />
        <StudySheetsSection />
        <TrustedBySection />
      </main>
    </div>
  );
};

export default Index;

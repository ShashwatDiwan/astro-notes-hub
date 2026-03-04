import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import FeaturesSection from "@/components/FeaturesSection";
import ProgressSection from "@/components/ProgressSection";
import StudySheetsSection from "@/components/StudySheetsSection";
import TrustedBySection from "@/components/TrustedBySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <FeaturesSection />
      <ProgressSection />
      <StudySheetsSection />
      <TrustedBySection />
      <Footer />
    </div>
  );
};

export default Index;

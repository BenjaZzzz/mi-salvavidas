import HeroSection from "@/components/sections/HeroSection";
import MusicPlayer from "@/components/ui/MusicPlayer";
import StorySection from "@/components/sections/StorySection";
import GallerySection from "../components/sections/GallerySection";
import MissionYouSection from "@/components/sections/MissingYouSection";
import DistanceSection from "@/components/sections/DistanceSection";
import LifesaverSection from "../components/sections/LifesaverSection";
import FinalSection from "@/components/sections/FinalSection";
import CounterSection from "@/components/sections/CounterSection";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import ReunionSection from "../components/sections/ReasonsSection";
import PremiumBackground from "@/components/ui/PremiumBackground";

export default function Home() {
  return (
    <>
    <PremiumBackground />
    <main>
      <MusicPlayer />
      <HeroSection />
      <StorySection />
      <GallerySection />
      <PhotoGallerySection />
      <MissionYouSection />
      <DistanceSection />
      <CounterSection />
      <ReunionSection />
      <LifesaverSection />
      <FinalSection />
    </main>
    </>
  );
}
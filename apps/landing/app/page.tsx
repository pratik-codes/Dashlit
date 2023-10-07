import { Container } from "../components/container";
import HeroImage from "../components/hero-image";
import FeaturesSection from "../components/Sections/features/features-section";
import HeroSection from "../components/Sections/hero-section";
import JoinWaitListSection from "../components/Sections/join-waitlist/join-waitlist-section";

export default function Homepage() {
  return (
    <div className="overflow-hidden">
      <Container className="pt-[12.4rem]">
        <HeroSection />
      </Container>
      <HeroImage />
      <Container className="py-[8rem]">
        <FeaturesSection />
        <JoinWaitListSection />
      </Container>
    </div>
  );
}

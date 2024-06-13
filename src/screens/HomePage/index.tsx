import Hero from "./components/Hero";
import Couple from "./components/Couple";
import StorySection from "./components/StorySection";
import PortfolioSection from "./components/PortfolioSection";
import RsvpSection from "./components/RsvpSection";
import EventSection from "./components/EventSection";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Couple />
      <StorySection />
      <PortfolioSection />
      <RsvpSection />
      <EventSection />
    </main>
  )
}

export default HomePage;

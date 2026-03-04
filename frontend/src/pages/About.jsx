import AboutHero from "../components/About/AboutHero";
import AboutHeroV2 from "../components/About/AboutHeroV2";
import ClientPromise from "../components/About/ClientPromise";
import FoundersStory from "../components/About/FoundersStory";
import JourneyMilestones from "../components/About/JourneyMilestones";
import MeetTheTeam from "../components/About/MeetTheTeam";
import MissionVision from "../components/About/MissionVision";
import OurValues from "../components/About/OurValues";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Hero/Navbar";

export default function About() {
  return (
    <>
      {/* <AboutHero /> */}
      <Navbar/>
      <AboutHeroV2 />
      <MissionVision />
      <FoundersStory />
      <JourneyMilestones/>
      <OurValues/>
      <MeetTheTeam/>
      <ClientPromise/>
      <Footer/>
    </>
  );
}

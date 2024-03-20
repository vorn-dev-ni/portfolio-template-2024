import { Container } from "@chakra-ui/react";
import HeroSection from "../../components/home/HeroSection";
import AboutMe from "../../components/home/AboutMe";
import Service from "../../components/home/Service";
import Project from "../../components/home/Project";
import SendContact from "../../components/home/SendContact";

const HomePage = () => {
  return (
    <Container maxW="4xl">
      <HeroSection />
      <AboutMe />
      <Service />
      <Project />
      <SendContact />
    </Container>
  );
};

export default HomePage;

import { Container } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "../../components/home/HeroSection";
import AboutMe from "../../components/home/AboutMe";
import Service from "../../components/home/Service";
import Project from "../../components/home/Project";
import SendContact from "../../components/home/SendContact";
import { useEffect } from "react";
import { AosOption } from "../../utils/aos";

const HomePage = () => {
  const navigation = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0 });
    AOS.init(AosOption);
    AOS.refresh();
  }, []);
  useEffect(() => {
    const clearHash = () => {
      if (window.location.hash) {
        navigation("/");
      }
    };

    clearHash();

    return () => clearHash();
  }, []);

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

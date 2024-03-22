import { Container } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
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
import PreviewImage from "../../../src/assets/preview.png";
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
  }, [navigation]);

  return (
    <Container maxW="4xl">
      <Helmet>
        <title>Portfolio - Vorni</title>
        <meta
          name="description"
          content="Hi My name is SivSovanpanhavorn. This is my personal portfolio"
        />
        <meta name="image" content={PreviewImage} />
      </Helmet>
      <HeroSection />
      <AboutMe />
      <Service />
      <Project />
      <SendContact />
    </Container>
  );
};

export default HomePage;

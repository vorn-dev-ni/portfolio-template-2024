import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/profile/pf.jpg";
import SocialStack from "../ui/SocialStack";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <Grid
      as={"section"}
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap={3}
      my={100}
      justifyContent={"space-between"}
      data-aos="slide-down"
    >
      <GridItem w="100%">
        <LeftHeader />
      </GridItem>
      <GridItem w="100%">
        <RightProfile />
      </GridItem>
    </Grid>
  );
};

const LeftHeader = () => {
  const sequence = [
    // Same substring at the start will only be typed out once, initially
    "Hi My Name's",
    1000, // wait 1s before replacing "Mice" with "Hamsters"
    "Siv Sovanpanhavorn",
    2000,
    "Web & Mobile",
    1000,
    "Developer",
    1000,
  ];
  return (
    <Container color={"black"} mb={20}>
      <Box as="div">
        <Text color={"black"}>Hi My Name's</Text>
        <Text color={"primary.500"} fontWeight={"600"} fontSize={16}>
          Siv Sovanpanhavorn
        </Text>

        <TypeAnimation
          sequence={["Web & ", 1000]}
          wrapper="span"
          speed={30}
          cursor={false}
          style={{
            fontSize: "30px",
            display: "inline-block",
            fontWeight: "bold",
          }}
          repeat={1}
        />
        <TypeAnimation
          sequence={[200, "  Mobile "]}
          wrapper="div"
          speed={30}
          cursor={false}
          style={{
            fontSize: "32px",
            display: "inline-block",
            fontWeight: "bold",
          }}
          repeat={1}
        />
        <TypeAnimation
          sequence={[1500, " Designer", 1000, "Developer"]}
          wrapper="div"
          speed={10}
          cursor={true}
          style={{
            fontSize: "32px",
            display: "block",
            fontWeight: "bold",
            textAlign: "end",
            marginLeft: "3px",
          }}
          className="text-center"
          repeat={0}
        />
      </Box>
      <VStack spacing={6} align="start" my={7}>
        <Text color={"accent.300"} textAlign={"justify"}>
          I am committed to continuous learning and staying abreast of the
          latest trends and technologies. I thrive on challenges and am
          passionate about pushing the boundaries of what's possible in web and
          mobile development.
        </Text>

        <Link to={"https://t.me/vornii"} target="_blank">
          <Button
            colorScheme={"orange"}
            bg="primary.400"
            size={{
              base: "md",
              md: "s",
              lg: "lg",
            }}
            p={2}
            justifySelf={"self-start"}
          >
            Hire Me
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

const RightProfile = () => {
  return (
    <Box as="div" position={"relative"} w={"100%"}>
      <Box
        bg="primary.500"
        w="40%"
        p={5}
        color="white"
        opacity={0.3}
        position={"absolute"}
        alignItems={"center"}
        maxWidth={"100%"}
        margin={"auto"}
        justifyContent={"center"}
        top={100}
        left={"25%"}
        right={"35%"}
      ></Box>
      <Center>
        <Image
          borderRadius="full"
          boxSize="350px"
          fit={"cover"}
          src={profileImage}
          alt="Image-Profile"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Center>

      <SocialStack />
    </Box>
  );
};
export default HeroSection;

import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { skills } from "../../utils/info";
import profileImage from "../../assets/profile/pf.jpg";

const AboutMe = () => {
  return (
    <Grid
      id="about-me"
      as={"section"}
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2, 1fr)",
      }}
      gap={10}
      // my={20}
      // mb={20}
      justifyContent={"space-between"}
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
      data-aos-mirror="true"
    >
      <GridItem
        w="100%"
        display={{
          base: "none",
          md: "block",
        }}
      >
        <ImageAvatar />
      </GridItem>
      <GridItem w="100%">
        <RightBarProgress />
      </GridItem>
    </Grid>
  );
};

const RightBarProgress = () => {
  const progressList = [
    {
      subject: "Front End",
      value: 75,
      tags: [skills[0], skills[1], skills[2]],
    },
    {
      subject: "Mobile App ",
      value: 75,
      tags: [skills[3], skills[6], skills[10]],
    },
    {
      subject: "BackEnd ",
      value: 50,
      tags: [skills[5], skills[8]],
    },

    {
      subject: "Figma Tool",
      value: 25,
      tags: [skills[12]],
    },
  ];
  return (
    <Container color={"black"} mb={20}>
      <Box as="div">
        <Heading as={"h3"}>About Me</Heading>
      </Box>
      <VStack spacing={6} align="start" my={4}>
        <Text color={"accent.300"} textAlign={"left"}>
          I specialize in web and mobile development, with expertise in both
          front-end and back-end technologies. My passion lies in crafting
          seamless digital experiences and solving complex technical challenges
          and career.
        </Text>
      </VStack>

      <Box>
        {progressList.map((item, index) => (
          <ProgressChart key={index} item={item} />
        ))}
      </Box>
    </Container>
  );
};

const ProgressChart = ({ item }: { item: any }) => {
  return (
    <Box mb={2}>
      <Text fontSize={"lg"} fontWeight={"500"} color={"black"} mb={2}>
        {item.subject}
      </Text>
      <Slider
        defaultValue={item.value}
        min={0}
        max={100}
        step={25}
        isDisabled
        _disabled={{
          color: "orange",
        }}
        isReadOnly
        size={"lg"}
        variant="primary.400"
      >
        <SliderTrack bg="gray.300" h={2}>
          <SliderFilledTrack bg="primary.500" />
        </SliderTrack>
        <Tooltip placement={`top`} label={`Experience in  ${item.tags}`}>
          <SliderThumb
            boxSize={5}
            borderWidth={2}
            borderColor={"primary.500"}
          />
        </Tooltip>
      </Slider>
    </Box>
  );
};
const ImageAvatar = () => {
  return (
    <Box as="div" position={"relative"} w={"100%"}>
      <Box
        bg="primary.400"
        w="20%"
        color="white"
        opacity={0.5}
        position={"absolute"}
        alignItems={"center"}
        justifyContent={"center"}
        top={"25%"}
        left={0}
        right={0}
        // right={450/2}
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
    </Box>
  );
};
export default AboutMe;

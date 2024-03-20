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
      my={20}
      mb={20}
      justifyContent={"space-between"}
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
        <Text color={"accent.300"}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
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
        w="50%"
        color="white"
        opacity={0.5}
        position={"absolute"}
        alignItems={"center"}
        justifyContent={"center"}
        top={120}
        left={0}
        right={0}
        // right={450/2}
      ></Box>
      <Center>
        <Image
          borderRadius="full"
          boxSize="350px"
          fit={"cover"}
          src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Image-Profile"
          fallbackSrc="https://via.placeholder.com/150"
        />
      </Center>
    </Box>
  );
};
export default AboutMe;

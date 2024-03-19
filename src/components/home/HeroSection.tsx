import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={3}
      my={20}
      justifyContent={"space-between"}
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
  return (
    <Container color={"black"}>
      <Box as="div">
        <Text color={"black"}>Hi i am</Text>
        <Text color={"primary.500"} fontWeight={"600"}>
          Siv Sovanpanhavorn
        </Text>
        <Heading as={"h2"}>Web & Mobile</Heading>
        <Heading as={"h2"} textAlign={"right"}>
          Developer
        </Heading>
      </Box>
      <VStack spacing={6} align="start" my={7}>
        <Text color={"accent.300"}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </Text>
        <Button
          colorScheme={"orange"}
          bg="primary.400"
          size={"xs"}
          p={2}
          justifySelf={"self-start"}
        >
          Hire Me
        </Button>
      </VStack>
    </Container>
  );
};

const RightProfile = () => {
  return (
    <Box as="div" position={"relative"} w={"100%"}>
      <Box
        bg="primary.400"
        w="50%"
        p={6}
        color="white"
        opacity={0.5}
        position={"absolute"}
        alignItems={"center"}
        justifyContent={"center"}
        top={120}
        left={450 / 4}
        // right={450/2}
      ></Box>
      <Image
        borderRadius="full"
        boxSize="450px"
        fit={"cover"}
        src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Image-Profile"
        fallbackSrc="https://via.placeholder.com/150"
      />
    </Box>
  );
};
export default HeroSection;

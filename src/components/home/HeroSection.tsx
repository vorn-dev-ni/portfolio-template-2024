import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import SocialStack from "../ui/SocialStack";
const HeroSection = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2, 1fr)",
      }}
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
    <Container color={"black"} mb={20}>
      <Box as="div">
        <Text color={"black"}>Hi My Name's</Text>
        <Text color={"primary.500"} fontWeight={"600"} fontSize={16}>
          Siv Sovanpanhavorn
        </Text>
        <Heading as={"h2"}>Web & Mobile</Heading>
        <Heading
          as={"h2"}
          textAlign={{
            base: "start",
            md: "right",
          }}
        >
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
       p={5}
       
      
        color="white"
        opacity={0.3}
        position={"absolute"}
        alignItems={"center"}
        maxWidth={'100%'}
        margin={'auto'}

        justifyContent={"center"}
        top={20}
        left={'25%'}
        right={'25%'}
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

      <SocialStack />
    </Box>
  );
};
export default HeroSection;

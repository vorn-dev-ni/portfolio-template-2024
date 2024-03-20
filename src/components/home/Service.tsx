import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import IconBackend from "../../assets/backend.png";
import IconFrontend from "../../assets/web.png";
import IconMobile from "../../assets/phone.png";
import IconDesign from "../../assets/uiux.png";

const Service = () => {
  const services = [
    {
      img: IconDesign,
      skill: "UX UI",
      description: "Tool like Figma ",
    },
    {
      img: IconFrontend,
      skill: "Front End",
      description:
        "Familiar with React Js, Vue Js and server side like Next Js",
    },
    {
      img: IconMobile,
      skill: "Mobile App",
      description:
        "Familiar with React Js, Vue Js and server side like Next Js",
    },
    {
      img: IconBackend,
      skill: "Backend",
      description:
        "Experience Backend Javascript like Nodejs , express and Python Django to build restful API.",
    },
  ];
  return (
    <Container mb={100} maxWidth={'1200px'}>
      <Heading as={"h3"} textAlign={"center"}>
        Services
      </Heading>
      <VStack spacing={6} align="start" my={4}>
        <Text color={"accent.300"} textAlign={"center"}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </Text>
      </VStack>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4,1fr)",
        }}
        my={10}
        gap={5}
      >
        {services.map((service, index) => (
          <GridItem key={index}>
            <CardSkill item={service} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
const CardSkill = ({ item }: { item: any }) => {
  return (
    <Card
      bg="#F8F8F8"
      shadow={0}
      maxW="xl"
      minH={250}
      borderRadius={"lg"}
     className="hover:bg-gray-100 hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all"
    >
      <CardHeader mb={0}>
        <Image
          boxSize={10}
          src={item?.img}
          alt="skill-icon"
          borderRadius="lg"
          objectFit={"contain"}
        />
      </CardHeader>
      <CardBody fontSize={12.5} fontWeight={"lg"} color={"black"} my={0} >
        <Heading size="md" mb={2}>
          {item.skill}
        </Heading>
        <Text textOverflow={"ellipsis"}>{item.description}</Text>
      </CardBody>
    </Card>
  );
};
export default Service;

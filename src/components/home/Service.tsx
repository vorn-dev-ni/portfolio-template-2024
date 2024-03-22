import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
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
      img: IconFrontend,
      skill: "Front End",
      description:
        "Familiar with React Js, Vue Js and server side like Next Js",
    },
    {
      img: IconMobile,
      skill: "Mobile App",
      description:
        "Some Experience in React Native and Flutter for hybrid platform",
    },
    {
      img: IconBackend,
      skill: "Backend",
      description:
        "Experience Backend Javascript like Nodejs , express and Python Django to build restful API.",
    },
    {
      img: IconDesign,
      skill: "Other",
      description: "Understanding in using Tool like Figma for designing and Word Press for CMS Web application",
    },
  ];
  return (
    <Container
      // mb={100}
      maxWidth={"1200px"}
      data-aos="slide-down"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
      as={"section"}
    >
      <Heading as={"h3"} textAlign={"center"}>
        Services
      </Heading>
      <VStack spacing={6} align="start" my={4}>
        <Text color={"accent.300"} textAlign={"center"}>
          On the front-end, I excel in React.js and Next.js, leveraging their
          powerful features to create dynamic and responsive user interfaces.
          For the back-end, I prefer Express.js for its simplicity and
          scalability, allowing me to build robust APIs and services
          efficiently. In the realm of mobile development, I'm proficient in
          Flutter and React Native,
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
      data-aos="fade-down-right"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
      data-aos-mirror="true"
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
      <CardBody fontSize={12.5} fontWeight={"lg"} color={"black"} my={0}>
        <Heading size="md" mb={2}>
          {item.skill}
        </Heading>
        <Text textOverflow={"ellipsis"}>{item.description}</Text>
      </CardBody>
    </Card>
  );
};
export default Service;

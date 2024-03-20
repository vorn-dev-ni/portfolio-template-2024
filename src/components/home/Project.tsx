import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import Example from "../../assets/projects/example.png";
import { useEffect, useState } from "react";
const initState = [
  {
    img: Example,
    tag: ["all", "front end"],
    description: "Restaurant App",
  },
  {
    img: Example,
    tag: ["all", "back end"],

    description: "Todo task",
  },
  {
    img: Example,
    tag: ["all", "mobile"],
    description: "Social Fire App",
  },
];
const Project = () => {
  return (
    <Box mb={100}>
      <Heading as={"h3"} textAlign={"center"}>
        My Project
      </Heading>
      <VStack spacing={6} align="start" my={4}>
        <Text color={"accent.300"} textAlign={"center"}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </Text>
      </VStack>
      <TabSection />
    </Box>
  );
};

const TabSection = () => {
  const tabs = ["All Project", "Front End", "Mobile", "Back End", "UX UI"];
  const [selectTab, setSelectTab] = useState<string>("all");

  return (
    <Tabs variant="unstyled" w="100%">
      <Container my={20}>
        <VStack>
          <TabList>
          <Grid templateColumns={{
            base:"repeat(2,1fr)",
            md:"repeat(5,1fr)",
            lg:"repeat(5,1fr)"
          }} justifyContent={'center'}>
              {tabs.map((tab, index) => (
                <GridItem>
                  <Tab
                    onClick={() => setSelectTab(tab)}
                    key={index}
                    textAlign={'center'}
                    _selected={{ color: "white", bg: "primary.400" }}
                    borderRadius={"lg"}
                  >
                    {tab}
                  </Tab>
                </GridItem>
              ))}
            </Grid>
          </TabList>
        </VStack>
      </Container>

      <TabPanels>
        <PanelSection selectTag={selectTab} />;
      </TabPanels>
    </Tabs>
  );
};

const PanelSection = ({ selectTag }: { selectTag: string }) => {
  const [projects, setProjects] = useState(initState);
  useEffect(() => {
    setProjects((pre) =>
      pre.filter((project) => project.tag.includes(selectTag.toLowerCase()))
    );
    return () => setProjects(initState);
  }, [selectTag]);
  return (
    <Grid
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      gap={10}
    >
      {projects.length ? (
        projects.map((project, index) => (
          <ProjectCard item={project} key={index} />
        ))
      ) : (
        <GridItem
          colSpan={3}
          w="100%"
          textAlign={"center"}
          minH={389}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <VStack spacing={2}>
            <Heading fontSize={"md"} as="h2">
              Not Found
            </Heading>
            <Text>Sorry we could'nt find any related project</Text>
          </VStack>
        </GridItem>
      )}
    </Grid>
  );
};
const ProjectCard = ({ item }: { item: any }) => {
  return (
    <Card
      bg="#F8F8F8"
      shadow={0}
      maxW="xl"
      minH={250}
      borderRadius={"lg"}
      className="hover:bg-gray-100 hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all"
    >
      <Image
        boxSize={"100%"}
        src={item?.img}
        alt="skill-icon"
        borderRadius="lg"
        objectFit={"contain"}
      />

      <CardBody fontSize={12.5} fontWeight={"lg"} color={"black"} my={0}>
        <Text textOverflow={"ellipsis"} color={"primary.500"} fontSize={16}>
          {item.tag}
        </Text>

        <Heading size="md" my={2}>
          {item.description}
        </Heading>
      </CardBody>
    </Card>
  );
};
export default Project;

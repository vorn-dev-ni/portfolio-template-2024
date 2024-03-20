import {
  Box,
  Card,
  CardBody,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  CardHeader,
} from "@chakra-ui/react";
import Example from "../../assets/projects/vuejs-twitch.jpg";
import VueProject from "../../assets/projects/vuejs-twitch.jpg";
import { useEffect, useState } from "react";
import { skills } from "../../utils/info";

const initState = [
  {
    img: Example,
    tag: ["All", "Front End"],
    description: "Restaurant Menu",
    languages: [skills[0], skills[1]],
  },

  {
    img: Example,
    tag: ["All", "Front End"],
    description: "Product Shop",
    languages: [skills[0]],
  },
  {
    img: Example,
    tag: ["All", "Front End"],
    description: "ChatGPT Clone",
    languages: [skills[0]],
  },
  {
    img: Example,
    tag: ["All", "Front End"],
    description: "Portfolio Website",
    languages: [skills[0]],
  },
  {
    img: Example,
    tag: ["All", "Front End", "Other"],
    description: "Ecommerce Website",
    languages: [skills[11]],
  },
  {
    img: VueProject,
    tag: ["All", "Front End"],
    description: "Twitter Clone",
    languages: [skills[0], skills[2]],
  },
  {
    img: Example,
    tag: ["All", "Front End"],
    description: "Shop Location",
    languages: [skills[0]],
  },
  {
    img: Example,
    tag: ["All", "Front End"],
    description: "Courses Study",
    languages: [skills[0]],
  },
  {
    img: Example,
    tag: ["All", "Front End", "Back End"],
    description: "Movie Cinema ",
    languages: [skills[7]],
  },
  {
    img: Example,
    tag: ["All", "Back End"],
    description: "Task todo API",
    languages: [skills[8], skills[9]],
  },
  {
    img: Example,
    tag: ["All", "Back End"],
    description: "Product Ecommerce API",
    languages: [skills[4], skills[5]],
  },
  {
    img: Example,
    tag: ["All", "Back End"],
    description: "Job Application API similar to linkedIn ",
    languages: [skills[8], skills[9]],
  },
  {
    img: Example,
    tag: ["All", "Mobile"],
    description: "Donation App UI clone ",
    languages: [skills[6]],
  },

  {
    img: Example,
    tag: ["All", "Mobile"],
    description: "Archei App Scanner Convert Image to Text and Saved locAlly",
    languages: [skills[6]],
  },
  {
    img: Example,
    tag: ["All", "Mobile"],
    description: "Social Fire App Similar to Instagram",
    languages: [skills[6]],
  },
  {
    img: Example,
    tag: ["All", "Mobile"],
    description: "Social Fire App Similar to Instagram",
    languages: [skills[6]],
  },
  {
    img: Example,
    tag: ["All", "Mobile"],
    description: "Job Finder Application",
    languages: [skills[3]],
  },
  {
    img: Example,
    tag: ["All", "Mobile"],
    description: "Ecommerce Mobile App",
    languages: [skills[3]],
  },
  {
    img: Example,
    tag: ["All", "Mobile"],
    description: "Movie News App",
    languages: [skills[3]],
  },
  {
    img: Example,
    tag: ["All", "Mobile"],
    description: "Simple Todo App",
    languages: [skills[10]],
  },
];
const Project = () => {
  return (
    <Box mb={100} id="project-me">
      <Heading as={"h3"} textAlign={"center"}>
        My Project
      </Heading>
      <VStack spacing={6} align="start" my={4}>
        <Text color={"accent.300"} textAlign={"center"}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convAllis pretium. Turpis tempus
          pharetra
        </Text>
      </VStack>
      <TabSection />
    </Box>
  );
};

const TabSection = () => {
  const tabs = ["All Project", "Front End", "Mobile", "Back End", "Other"];
  const [selectTab, setSelectTab] = useState<string>("All");

  return (
    <Tabs variant="unstyled" w="100%">
      <Container my={20}>
        <VStack>
          <TabList>
            <Grid
              templateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(5,1fr)",
                lg: "repeat(5,1fr)",
              }}
              justifyContent={"center"}
            >
              {tabs.map((tab, index) => (
                <GridItem key={index}>
                  <Tab
                    onClick={() => setSelectTab(tab)}
                    key={index}
                    textAlign={"center"}
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
      pre.filter((project) => project.tag.includes(selectTag.trim()))
    );
    return () => setProjects(initState);
  }, [selectTag]);
  return (
    <Grid
      templateColumns={{
        base: "repeat(0,1fr)",
        md: "repeat(1,1fr)",
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
          <VStack spacing={1}>
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
      // minH={250}
      borderRadius={"lg"}
      className="hover:bg-gray-100 hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-All"
    >
      <CardHeader p={0}>
        <Image
          boxSize={"100%"}
          h={"100%"}
          src={item.img}
          my={0}
          alt="skill-icon"
          borderRadius="lg"
          objectFit={"contain"}
        />
      </CardHeader>

      <CardBody fontSize={12.5} fontWeight={"lg"} color={"black"} my={0}>
        <Breadcrumb separator="-" alignItems={"center"}>
          {item.tag.map((skill: string, index: any) => (
            <BreadcrumbItem color={"primary.500"}>
              <Text color={"primary.500"}>{skill}</Text>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        <Heading size="xs" my={1}>
          {item.description}
        </Heading>
      </CardBody>
    </Card>
  );
};
export default Project;

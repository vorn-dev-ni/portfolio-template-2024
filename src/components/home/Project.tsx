import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextJs from "../../assets/icon/next.png";
import laravel from "../../assets/icon/laravel.png";
import NodeJs from "../../assets/icon/node.png";
import ReactJs from "../../assets/icon/react.png";
import Android from "../../assets/icon/android.png";
import RN from "../../assets/icon/rn.svg";
import Flutter from "../../assets/icon/Google-flutter-logo.png";
import Django from "../../assets/icon/dj.png";
import VueProject from "../../assets/projects/vuejs-twitch.jpg";
import Portfolio from "../../assets/preview.png";
import WordPress from "../../assets/projects/wordpress.png";
import { useEffect, useState } from "react";
import { skills } from "../../utils/info";

import ProjectCard from "./ProjectCard";

const initState = [
  {
    id: 1,
    img: NextJs,
    tag: ["All Project", "Front End"],
    description: "Restaurant Menu",
    languages: [skills[0], skills[1]],
    link: "",
    sourceCode: "https://github.com/nroV/restaurant_menu.git",
  },

  {
    id: 2,
    img: ReactJs,
    tag: ["All Project", "Front End"],
    description: "Product Shop",
    languages: [skills[0]],
    link: "",
    sourceCode: "https://gitlab.com/web4913608/e-commerceproduct",
  },

  {
    id: 3,
    img: Portfolio,
    tag: ["All Project", "Front End"],
    description: "Portfolio Website",
    languages: [skills[0]],
    link: "https://65fd342cad067c0008183b48--panhavorn-portfolio.netlify.app/",
    sourceCode: "https://github.com/vorn-dev-ni/portfolio-template-2024",
  },
  {
    id: 4,
    img: WordPress,
    tag: ["All Project", "Front End", "Other"],
    description: "Ecommerce Website",
    languages: [skills[11]],
    link: "https://vorn.ss2.store/",
    sourceCode: "",
  },
  {
    id: 5,
    img: VueProject,
    tag: ["All Project", "Front End"],
    description: "Twitter Clone",
    languages: [skills[0], skills[2]],
    link: "https://main--twitch-vue-clone.netlify.app/home",
    sourceCode: "https://github.com/vorn-dev-ni/twitter-node-express",
  },
  {
    id: 6,
    img: ReactJs,
    tag: ["All Project", "Front End"],
    description: "Shop Location",
    languages: [skills[0]],
    link: "",
    sourceCode: "https://github.com/nroV/ShopLocationApi",
  },
  {
    id: 7,
    img: ReactJs,
    tag: ["All Project", "Front End"],
    description: "Courses Study",
    languages: [skills[0]],
    link: "",
    sourceCode: "https://github.com/nroV/onlinecourse-reactjs",
  },
  {
    id: 8,
    img: laravel,
    tag: ["All Project", "Front End", "Back End"],
    description: "Movie Cinema ",
    languages: [skills[7]],
    link: "https://youtu.be/bJjoeHTtbsY",
    sourceCode:
      "https://www.figma.com/file/WSAhlN3wNMTWMd6O2RmpRn/Untitled?type=design&mode=design&t=kyUhpaL2nCTySFf0-0",
  },
  {
    id: 9,
    img: NodeJs,
    tag: ["All Project", "Back End"],
    description: "Task todo API",
    languages: [skills[8], skills[9]],
    link: "https://main--twitch-vue-clone.netlify.app/home",
    sourceCode: "https://github.com/vorn-dev-ni/twitter-node-express",
  },
  {
    id: 10,
    img: Django,
    tag: ["All Project", "Back End"],
    description: "Product Ecommerce API",
    languages: [skills[4], skills[5]],
    link: "",
    sourceCode: "https://gitlab.com/Vornii/django-api-ecommerce",
  },
  {
    id: 11,
    img: NodeJs,
    tag: ["All Project", "Back End"],
    description: "Job Application API similar to linkedIn ",
    languages: [skills[8], skills[9]],
    link: "",
    sourceCode: "https://gitlab.com/Vornii/jobapplicationapi",
  },
  {
    id: 12,
    img: RN,
    tag: ["All Project", "Mobile"],
    description: "Donation App UI clone ",
    languages: [skills[6]],
    link: "",
    sourceCode: "https://github.com/nroV/Donation-App.git",
  },

  {
    id: 13,
    img: RN,
    tag: ["All Project", "Mobile"],
    description: "Archei App Scanner Convert Image to Text and Saved locAlly",
    languages: [skills[6]],
  },
  {
    id: 14,
    img: NodeJs,
    tag: ["All Project", "Back End"],
    description: "Twitter Clone Service API",
    languages: [skills[4], skills[5]],
    link: "https://twitter-node-express.onrender.com/api/tweets",
    sourceCode: "https://github.com/vorn-dev-ni/twitter-node-express",
  },
  {
    id: 15,
    img: RN,
    tag: ["All Project", "Mobile"],
    description: "Social Fire App Similar to Instagram",
    languages: [skills[6]],
    link: "",
    sourceCode: "https://github.com/nroV/Social-Fire.git",
  },

  {
    id: 17,
    img: Flutter,
    tag: ["All Project", "Mobile"],
    description: "Ecommerce Mobile App",
    languages: [skills[3]],
    link: "",
    sourceCode: "https://github.com/nroV/Flutter-Ecommerce.git",
  },
  {
    id: 18,
    img: Flutter,
    tag: ["All Project", "Mobile"],
    description: "Movie News App",
    languages: [skills[3]],
  },
  {
    id: 19,
    img: Android,
    tag: ["All Project", "Mobile"],
    description: "Simple Todo App",
    languages: [skills[10]],
    link: "",
    sourceCode: "https://gitlab.com/Vornii/android-todo-list",
  },
  {
    id: 20,
    img: ReactJs,
    tag: ["All Project", "Front End"],
    description: "ChatGPT Clone",
    languages: [skills[0]],
    link: "",
    sourceCode: "https://gitlab.com/web4913608/chatgptclone",
  },
];
const Project = () => {
  return (
    <Box
      mb={100}
      as={"section"}
      id="project-me"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-anchor-placement="top-center"
    >
      <Heading as={"h3"} textAlign={"center"}>
        My Project
      </Heading>
      <VStack spacing={6} align="start" my={4}>
        <Text color={"accent.300"} textAlign={"center"}>
          During my four years of school, I undertook a comprehensive project
          that showcased my expertise in web and mobile development, leveraging
          a variety of frameworks to deliver a robust and innovative solution
        </Text>
      </VStack>
      <TabSection />
    </Box>
  );
};

const TabSection = () => {
  const tabs = ["All Project", "Front End", "Mobile", "Back End", "Other"];
  const [selectTab, setSelectTab] = useState<string>("All Project");

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
  const [target, setTarget] = useState<any | null>(null);
  const clickProject = (item: any) => {
    if (target?.id === item?.id) {
      setTarget(null);
    } else {
      setTarget(item);
    }
  };
  useEffect(() => {
    setProjects((pre) =>
      pre.filter((project) => project.tag.includes(selectTag.trim()))
    );
    return () => {
      setProjects(initState);
      setTarget(null);
    };
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
          <ProjectCard
            item={project}
            key={project.id}
            onClick={clickProject}
            target={target}
          />
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

export default Project;

import {
  Card,
  CardHeader,
  Image,
  BreadcrumbItem,
  Breadcrumb,
  CardBody,
  Text,
  Box,
  Link,
  Button,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa6";

const ProjectCard = ({
  item,
  target,
  onClick,
}: {
  item: any;
  target: any;
  onClick: (item: any) => void;
}) => {
  return (
    <Card
      onClick={() => onClick(item)}
      bg="#F8F8F8"
      shadow={0}
      maxW="xl"
      borderRadius={"lg"}
      className="hover:bg-gray-100 hover:cursor-pointer hover:scale-105 duration-300 ease-in-out transition-all"
    >
      <CardHeader p={0}>
        <Image
          boxSize={"100%"}
          h={200}
          src={item.img}
          my={0}
          alt="skill-icon"
          borderRadius="lg"
          objectFit={"contain"}
          backgroundPosition={"center"}
        />
      </CardHeader>

      <CardBody fontSize={12.5} fontWeight={"lg"} color={"black"} my={0}>
        <Breadcrumb separator="-" alignItems={"center"}>
          {item.tag.map(
            (skill: string, index: any) =>
              skill !== "All Project" && (
                <BreadcrumbItem color={"primary.500"}>
                  <Text color={"primary.500"}>{skill}</Text>
                </BreadcrumbItem>
              )
          )}
        </Breadcrumb>

        <Heading size="xs" my={1}>
          {item.description}
        </Heading>
      </CardBody>

      {target?.id === item?.id && (
        <Box
          key={item?.id}
          className="absolute backdrop-blur-md backdrop-brightness-75 flex items-center justify-center rounded-md 
          
          duration-500 ease-in-out transition-all "
          boxSize={"100%"}
        >
          <VStack>
            {item.sourceCode ? (
              <Link href={item.sourceCode} target="_blank">
                <Button
                  leftIcon={<FaGithub size={18} color="white" />}
                  variant="outline"
                  size={"sm"}
                  color={"white"}
                  _hover={{
                    backgroundColor: "primary.400",
                  }}
                >
                  Git
                </Button>
              </Link>
            ) : (
              <Button
                leftIcon={<FaGithub size={18} color="white" />}
                variant="outline"
                size={"sm"}
                color={"white"}
                _hover={{
                  backgroundColor: "primary.400",
                }}
              >
                Soon
              </Button>
            )}

            {item.link ? (
              <Link href={item.link} target="_blank">
                <Button
                  _hover={{
                    backgroundColor: "primary.400",
                  }}
                  color={"white"}
                  leftIcon={<FaLink size={18} color="white" />}
                  size={"sm"}
                  variant="outline"
                >
                  Visit
                </Button>
              </Link>
            ) : (
              <Button
                leftIcon={<FaLink size={18} color="white" />}
                variant="outline"
                size={"sm"}
                color={"white"}
                _hover={{
                  backgroundColor: "primary.400",
                }}
              >
                Soon
              </Button>
            )}
          </VStack>
        </Box>
      )}
    </Card>
  );
};
export default ProjectCard;

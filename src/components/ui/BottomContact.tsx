import { Box, Center, Container, Flex, List } from "@chakra-ui/react";
import MyLogo from "./MyLogo";
import Menu from "./Menu";
import SocialStack from "./SocialStack";
export const BottomContact = () => {
  const IconImage = "../../assets/icon/Subtract.png";
  return (
    <Box as="div" w="100%" bg={"gray.300"}>
      <Container maxW={"md"}>
        <Center>
          <Flex justifyContent={"center"}>
            <MyLogo />
          </Flex>
        </Center>
      </Container>
      <Container pb={20}>
        <List>
          <Menu layout="hori"/>
          <SocialStack />
        </List>
      </Container>
    </Box>
  );
};

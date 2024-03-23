import { Box, Center, Container, Flex, List } from "@chakra-ui/react";
import MyLogo from "./MyLogo";
import Menu from "./Menu";
import SocialStack from "./SocialStack";
export const BottomContact = () => {
  return (
    <Box as="div" w="100%" bg={"gray.300"} p={5}>
      <Container maxW={"md"}>
        <Center>
          <Flex justifyContent={"center"}>
            <MyLogo />
          </Flex>
        </Center>
      </Container>
      <Container pb={20}>
        <List >
          <Menu layout="hori" />
        </List>
        <Box ml={8}>
          <SocialStack />
        </Box>
      </Container>
    </Box>
  );
};

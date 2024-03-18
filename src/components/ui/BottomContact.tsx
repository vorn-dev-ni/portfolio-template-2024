import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import MyLogo from "./MyLogo";

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
    </Box>
  );
};

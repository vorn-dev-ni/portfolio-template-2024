import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
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

const SendContact = () => {
  return (
    <Box mb={100}>
      
      <Heading as={"h3"} textAlign={"center"}>
        Lets Design Together
      </Heading>
      <VStack spacing={10} align="start" my={10}>
        <Text color={"accent.300"} textAlign={"center"}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </Text>
      </VStack>
      <ContactForm />
    </Box>
  );
};

const ContactForm = () => {
  return (
    <Container>
      <Box>
        <form
          action="
      
      "
        >
          <HStack spacing={3} my={15}>
            <Input
              focusBorderColor="primary.400"
              bg="#F8F8F8"
              placeholder="Enter Your Email"
            />
            <Button colorScheme="orange" bg={'primary.400'} size="md">
              Contact Me
            </Button>
          </HStack>
        </form>
      </Box>
    </Container>
  );
};

export default SendContact;

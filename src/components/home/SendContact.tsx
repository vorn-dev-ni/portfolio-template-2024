import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SendContact = () => {
  return (
    <Box mb={100} id="contact-me">
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
  const mailtoHref =
    "mailto:Nightpp19@gmail.com?subject=Job&body=YourDescription";

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
            <a href={mailtoHref} >
              <Button colorScheme="orange" bg={"primary.400"} size="md">
                Contact Me
              </Button>
            </a>
          </HStack>
        </form>
      </Box>
    </Container>
  );
};

export default SendContact;

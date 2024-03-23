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

const SendContact = () => {
  return (
    <Box
      as={"section"}
      id="contact-me"
      justifyContent={"space-between"}
      my={200}
      // data-aos="fade-down"
      // data-aos-offset="200"
      // data-aos-delay="0"
      // data-aos-duration="500"
      // data-aos-easing="ease-in-out"
      // data-aos-anchor-placement="top-center"
    >
      <Heading as={"h3"} textAlign={"center"}>
        Lets Design Together
      </Heading>
      <VStack spacing={10} align="start" my={10}>
        <Text color={"accent.300"} textAlign={"center"}>
          Please don't mind to contact me if you ever need anything, I am 24h
          available to reply. Thanks you for reaching out I hope working with
          you in the future.
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
    <Container mb={200}>
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
            <a href={mailtoHref}>
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

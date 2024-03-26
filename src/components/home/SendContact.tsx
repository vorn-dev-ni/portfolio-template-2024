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
import { useToast } from '@chakra-ui/react'
import { useRef, useState } from "react";
import { sendMessage } from "../../actions/service";

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
  const toast = useToast()
  const inputRef = useRef<HTMLInputElement | null >(null)
    const handleSubmit =async () => {
      try {
        const result = await sendMessage(inputRef!.current!.value.trim())
        inputRef!.current!.value = ''
        toast({
          title: 'Your Email has Successfully Sent ',
          description: "We've got your contact thanks you",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        console.log(result)
      } catch (error:any) {
        toast({
          title: 'Check your email ',
          description: "Failed to send message",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
  
        
    }
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
              ref={inputRef}

            />
            {/* <a href={mailtoHref}> */}
              <Button colorScheme="orange" bg={"primary.400"} size="md" type="button" onClick={handleSubmit}>
                Contact Me
              </Button>
            {/* </a> */}
          </HStack>
        </form>
      </Box>
    </Container>
  );
};

export default SendContact;

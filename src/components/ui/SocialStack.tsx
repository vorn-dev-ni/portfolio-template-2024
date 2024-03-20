import { HStack } from '@chakra-ui/react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
  } from "react-icons/fa6";

const SocialStack = () => {
  return (
    <HStack my={6} justifyContent={'center'}>
        <FaFacebook size={20} />

        <FaTwitter size={20} />

        <FaInstagram size={20} />

        <FaLinkedin size={20} />
      </HStack>
  )
}

export default SocialStack
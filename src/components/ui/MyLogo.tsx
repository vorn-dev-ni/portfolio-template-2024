import { Container, Image, Flex, Heading } from "@chakra-ui/react";
import ImageIcon from "../../../src/assets/Subtract.png";

const MyLogo = () => {
  return (
    <Container my={10}>
      <Flex alignItems={'center'} gap={4}>
        <Image
          borderRadius="full"
          boxSize="50"
          objectFit={"cover"}
          src={ImageIcon}
          alt="fall-back"
        />
        <Flex fontSize={"16px"}>
          <Heading fontSize={"22.5px"}> P</Heading>
          <Heading fontSize={"22.5px"} color={"accent.300"} fontWeight={"300"}>
            anhavorn
          </Heading>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MyLogo;

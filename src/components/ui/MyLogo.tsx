import { Container, Image, Flex, Heading } from "@chakra-ui/react";
import ImageIcon from "../../../src/assets/Subtract.png";
import { Link } from "react-router-dom";
import { onScrollTop } from "../../actions";

const MyLogo = () => {
  return (
    <Container my={0} className="hover:cursor-pointer">
      <Link to={'/'} onClick={onScrollTop}>
        <Flex alignItems={"center"} gap={4}>
          <Image
            borderRadius="full"
            boxSize="50"
            objectFit={"cover"}
            src={ImageIcon}
            alt="fall-back"
          />
          <Flex fontSize={"16px"}>
            <Heading fontSize={"22.5px"}> P</Heading>
            <Heading
              fontSize={"22.5px"}
              color={"accent.300"}
              fontWeight={"300"}
            >
              anhavorn
            </Heading>
          </Flex>
        </Flex>
      </Link>
    </Container>
  );
};

export default MyLogo;

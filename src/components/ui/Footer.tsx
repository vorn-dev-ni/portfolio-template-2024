import { Box } from "@chakra-ui/react";
import { BottomContact } from "./BottomContact";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { onScrollTop } from "../../actions";
import Info from "./Info";
const Footer = () => {
  return (
    <Box w={"100%"} h={"fit-content"}>
      <ChevronUpIcon
        onClick={onScrollTop}
        bg="white"
        borderRadius={100}
        w={8}
        h={8}
        color="red.500"
        position={"absolute"}
        right={10}
        bottom={20}
      />
      <BottomContact />
      <Info />
    </Box>
  );
};

export default Footer;

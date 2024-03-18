import { Box} from "@chakra-ui/react";
import { BottomContact } from "./BottomContact";
import Info from "./Info";
const Footer = () => {
  return (
    <Box w={"100%"} h={'fit-content'}   sx={{
      position: "sticky",
      bottom: 0,
    }}>
      <BottomContact />
      <Info />
    </Box>
  );
};

export default Footer;

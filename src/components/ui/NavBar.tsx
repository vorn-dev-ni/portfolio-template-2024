import { Container, HStack, List, ListItem, Spacer } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Menu from "./Menu";
import MyLogo from "./MyLogo";
import DrawerMenu from "./DrawerMenu";

const Navbar = () => {
  return (
    <Container as={"nav"} maxWidth="5xl">
      <List
        color={"accent.400"}
        display={"flex"}
        as={"ul"}
        alignItems={"center"}
      >
        <ListItem>
          <MyLogo />
        </ListItem>
        <Spacer />

        <Menu layout="hori"/>
        <DrawerMenu />
       
      </List>
    </Container>
  );
};

export default Navbar;

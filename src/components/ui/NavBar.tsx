import { Container, HStack, List, ListItem, Spacer } from "@chakra-ui/react";
import Menu from "./Menu";
import MyLogo from "./MyLogo";
import DrawerMenu from "./DrawerMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
 
  return (
    <Container
      as={"nav"}
      maxWidth="5xl"
      className="!sticky !top-0 z-40 bg-white my-10 sm:my-0"
      alignItems={"center"}
      mb={150}
    >
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

        <ListItem>
          <Menu layout="hori" />
        </ListItem>

        <DrawerMenu />
      </List>
    </Container>
  );
};

export default Navbar;

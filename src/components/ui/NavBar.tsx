import { Container, HStack, List, ListItem, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import MyLogo from "./MyLogo";

const Navbar = () => {
  const linkStyle = {
    color: "primary.500",
    transitionDuration: "0.25s",
    transitionTimingFunction: "ease-in-out",
  };
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

        <HStack display={{ base: "none", lg: "flex" }} spacing={10}>
          <ListItem _hover={linkStyle}>
            <NavLink to={"/"}>Home</NavLink>
          </ListItem>
          <ListItem _hover={linkStyle}>
            <NavLink to={"/"}>About Me</NavLink>
          </ListItem>
          <ListItem _hover={linkStyle}>
            <NavLink to={"/"}>Projects</NavLink>
          </ListItem>
          <ListItem _hover={linkStyle}>
            <NavLink to={"/"}>Contact</NavLink>
          </ListItem>
          <ListItem  bg={
            "primary.400"
          } color={'white'} px={4} py={2} borderRadius={20}>

            <NavLink to={"/"} download={'/'}>Download CV</NavLink>
          </ListItem>
        </HStack>
      </List>
    </Container>
  );
};

export default Navbar;

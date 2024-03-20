import { HStack, ListItem, VStack, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Menu = ({ layout = "verti" }: { layout: "hori" | "verti" }) => {
  const linkStyle = {
    color: "primary.500",
    transitionDuration: "0.25s",
    transitionTimingFunction: "ease-in-out",
  };
  const direction = layout === "hori" ? "row" : "column";
  return (
    <Stack
      display={{ base: layout === "hori" ? "none" : "block", lg: "flex" }}
      spacing={10}
      direction={direction}
      alignItems={"center"}
      sx={{
        listStyle:'none'
      }}
    >
      <ListItem _hover={linkStyle} mb={8} textAlign={'center'}>
        <NavLink to={"/"}>Home</NavLink>
      </ListItem>
      <ListItem _hover={linkStyle}  mb={8} textAlign={'center'}>
        <NavLink to={"/"}>About Me</NavLink>
      </ListItem>
      <ListItem _hover={linkStyle}  mb={8} textAlign={'center'}>
        <NavLink to={"/"}>Projects</NavLink>
      </ListItem>
      <ListItem _hover={linkStyle}  mb={8} textAlign={'center'}>
        <NavLink to={"/"}>Contact</NavLink>
      </ListItem>
      <ListItem
        bg={"primary.400"}
        color={"white"}
        px={4}
        py={2}
        mb={8}
        textAlign={'center'}
        borderRadius={20}
      >
        <NavLink to={"/"} download={"/"} >
          Download CV
        </NavLink>
      </ListItem>
    </Stack>
  );
};

export default Menu;

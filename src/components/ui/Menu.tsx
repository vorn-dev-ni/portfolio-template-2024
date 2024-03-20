import { HStack, ListItem, VStack, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const Menu = ({ layout = "verti" }: { layout: "hori" | "verti" }) => {
  const linkStyle = {
    color: "primary.500",
    transitionDuration: "0.25s",
    transitionTimingFunction: "ease-in-out",
  };
  const direction = layout === "hori" ? "row" : "column";
  const MyCV = "../../../panhavorn.pdf";
  return (
    <Stack
      display={{ base: layout === "hori" ? "none" : "block", lg: "flex" }}
      spacing={10}
      direction={direction}
      alignItems={"center"}
      sx={{
        listStyle: "none",
      }}
    >
      <ListItem _hover={linkStyle} mb={8} textAlign={"center"}>
        <NavLink to={"/"}>Home</NavLink>
      </ListItem>
      <ListItem _hover={linkStyle} mb={8} textAlign={"center"}>
        <Link href={"/#about-me"}>About Me</Link>
      </ListItem>
      <ListItem _hover={linkStyle} mb={8} textAlign={"center"}>
        <Link href={"/#project-me"}>Projects</Link>
      </ListItem>
      <ListItem _hover={linkStyle} mb={8} textAlign={"center"}>
        <Link href={"/#contact-me"}>Contact</Link>
      </ListItem>
      <ListItem
        bg={"primary.400"}
        color={"white"}
        px={4}
        py={2}
        mb={8}
        textAlign={"center"}
        borderRadius={20}
      >
        <a href={MyCV} download="Sivsovanpanhavorn.pdf">
          Download CV
        </a>
      </ListItem>
    </Stack>
  );
};

export default Menu;

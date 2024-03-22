import { ListItem, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { onScrollTop } from "../../actions";
import { useEffect, useState } from "react";

const Menu = ({ layout = "verti" }: { layout: "hori" | "verti" }) => {
  const linkStyle = {
    color: "primary.500",
    transitionDuration: "0.25s",
    transitionTimingFunction: "ease-in-out",
  };
  const direction = layout === "hori" ? "row" : "column";
  const MyCV = "../../../panhavorn.pdf";
  const [active, setActive] = useState<string | null>("home");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sectionElements = document.querySelectorAll<HTMLElement>("section");
      sectionElements.forEach((element: HTMLElement) => {
        if (window.scrollY + 300 >= element.offsetTop) {
          console.log(element.offsetTop);
          if (element.getAttribute("id")) {
            setActive(element.getAttribute("id"));
          }

        }
      });
    });
  }, []);
  console.log(active);

  return (
    <Stack
      display={{ base: layout === "hori" ? "none" : "block", lg: "flex" }}
      spacing={10}
      direction={direction}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        listStyle: "none",
        marginTop: "27px",
      }}
    >
      {/* className={"text-[#FF6300]"} */}
      <ListItem
        _hover={linkStyle}
        mb={8}
        textAlign={"center"}
        className={`.navbar ${active!.startsWith("home") ? "text-orange-500":"text-gray-600"}`}

      >
        <NavLink to={"/"} onClick={onScrollTop}>
          Home
        </NavLink>
      </ListItem>
      <ListItem
        _hover={linkStyle}
        mb={8}
        textAlign={"center"}
        className={`.navbar ${active!.startsWith("about-me") ? "text-orange-500":"text-gray-600"}`}
      >
        <Link href={"/#about-me"}>About Me</Link>
      </ListItem>
      <ListItem
        _hover={linkStyle}
        mb={8}
        textAlign={"center"}
        className={`.navbar ${active!.startsWith("project-me") ? "text-orange-500":"text-gray-600"}`}
      >
        <Link href={"/#project-me"}>Projects</Link>
      </ListItem>
      <ListItem
        _hover={linkStyle}
        mb={8}
        textAlign={"center"}
        className={`.navbar ${active!.startsWith("contact-me") ? "text-orange-500":"text-gray-600"}`}
      >
        <Link href={"/#contact-me"}>Contact</Link>
      </ListItem>
      <ListItem
        bg={"primary.500"}
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

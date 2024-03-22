import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import MyLogo from "./MyLogo";
import Menu from "./Menu";

function DrawerMenu() {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (newSize: any) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs"];

  return (
    <>
      {sizes.map((size) => (
        <HamburgerIcon
          onClick={() => handleClick(size)}
          key={size}
          m={0}
          w={8}
          h={8}
          color="primary.500"
          sx={{
            display: {
              base: "block",
              md: "none",
            },
          }}
        />
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <MyLogo />
          </DrawerHeader>
          <DrawerBody>
            <Menu layout="verti" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerMenu;

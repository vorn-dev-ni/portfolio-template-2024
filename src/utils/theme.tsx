import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    primary: {
      50: "#ffefe6",
      100: "#FFCFB0",
      200: "#FFB78A",
      300: "#FF9654",
      400: "#FF8233",
      500: "#FF6300",
      600: "#E85A00",
    },
    secondary: {
      500: "#FFFFFF",
      600: "#FBFBFB",
    },
    accent: {
      300: "#545454",
      400: "#333333",
      500: "#000000",
      600: "#000000",
    },
    gray: {
      300: "#E6E6E6",
      400: "#B0B0B0",
      500: "#8A8A8A",
    },
  },
});

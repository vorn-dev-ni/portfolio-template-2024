import { Box, Flex, Text } from "@chakra-ui/react";
const Info = () => {
  return (
    <Box as="div" textAlign="center" bg="accent.300" w={"100%"} p={4}>
      <Flex gap={2} justifyContent={"center"} alignItems={"center"}>
        <Text
          fontSize={{
            base: "12.5px",
            sm: "12.5px",
            md: "16px",
            lg: "18px",
          }}
          color={"secondary.500"}
        >
          @2024
        </Text>
        <Text
          fontSize={{
            base: "12.5px",
            sm: "12.5px",
            md: "16px",
            lg: "18px",
          }}
          color="primary.500"
          fontWeight={"bold"}
        >
          Siv Sovanpanahvorn
        </Text>
        <Text
          fontSize={{
            base: "12.5px",
            sm: "12.5px",
            md: "16px",
            lg: "18px",
          }}
          color={"secondary.500"}
        >
          All Rights Reserved , Inc.
        </Text>
      </Flex>

    </Box>
  );
};

export default Info;

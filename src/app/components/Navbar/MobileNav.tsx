import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AppLogo } from "../AppLogo";
import { mobilenavContainerStyles } from "./style";
import { Social } from "../Social";
export const MobileNav = () => {
  return (
    <Flex {...mobilenavContainerStyles}>
      <Box>nav menu</Box>
      <AppLogo />
      <Social />
    </Flex>
  );
};

import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AppLogo } from "../AppLogo";
import { Social } from "../Social";
import { mobilefooterContainerStyles } from "./style";

export const MobileFooter = () => {
  return  <Flex {...mobilefooterContainerStyles}>
  <AppLogo />
  <Social />
</Flex>
};

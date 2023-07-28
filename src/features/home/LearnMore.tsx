"use client";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  moreImageBoxStyles,
  moreHeadingStyles,
  moreTextStyles,
  moreStyles,
} from "./style";
import { ButtonOrigin } from "@/helpers/ButtonOrigin";

export const LearnMore = () => {
  return (
    <Flex {...moreStyles}>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box>
          <Heading {...moreHeadingStyles}>
            Everyone can be a <br />
            chef in their own kitchen
          </Heading>
          <Text {...moreTextStyles}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut
            enim <br />
            ad minim
          </Text>
        </Box>

        <Flex>
          <ButtonOrigin title="Learn More" />
        </Flex>
      </Box>

      <Box w={{ base: "100%", lg: "50%" }}>
        <Box {...moreImageBoxStyles}></Box>
      </Box>
    </Flex>
  );
};

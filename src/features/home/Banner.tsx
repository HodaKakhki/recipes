"use client";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  Avatar,
  Hide,
} from "@chakra-ui/react";
import React from "react";
import {
  buttonTopStyles,
  ImageTopStyles,
  avatarBannerStyles,
  badgeBannerStyles,
  bannerHeadingStyles,
  bannerTextStyles,
  bannertStyles,
  buttonHourStyles,
  buttonToolsStyles,
  buttonsBannerStyles,
  footerBannerStyles,
  recipeButtonStyles,
} from "./style";

export const Banner = () => {
  return (
    <Flex {...bannertStyles}>
      <Box
        w={{ base: "100%", lg: "50%" }}
        p={"2rem"}
        backgroundColor={"brand.primaryLight"}
      >
        <Button {...buttonTopStyles}>
          <Image
            {...ImageTopStyles}
            alt="paper"
            src="/images/paper.png"
            sizes="24*24"
          />
          <Text> Hot Recipes</Text>
        </Button>
        <Heading {...bannerHeadingStyles}>
          Spicy delicious
          <br /> chicken wings
        </Heading>
        <Text {...bannerTextStyles}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </Text>
        <Stack {...buttonsBannerStyles}>
          <Button {...buttonHourStyles}>
            <Image alt="paper" src="/images/Timer.png" sizes="24*24" />
            <Text ml={"4"}> 30 Minutes</Text>
          </Button>
          <Button {...buttonToolsStyles}>
            <Image alt="paper" src="/images/ForkKnife.png" sizes="24*24" />
            <Text ml={"4"}> Chicken</Text>
          </Button>
        </Stack>
        <Flex {...footerBannerStyles}>
          <Stack {...avatarBannerStyles}>
            <Avatar src={"/images/Ellipse.png"} />
            <Stack>
              <Text>John Smith</Text>
              <Text color={"gray.500"} fontWeight={"500"} fontSize={"14px"}>
                15 March 2022
              </Text>
            </Stack>
          </Stack>

          <Button {...recipeButtonStyles}>
            <Text mr={"4"}> View Recipes</Text>
            <Image alt="paper" src="/images/PlayCircle.png" sizes="24*24" />
          </Button>
        </Flex>
      </Box>
      <Box>
        <Hide below="md">
          <Image {...badgeBannerStyles} alt="badge" src="/images/Badge.png" />
        </Hide>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box
          w={{
            base: "400px",
            lg: "600px",
            sm: "760px",
          }}
          h={{
            base: "300px",
            lg: "500px",
            sm: "400px",
          }}
          bg="center / cover no-repeat url(../images/baked.jpg)"
        ></Box>
      </Box>
    </Flex>
  );
};

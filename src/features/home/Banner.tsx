// React & Chakra Imports
import React from "react";
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

// Local Imports
import {
  buttonTopStyles,
  ImageTopStyles,
  avatarBannerStyles,
  badgeBannerStyles,
  bannerHeadingStyles,
  bannerTextStyles,
  bannerStyles,
  buttonHourStyles,
  buttonToolsStyles,
  buttonsBannerStyles,
  footerBannerStyles,
  bannerImageBoxStyles,
} from "./style";
import { ButtonIcon } from "@/helpers/ButtonIcon";
import CirclePlay from "../../../public/images/svg/CirclePlay";

export const Banner = () => {
  return (
    <Flex {...bannerStyles}>
      <Box
        w={{ base: "100%", lg: "50%" }}
        p={"2rem"}
        backgroundColor={"brand.primaryLight"}
      >
        <Button {...buttonTopStyles}>
          <Image
            {...ImageTopStyles}
            alt="hot recipes icon"
            src="/images/paper.png"
            sizes="24*24"
          />
          <Text> Hot Recipes</Text>
        </Button>
        <Box>
          <Heading {...bannerHeadingStyles}>
            Spicy delicious
            <br /> chicken wings
          </Heading>
          <Text {...bannerTextStyles}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </Text>
        </Box>
        <Stack {...buttonsBannerStyles}>
          <Button {...buttonHourStyles}>
            <Image alt="timer icon" src="/images/Timer.png" sizes="24*24" />
            <Text ml={"4"}>30 Minutes</Text>
          </Button>
          <Button {...buttonToolsStyles}>
            <Image alt="tools icon" src="/images/ForkKnife.png" sizes="24*24" />
            <Text ml={"4"}>Chicken</Text>
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
          <ButtonIcon
            title="View Recipes"
            Icon={<CirclePlay />}
            color={"white"}
          />
        </Flex>
      </Box>
      <Box>
        <Hide below="md">
          <Image {...badgeBannerStyles} alt="badge" src="/images/Badge.png" />
        </Hide>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Box {...bannerImageBoxStyles}></Box>
      </Box>
    </Flex>
  );
};

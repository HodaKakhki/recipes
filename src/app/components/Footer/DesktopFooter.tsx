import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { AppLogo } from "../AppLogo";
import { footerItems } from "@/helpers";
import Link from "next/link";
import {
  desktopFooterStyles,
  logoFooterStyles,
  footeritemsStyles,
  textFooterStyles,
  copyFooterStyles,
} from "./style";
import { Social } from "../Social";

export const DesktopFooter = () => {
  return (
    <Flex {...desktopFooterStyles}>
      <Box {...logoFooterStyles}>
        <AppLogo />
        <Text {...textFooterStyles}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit,
        </Text>
      </Box>

      <Box {...footeritemsStyles}>
        {footerItems &&
          footerItems.map((footerItem) => (
            <Link key={footerItem.label} href={footerItem.href}>
              {footerItem.label}
            </Link>
          ))}
      </Box>
    </Flex>
  );
};

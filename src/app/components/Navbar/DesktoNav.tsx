import React from "react";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { AppLogo } from "../AppLogo";

import { desktopNavStyles, logoSectionStyles, navitemsStyles } from "./style";
import { Social } from "../Social";
import { navItems } from "@/helpers/helpers";

export const DesktopNav = () => {
  return (
    <Flex {...desktopNavStyles}>
      <Stack {...logoSectionStyles}>
        <Box>
          <AppLogo />
        </Box>
        <Box {...navitemsStyles}>
          {navItems &&
            navItems.map((navItem) => (
              <Link key={navItem.label} href={navItem.href}>
                {navItem.label}
              </Link>
            ))}
        </Box>
      </Stack>
      <Social />
    </Flex>
  );
};

import { Box } from "@chakra-ui/react";
import React from "react";
import { DesktopNav } from "./DesktoNav";
import { MobileNav } from "./MobileNav";
import { navbarStyles } from "./style";

export const Navbar = () => {
  return (
    <Box {...navbarStyles}>
      <DesktopNav />
      <MobileNav/>
    </Box>
  );
};

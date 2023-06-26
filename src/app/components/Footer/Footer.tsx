import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";
import { footerDividerStyles, footerStyles } from "./style";
import { BottomFooter } from "./BottomFooter";

const Footer = () => {
  return (
    <Box {...footerStyles}>
      <DesktopFooter />
      <Box {...footerDividerStyles}>
        <Divider />
      </Box>
      <BottomFooter/>
      <MobileFooter />
    </Box>
  );
};

export default Footer;

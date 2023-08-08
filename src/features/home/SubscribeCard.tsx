import React from "react";
import { SectionText } from "@/app/components/SectionText";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { backgroundSubscribeStyle } from "./style";
import { SubscribeBar } from "./SubscribeBar";

export const SubscribeCard = () => {
  const boxMarginBottom = useBreakpointValue({ base: "80px", md: "160px" });

  return (
    <Box mb={boxMarginBottom}>
      <Box {...backgroundSubscribeStyle} >
        <SectionText
          title="Deliciousness to your inbox"
          paragraph="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        />
        <SubscribeBar />
      </Box>
    </Box>
  );
};

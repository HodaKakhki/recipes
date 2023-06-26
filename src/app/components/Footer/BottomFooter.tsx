import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Social } from "../Social";
import { copyFooterStyles } from "./style";

export const BottomFooter = () => {
  return (
    <Flex {...copyFooterStyles}>    
        <Text>© 2020 Flowbase. Powered by Webflow</Text>
        <Social />
     
    </Flex>
  );
};

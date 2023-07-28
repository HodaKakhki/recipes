import React from "react";
import { Link } from "@chakra-ui/next-js";
import { Flex, Stack } from "@chakra-ui/react";
import { iconsSocialStyles, networksStyles } from "./Navbar/style";
import Facebook from "../../../public/images/svg/Facebook";
import Twitter from "../../../public/images/svg/Twitter";
import Instagram from "../../../public/images/svg/Instagram";

export const Social = () => {
  return (
    <Stack direction={"row"} spacing={"1"}>
      <Stack {...networksStyles}>
        <Flex {...iconsSocialStyles}>
          <Link href="/">
            <Facebook />
          </Link>
          <Link href="/">
            <Twitter />
          </Link>
          <Link href="/">
            <Instagram />
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
};

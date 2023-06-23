import React from "react";
import { Link } from "@chakra-ui/next-js";
import { Flex, Stack } from "@chakra-ui/react";
import { iconsSocialStyles, networksStyles } from "./Navbar/style";
import Image from "next/image";
import facebookIcon from "./../../../public/images/facebook-icon.svg";
import twitterIcon from "./../../../public/images/twitter-icon.svg";
import instagramIcon from "./../../../public/images/instagram-icon.svg";

export const Social = () => {
  return (
    <Stack direction={"row"} spacing={"1"}>
      <Stack {...networksStyles}>
        <Flex {...iconsSocialStyles}>
          <Link href="/">
            <Image priority src={facebookIcon} alt="Follow us on Facebook" />
          </Link>
          <Link href="/">
            <Image priority src={twitterIcon} alt="Follow us on Twitter" />
          </Link>
          <Link href="/">
            <Image priority src={instagramIcon} alt="Follow us on Instagram" />
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
};

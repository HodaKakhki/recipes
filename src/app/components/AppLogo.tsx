import { Link } from "@chakra-ui/next-js";
import { Box, Image } from "@chakra-ui/react";
import React from "react";

export const AppLogo = () => {
  return (
    <Link href="/">
      <Image src="/images/logo.png" alt={"logo"} sizes="32*32" />
    </Link>
  );
};

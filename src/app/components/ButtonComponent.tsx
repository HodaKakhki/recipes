"use client";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
interface buttonNameProps {
  btnName: string;
}
export const ButtonComponent = ({ btnName }: buttonNameProps) => {
  return (
    <Link href={"/"}>
      <Button
        size="md"
        my="5rem"
        p={"2rem"}
        rounded={"1rem"}
        bg={"brand.primaryLight"}
      >
        {btnName}
      </Button>
    </Link>
  );
};

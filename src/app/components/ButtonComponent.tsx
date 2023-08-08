"use client";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
interface ButtonNameProps {
  btnName: string;
  bgColor: string;
  color: string;
}

export const ButtonComponent: React.FC<ButtonNameProps> = ({
  btnName,
  bgColor,
  color,
  ...props
}) => {
  return (
    <Link href={"/"}>
      <Button
        as="a"
        size="md"
        my="5rem"
        p={"2rem"}
        rounded={"1rem"}
        bg={bgColor}
        color={color}
        {...props}
      >
        {btnName}
      </Button>
    </Link>
  );
};

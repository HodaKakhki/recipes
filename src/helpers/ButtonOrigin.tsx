"use client";
import { moreButtonStyles } from "@/features/home/style";
import { Box, Button } from "@chakra-ui/react";
import React from "react";
interface ButtonProps {
  title: string;
}
export const ButtonOrigin = ({ title }: ButtonProps) => {
  return (
    <Box>
      <Button {...moreButtonStyles}>{title}</Button>
    </Box>
  );
};

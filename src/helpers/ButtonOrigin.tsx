"use client";
import { moreButtonStyles } from "@/features/home/style";
import { Button } from "@chakra-ui/react";
import React from "react";
interface ButtonProps {
  title: string;
}
export const ButtonOrigin = ({ title }: ButtonProps) => {
  return <Button {...moreButtonStyles}>{title}</Button>;
};

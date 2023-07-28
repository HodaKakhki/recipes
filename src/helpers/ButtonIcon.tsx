import { recipeButtonStyles } from "@/features/home/style";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
interface Icons {
  title: string;
  Icon: React.JSX.Element;
  color: string;
  bgColor: string;
}

export const ButtonIcon = ({ title, Icon, color, bgColor }: Icons) => {
  return (
    <Button {...recipeButtonStyles} style={{ backgroundColor: bgColor }}>
      <Text mr={"4"}>{title}</Text>
      <Text style={{ fill: color }}>{Icon}</Text>
    </Button>
  );
};

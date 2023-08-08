import { recipeButtonStyles } from "@/features/home/style";
import { Button, Text } from "@chakra-ui/react";
import React from "react";

interface ButtonIconProps {
  title: string;
  Icon: React.ReactNode;
  color?: string;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  title,
  Icon,
  color,
}) => {
  return (
    <Button {...recipeButtonStyles}>
      <Text mr="4">{title}</Text>
      {React.cloneElement(Icon as React.ReactElement, { fill: color })}
    </Button>
  );
};

"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
interface SectionTextLeftProps {
  title: string;
  paragraph: string;
}
export const SectionTextLeft = ({ title, paragraph }: SectionTextLeftProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      margin="0 auto"
      maxWidth="90%"
    >
      <Heading size="2xl" my="5rem" lineHeight='3rem'>
        {title}
      </Heading>
      <Text size="md">{paragraph}</Text>
    </Box>
  );
};

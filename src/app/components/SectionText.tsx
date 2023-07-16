"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
interface SectionTextProps {
  title: string;
  paragraph: string;
}
export const SectionText = ({ title, paragraph }: SectionTextProps) => {
  return (
    <Box display="column" textAlign="center" mb="5rem">
      <Heading size="lg" my="1.5rem">
        {title}
      </Heading>
      <Text size="md" display="inline-block" w="55%">
        {paragraph}
      </Text>
    </Box>
  );
};

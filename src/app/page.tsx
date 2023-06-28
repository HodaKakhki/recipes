"use client";
import { Banner } from "@/features/home/Banner";
import { TopCategories } from "@/features/home/TopCategories";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Banner />
      <TopCategories />
    </Box>
  );
}

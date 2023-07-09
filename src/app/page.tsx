"use client";
import { FeaturedBanner } from "@/features/home/FeaturedBanner";
import { TopCategories } from "@/features/home/TopCategories";
import { FeaturedProducts } from "@/features/home/FeaturedProducts";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <FeaturedBanner />
      <TopCategories />
      <FeaturedProducts />
    </Box>
  );
}

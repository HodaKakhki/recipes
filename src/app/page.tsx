"use client";
import { FeaturedBanner } from "@/features/home/FeaturedBanner";
import { TopCategories } from "@/features/home/TopCategories";
import { FeaturedProducts } from "@/features/home/FeaturedProducts";
import { Box } from "@chakra-ui/react";
import { SectionText } from "@/app/components/SectionText";
import { LearnMore } from "@/features/home/LearnMore";
import Posts from "@/features/home/Posts";

export default function Home() {
  return (
    <Box>
      <FeaturedBanner />
      <TopCategories />
      <SectionText
        title={"Simple and tasty recipes"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        }
      />
      <FeaturedProducts />
      <LearnMore />
      <SectionText
        title={"Check out @foodieland on Instagram"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        }
      />
      <Posts />
    </Box>
  );
}

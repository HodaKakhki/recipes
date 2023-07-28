"use client";
import { FeaturedBanner } from "@/features/home/FeaturedBanner";
import { TopCategories } from "@/features/home/TopCategories";
import { FeaturedProducts } from "@/features/home/FeaturedProducts";
import { Box } from "@chakra-ui/react";
import { SectionText } from "@/app/components/SectionText";
import { LearnMore } from "@/features/home/LearnMore";
import Posts from "@/features/home/Posts";
import { ButtonIcon } from "@/helpers/ButtonIcon";
import { SubscribeCard } from "@/features/home/SubscribeCard";
import Instagram from "../../public/images/svg/Instagram";
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
      <Box bgGradient="linear(to-b, #fff, brand.primaryLight)" mb="160px">
        <SectionText
          title={"Check out @foodieland on Instagram"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
          }
        />
        <Posts />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          pb="5rem"
        >
          <ButtonIcon
            title="Visit Our Instagram"
            Icon={<Instagram />} color='white' bgColor=""/>
        </Box>
      </Box>
      <SubscribeCard />
    </Box>
  );
}

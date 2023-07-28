"use clinet";
import React from "react";
import { ButtonComponent } from "@/app/components/ButtonComponent";
import { SectionHeading } from "@/app/components/SectionHeading";
import { TopCategoryCard } from "../home/TopCategoryCard";
import { Box, Grid, GridItem } from "@chakra-ui/react";

export const TopCategories = () => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" mt="160px" mb="183px">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <SectionHeading title={"Categories"} />
        <ButtonComponent
          btnName={"View All Categories"}
          bgColor="brand.primaryLight"
          color="black"
        />
      </Box>
      <Grid>
        <GridItem>
          <TopCategoryCard />
        </GridItem>
      </Grid>
    </Box>
  );
};

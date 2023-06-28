"use clinet";
import { ButtonComponent } from "@/app/components/ButtonComponent";
import { SectionHeading } from "@/app/components/SectionHeading";
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";
import React from "react";

export const TopCategories = () => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" py="3rem">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <SectionHeading title={"Categories"} />
        <ButtonComponent btnName={"View All Categories"} />
      </Box>
      <Grid
        gap={10}
        templateColumns={{
          base: "repeat(2,1rf)",
          md: "repeat(4,1rf)",
          xl: "repeat(6, 1fr)",
        }}
      >
        <GridItem>
          <TopCategoryCard />
        </GridItem>

        <GridItem>
          <TopCategoryCard />
        </GridItem>

        <GridItem>
          <TopCategoryCard />
        </GridItem>

        <GridItem>
          <TopCategoryCard />
        </GridItem>

        <GridItem>
          <TopCategoryCard />
        </GridItem>

        <GridItem>
          <TopCategoryCard />
        </GridItem>
      </Grid>
    </Box>
  );
};
const TopCategoryCard = () => {
  return (
    <Card
      direction="column"
      align="center"
      overflow="hidden"
      variant="outline"
      borderRadius={16}
      border={"2px solid pink"}
      w={180}
      h={220}
      _hover={{ cursor: "pointer", bgColor: "gray.100" }}
    >
      <CardBody>
        <Image src="/images/product1.png" alt="" h="100" w="100" />
        <Heading
          size={{ base: "sm", lg: "sm" }}
          textAlign={"center"}
          my={"3rem"}
        >
          Chocolate
        </Heading>
      </CardBody>
    </Card>
  );
};

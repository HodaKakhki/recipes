import { Grid, Box } from "@chakra-ui/react";
import React from "react";
import { CategoryCard } from "../../app/components/CategoryCard";
import { categoriesItems } from "@/helpers/helpers";

export const Categories = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={8}
      mb="9rem"
      boxSizing="border-box"
    >
      {categoriesItems.map((categoryItem, index) => (
        <Box key={index}>
          <CategoryCard CategoriesItem={categoryItem} />
        </Box>
      ))}
    </Grid>
  );
};

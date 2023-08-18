import { Grid } from "@chakra-ui/react";
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
      gap={{ base: "4", md: "8" }}
      mb="9rem"
    >
      {categoriesItems.map((CategoriesItem) => (
        <CategoryCard CategoriesItem={CategoriesItem} key={CategoriesItem.id} />
      ))}
    </Grid>
  );
};

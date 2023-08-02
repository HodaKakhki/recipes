import { Grid } from "@chakra-ui/react";
import React, { CSSProperties } from "react";
import { CategoryCard } from "../../app/components/CategoryCard";
import { categoriesItems } from "@/helpers/helpers";
const productCardStyles: CSSProperties = {
  boxSizing: "border-box",
};
export const Categories = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap="8"
      mb="9rem"
    >
      {categoriesItems.map((CategoriesItem, index) => (
        <div key={index} style={productCardStyles}>
          <CategoryCard CategoriesItem={CategoriesItem} />
        </div>
      ))}
    </Grid>
  );
};

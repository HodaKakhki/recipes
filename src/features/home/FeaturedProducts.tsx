"use client";
import { ProductCard } from "@/app/components/ProductCard";
import { Grid } from "@chakra-ui/react";
import React, { CSSProperties } from "react";

const productCardStyles: CSSProperties = {
  boxSizing: "border-box",
};

export const FeaturedProducts = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap="8"
      mb='9rem'
    >
      {[...Array(9)].map((_, index) => (
        <Grid key={index}>
          <div style={productCardStyles}>
            <ProductCard />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

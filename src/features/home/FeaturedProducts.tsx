"use client";
import { Grid, Image } from "@chakra-ui/react";
import React, { CSSProperties } from "react";
import { ProductCard } from "@/app/components/ProductCard";
import { productItems } from "@/helpers/helpers";
const productCardStyles: CSSProperties = {
  boxSizing: "border-box",
};
export const FeaturedProducts = () => (
  <Grid
    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
    display="flex"
    flexWrap="wrap"
    justifyContent="center"
    gap="8"
    mb="9rem"
  >
    {productItems.map((productItem, index) => (
      <div style={productCardStyles} key={index}>
        {index === 5 ? (
          <Image src="/images/Ads.png" alt="ads" />
        ) : (
          <ProductCard productItem={productItem}/>
        )}
      </div>
    ))}
  </Grid>
);
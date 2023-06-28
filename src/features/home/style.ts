import {
  BoxProps,
  ButtonProps,
  FlexProps,
  HeadingProps,
  ImageProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";

export const bannertStyles: FlexProps = {
  flexDir: { base: "column", lg: "row" },
  w: { base: "100%", lg: "90%" },
  borderRadius: "2rem",
  overflow: "hidden",
  mx: "auto",
};

export const buttonTopStyles: ButtonProps = {
  rounded: "full",
  bg: "white",
  py: "1.5rem",
  px: "1.5rem",
  mb: "2rem",
  _hover: {
    bg: "gray.100",
  },
};
export const ImageTopStyles: ImageProps = {
  marginRight: "12px",
};
export const bannerHeadingStyles: HeadingProps = {
  size: { base: "xl", lg: "3xl" },
  lineHeight: "4rem",
  color: "black",
  mb: "24px",
};
export const bannerTextStyles: TextProps = {
  fontSize: { base: "md", lg: "lg" },
  py: "1rem",
  maxW: "600px",
};
export const buttonsBannerStyles: StackProps = {
  flexDirection: { base: "column", lg: "row" },
  align: "center",
  gap: "4",
  mb: "3rem",
};
export const buttonHourStyles: ButtonProps = {
  rounded: "full",
  bg: "gray.100",
  _hover: {
    bg: "gray.200",
  },
  fontSize: "14px",
  fontWeight: "500px",
};
export const buttonToolsStyles: ButtonProps = {
  rounded: "full",
  bg: "gray.100",
  _hover: {
    bg: "gray.200",
  },
  fontSize: "14px",
  fontWeight: "500px",
};
export const footerBannerStyles: FlexProps = {
  flexDirection: { base: "column", lg: "row" },
  w: { base: "100%", lg: "90%" },
  justify: "space-between",
  align: "center",
  gap: "2",
};
export const recipeButtonStyles: ButtonProps = {
  borderRadius: "1rem",
  bg: "black",
  color: "white",
  px: "2rem",
  py: "2rem",
};
export const badgeBannerStyles: ImageProps = {
  position: "absolute",
  top: "10rem",
  m: "0 auto",
  right: "0",
  left: "0",
};
export const avatarBannerStyles: StackProps = {
  flexDirection: { base: "row", lg: "row" },
};
export const bannerImageBoxStyles: BoxProps = {
  w: {
    base: "400px",
    lg: "700px",
    sm: "760px",
  },
  h: { base: "300px", lg: "600px", sm: "400px" },
  bg: "center / cover no-repeat url(../images/baked.jpg)",
};

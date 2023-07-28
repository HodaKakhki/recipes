import { BoxProps, FlexProps, StackProps, TextProps } from "@chakra-ui/react";

export const footerStyles: BoxProps = {
  w: "100%",
  bgColor: "white",
  zIndex: "10",
  bottom: "0",
};
export const desktopFooterStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "5rem",
  py: "2rem",
  borderColor: "gray.200",
  display: { base: "none", lg: "flex" },
};

export const logoFooterStyles: StackProps = {
  direction: "row",
  w: "100%",
};
export const footeritemsStyles: BoxProps = {
  gap: "4rem",
  alignItems: "center",
  display: "flex",
  justifyContent: "end",
  w: "100%",
  textDecoration: "none !important",
};
export const footerDividerStyles: BoxProps = {
  w: "100%",
  px: "5rem",
  borderColor: "gray.300",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
};
export const textFooterStyles: TextProps = {
  display: "inline-block",
  color: "gray.400",
  mt: "1rem",
};
export const copyFooterStyles: FlexProps = {
  direction: "row",
  justify: "space-between",
  align: "center",
  px: "5rem",
  py: "3rem",
  display: { base: "none", lg: "flex" },
};
export const mobilefooterContainerStyles: FlexProps = {
  justifyContent: "space-between",
  borderColor: "gray.200",
  px: "2rem",
  py: "1rem",
  align: "center",
  display: { base: "flex", lg: "none" },
};

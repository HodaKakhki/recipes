import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  zIndex: "10",
};
export const desktopNavStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "5rem",
  py: "40px",
  borderBottomWidth: "1px",
  borderColor: "gray.200",
  display: { base: "none", lg: "flex" },
};

export const logoSectionStyles: StackProps = {
  direction: "row",
  gap: "6",
  alignItems: "center",
  flex: "1",
};

export const networksStyles: StackProps = {
  direction: "row",
  gap: "6",
  alignItems: "center",
};
export const iconsSocialStyles: FlexProps = {
  color: "black",
  gap: "7",
  alignItems: "center",
};

export const navitemsStyles: BoxProps = {
  margin: "0 auto",
  gap: "12",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  textDecoration: "none !important",
};

export const mobilenavContainerStyles: FlexProps = {
  justifyContent: "space-between",
  borderColor: "gray.200",
  px: "2rem",
  py: "1rem",
  align: "center",
  borderBottom: "1px",
  display: { base: "flex", lg: "none" },
};

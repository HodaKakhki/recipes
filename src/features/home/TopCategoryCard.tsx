import { Box, Heading, Image } from "@chakra-ui/react";
import { ColorItems } from "../../helpers/helpers";

const containerStyles = {
  "& > :first-child": {
    marginRight: 0,
  },
  "& > :last-child": {
    marginLeft: 0,
  },
};

export const TopCategoryCard = () => {
  return (
    <Box
      flexDirection={{ base: "column", md: "row-reverse" }}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      mx="auto"
      css={containerStyles}
    >
      {ColorItems &&
        ColorItems.map((colorItem) => (
          <Box
            key={colorItem.label}
            width={{ base: "100%", sm: "48%", md: "20%", lg: "14%" }}
            bgGradient={colorItem.bgGradient}
            overflow="hidden"
            borderRadius="30px"
            borderColor="transparent"
            m={{ base: "0.5rem 0", md: "1rem" }}
          >
            <Box
              borderRadius="30px"
              overflow="hidden"
              p={{ base: "1rem", md: "1.5rem" }}
            >
              <Image
                src={colorItem.image}
                alt={colorItem.label || "Color Category"}
                margin="0 auto"
                maxW="100%"
              />
              <Heading size="sm" textAlign="center" my="1.75rem">
                {colorItem.label}
              </Heading>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

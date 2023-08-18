import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
interface CategoriesItem {
  label: string;
  image: string;
}
interface CategoriesCardProps {
  CategoriesItem: CategoriesItem;
}
export const CategoryCard: React.FC<CategoriesCardProps> = ({
  CategoriesItem,
}) => {
  return (
    <Box w="290px">
      <Image
        src={CategoriesItem.image}
        alt="productcard"
        borderRadius="20"
        boxShadow={"md"}
        mb={"1rem"}
      />
      <Stack>
        <Heading fontSize="18px" mb="1.5rem" lineHeight="6">
          {CategoriesItem.label}
        </Heading>
        <Stack flexDirection={{ base: "row", lg: "row" }}>
          <Button
            fontSize="14"
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
            bg={"none"}
            pr="24px"
          >
            <Image alt="paper" src="/images/Timer.png" />
            <Text ml={"2"} color={"gray.500"}>
              30 Minutes
            </Text>
          </Button>
          <Button
            fontSize="14"
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
            bg={"none"}
            p="0"
          >
            <Image alt="paper" src="/images/ForkKnife.png" />
            <Text ml={"2"} color={"gray.500"}>
              Chicken
            </Text>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const CategoryCard = () => {
  return (
  //     {
  //   ColorItems &&
  //   ColorItems.map((ColorItem) => ())
  // }
    <Box w="290px">
      <Image
        // src="/images/categoryCard.jpg"
        alt="productcard"
        borderRadius="20"
        boxShadow={"md"}
        mb={"1rem"}
      />
      <Stack>
        <Heading fontSize="18px" mb="1.5rem" lineHeight="6">
          Mixed Tropical Fruit Salad with <br />
          Superfood Boosts
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

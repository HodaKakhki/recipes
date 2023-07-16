import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const ProductCard = () => {
  return (
    <Card
      position={"relative"}
      borderRadius={30}
      bgGradient="linear(to-b, #fff, brand.primaryLight)"
    >
      <CardBody>
        <Image
          src="/images/productcard.png"
          alt="productcard"
          borderRadius="16"
          boxShadow={"md"}
          w={"368px"}
          mb={"1.5rem"}
        />
        <Stack>
          <Heading size="24" fontSize={"24px"}>
            Big and Juicy Wagyu <br />
            Beef Cheeseburger
          </Heading>
          <Stack flexDirection={{ base: "row", lg: "row" }}>
            <Button
              fontSize="14"
              _hover={{ bg: "none" }}
              _active={{ bg: "none" }}
              bg={"none"}
              p="0"
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
      </CardBody>
    </Card>
  );
};

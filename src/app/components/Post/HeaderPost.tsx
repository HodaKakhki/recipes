import {
  Avatar,
  Box,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export const HeaderPost = () => {
  return (
    <CardHeader>
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Avatar name="Oval" src="/images/Oval.png" />
          <Box ml="2">
            <Flex align="center">
              <Heading fontSize="sm">Foodieland</Heading>
              <Image
                boxSize="12px"
                objectFit="cover"
                src="/images/OfficialIcon.png"
                alt="Official Icon"
                ml="1"
              />
            </Flex>
            <Text fontSize="8px">Tokyo, Japan</Text>
          </Box>
        </Flex>
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="See menu"
          transform="rotate(90deg)"
        >
          <BsThreeDotsVertical />
        </IconButton>
      </Flex>
    </CardHeader>
  );
};

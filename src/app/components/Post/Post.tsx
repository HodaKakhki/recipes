"use client";
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FooterPost } from "./FooterPost";
import { HeaderPost } from "./HeaderPost";

const Post = () => {
  return (
    <Card maxW="md" w={"290px"} mb="5rem">
      <HeaderPost />
      <Image objectFit="cover" src="/images/Rectangle.jpg" alt="Chakra UI" />
      <CardBody px="12px" pt="4px">
        <FooterPost />
        <Box>
          <Text fontSize="10px" mb="10px">
            <b> Foodieland.</b> Steak never be wrong, it’s suitable for you who
            want romantic dinner
          </Text>
          <Text color="gray.400" fontSize="8px">
            September 19
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default Post;

"use client";
import Post from "@/app/components/Post";
import { Box } from "@chakra-ui/react";
import React from "react";

const Posts = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      gap="8"
      justifyContent="center"
    >
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Posts;

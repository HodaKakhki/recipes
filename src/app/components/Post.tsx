"use client";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiSend, BiSave } from "react-icons/bi";

const Post = () => {
  return (
    <Card maxW="md" w={"290px"} mb="5rem">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Oval" src="/images/Oval.png" size="25*25" />

            <Box>
              <Box display="flex" alignItems="center">
                <Heading fontSize="sm">Foodieland. </Heading>
                <Image
                  sizes="8*8"
                  objectFit="cover"
                  src="/images/OfficialIcon.png"
                  alt="Chakra UI"
                />
              </Box>

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

      <Image objectFit="cover" src="/images/Rectangle.jpg" alt="Chakra UI" />
      <CardBody px="12px">
        <CardFooter
          justifyContent="space-between"
          flexWrap="wrap"
          display="flex"
          alignItems="center"
          p="0"
          sx={{
            "& > button": {
              minW: "20px",
            },
          }}
        >
          <Box>
            <Button variant="ghost" leftIcon={<Icon as={BiLike} />}></Button>
            <Button variant="ghost" leftIcon={<Icon as={BiChat} />}></Button>
            <Button variant="ghost" leftIcon={<Icon as={BiSend} />}></Button>
          </Box>
          <Button variant="ghost" rightIcon={<Icon as={BiSave} />}></Button>
        </CardFooter>
        <Box>
          <Text fontSize="10px" mb="10px">
            <b> Foodieland.</b> Steak never be wrong, it’s suitable for you who
            want romantic dinner
          </Text>
          <Text color="gray.300" fontSize="8px">
            September 19
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default Post;

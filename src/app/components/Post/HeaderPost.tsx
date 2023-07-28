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
    <Box>
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Oval" src="/images/Oval.png" size="25*25" />
            <Box>
              <Flex  alignItems="center">
                <Heading fontSize="sm">Foodieland. </Heading>
                <Image
                  sizes="8*8"
                  objectFit="cover"
                  src="/images/OfficialIcon.png"
                  alt="Chakra UI"
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
    </Box>
  );
};

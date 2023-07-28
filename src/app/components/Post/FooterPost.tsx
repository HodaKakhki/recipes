import { Avatar, Box, Button, CardFooter, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Comment from "../../../../public/images/svg/Comment";
import Sendicon from "../../../../public/images/svg/Sendicon";
import Like from "../../../../public/images/svg/Like";
import Bookmark from "../../../../public/images/svg/Bookmark";

export const FooterPost = () => {
  return (
    <Box>
      <CardFooter
        justifyContent="space-between"
        flexWrap="wrap"
        display="flex"
        alignItems="center"
        p="0"
        minW="1rem"
        sx={{
          "& > button": {
            minW: "20px",
          },
        }}
      >
        <Flex mb="6px" alignItems="center">
          <Box>
            <Button w="0" h="0" minW="1rem" p="14px" variant="ghost">
              <Like />
            </Button>
            <Button w="0" h="0" p="14px" minW="1rem" variant="ghost">
              <Comment />
            </Button>
            <Button w="0" h="0" p="14px" minW="1rem" variant="ghost">
              <Sendicon />
            </Button>
          </Box>
        </Flex>
        <Box>
          <Button
            variant="ghost"
            minW="1rem"
            w="0"
            rightIcon={<Bookmark />}
          ></Button>
        </Box>
        <Box display="flex" alignItems="center" mb="4px">
          <Avatar src="/images/OvalPost.png" size="13*13" />
          <Text fontSize="10px" ml="6px">
            Liked by <b>craig_love</b> and <b>44,686</b> others
          </Text>
        </Box>
      </CardFooter>
    </Box>
  );
};

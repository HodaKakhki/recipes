import React from "react";
import { ButtonComponent } from "@/app/components/ButtonComponent";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export const SubscribeBar = () => {
  return (
    <InputGroup
      w={{ base: "90%", sm: "70%", md: "60%", lg: "480px" }}
      h="5rem"
      borderRadius="24px"
      bg="white"
      mx="auto"
    >
      <Input
        pl="2rem"
        pr="2.5rem"
        type="text"
        placeholder="Your email address..."
        variant="unstyled"
      />
      <InputRightElement width="10rem" mt="20px">
        <ButtonComponent btnName="Subscribe" bgColor="black" color="white" />
      </InputRightElement>
    </InputGroup>
  );
};

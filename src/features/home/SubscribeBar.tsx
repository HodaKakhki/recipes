import React from "react";
import { ButtonComponent } from "@/app/components/ButtonComponent";
import { Input, InputGroup, InputRightElement, Flex } from "@chakra-ui/react";
import { ButtonIcon } from "@/helpers/ButtonIcon";

export const SubscribeBar = () => {
  return (
    <InputGroup w="480px" h="5rem" borderRadius="24px" bg="white">
      <Input
        pr="2.5rem"
        type="textInput"
        placeholder="Your email address..."
        variant="unstyled"
        pl="2rem"
      />
      <InputRightElement width="10rem" mt="20px">
        <ButtonComponent btnName="Subscribe" bgColor="black" color="white" />
      </InputRightElement>
    </InputGroup>
  );
};

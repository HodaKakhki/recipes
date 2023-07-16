import { Box } from "@chakra-ui/react";

const Heart = () => {
  return (
    <Box w="50px" h="50px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="red"
      >
        <path
          fillRule="evenodd"
          d="M10 16.2424L17.1924 9.05003C17.5829 8.65948 17.5829 8.02629 17.1924 7.63574L16.3636 6.80692C15.9731 6.41638 15.3399 6.41638 14.9494 6.80692L10 11.7563L5.05003 6.80692C4.65949 6.41638 4.0263 6.41638 3.63575 6.80692L2.80703 7.63574C2.41648 8.02629 2.41648 8.65948 2.80703 9.05003L10 16.2424Z"
        />
      </svg>
    </Box>
  );
};

export default Heart;
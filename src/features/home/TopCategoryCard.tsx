import { ColorItems } from "../../helpers";
import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
const customStyles = {
  "& > :first-child": {
    marginRight: 0,
  },
  "& > :last-child": {
    marginLeft: 0,
  },
};
export const TopCategoryCard = () => {
  return (
    <Box
      flexDirection={"row-reverse"}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      mx="0 auto"
      css={customStyles}
    >
      {ColorItems &&
        ColorItems.map((ColorItem) => (
          <Card
            key={ColorItem.label}
            minWidth={{ base: "100%", md: "20%", lg: "14%" }}
            bgGradient={ColorItem.bgGradient}
            overflow={"hidden"}
            borderRadius={30}
            borderColor="transparent"
            m="1rem"
          >
            <CardBody borderRadius={30} overflow={"hidden"}>
              <Image src={ColorItem.image} alt="" margin="0 auto" />
              <Heading
                size={{ base: "sm", lg: "sm" }}
                textAlign={"center"}
                my={"1.75rem"}
              >
                {ColorItem.label}
              </Heading>
            </CardBody>
          </Card>
        ))}
    </Box>
  );
};

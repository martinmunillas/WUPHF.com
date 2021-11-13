import { Flex, Box, Heading, Img, Link } from "@quaantum/components";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export interface ItemProps {
  name?: string;
  image: string;
}

const Item: React.FC<ItemProps> = ({ name, image }) => {
  return (
    <Flex gap="20px">
      <Img src={image} width="40%" alt={name || ""} />
      {name && (
        <Box>
          <Heading as="h2">{name}</Heading>
          <Link
            //@ts-ignore
            as={RouterLink}
            href={image}
            color="orange"
            fontWeight={600}
            textDecoration="underline"
          >
            Get {">"}
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default Item;

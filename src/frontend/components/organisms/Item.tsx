import { Flex, Box, Heading, Image, Link } from "quaantum-components";
import React from "react";

export interface ItemProps {
  name?: string;
  image: string;
}

const Item: React.FC<ItemProps> = ({ name, image }) => {
  return (
    <Flex>
      <Image src={image} alt={name || ""} />
      {name && (
        <Box>
          <Heading as='h2'>{name}</Heading>
          <Link
            href={image}
            color='orange'
            fontWeight={600}
            textDecoration='underline'
          >
            Get {">"}
          </Link>
        </Box>
      )}
    </Flex>
  );
};

export default Item;

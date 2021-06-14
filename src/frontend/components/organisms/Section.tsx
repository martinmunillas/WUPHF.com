import { Box, Heading, Text } from "quaantum-components";
import React, { ReactNode } from "react";
import Item, { ItemProps } from "./Item";

interface SectionProps {
  items: ItemProps[];
  name: string;
  description: string | ReactNode;
}

const Section: React.FC<SectionProps> = ({ items, name, description }) => {
  return (
    <Box>
      <Heading textTransform='uppercase' color='purple'>
        <Box
          width='50px'
          height='30px'
          b='3px solid rgba(247,158,101,1)'
          bg='linear-gradient(0deg, rgba(191,191,191,1) 0%, rgba(255,255,255,1) 100%)'
          round='100%'
          m='0 10px 0 0'
          display='inline-block'
        />{" "}
        {name}
      </Heading>
      <Text>{description}</Text>
      {items.map((item) => (
        <Item {...item} />
      ))}
    </Box>
  );
};

export default Section;

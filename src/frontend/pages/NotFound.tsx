import { Flex, Heading, Text } from "quaantum-components";
import React from "react";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
  return (
    <Flex justifyContent='center' alignItems='center'>
      <Heading>404</Heading>
      <Text>Not Found</Text>
    </Flex>
  );
};

export default NotFound;

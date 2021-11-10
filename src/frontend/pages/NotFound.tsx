import { Flex, Img, Link } from "@quaantum/components";
import React from "react";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Img src="/WUPHFerror.jpg" alt="not found" />
      <Link href="/">{"<-"} Home</Link>
    </Flex>
  );
};

export default NotFound;

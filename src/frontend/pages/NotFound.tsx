import { Flex, Img, Link } from "@quaantum/components";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({}) => {
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Img src="/WUPHFerror.jpg" alt="not found" />
      {/* @ts-ignore*/}
      <Link as={RouterLink} href="/">
        {"<-"} Home
      </Link>
    </Flex>
  );
};

export default NotFound;

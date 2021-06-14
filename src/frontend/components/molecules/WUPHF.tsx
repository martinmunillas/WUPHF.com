import { Box, Flex, Heading } from "quaantum-components";
import React from "react";

interface WUPHFProps {}

const WUPHF: React.FC<WUPHFProps> = ({ children }) => {
  return (
    <Flex
      w='100vw'
      bg='linear-gradient(90deg, rgba(69,69,69,1) 0%, rgba(128,128,128,1) 10%, rgba(128,128,128,1) 90%, rgba(69,69,69,1) 100%)'
    >
      <Heading
        height='fit-content'
        color='#121212'
        position='relative'
        right='-40px'
        textOrientation='upright'
        transform='rotate(-90deg) scale(3.5) scaleY(2.0)'
        transformOrigin='100% 100%'
      >
        WUPHF.COM
      </Heading>
      <Box zIndex={10}>{children}</Box>
      <Heading
        height='fit-content'
        color='#121212'
        position='relative'
        left='-40px'
        textOrientation='upright'
        transform='rotate(90deg) scale(3.5) scaleY(2.0)'
        transformOrigin='0 100%'
      >
        WUPHF.COM
      </Heading>
    </Flex>
  );
};

export default WUPHF;

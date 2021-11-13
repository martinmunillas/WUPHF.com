import {
  Box,
  Flex,
  Heading,
  Img,
  Text,
  useTheme,
  Link,
} from "@quaantum/components";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface AttentionInvestorsProps {}

const AttentionInvestors: React.FC<AttentionInvestorsProps> = ({}) => {
  const {
    colors: { orange, purple },
  } = useTheme();
  return (
    <Box
      bg="linear-gradient(180deg, rgba(224,224,224,1) 0%, rgba(177,177,177,1) 100%)"
      w="50%"
      p="40px 50px 30px 30px"
      m="40px -20px 40px 0"
      h="fit-content"
      position="relative"
      _after={{
        position: "absolute",
        top: "-25px",
        right: "0",
        zIndex: -1,
        content: "''",
        br: "9px solid transparent",
        bl: "35px solid rgba(93,93,93,1)",
        bb: "5px solid rgba(93,93,93,1)",
        bt: "20px solid transparent",
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box
          w="25%"
          bgColor="purple"
          h="22px"
          position="relative"
          _after={{
            width: "0px",
            height: "0px",
            position: "absolute",
            right: "-20px",
            bottom: "-10px",
            content: "''",
            borderLeft: `22px solid ${purple}`,
            borderTop: "22px solid transparent",
            borderBottom: "22px solid transparent",
          }}
        />
        <Heading color="purple" fontSize="30px" textTransform="uppercase">
          Attention Investors!
        </Heading>
      </Flex>
      <Flex margin="40px 0 0 0">
        <Img src="/profit.webp" alt="profits" b={`3px solid ${orange}`} />
        <Text p="20px">
          As the founder, and as a friend, I would like to urge you to consider
          investing in our dynamic company. WUPHF.com. Have you seen the film{" "}
          <i>The Social Network</i>? Well this site is every bit as good as that
          movie.
          <Link
            // @ts-ignore
            as={RouterLink}
            href="/investors"
            color="orange"
            display="block"
            fontWeight={600}
            textDecoration="underline"
            margin="20px 0 0 0"
          >
            Find out more {">"}
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default AttentionInvestors;

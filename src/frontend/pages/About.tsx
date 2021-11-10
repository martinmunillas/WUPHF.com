import { Box, Heading, Flex, Text, Img } from "@quaantum/components";
import React from "react";
import Header from "../components/molecules/Header";
import WUPHF from "../components/molecules/WUPHF";

const About: React.FC<{}> = ({}) => {
  return (
    <WUPHF>
      <Header />
      <Box bgColor="white" d="flex">
        <Box m="40px 0" bgColor="white">
          <Heading
            textTransform="uppercase"
            bg="linear-gradient(180deg, rgba(249,135,63,1) 0%, rgba(222,86,25,1) 100%)"
            color="white"
            m="0 0 0 -20px"
            p="10px 20px 10px 40px"
            fontSize="30px"
            position="relative"
            w="45%"
            _before={{
              position: "absolute",
              top: "-25px",
              left: "0",
              zIndex: -1,
              content: "''",
              br: "35px solid #f95f10",
              bl: "7px solid transparent",
              bb: "5px solid #f95f10",
              bt: "20px solid transparent",
            }}
          >
            About the CEO
          </Heading>
          <Flex
            justifyContent="center"
            as="form"
            p="20px 30px"
            columnGap="40px"
          >
            <Box>
              <Text>
                Ryan Howard is the Creator, Founder, and CEO of WUPHF.com, a
                website that links up several communication portals into one.
                Ryan doesn't live, he lives. A fearless risk taker, the pioneer
                of Internet communications technology, always strives to
                innovate the world around him, as well as innovate himself.
              </Text>
              <br />
              <Text>
                Unfortunately WUPHF.com only lasted a few days, and he sold it
                to the Washington University Public Hospital Fund for the domain
                name.
              </Text>
              <br />
              <Text>
                However Ryan describes the process as an "electrifying learning
                experience," and it got him an article in the Lackawanna County
                Gazete (no longer published).
              </Text>
            </Box>
            <Img src="/ceo.jpg" alt="Ryan Howard" />
          </Flex>
        </Box>
      </Box>
    </WUPHF>
  );
};
export default About;

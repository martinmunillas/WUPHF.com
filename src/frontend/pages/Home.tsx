import { Box, Flex, Grid, Link } from "@quaantum/components";
import React from "react";
import Header from "../components/molecules/Header";
import WUPHF from "../components/molecules/WUPHF";
import AttentionInvestors from "../components/organisms/AttentionInvestors";
import Section from "../components/organisms/Section";
import SignUp from "../components/organisms/SignUp";
import { Link as RouterLink } from "react-router-dom";

const Home: React.FC<{}> = ({}) => {
  return (
    <>
      <WUPHF>
        <Header />
        <Flex justifyContent='space-between' bgColor='white'>
          <SignUp />
          <AttentionInvestors />
        </Flex>
      </WUPHF>
      <Grid
        templateColumns='1fr 1fr'
        gap='20px'
        bgColor='lightgray'
        p='50px 11%'
      >
        <Section
          name='Downloads'
          description={
            <>
              Want to edge up your ride or faxes? Download your WUPHF bumper
              stickers and fax cover now! <b>WUPHF</b>!
            </>
          }
          items={[
            { name: "WUPHF Bumper Sticker", image: "/sticker.jpg" },
            { name: "WUPHF Fax Cover Sheet", image: "/fax.jpeg" },
          ]}
        />
        <Box>
          <Section
            name='Shop'
            description={
              <>
                Ladies, sport the latest in hip tech wear by buying our NEW tee.
                Show the world you <b>WUPHF</b>! Guys we still have your shirt
                in stock too.
              </>
            }
            items={[
              {
                name: "WUPHF WUPHF Ladies T-Shirt",
                image: "/ladiesTShirt.webp",
              },
            ]}
          />
          <Section
            name='WUPHF Beta Site'
            description={
              <>
                We've come a long way since our beta site back in September!
                relive <b>WUPHF</b> beta here. {/* @ts-ignore */}
                <Link as={RouterLink} to='/beta'>
                  Go{">"}
                </Link>
              </>
            }
            items={[{ image: "/beta.jpeg" }]}
          />
        </Box>
      </Grid>
    </>
  );
};
export default Home;

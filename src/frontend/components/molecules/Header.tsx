import {
  Flex,
  Box,
  UnorderedList,
  ListItem,
  Img,
  Link,
  useTheme,
} from "@quaantum/components";
import React from "react";
import { useRouter } from "../../utils/hooks/useRouter";
import { Link as RouterLink } from "react-router-dom";
interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  { name: "main", href: "/" },
  { name: "about", href: "/about" },
  { name: "for investors", href: "" },
  { name: "downloads", href: "" },
  { name: "testimonials", href: "" },
  { name: "shop", href: "" },
];

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { pathname } = useRouter();
  const {
    colors: { purple, lightPurple },
  } = useTheme();

  return (
    <>
      <Flex
        bg={`linear-gradient(0deg, ${purple} 39%, ${lightPurple} 100%)`}
        p='20px'
        margin='20px 0 0 0'
        w='100%'
      >
        <Img alt='WUPHF' src='/logo.jpg' minW='70%' />
        <Box as='nav'>
          <UnorderedList
            h='100%'
            display='flex'
            justifyContent='center'
            flexDirection='column'
          >
            {links.map((link) => (
              <ListItem listStyle='none' m='10px 20px' key={link.href}>
                <Link
                  // @ts-ignore
                  as={RouterLink}
                  to={link.href}
                  color='white'
                  display='flex'
                >
                  <Box
                    width='30px'
                    height='20px'
                    bg={
                      pathname === link.href
                        ? "linear-gradient(180deg, rgba(247,158,101,1) 0%, rgba(249,136,72,1) 100%)"
                        : "#57518e"
                    }
                    round='100%'
                    m='0 10px 0 0'
                  />
                  {link.name}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Flex>
      <Box
        w='calc(100% + 40px)'
        margin='0 0 0 -20px'
        h='30px'
        bgColor='lightgray'
        bt='5px solid white'
        bb='3px solid gray'
        boxShadow='0px 0px 26px 0px rgba(0,0,0,0.75);'
        position='relative'
        _before={{
          position: "absolute",
          top: "-30px",
          left: "0",
          zIndex: -1,
          content: "''",
          br: "35px solid rgba(177,177,177,1)",
          bl: "9px solid transparent",
          bb: "5px solid rgba(177,177,177,1)",
          bt: "20px solid transparent",
        }}
        _after={{
          position: "absolute",
          top: "-30px",
          right: "0",
          zIndex: -1,
          content: "''",
          br: "9px solid transparent",
          bl: "35px solid rgba(177,177,177,1)",
          bb: "5px solid rgba(177,177,177,1)",
          bt: "20px solid transparent",
        }}
      ></Box>
    </>
  );
};

export default Header;

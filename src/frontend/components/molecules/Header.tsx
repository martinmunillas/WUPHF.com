import { Flex, Box, UnorderedList, ListItem, Image, Link } from 'buit-ui';
import React from 'react';
import { useRouter } from '../../utils/hooks/useRouter';

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  { name: 'main', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'for investors', href: '/investors' },
  { name: 'downloads', href: '/downloads' },
  { name: 'testimonials', href: '/testimonials' },
  { name: 'shop', href: '/shop' },
];

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { pathname } = useRouter();

  return (
    <>
      <Flex
        bg='linear-gradient(0deg, rgba(69,63,125,1) 39%, rgba(106,101,165,1) 100%)'
        p='20px'
      >
        <Image
          alt='WUPHF'
          src='https://static.wikia.nocookie.net/theoffice/images/0/09/Wuphf_logo-300x102.jpg'
          minW='50%'
        />
        <Box as='nav'>
          <UnorderedList
            h='100%'
            display='flex'
            justifyContent='center'
            flexDirection='column'
          >
            {links.map((link) => (
              <ListItem listStyle='none' m='10px 20px' key={link.href}>
                <Link href={link.href} color='white' display='flex'>
                  <Box
                    width='30px'
                    height='20px'
                    bg={
                      pathname === link.href
                        ? 'linear-gradient(180deg, rgba(247,158,101,1) 0%, rgba(249,136,72,1) 100%)'
                        : '#57518e'
                    }
                    round='100%'
                    m='0 10px 0 0'
                    _hover={{
                      bgColor: '#47418e',
                    }}
                  />
                  {link.name}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Flex>
      <Box
        w='100vw'
        h='30px'
        bgColor='lightgray'
        customCss='border-top: 5px solid white; border-bottom: 3px solid gray;'
        boxShadow='0px 0px 26px 0px rgba(0,0,0,0.75);'
      ></Box>
    </>
  );
};

export default Header;
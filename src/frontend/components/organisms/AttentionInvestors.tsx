import { Box, Flex, Heading, Image, Text, useTheme, Link } from 'buit-ui';
import React from 'react';

interface AttentionInvestorsProps {}

const AttentionInvestors: React.FC<AttentionInvestorsProps> = ({}) => {
  const {
    colors: { orange, purple },
  } = useTheme();
  return (
    <Box
      bg='linear-gradient(180deg, rgba(224,224,224,1) 0%, rgba(177,177,177,1) 100%)'
      w='50%'
      p='40px 50px 30px 30px'
      m='40px 0'
      h='fit-content'
    >
      <Flex justifyContent='space-between' alignItems='center'>
        <Box
          w='25%'
          bgColor='purple'
          h='22px'
          position='relative'
          _after={{
            width: '0px',
            height: '0px',
            position: 'absolute',
            right: '-20px',
            bottom: '-10px',
            customCss: `
        content: '';
        border-left: 22px solid ${purple};
        border-top: 22px solid transparent;
        border-bottom: 22px solid transparent;
      `,
          }}
        />
        <Heading
          color='purple'
          customCss={`text-transform: uppercase;
        margin-right: 80px;
         `}
        >
          Attention Investors!
        </Heading>
      </Flex>
      <Flex margin='40px 0 0 0'>
        <Image src='/profit.webp' border={`3px solid ${orange}`} />
        <Text
          p='20px'
          customCss={`
        font-size: 20px;
        line-height: 30px;
      `}
        >
          As the founder, and as a friend, I would like to urge you to consider
          investing in our dynamic company. WUPHF.com. Have you seen the film{' '}
          <i>The Social Network</i>? Well this site is every bit as good as that
          movie.
          <Link
            href='/investors'
            color='orange'
            display='block'
            fontWeight={600}
            textDecoration='underline'
            margin='20px 0 0 0'
          >
            Find out more {'>'}
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default AttentionInvestors;
import { Box, Flex, Heading, Image, Link, Text, useTheme } from 'buit-ui';
import React from 'react';
import Header from '../components/molecules/Header';
import LabeledInput from '../components/molecules/LabeledInput';
import AttentionInvestors from '../components/organisms/AttentionInvestors';

interface Input {
  name: string;
  placeholder?: string;
}

const inputs: Input[] = [
  { name: 'Email Address:' },
  { name: 'Mobile Number:' },
  { name: 'Home Number:' },
  { name: 'Fax:' },
  { name: 'WiFi Printer:' },
  { name: 'Twitter:', placeholder: '@username' },
  { name: 'Facebook:', placeholder: 'http://www.facebook.com/username' },
];

const Home: React.FC<{}> = ({}) => {
  const {
    colors: { orange, purple },
  } = useTheme();
  return (
    <>
      <Header />
      <Flex justifyContent='space-between'>
        <Box m='40px 0' w='35%'>
          <Heading
            customCss='text-transform: uppercase;'
            bg='linear-gradient(180deg, rgba(249,135,63,1) 0%, rgba(222,86,25,1) 100%)'
            color='white'
            p='10px 20px'
            fontSize='30px'
          >
            Sign Up Now to Get <span style={{ color: 'black' }}>WUPHF'D</span>
          </Heading>
          <Flex
            alignItems='center'
            direction='column'
            justifyContent='center'
            as='form'
            p='20px 30px'
          >
            <Text>
              <strong>
                Email Address OR Mobile Number required. All other fields
                optional, but c'mon... you know you want to.
              </strong>
            </Text>
            <Box>
              {inputs.map(({ name, placeholder }) => (
                <LabeledInput
                  label={name}
                  placeholder={placeholder}
                  bgColor='purple'
                  color='white'
                  w='300px'
                  _placeholder={{
                    color: 'white',
                  }}
                ></LabeledInput>
              ))}
            </Box>
            <Flex
              justifyContent='center'
              alignItems='center'
              w='100px'
              h='70px'
              bgColor={orange as string}
              position='relative'
              round='100%'
              color='white'
              fontWeight={600}
              fontSize='18px'
              top='-70px'
              left='280px'
              customCss={`
                text-align: center;
                padding-top: 10px;
              `}
              _before={{
                width: '0px',
                height: '0px',
                position: 'absolute',
                left: '32px',
                bottom: '-20px',
                zIndex: -1,
                customCss: `
                content: '';
                border-left: 24px solid ${orange};
                border-right: 12px solid transparent;
                border-top: 12px solid ${orange};
                border-bottom: 20px solid transparent;
                transform: rotate(20deg);
                `,
              }}
            >
              WUPHF Me!
            </Flex>
          </Flex>
        </Box>
        <AttentionInvestors />
      </Flex>
    </>
  );
};
export default Home;

import { Box, Flex, Heading, Text } from 'buit-ui';
import React from 'react';
import Header from '../components/molecules/Header';
import LabeledInput from '../components/molecules/LabeledInput';

const Home: React.FC<{}> = ({}) => {
  return (
    <>
      <Header />
      <Flex>
        <Box m='40px 0'>
          <Heading
            customCss='text-transform: uppercase;'
            bg='linear-gradient(180deg, rgba(249,135,63,1) 0%, rgba(222,86,25,1) 100%)'
            color='white'
            p='10px 20px'
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
            <Text w='60%'>
              <strong>
                Email Address OR Mobile Number required. All other fields
                optional, but c'mon... you know you want to.
              </strong>
            </Text>
            <Flex direction='column' alignItems='flex-end'>
              <LabeledInput label='Email Address:'></LabeledInput>
              <LabeledInput label='mobile Number:'></LabeledInput>
              <LabeledInput label='Home Number:'></LabeledInput>
              <LabeledInput label='Fax:'></LabeledInput>
              <LabeledInput label='WiFi Printer:'></LabeledInput>
              <LabeledInput label='Twitter:'></LabeledInput>
              <LabeledInput label='Facebook:'></LabeledInput>
            </Flex>
            <Flex
              justifyContent='center'
              alignItems='center'
              w='200px'
              h='140px'
              bgColor='#f96f1a'
              position='relative'
              round='100%'
              color='white'
              fontWeight={600}
              fontSize='30px'
              _before={{
                width: '0px',
                height: '0px',
                position: 'absolute',
                left: '32px',
                bottom: '-20px',
                customCss: `
                content: '';
                border-left: 24px solid #f96f1a;
                border-right: 12px solid transparent;
                border-top: 12px solid #f96f1a;
                border-bottom: 20px solid transparent;
                transform: rotate(20deg);
                `,
              }}
            >
              WUPHF Me!
            </Flex>
          </Flex>
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
};
export default Home;

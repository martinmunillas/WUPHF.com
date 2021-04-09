import { Flex } from 'buit-ui';
import React from 'react';
import Header from '../components/molecules/Header';
import WUPHF from '../components/molecules/WUPHF';
import AttentionInvestors from '../components/organisms/AttentionInvestors';
import SignUp from '../components/organisms/SignUp';

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
    </>
  );
};
export default Home;

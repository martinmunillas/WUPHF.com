import { Box, Heading, Flex, Text, useTheme } from "quaantum-components";
import React from "react";
import LabeledInput from "../molecules/LabeledInput";

interface Input {
  name: string;
  placeholder?: string;
}

const inputs: Input[] = [
  { name: "Email Address:" },
  { name: "Mobile Number:" },
  { name: "Home Number:" },
  { name: "Fax:" },
  { name: "WiFi Printer:" },
  { name: "Twitter:", placeholder: "@username" },
  { name: "Facebook:", placeholder: "http://www.facebook.com/username" },
];

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({}) => {
  const {
    colors: { orange },
  } = useTheme();
  return (
    <Box m='40px 0' w='45%'>
      <Heading
        textTransform='uppercase'
        bg='linear-gradient(180deg, rgba(249,135,63,1) 0%, rgba(222,86,25,1) 100%)'
        color='white'
        m='0 0 0 -20px'
        p='10px 20px 10px 40px'
        fontSize='30px'
        position='relative'
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
        Sign Up Now to Get <span style={{ color: "black" }}>WUPHF'D</span>
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
            Email Address OR Mobile Number required. All other fields optional,
            but c'mon... you know you want to.
          </strong>
        </Text>
        <Box>
          {inputs.map(({ name, placeholder }) => (
            <LabeledInput
              key={name}
              label={name}
              placeholder={placeholder}
              bgColor='purple'
              color='white'
              w='300px'
              _placeholder={{
                color: "white",
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
          zIndex={2}
          textAlign='center'
          pt='10px'
          _before={{
            width: "0px",
            height: "0px",
            position: "absolute",
            left: "32px",
            bottom: "-20px",
            zIndex: -1,
            content: "''",
            bl: `24px solid ${orange}`,
            br: "12px solid transparent",
            bt: `12px solid ${orange}`,
            bb: "20px solid transparent",
            transform: "rotate(20deg)",
          }}
        >
          WUPHF Me!
        </Flex>
      </Flex>
    </Box>
  );
};

export default SignUp;

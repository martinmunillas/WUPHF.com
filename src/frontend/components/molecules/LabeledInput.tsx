import { Box, Flex, Input, InputProps, Text } from 'buit-ui';
import React from 'react';

interface LabeledInputProps extends InputProps {
  label: string;
  error?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <Flex
      variant='tertiary'
      color='purple'
      w='100%'
      justifyContent='flex-end'
      alignItems='center'
      margin='10px 0'
    >
      <label>{label}</label>
      <Input {...props} round='5px' m='0 0 0 10px' />
      <Text color='red'>{error}</Text>
    </Flex>
  );
};

export default LabeledInput;

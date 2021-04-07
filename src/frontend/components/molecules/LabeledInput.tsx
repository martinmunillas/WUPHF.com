import { Box, Input, InputProps, Text } from 'buit-ui';
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
    <Box variant='tertiary'>
      <label>{label}</label>
      <Input {...props} round='5px' m='0 0 0 10px' />
      <Text color='red'>{error}</Text>
    </Box>
  );
};

export default LabeledInput;

import { Box, Text, TextArea, TextAreaProps } from "@quaantum/components";
import React from "react";

interface LabeledTextAreaProps extends TextAreaProps {
  label: string;
  error?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: any;
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const LabeledTextArea: React.FC<LabeledTextAreaProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <Box>
      <label>{label}</label>
      <TextArea {...props} />
      <Text color="red">{error}</Text>
    </Box>
  );
};

export default LabeledTextArea;

import { Text, TextProps } from '@mantine/core';
import React from 'react';

const Label = ({ children, ...rest }: TextProps) => {
  return (
    <Text size='md' weight={600} {...rest}>
      {children}
    </Text>
  );
};

export default Label;

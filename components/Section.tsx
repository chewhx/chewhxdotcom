import { Grid } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import Label from './Label';

interface Props {
  title: string;
}

const Section: React.FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <Grid py='lg'>
      <Grid.Col sm={2}>
        <Label>/ {title.toLowerCase()}</Label>
      </Grid.Col>
      <Grid.Col sm={7}>{children}</Grid.Col>
    </Grid>
  );
};

export default Section;

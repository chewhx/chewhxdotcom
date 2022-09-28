import { Grid, Text } from '@mantine/core';
import React from 'react';
import Label from './Label';
import Section from './Section';

const About = () => {
  return (
    <Section title='about'>
      <Text mb='xs' weight={500}>
        I&apos;m a developer based in Singapore. Before that, I studied
        accountancy and managed art programmes.
      </Text>
      <Text mb='xs' weight={500}>
        I&apos;m interested in fintech, productivity, leading a healthy life and
        leaving the world better than I found it.
      </Text>
      <Text mb='xs' weight={500}>
        Open to remote and freelance work.
      </Text>
    </Section>
  );
};

export default About;

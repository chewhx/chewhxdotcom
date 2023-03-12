import { Box, Grid, Text } from '@mantine/core';

const links = {
  LinkedIn: 'https://www.linkedin.com/in/chewhx/',
  GitHub: 'https://github.com/chewhx',
  Facebook: 'https://www.facebook.com/chew.h.xiang',
  Projects: '/projects',
};

const About = () => {
  return (
    <Box component='section' id='about' py='xl'>
      <Grid m={0}>
        <Grid.Col xs={12} sm={6}>
          <Text size='lg' weight={500}>
            About
          </Text>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Text mb='xs' size='lg'>
            Hello. I&apos;m Han Xiang, a software engineer based in Sinagpore. I
            love to build apps, lead a healthy life and strive to leave
            everything better than when I found them.
          </Text>
          <Text mb='xs' size='lg'>
            I&apos;m open to remote and freelance work.
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default About;

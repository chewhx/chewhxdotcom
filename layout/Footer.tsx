import { Box, Flex, Grid, Text } from '@mantine/core';
import React from 'react';

const Footer = () => {
  return (
    <Box component='footer' my='5rem'>
      <Grid m={0}>
        <Grid.Col span={12}>
          <Text size='sm' mb='xs'>
            &copy; Chew Han Xiang
          </Text>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Text color='gray' size='xs'></Text>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Text color='gray' size='xs'></Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Footer;

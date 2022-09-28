import { ActionIcon, Anchor, Box, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { socials } from '../data/socials';

const Brand = () => {
  return (
    <Group style={{ margin: '1.5em 0 ' }}>
      <Stack spacing={0} justify='center'>
        <h1 style={{ fontSize: '3rem', fontWeight: 600, margin: 0 }}>
          Chew Han Xiang
        </h1>
        <Text sx={{ fontSize: '1.55rem' }} weight={500}>
          Software Engineer, Generalist, INTJ
        </Text>
        <Group my='md'>
          {socials.map(({ label, link, icon }) => (
            <Box key={label}>
              <Anchor href={link} target='_blank' rel='noopener noreferrer'>
                <ActionIcon size='lg' radius='md' variant='light'>
                  {icon}
                </ActionIcon>
              </Anchor>
            </Box>
          ))}
        </Group>
      </Stack>
    </Group>
  );
};

export default Brand;

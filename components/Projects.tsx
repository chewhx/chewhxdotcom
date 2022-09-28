import { Anchor, Box, Group, Text } from '@mantine/core';
import React from 'react';
import { Package } from 'tabler-icons-react';
import Section from './Section';

interface Props {
  repos: any[];
}

const Projects: React.FC<Props> = ({ repos }) => {
  return (
    <Section title='projects'>
      {repos?.map(({ data }) => (
        <Box key={data?.id} mb='lg'>
          <Group spacing={4}>
            <Package size={15} />
            <Anchor
              href={data?.html_url}
              target='_blank'
              rel='noopener noreferrer'
              sx={{ fontWeight: 600 }}
              color='dark'
            >
              {data?.name}
            </Anchor>
          </Group>
          <Text size='sm'>{data?.description}</Text>
        </Box>
      ))}
    </Section>
  );
};

export default Projects;

import { Anchor, Box, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import Section from './Section';

interface Props {
  posts?: any[];
}

const Scribbles: React.FC<Props> = ({ posts }) => {
  return (
    <Section title='scribbles'>
      {posts?.map((post) => (
        <Box key={post.id} sx={{ marginBottom: '1em' }}>
          <Link passHref href={`/scribbles/${post.id}`}>
            <Anchor style={{ fontWeight: 600 }} color='dark'>
              {post?.properties?.Name?.title[0]?.plain_text + '  '}
              &#8594;
            </Anchor>
          </Link>
          <Text size='sm'>
            {post?.properties?.Tagline?.rich_text[0]?.plain_text}
          </Text>
        </Box>
      ))}
    </Section>
  );
};

export default Scribbles;

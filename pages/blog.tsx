import { Anchor, Box, Grid, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';
import { getDatabase } from '../lib/notion';

type Props = {
  pages: any[];
};

const Blog = ({ pages }: Props) => {
  return (
    <Box component='section' id='blog' py='xl'>
      <Grid m={0}>
        <Grid.Col xs={12} sm={6}>
          <Text size='lg' weight={500}>
            Blog
          </Text>
        </Grid.Col>
        <Grid.Col xs={12} sm={6}>
          <Stack spacing='xl'>
            {pages?.map((post) => (
              <Box key={post.id}>
                <Link passHref href={`/blog/${post.id}`}>
                  <Anchor color='dark'>
                    <Text
                      weight={600}
                      size='lg'
                      sx={{ letterSpacing: '-0.01em' }}
                    >
                      {post?.properties?.Name?.title[0]?.plain_text + '  '}
                    </Text>
                  </Anchor>
                </Link>
                <Text size='sm' sx={{ letterSpacing: '-0.01em' }}>
                  {post?.properties?.Tagline?.rich_text[0]?.plain_text}
                </Text>
              </Box>
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Blog;

export async function getStaticProps() {
  const pages = await getDatabase(process.env.NOTION_BLOG_DB_ID || '');
  return {
    props: {
      pages,
    },
    revalidate: 60,
  };
}

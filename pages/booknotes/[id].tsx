import { Box, Spoiler, Text } from '@mantine/core';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import RenderNotion from '../../components/RenderNotion';
import { getBlocks, getDatabase, getPage } from '../../lib/notion';

interface Props {
  page: any;
  blocks: any;
}

const BookNotes: NextPage<Props> = ({ page, blocks }) => {
  return (
    <Box sx={{ maxWidth: '700px' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            height: 200,
            width: 130,
            margin: '0 auto',
          }}
        >
          <Image
            src={page.cover.external.url}
            alt={page.properties.Name.title[0].plain_text}
            layout='fill'
          />
        </Box>
        <Text size='xl' my='sm' weight={900} align='center'>
          {page?.properties?.Name?.title[0].plain_text}
        </Text>
        <Text>by {page.properties.Author.rich_text[0].plain_text}</Text>
      </Box>
      <article>
        <RenderNotion
          blocks={blocks.results.filter(
            (e: any) => !e.type.startsWith('table')
          )}
        />
      </article>
    </Box>
  );
};

export default BookNotes;

export async function getStaticPaths() {
  const db = await getDatabase(process.env.NOTION_BOOKNOTES_DB_ID || '');
  return {
    paths: db.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
}

export async function getStaticProps(ctx: any) {
  try {
    const { id } = ctx.params;
    const page = await getPage(id);
    const blocks = await getBlocks(id);

    return {
      props: {
        page,
        blocks,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
}

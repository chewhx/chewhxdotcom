import { Box, Container, Text } from '@mantine/core';
import dayjs from 'dayjs';
import { NextPage } from 'next';
import React from 'react';
import RenderNotion from '../../components/RenderNotion';
import { getBlocks, getDatabase, getPage } from '../../lib/notion';

interface Props {
  page: any;
  blocks: any;
}

const Scribble: NextPage<Props> = ({ page, blocks }) => {
  return (
    <Box sx={{ margin: '0 auto', padding: '1em 0' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Text size='lg' weight={500} align='center'>
          {dayjs(page?.updated_time).format('DD MMM YYYY')}
        </Text>
        <Text sx={{ fontSize: '3.5rem' }} py='xl' align='center'>
          {page?.properties?.Name?.title[0].plain_text}
        </Text>
        {page?.properties?.Tags?.multi_select && (
          <>
            {page?.properties?.Tags?.multi_select.map((e: any) => (
              <Text component='span' key={e.name}>
                On {e.name + ', '}
              </Text>
            ))}
          </>
        )}
      </Box>
      <Box component='article'>
        <RenderNotion blocks={blocks?.results} />
      </Box>
    </Box>
  );
};

export default Scribble;

export async function getStaticPaths() {
  const db = await getDatabase(process.env.NOTION_SCRIBBLES_DB_ID || '');
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
    return { notFound: true };
  }
}

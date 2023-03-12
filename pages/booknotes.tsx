import { Anchor, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { Book2 } from 'tabler-icons-react';
import { getBookPages } from '../lib/notion';

type Props = {
  highlights: any[];
};

const BookNotes = ({ highlights }: Props) => {
  return (
    <>
      {/* <pre>{JSON.stringify(highlights, null, 2)}</pre> */}
      {highlights?.map((each) => (
        <Group my='sm' spacing={4} key={each?.id}>
          <Book2 size={20} />
          <Link passHref href={`/booknotes/${each?.id}`}>
            <Anchor color='dark'>
              <Text>
                {each?.properties?.Name?.title?.at(0)?.text?.content} by{' '}
                {each?.properties?.Author?.rich_text?.at(0)?.text?.content}
              </Text>
            </Anchor>
          </Link>
        </Group>
      ))}
    </>
  );
};

export default BookNotes;

export const getStaticProps = async () => {
  const highlights = await getBookPages(
    process.env.NOTION_BOOKNOTES_DB_ID || ''
  );
  return {
    props: {
      highlights,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60, // In seconds
  };
};

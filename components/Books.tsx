import { Anchor, Box, Group, Text, Tooltip } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Book } from 'tabler-icons-react';
import Section from './Section';

interface Props {
  books: any[];
}

const LinkComponent = React.forwardRef<
  HTMLAnchorElement,
  { href: string; label: string }
>(({ href, label, ...rest }, ref) => (
  <Box>
    <Link passHref href={href}>
      <Anchor style={{ fontWeight: 600 }} color='dark' {...rest} ref={ref}>
        {label}
        &#8594;
      </Anchor>
    </Link>
  </Box>
));

LinkComponent.displayName = 'LinkComponent';

const Books: React.FC<Props> = ({ books }) => {
  return (
    <Section title='books_notes'>
      {books.map((book) => (
        <Box key={book.id} sx={{ marginBottom: '1em' }}>
          <LinkComponent
            href={`/booknotes/${book.id}`}
            label={book?.properties?.Name?.title[0]?.plain_text + '  '}
          />
          <Text component='span' size='sm'>
            by {book?.properties?.Author?.rich_text[0]?.plain_text + '  '}
          </Text>
        </Box>
      ))}
    </Section>
  );
};

export default Books;

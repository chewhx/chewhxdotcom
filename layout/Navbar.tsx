import { Anchor, Box, Breadcrumbs, Flex, Group, Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navs = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Book Notes', href: '/booknotes' },
  { label: 'Photos', href: '/photos' },
];

const Navbar = () => {
  const { route } = useRouter();
  return (
    <Flex py='md' gap={20} align='flex-end'>
      <Link passHref href='/'>
        <Anchor
          color='dark'
          size='lg'
          weight={600}
          sx={{ letterSpacing: '-0.02rem', display: 'inline-block' }}
        >
          chewhx
        </Anchor>
      </Link>
      <Breadcrumbs>
        <Anchor href='/#about'>
          <Text>About</Text>
        </Anchor>
        <Anchor href='/#works'>
          <Text>Works</Text>
        </Anchor>
        <Link passHref href='/blog'>
          <Anchor>
            <Text>Blog</Text>
          </Anchor>
        </Link>
        <Anchor href='https://www.linkedin.com/in/chewhx/' target='_blank'>
          <Text>LinkedIn</Text>
        </Anchor>
        <Anchor href='https://github.com/chewhx' target='_blank'>
          <Text>GitHub</Text>
        </Anchor>
      </Breadcrumbs>
    </Flex>
  );
};

export default Navbar;

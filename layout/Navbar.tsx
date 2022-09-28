import { Anchor, Box } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { route } = useRouter();
  const isHome = route === '/';
  return (
    <Box my='xl' hidden={isHome}>
      <Link passHref href='/'>
        <Anchor color='dark' sx={{ fontWeight: 600 }}>
          &#8592; chewhx.com
        </Anchor>
      </Link>
    </Box>
  );
};

export default Navbar;

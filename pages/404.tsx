import { Text } from '@mantine/core';
import { useRouter } from 'next/router';
import React from 'react';

const NotFound = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/');
  }, [router]);
  return (
    <>
      <Text>404 Not Found</Text>
    </>
  );
};

export default NotFound;

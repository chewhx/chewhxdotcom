import { useRouter } from 'next/router';
import React from 'react';

const NotFound = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/');
  }, [router]);
  return (
    <>
      <h1>404 Not Found</h1>
    </>
  );
};

export default NotFound;

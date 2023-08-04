import { useRouter } from 'next/router';
import React from 'react';

const NotFound = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/');
  }, [router]);
  return (
    <>
      <p>404 Not Found</p>
    </>
  );
};

export default NotFound;

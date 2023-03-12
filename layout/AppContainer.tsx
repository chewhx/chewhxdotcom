import { Box, Container } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container style={{ maxWidth: '1400px', width: '100vw' }} px='lg'>
      <Navbar />
      <Box component='main'>{children}</Box>
      <Footer />
    </Container>
  );
};

export default AppContainer;

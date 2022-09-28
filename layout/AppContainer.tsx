import { Box, Container } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container style={{ maxWidth: '850px' }}>
      <Navbar />
      <Box component='main' sx={{ minHeight: 'calc(100vh - 45.8px - 200px)' }}>
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default AppContainer;

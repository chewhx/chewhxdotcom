import { MantineProvider } from '@mantine/core';
import React from 'react';

const ThemeProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;

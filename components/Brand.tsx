import { Box, Breadcrumbs, Flex, Text } from '@mantine/core';
import { Plus } from 'tabler-icons-react';

const Brand = () => {
  return (
    <Flex h={400} align='center'>
      <Box>
        <Text size='1.75rem' weight={500} sx={{ letterSpacing: '-0.03em' }}>
          Chew Han Xiang
        </Text>
        <Breadcrumbs separator='+'>
          <Text size='xl' color='gray' sx={{ letterSpacing: '-0.03em' }}>
            Software Engineer
          </Text>
        </Breadcrumbs>
      </Box>
    </Flex>
  );
};

export default Brand;

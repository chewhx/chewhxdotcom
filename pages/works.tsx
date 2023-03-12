import {
  Accordion,
  Anchor,
  Box,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { Plus } from 'tabler-icons-react';
import { getDatabase } from '../lib/notion';

interface Props {
  works?: any[];
}

const Works = ({ works: repos }: Props) => {
  const { colors } = useMantineTheme();

  return (
    <Box component='section' id='works' my='xl'>
      <Accordion
        chevron={<Plus size='1rem' />}
        multiple
        styles={{
          chevron: {
            '&[data-rotate]': {
              transform: 'rotate(45deg)',
            },
          },
          control: {
            '&[data-active]': {
              backgroundColor: colors.gray[0],
            },
          },
        }}
        chevronPosition='left'
      >
        {repos?.map((data) => {
          const title = data?.properties?.Name?.title?.at(0)?.plain_text;
          const excerpt =
            data?.properties?.Excerpt?.rich_text?.at(0)?.plain_text;
          const type = data?.properties?.Type?.rich_text?.at(0)?.plain_text;
          const image = data?.properties?.Cover?.files?.at(0)?.file?.url;
          const images = data?.properties?.Cover?.files;
          const year = data?.properties?.Year?.number?.toString();
          const source = data?.properties?.Source?.url;

          return (
            <Accordion.Item value={data?.id} key={data?.id} px={0}>
              <Accordion.Control>
                <Flex align='center' justify='space-between'>
                  <Text size='lg' sx={{ letterSpacing: '-0.03em' }}>
                    {title}
                  </Text>
                  <Text>{year}</Text>
                </Flex>
              </Accordion.Control>
              <Accordion.Panel>
                <Grid gutter='xl' py='lg'>
                  <Grid.Col xs={12} md={3}>
                    <Text size='sm' color='gray'>
                      {type}
                    </Text>
                  </Grid.Col>
                  <Grid.Col xs={12} md={3}>
                    <Text size='sm'>{excerpt}</Text>
                    {source ? (
                      <Anchor href={source} target='_blank'>
                        <Text size='sm' my='xl'>
                          View work ↗
                        </Text>
                      </Anchor>
                    ) : (
                      <Text
                        size='sm'
                        my='xl'
                        color='gray'
                        sx={{
                          cursor: 'not-allowed',
                          textDecoration: 'line-through',
                        }}
                        opacity={0.6}
                      >
                        Not available to view ↗
                      </Text>
                    )}
                  </Grid.Col>
                  <Grid.Col xs={12} md={6}>
                    <Stack spacing='xl'>
                      {images?.map(
                        (e: { name: string; file: { url: string } }) => (
                          <Image
                            key={e.name}
                            sx={{
                              boxShadow:
                                'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
                            }}
                            withPlaceholder
                            mb='lg'
                            alt={title}
                            fit='cover'
                            width='100%'
                            src={e.file.url}
                            radius='sm'
                          />
                        )
                      )}
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Accordion.Panel>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default Works;

export const getStaticProps = async () => {
  const data = await getDatabase(process.env.NOTION_WORKS_DB_ID || '', {
    sorts: [
      {
        property: 'Year',
        direction: 'descending',
      },
      { property: 'Name', direction: 'ascending' },
    ],
  });
  return {
    props: {
      repos: data,
    },
    revalidate: 60,
  };
};

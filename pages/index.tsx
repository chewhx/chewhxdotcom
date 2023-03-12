import type { NextPage } from 'next';
import { getDatabase } from '../lib/notion';
import Brand from '../components/Brand';
import About from './about';
import Works from './works';

interface Props {
  works: any[];
}

const Home: NextPage<Props> = ({ works }) => {
  return (
    <>
      <Brand />
      <About />
      <Works works={works} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const works = await getDatabase(process.env.NOTION_WORKS_DB_ID || '', {
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
      works,
    },
    revalidate: 60,
  };
}

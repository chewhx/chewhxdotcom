import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextPage } from 'next';
import { getDatabase } from '../lib/notion';
import Projects from './projects';
import Works from './works';

interface Props {
  works: any[];
  projects: PageObjectResponse[];
}

const Home: NextPage<Props> = ({ works, projects }) => {
  return (
    <>
      <Works works={works} />
      <Projects projects={projects} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const works = await getDatabase(process.env.NOTION_WORKS_DB_ID || '', {
    sorts: [
      {
        property: 'Number',
        direction: 'ascending',
      },
    ],
  });

  const projects = await getDatabase(process.env.NOTION_PROJECTS_DB_ID || '', {
    sorts: [
      {
        property: 'Number',
        direction: 'ascending',
      },
    ],
  });

  return {
    props: {
      works,
      projects,
    },
    revalidate: 60,
  };
}

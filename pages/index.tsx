import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NextPage } from 'next';
import { getDatabase } from '../lib/notion';
import Projects from './projects';

interface Props {
  works: any[];
  projects: PageObjectResponse[];
}

const Home: NextPage<Props> = ({ works, projects }) => {
  return <Projects projects={projects} />;
};

export default Home;

export async function getStaticProps() {
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
      projects,
    },
    revalidate: 60,
  };
}

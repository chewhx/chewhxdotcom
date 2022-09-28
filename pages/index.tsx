import type { NextPage } from 'next';
import About from '../components/About';
import Brand from '../components/Brand';
import Projects from '../components/Projects';
import Tools from '../components/Tools';
import { projects } from '../data/projects';
import { tools } from '../data/tools';
import { getGitHubRepo } from '../lib/octokit';
import { getDatabase } from '../lib/notion';
import Scribbles from '../components/Scribbles';
import Books from '../components/Books';

interface Props {
  tools: any[];
  projects: any[];
  scribbles: any[];
  books: any[];
}

const Home: NextPage<Props> = ({ tools, projects, scribbles, books }) => {
  return (
    <>
      <Brand />
      <About />
      <Tools repos={tools} />
      <Projects repos={projects} />
      <Scribbles posts={scribbles} />
      <Books books={books} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const _tools = await Promise.all(
    tools.map(async ({ owner, repo }) => await getGitHubRepo(owner, repo))
  );

  const _projects = await Promise.all(
    projects.map(async ({ owner, repo }) => await getGitHubRepo(owner, repo))
  );

  const _scribbles = await getDatabase(
    process.env.NOTION_SCRIBBLES_DB_ID || ''
  );

  const _books = await getDatabase(process.env.NOTION_BOOKNOTES_DB_ID || '', {
    filter: {
      and: [
        {
          property: 'Published',
          type: 'checkbox',
          checkbox: {
            equals: true,
          },
        },
        {
          type: 'multi_select',
          property: 'Media',
          multi_select: {
            contains: 'Book',
          },
        },
      ],
    },
  });

  return {
    props: {
      tools: _tools,
      projects: _projects,
      scribbles: _scribbles,
      books: _books,
    },
    revalidate: 60,
  };
}

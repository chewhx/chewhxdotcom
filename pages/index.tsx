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

interface Props {
  tools: any[];
  projects: any[];
  scribbles: any[];
}

const Home: NextPage<Props> = ({ tools, projects, scribbles }) => {
  return (
    <>
      <Brand />
      <About />
      <Tools repos={tools} />
      <Projects repos={projects} />
      <Scribbles posts={scribbles} />
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

  return {
    props: {
      tools: _tools,
      projects: _projects,
      scribbles: _scribbles,
    },
    revalidate: 60,
  };
}

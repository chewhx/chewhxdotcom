import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { GetStaticProps } from 'next';
import { getDatabase } from '../lib/notion';

const Projects = ({ projects }: { projects: PageObjectResponse[] }) => {
  return (
    <div>
      {projects?.map((project) => {
        const title =
          project.properties?.Name?.type === 'title'
            ? project.properties?.Name?.title[0]['plain_text']
            : null;

        const description =
          project.properties.Description?.type === 'rich_text'
            ? project?.properties?.Description?.rich_text[0]['plain_text']
            : null;

        const technologies =
          project.properties.Technologies?.type === 'rich_text'
            ? project?.properties?.Technologies?.rich_text[0]['plain_text']
            : null;

        const link =
          project.properties.Link?.type === 'url'
            ? project?.properties?.Link?.url
            : null;

        return (
          <li key={project.id} className='list-none my-4'>
            {link ? (
              <a
                href={link}
                className='underline hover:text-slate-500'
                target='_blank'
                rel='noreferrer'
              >
                {title}
              </a>
            ) : (
              <p>{title}</p>
            )}
            <p className='text-sm text-muted-foreground'>{description}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
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
};

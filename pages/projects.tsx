import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { GetStaticProps } from 'next';
import { getDatabase } from '../lib/notion';

const Projects = ({ projects }: { projects: PageObjectResponse[] }) => {
  return (
    <>
      <p className='text-xl text-center text-muted-foreground py-8'>Projects</p>
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
            <div
              key={project.id}
              className='grid md:grid-cols-12 py-4 w-full items-center [&:not(:last-child)]:border-b gap-1'
            >
              <div className='col-span-4'>
                <p className='font-bold'>{title}</p>
              </div>
              <div className='col-span-7'>
                <p className='font-medium'>{description}</p>
                <p className='text-slate-500 text-sm'>{technologies}</p>
              </div>
              <div className='col-span-1 text-center my-2'>
                {!link ? (
                  <p className='text-3xl'>-</p>
                ) : (
                  <a
                    href={link}
                    className='text-blue-600 text-3xl hover:bg-slate-50 p-2 px-4 font-[300]'
                    target='_blank'
                    rel='noreferrer'
                  >
                    &#8599;
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
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

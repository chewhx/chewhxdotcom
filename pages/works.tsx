import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { GetStaticProps } from 'next';
import { getDatabase } from '../lib/notion';

const Works = ({ works }: { works: PageObjectResponse[] }) => {
  return (
    <>
      <p className='text-xl text-center text-muted-foreground py-8'>Works</p>
      <div>
        {works?.map((work) => {
          const title =
            work.properties?.Name?.type === 'title'
              ? work.properties?.Name?.title[0]?.plain_text
              : null;

          const description =
            work.properties.Description?.type === 'rich_text'
              ? work?.properties?.Description?.rich_text[0]?.plain_text
              : null;

          const technologies =
            work.properties.Technologies?.type === 'rich_text'
              ? work?.properties?.Technologies?.rich_text[0]?.plain_text
              : null;

          const link =
            work.properties.Link?.type === 'url'
              ? work?.properties?.Link?.url
              : null;

          return (
            <div
              key={work.id}
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

export default Works;

export const getStaticProps: GetStaticProps = async () => {
  const works = await getDatabase(process.env.NOTION_WORKS_DB_ID || '', {
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
    },
    revalidate: 60,
  };
};

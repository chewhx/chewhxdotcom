import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: string) => {
  const res = await notion.databases.query({
    database_id: databaseId,
  });
  return res.results;
};

export const getPage = async (pageId: string) => {
  const res = await notion.pages.retrieve({
    page_id: pageId,
  });
  return res;
};

export const getBlocks = async (blockId: string) => {
  const res = await notion.blocks.children.list({
    block_id: blockId,
  });
  return res;
};

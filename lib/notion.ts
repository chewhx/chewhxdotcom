import { Client } from '@notionhq/client';
import {
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (
  databaseId: string,
  queryParams?: Omit<QueryDatabaseParameters, 'database_id'>
) => {
  let query = {
    database_id: databaseId,
  };

  if (queryParams) {
    query = { ...query, ...queryParams };
  }

  const res = await notion.databases.query(query);
  return res.results;
};

export const getPage = async (pageId: string) => {
  const res = await notion.pages.retrieve({
    page_id: pageId,
  });
  return res;
};

export const getBlocks = async (
  blockId: string,
  memo: any = [],
  nextCursor?: string
) => {
  let res: { object: 'list'; results: any[] } = {
    object: 'list',
    results: memo,
  };

  const query: ListBlockChildrenParameters = {
    block_id: blockId,
  };

  if (nextCursor) {
    query.start_cursor = nextCursor;
  }

  const blocks = await notion.blocks.children.list(query);

  res.results = res.results.concat(blocks.results);

  if (blocks.has_more && blocks.next_cursor) {
    res = await getBlocks(blockId, res.results, blocks.next_cursor);
  }

  return res;
};

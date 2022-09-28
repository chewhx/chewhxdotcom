import {
  BlockComponentsMapperType,
  NotionBlock,
  Render,
} from '@9gustin/react-notion-render';
import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

interface Props {
  blocks: NotionBlock[];
  useStyles?: boolean;
  classNames?: boolean;
  emptyBlocks?: boolean;
  slugifyFn?: (text: string) => string;
  mapPageUrlFn?: (input: any) => string;
  simpleTitles?: boolean;
  blockComponentsMapper?: BlockComponentsMapperType;
}

const RenderNotion: React.FC<Props> = ({ blocks }) => {
  return <Render blocks={blocks} simpleTitles />;
};

// block.content.file.url
export default RenderNotion;

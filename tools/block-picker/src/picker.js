import React, {useEffect, useState} from 'react';
import {ProgressCircle, Flex, ListView, Item, ActionMenu, Text} from '@adobe/react-spectrum';
import Copy from '@spectrum-icons/workflow/Copy';
import {copyTable} from './copy-utils';

const handleAction = async (key, block) => {
  if (key === 'copy') {
    await copyTable(block);
  }
}

export default function Picker() {
  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState(true);

  useEffect(() => {
    fetch('/block-library/query-index.json')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBlocks(json.data);
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <Flex justifyContent={"center"} height={"100%"}><ProgressCircle isIndeterminate /></Flex>
  }

  return <ListView maxWidth="size-6000">
    {
      blocks.map((block) => {
        return <Item key={block.path}>
          <a href={block.path}>{block.title}</a>
          <ActionMenu direction={"left"} onAction={(action) => handleAction(action, block)}>
            <Item key={"copy"}>
              <Copy />
              <Text>Copy</Text>
            </Item>
          </ActionMenu>
        </Item>
      })
    }
  </ListView>
}

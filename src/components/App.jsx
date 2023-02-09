import { BlogCard } from './BlogCard/BlogCard';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Points } from './Points/Points';
import article from 'data/article.json';
import {FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Tabs>
  <TabList>
    <Tab>BlogCard</Tab>
    <Tab>Points</Tab>
    <Tab>Friend-list</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <BlogCard
      poster={article.poster}
      tag={article.tag}
      title={article.title}
      description={article.description}
      userName={article.name}
      avatar={article.avatar}
      postedAt={article.postedAt}
    />
    </TabPanel>
    <TabPanel>
      <Points />
    </TabPanel>
    <TabPanel>
     <FriendList />
    </TabPanel>
  </TabPanels>
</Tabs>

    
  );
};

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import PastTasks from './PastTasks';
import CurrentTasks from './CurrentTasks';
import UpcomingTasks from './UpcomingTasks';

import './Home.scss';

export default function Home() {
  return (
    <div className="home-content">
      <Tabs
        defaultIndex={1}
        size="lg"
        className="home"
        isLazy
        position="relative"
        orientation="vertical"
      >
        <TabList className="home-list" alignItems="start">
          <Tab
            color="black"
            _selected={{
              color: 'darkgray',
              bg: '#f2f5f7',
              borderBottom: '2px solid black',
            }}
            _hover={{
              bg: '#d4dee4',
              color: 'black',
            }}
            className="home-list__link"
            name="planning"
          >
            Tâches terminées
          </Tab>
          <Tab
            color="black"
            _selected={{
              color: 'darkgray',
              bg: '#f2f5f7',
              borderBottom: '2px solid black',
            }}
            _hover={{
              bg: '#d4dee4',
              color: 'black',
            }}
            className="home-list__link"
            name="profil"
          >
            Tâches en cours
          </Tab>
          <Tab
            color="black"
            _selected={{
              color: 'darkgray',
              bg: '#f2f5f7',
              borderBottom: '2px solid black',
            }}
            _hover={{
              bg: '#d4dee4',
              color: 'black',
            }}
            className="home-list__link"
            name="profil"
          >
            Tâches à venir
          </Tab>
        </TabList>
        <TabPanels p="2rem">
          <TabPanel>
            <PastTasks />
          </TabPanel>
          <TabPanel>
            <CurrentTasks />
          </TabPanel>
          <TabPanel>
            <UpcomingTasks />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

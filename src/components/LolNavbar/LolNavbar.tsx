import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  Sheet,
  Tab,
  TabList,
  Tabs,
  Typography,
  tabClasses,
} from '@mui/joy';
import LolSearch from '../LolSearch/LolSearch';

const LolNavbar = () => {
  return (
    <Sheet>
      <Tabs
        aria-label="tabs"
        defaultValue={0}
        sx={{ bgcolor: 'transparent', boxShadow: 'md' }}
      >
        <TabList
          disableUnderline
          sx={{
            // p: 0.5,
            // gap: 0.5,
            gap: 2,
            borderRadius: 'sm',
            // bgcolor: 'background.level1',
            bgcolor: '#DBDDFF',

            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              // boxShadow: 'sm',
              boxShadow: 'md',
              bgcolor: 'background.surface',
              // color: 'primary.plainColor',
              color: '#7275a0',
            },
          }}
        >
          <Typography fontSize={'sm'}>
            <Link component={RouterLink} underline="none" to="/lol/leaderboard">
              <Tab disableIndicator>Leaderboard</Tab>
            </Link>

            <Tab disableIndicator>Search</Tab>
            <LolSearch />
          </Typography>
        </TabList>
      </Tabs>
    </Sheet>
  );
};

export default LolNavbar;

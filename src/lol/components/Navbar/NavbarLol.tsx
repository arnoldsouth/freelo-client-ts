import React from 'react';
import SearchLol from '../Search/SearchLol';
import { Link, Tab, TabList, Tabs, Typography, tabClasses } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';

const NavbarLol = () => {
  return (
    <div>
      <Tabs
        aria-label="tabs"
        defaultValue={0}
        sx={{ bgcolor: 'transparent', boxShadow: 'md' }}
      >
        <TabList
          disableUnderline
          sx={{
            p: 0.5,
            gap: 0.5,
            borderRadius: 'xl',
            bgcolor: 'background.level1',

            [`& .${tabClasses.root}[aria-selected="true"]`]: {
              boxShadow: 'sm',
              bgcolor: 'background.surface',
              color: 'primary.plainColor',
            },
          }}
        >
          <Typography fontSize={'sm'}>
            <Link component={RouterLink} underline="none" to="/lol/search">
              <Tab disableIndicator>Search</Tab>
            </Link>

            <Link component={RouterLink} underline="none" to="/lol/leaderboard">
              <Tab disableIndicator>Leaderboard</Tab>
            </Link>

            <Link component={RouterLink} underline="none" to="/lol">
              <Tab disableIndicator>LOL</Tab>
            </Link>

            <Link component={RouterLink} underline="none" to="/val">
              <Tab disableIndicator>VAL</Tab>
            </Link>
          </Typography>
        </TabList>
      </Tabs>
      <SearchLol />
    </div>
  );
};

export default NavbarLol;

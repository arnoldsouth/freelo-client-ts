import React from 'react';
import SearchLol from '../SearchLol/SearchLol';
import { Link } from 'react-router-dom';
import { Tab, TabList, Tabs } from '@mui/joy';

const NavbarLol = () => {
  return (
    // <Sheet
    //   sx={{
    //     // width: 300,
    //     // mx: 'auto', // margin left & right
    //     // my: 4, // margin top & bottom
    //     // py: 3, // padding top & bottom
    //     // px: 2, // padding left & right
    //     display: 'flex',
    //     // flexDirection: 'column',
    //     flexDirection: 'row',
    //     // gap: 2,
    //     // borderRadius: 'sm',
    //     // boxShadow: 'md',
    //   }}
    //   variant="outlined"
    // >
    <Tabs>
      <TabList>
        {/* <SearchLol /> */}

        <Tab disableIndicator>
          <Link to="/lol/leaderboard">Leaderboard</Link>
        </Tab>
      </TabList>
    </Tabs>
    // </Sheet>
  );
};

export default NavbarLol;

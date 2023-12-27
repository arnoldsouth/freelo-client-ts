import * as React from 'react';
// import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import {
  CloseFullscreenTwoTone,
  DisabledByDefaultTwoTone,
  FilterCenterFocusTwoTone,
  FlipToFrontTwoTone,
  FullscreenTwoTone,
  GamesTwoTone,
  GpsFixedTwoTone,
  Grid4x4TwoTone,
  GridOffTwoTone,
  WorkspacesTwoTone,
} from '@mui/icons-material';

const Navigation = () => {
  return (
    <List
      size="sm"
      sx={{ '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '4px' }}
    >
      <ListItem nested>
        <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
          Browse
        </ListSubheader>

        <List
          aria-labelledby="nav-list-browse"
          sx={{
            '& .JoyListItemButton-root': { p: '8px' },
          }}
        >
          <ListItem>
            {/* <ListItemButton selected> */}
            <ListItemButton component="a" href="/lol/">
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                {/* <FullscreenTwoTone fontSize="small" /> */}
                <GridOffTwoTone fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>League of Legends</ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            {/* <ListItemButton> */}
            <ListItemButton component="a" href="/val/">
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                {/* <GamesTwoTone fontSize="small" /> */}
                <GpsFixedTwoTone fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Valorant</ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            {/* <ListItemButton> */}
            <ListItemButton component="a" href="/tft/">
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <WorkspacesTwoTone fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Teamfight Tactics</ListItemContent>
            </ListItemButton>
          </ListItem>

          {/* <ListItem>
            <ListItemButton>
              <ListItemDecorator sx={{ color: 'neutral.500' }}>
                <ArticleRoundedIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Policies</ListItemContent>
              <Chip variant="soft" color="warning" size="sm">
                2
              </Chip>
            </ListItemButton>
          </ListItem> */}
        </List>
      </ListItem>
    </List>
  );
};

export default Navigation;

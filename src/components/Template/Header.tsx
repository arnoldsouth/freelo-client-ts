import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Tooltip from '@mui/joy/Tooltip';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import Navigation from './Navigation';

import {
  InfoTwoTone,
  LogoutTwoTone,
  MenuTwoTone,
  OpenInNewTwoTone,
  SearchTwoTone,
  SettingsTwoTone,
  VideogameAssetTwoTone,
} from '@mui/icons-material';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <Tooltip title="" variant="outlined">
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="plain"
        color="neutral"
        sx={{ alignSelf: 'center' }}
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        <IconButton
          size="md"
          variant="outlined"
          color="neutral"
          component="a"
          href="/"
          sx={{
            display: { xs: 'none', sm: 'inline-flex' },
            borderRadius: '50%',
          }}
        >
          <VideogameAssetTwoTone />
        </IconButton>

        {/* <Button
          // aria-pressed="true"
          variant="plain"
          color="neutral"
          component="a"
          href="/"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          <VideogameAssetTwoTone />
        </Button> */}

        <Button
          // aria-pressed="true"
          variant="plain"
          color="neutral"
          component="a"
          href="/lol/"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          League of Legends
        </Button>

        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/val/"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          Valorant
        </Button>

        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/tft/"
          size="sm"
          sx={{ alignSelf: 'center' }}
        >
          Teamfight Tactics
        </Button>
      </Stack>

      <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
        <IconButton
          variant="plain"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <MenuTwoTone />
        </IconButton>

        <Drawer
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />

          <DialogTitle>FREELO</DialogTitle>

          <Box sx={{ px: 1 }}>
            <Navigation />
          </Box>
        </Drawer>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        {/* <Input
          size="sm"
          variant="outlined"
          placeholder="Search player"
          startDecorator={<SearchTwoTone color="primary" />}
          endDecorator={
            <IconButton
              variant="outlined"
              color="neutral"
              sx={{ bgcolor: 'background.level1' }}
            >
              <Typography level="title-sm" textColor="text.icon">
                ⌘ K
              </Typography>
            </IconButton>
          }
          sx={{
            alignSelf: 'center',
            display: {
              xs: 'none',
              sm: 'flex',
            },
          }}
        />

        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          sx={{
            display: { xs: 'inline-flex', sm: 'none' },
            alignSelf: 'center',
          }}
        >
          <SearchTwoTone />
        </IconButton> */}

        <Tooltip title="About" variant="outlined">
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            component="a"
            href="/about/"
            sx={{ alignSelf: 'center' }}
          >
            <InfoTwoTone />
          </IconButton>
        </Tooltip>

        <ColorSchemeToggle />

        <Dropdown>
          <MenuButton
            variant="plain"
            size="sm"
            sx={{
              maxWidth: '32px',
              maxHeight: '32px',
              borderRadius: '9999999px',
            }}
          >
            <Avatar
              src="https://ui-avatars.com/api/?name=ajax"
              srcSet="https://ui-avatars.com/api/?name=ajax"
              sx={{ maxWidth: '32px', maxHeight: '32px' }}
            />
          </MenuButton>

          <Menu
            placement="bottom-end"
            size="sm"
            sx={{
              zIndex: '99999',
              p: 1,
              gap: 1,
              '--ListItem-radius': 'var(--joy-radius-sm)',
            }}
          >
            <MenuItem>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src="https://ui-avatars.com/api/?name=AJ"
                  srcSet="https://ui-avatars.com/api/?name=AJ"
                  sx={{ borderRadius: '50%' }}
                />
                <Box sx={{ ml: 1.5 }}>
                  <Typography level="title-sm" textColor="text.primary">
                    ajax
                  </Typography>

                  <Typography level="body-xs" textColor="text.tertiary">
                    ajax@gmail.com
                  </Typography>
                </Box>
              </Box>
            </MenuItem>

            <ListDivider />

            <MenuItem>
              <SettingsTwoTone />
              Settings
            </MenuItem>

            <ListDivider />

            <MenuItem component="a" href="https://developer.riotgames.com/">
              Official Riot Games API
              <OpenInNewTwoTone />
            </MenuItem>

            <ListDivider />

            <MenuItem>
              <LogoutTwoTone />
              Log out
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
    </Box>
  );
}

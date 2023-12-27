import { Link as RouterLink } from 'react-router-dom';
import { Link, Tab, TabList, Tabs, Typography, tabClasses } from '@mui/joy';

const Navbar = () => {
  return (
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
          <Link component={RouterLink} underline="none" to="/">
            <Tab disableIndicator>FREELO</Tab>
          </Link>

          <Link component={RouterLink} underline="none" to="/lol">
            <Tab disableIndicator>LOL</Tab>
          </Link>

          <Link component={RouterLink} underline="none" to="/val">
            <Tab disableIndicator>VAL</Tab>
          </Link>

          <Link component={RouterLink} underline="none" to="/about">
            <Tab disableIndicator>About</Tab>
          </Link>
        </Typography>
      </TabList>
    </Tabs>
  );
};

export default Navbar;

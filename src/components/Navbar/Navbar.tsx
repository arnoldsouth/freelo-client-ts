import { Link, Tab, TabList, Tabs, Typography, tabClasses } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';

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
        <Typography
          sx={{
            p: 0.5,
            gap: 0.5,
          }}
          fontSize="lg"
        >
          <Link component={RouterLink} underline="none" to="/">
            FREELO
            {/* <Tab disableIndicator>FREELO</Tab> */}
          </Link>
        </Typography>

        <Typography fontSize={'sm'}>
          <Link component={RouterLink} underline="none" to="/">
            <Tab disableIndicator>Home</Tab>
          </Link>

          <Link component={RouterLink} underline="none" to="/about">
            <Tab disableIndicator>About</Tab>
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
  );
};

export default Navbar;

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
        <Typography fontSize="sm">
          <Link component={RouterLink} underline="none" to="/">
            <Tab disableIndicator>Home</Tab>
          </Link>

          <Link component={RouterLink} underline="none" to="/leaderboard">
            <Tab disableIndicator>Leaderboard</Tab>
          </Link>
        </Typography>
      </TabList>
    </Tabs>
  );
};

export default Navbar;

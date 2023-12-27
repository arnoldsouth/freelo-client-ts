// import './App.css';

// import RouterConfig from './routes/RouterConfig';

// const App = () => {
//   return (
//     <div className="App">
//       <RouterConfig />
//     </div>
//   );
// };

// export default App;

// import * as React from 'react';
// import { CssVarsProvider } from '@mui/joy/styles';
// import CssBaseline from '@mui/joy/CssBaseline';

// import Box from '@mui/joy/Box';

// import Typography from '@mui/joy/Typography';
// import Button from '@mui/joy/Button';
// import List from '@mui/joy/List';
// import Stack from '@mui/joy/Stack';
// import AccordionGroup from '@mui/joy/AccordionGroup';
// import Accordion from '@mui/joy/Accordion';
// import AccordionDetails, {
//   accordionDetailsClasses,
// } from '@mui/joy/AccordionDetails';
// import AccordionSummary, {
//   accordionSummaryClasses,
// } from '@mui/joy/AccordionSummary';

// import Layout from './components/Template/Layout';
// import Header from './components/Template/Header';
// import Navigation from './components/Template/Navigation';

// import {
//   FullscreenTwoTone,
//   GamesTwoTone,
//   LeaderboardTwoTone,
//   SearchTwoTone,
//   WorkspacesTwoTone,
// } from '@mui/icons-material';
// import { IconButton, Input } from '@mui/joy';

import HomePage from './pages/HomePage';

const App = () => {
  return (
    <HomePage />

    //   <CssVarsProvider disableTransitionOnChange>
    //     <CssBaseline />

    //     {drawerOpen && (
    //       <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
    //         <Navigation />
    //       </Layout.SideDrawer>
    //     )}

    //     <Stack
    //       id="tab-bar"
    //       direction="row"
    //       justifyContent="space-around"
    //       spacing={1}
    //       sx={{
    //         display: { xs: 'flex', sm: 'none' },
    //         zIndex: '999',
    //         bottom: 0,
    //         position: 'fixed',
    //         width: '100dvw',
    //         py: 2,
    //         backgroundColor: 'background.body',
    //         borderTop: '1px solid',
    //         borderColor: 'divider',
    //       }}
    //     >
    //       <Button
    //         // aria-pressed="true"
    //         variant="plain"
    //         color="neutral"
    //         component="a"
    //         // href="/joy-ui/getting-started/templates/email/"
    //         href="/lol/"
    //         size="sm"
    //         startDecorator={<FullscreenTwoTone />}
    //         sx={{ flexDirection: 'column', '--Button-gap': 0 }}
    //       >
    //         {/* League of Legends */}
    //         LOL
    //       </Button>

    //       <Button
    //         variant="plain"
    //         color="neutral"
    //         component="a"
    //         // href="/joy-ui/getting-started/templates/team/"
    //         href="/val/"
    //         size="sm"
    //         startDecorator={<GamesTwoTone />}
    //         sx={{ flexDirection: 'column', '--Button-gap': 0 }}
    //       >
    //         {/* Valorant */}
    //         VAL
    //       </Button>

    //       <Button
    //         variant="plain"
    //         color="neutral"
    //         component="a"
    //         href="/tft/"
    //         // href="/joy-ui/getting-started/templates/files/"
    //         size="sm"
    //         startDecorator={<WorkspacesTwoTone />}
    //         sx={{ flexDirection: 'column', '--Button-gap': 0 }}
    //       >
    //         {/* Teamfight Tactics */}
    //         TFT
    //       </Button>
    //     </Stack>

    //     <Layout.Root
    //       sx={{
    //         ...(drawerOpen && {
    //           height: '100vh',
    //           overflow: 'hidden',
    //         }),
    //       }}
    //     >
    //       <Layout.Header>
    //         <Header />
    //       </Layout.Header>

    //       <Layout.SideNav>
    //         <Navigation />
    //       </Layout.SideNav>

    //       <Layout.SidePane>
    //         <Box
    //           sx={{
    //             p: 2,
    //             display: 'flex',
    //             flexDirection: 'row',
    //             gap: 1.5,
    //             alignItems: 'center',
    //           }}
    //         >
    //           <Input
    //             size="sm"
    //             variant="outlined"
    //             placeholder="Search player"
    //             startDecorator={<SearchTwoTone color="primary" />}
    //             endDecorator={
    //               <IconButton
    //                 variant="outlined"
    //                 color="neutral"
    //                 sx={{ bgcolor: 'background.level1' }}
    //               >
    //                 <Typography level="title-sm" textColor="text.icon">
    //                   ⌘ K
    //                 </Typography>
    //               </IconButton>
    //             }
    //             sx={{
    //               alignSelf: 'center',
    //               display: {
    //                 // xs: 'none',
    //                 sm: 'flex',
    //               },
    //             }}
    //           />
    //         </Box>

    //         <Box
    //           sx={{
    //             display: 'flex',
    //             alignItems: 'center',
    //             justifyContent: 'space-between',
    //           }}
    //         >
    //           <AccordionGroup
    //             sx={{
    //               [`& .${accordionDetailsClasses.content}`]: {
    //                 px: 2,
    //               },
    //               [`& .${accordionSummaryClasses.button}`]: {
    //                 px: 2,
    //               },
    //             }}
    //           >
    //             <Accordion defaultExpanded>
    //               <AccordionSummary>
    //                 <Typography level="title-lg">LOL Leaderboard</Typography>
    //               </AccordionSummary>

    //               <AccordionDetails>
    //                 <Box
    //                   sx={{
    //                     my: 2,
    //                     display: 'flex',
    //                     alignItems: 'center',
    //                     justifyContent: 'space-between',
    //                   }}
    //                 >
    //                   <Typography level="title-md" textColor="text.secondary">
    //                     Top 5
    //                   </Typography>
    //                   <Button startDecorator={<LeaderboardTwoTone />} size="sm">
    //                     View
    //                   </Button>
    //                 </Box>
    //               </AccordionDetails>
    //             </Accordion>

    //             <Accordion defaultExpanded>
    //               <AccordionSummary>
    //                 <Typography level="title-lg">VAL Leaderboard</Typography>
    //               </AccordionSummary>

    //               <AccordionDetails>
    //                 <Box
    //                   sx={{
    //                     my: 2,
    //                     display: 'flex',
    //                     alignItems: 'center',
    //                     justifyContent: 'space-between',
    //                   }}
    //                 >
    //                   <Typography level="title-md" textColor="text.secondary">
    //                     Top 5
    //                   </Typography>
    //                   <Button startDecorator={<LeaderboardTwoTone />} size="sm">
    //                     View
    //                   </Button>
    //                 </Box>
    //               </AccordionDetails>
    //             </Accordion>

    //             <Accordion defaultExpanded>
    //               <AccordionSummary>
    //                 <Typography level="title-lg">TFT Leaderboard</Typography>
    //               </AccordionSummary>

    //               <AccordionDetails>
    //                 <Box
    //                   sx={{
    //                     my: 2,
    //                     display: 'flex',
    //                     alignItems: 'center',
    //                     justifyContent: 'space-between',
    //                   }}
    //                 >
    //                   <Typography level="title-md" textColor="text.secondary">
    //                     Top 5
    //                   </Typography>
    //                   <Button startDecorator={<LeaderboardTwoTone />} size="sm">
    //                     View
    //                   </Button>
    //                 </Box>
    //               </AccordionDetails>
    //             </Accordion>
    //           </AccordionGroup>
    //         </Box>
    //       </Layout.SidePane>

    //       <Layout.Main>
    //         <List
    //           sx={{
    //             display: 'grid',
    //             gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    //             gap: 2,
    //           }}
    //         ></List>
    //       </Layout.Main>
    //     </Layout.Root>
    //   </CssVarsProvider>
    // );
  );
};

export default App;

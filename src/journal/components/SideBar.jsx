import {
  Drawer,
  Box,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Grid,
  ListItemText,
} from '@mui/material';

import { TurnedInNot } from '@mui/icons-material';

export const SideBar = ({ drawerWitdh }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWitdh }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWitdh },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Mariano Pedrini
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>

                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={'Lorem ipsum dolor sit amet.'} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

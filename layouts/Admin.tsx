import {
  AppBar,
  Box,
  Collapse,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Routes } from "configs";
import Link from "next/link";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { RouteProp } from "utils/interfaces";

const drawerWidth = 240;

const AdminLayout = (props) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {Routes.map((route, index) => (
              <Route route={route} key={index} />
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
};

export default AdminLayout;

const Route = ({ route }: { route: RouteProp }) => {
  const [open, setOpen] = useState(false);

  if (!route.subroutes) {
    return (
      <Link href={route.url} passHref>
        <ListItemButton>
          <ListItemIcon>{<route.icon />}</ListItemIcon>
          <ListItemText primary={route.name} />
        </ListItemButton>
      </Link>
    );
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={() => setOpen((prevState) => !prevState)}>
        <ListItemIcon>{<route.icon />}</ListItemIcon>
        <ListItemText primary={route.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {route.subroutes.map((subroute, index) => (
            <Link href={subroute.url} passHref key={index}>
              <ListItemButton>
                <ListItemText inset primary={subroute.name} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

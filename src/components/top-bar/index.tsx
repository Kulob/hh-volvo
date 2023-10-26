import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { navMenu } from "../navigate";
import { useLocation, useNavigate } from "react-router-dom";

const TopBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation()
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen((isDrawerOpen) => !isDrawerOpen);
    // if(location.pathname === '/' ) {
    // } else if (location.pathname === '/contact' || location.pathname === '/'){
    //   {navMenu.map((el) => (navigate(`${el.path}`)))}
    // } else 
    // {navMenu.map((el) => (navigate(`${el.path}`)))}
    console.log(location.pathname);
    
  };
  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
      >
        <MenuIcon sx={{ fontSize: "40px" }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" role="presentation" textAlign="center">
          <List>
            {navMenu.map((el) => (
              <ListItem
                key={el.id}
                disablePadding
                onClick={() => navigate(`${el.path}`)}
              >
                <ListItemButton
                  onClick={() => setIsDrawerOpen(false)}
                  onKeyDown={toggleDrawer}
                >
                  <ListItemIcon>{el.icon}</ListItemIcon>
                  <ListItemText primary={el.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default TopBar;

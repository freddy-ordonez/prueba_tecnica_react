import { Drawer, DrawerHeader } from "../style/drawerStyle";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material";
import { ListMenu } from "./ListMenu";
import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";

export const SideBar = ({ open, toggleDrawer, theme }) => {

  const {username} = useContext(AuthContext)
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={toggleDrawer}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Box display="flex" alignItems="center" justifyContent="flex-start" flexDirection={"column"} p={2}>
        <AccountCircleIcon sx={{fontSize: 50}}/>
        <Box ml={2}>
          <Typography variant="body1">{username}</Typography>
        </Box>
      </Box>
      <Divider />
      <ListMenu open={open} />
      <Divider />
    </Drawer>
  );
};

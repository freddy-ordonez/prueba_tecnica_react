import { DrawerHeader } from "../style/drawerStyle";

import { AppBarNav } from "../components/AppBarNav";
import { SideBar } from "../components/SideBar";

import { useState } from "react";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const DashboardLayout = ({ children }) => {
  const muiTheme = useTheme();
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBarNav open={open} toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} theme={muiTheme} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#E0E0E0" }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

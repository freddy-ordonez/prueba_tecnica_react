import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Box, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { LogoutOutlined } from "@mui/icons-material";


import { AppBar } from "../style/drawerStyle";
import { AuthContext } from "../../context/auth/AuthContext"; 

export const AppBarNav = ({open, toggleDrawer}) => {
  
  const {username, startLogout} = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = ()=> {
    startLogout();
    navigate('/auth/login');
  }
  return (
    <AppBar className="animate__animated animate__fadeInLeft" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Sistema de Clientes
          </Typography>
          {/* Sección de Nombre de Usuario y Logout */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">{username}</Typography>
            <IconButton
            onClick={onLogout} 
            color="inherit">
              <LogoutOutlined />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

import { Home, Person } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const listMenu = [
    {
        url: "/",
        item: "Home",
        icon: <Home />
    },
    {
    url: "/clientes",
    item: "Consulta Clientes",
    icon: <Person />
    }
]

export const ListMenu = ({open}) => {
  return (
    <List>
      {listMenu.map((item, index) => (
        <ListItem key={item.item} disablePadding sx={{ display: "block" }}>
          <Link
            to={item.url}
            style={{ textDecoration: "none" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  backgroundColor: "#C4C4C4",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#2B2B2B",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.item} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

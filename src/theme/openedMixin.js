export const openedMixin = (drawerWidth, theme) => {
  return (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    backgroundColor: "#F5F5F5",
    color: "#2B2B2B",
  });
};

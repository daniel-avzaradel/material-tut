import React from "react";
import { makeStyles } from "@material-ui/core";
import { Drawer, Typography } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
});

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* App bar */}

      {/* Side Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>
      </Drawer>
      <div className={classes.page}>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Layout;

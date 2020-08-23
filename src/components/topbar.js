import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilled from "@material-ui/icons/PauseCircleFilled";
import { grey } from "@material-ui/core/colors";
import { Box, Button } from "@material-ui/core";
import "animate.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function TopBar({
  handleNext,
  handleStart,
  handlePause,
  callStatus,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="body1" color="inherit">
            Dashboard
          </Typography>
          <Box className={classes.root} />
          <Box className="animate__animated animate__pulse animate__infinite">
            {callStatus
              ? "calling, press cltr + shft + J to view call logs"
              : ""}
          </Box>
          <IconButton onClick={handleStart}>
            <PlayCircleFilled style={{ color: grey[50] }} />
          </IconButton>
          <IconButton onClick={handlePause}>
            <PauseCircleFilled style={{ color: grey[50] }} />
          </IconButton>
          <Button variant="contained" color="secondary" onClick={handleNext}>
            Next
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

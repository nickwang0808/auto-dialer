import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#858585",
  },
  alt: {
    background: "#ffffff",
  },
});

function Note(props) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} p={2}>
        <Grid container direction="row">
          <Grid item>
            <Box fontSize={12} mr={2}>
              Jan 24, 2020
            </Box>
          </Grid>
          <Grid item>
            <Box>
              customer said he wanted a newer truck, not willing to do an app
              yet,
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function CallLogs(props) {
  return (
    <>
      <Box borderColor="grey.300" border={1}>
        <Box m={2}>Last Contact Attempt: {"24"}</Box>
        <Note />
        <Note />
        <Note />
        <Note />
      </Box>
    </>
  );
}

export default CallLogs;

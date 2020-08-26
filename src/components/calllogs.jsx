import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#f3f3f3",
  },
  alt: {
    background: "#ffffff",
  },
});

function Note({ date, content, className }) {
  return (
    <>
      <Box className={className} p={2}>
        <Grid container direction="column">
          <Grid item>
            <Box fontSize={12}>{date}</Box>
          </Grid>
          <Grid item>
            <Box>{content}</Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

function CallLogs({ data }) {
  const classes = useStyles();

  return (
    <Box borderColor="grey.300" border={1} overflow="auto" height="60vh">
      <Box m={2}>Last Contact Attempt: {"24"}</Box>
      {data.map((d) => (
        <Note
          key={d.content}
          date={d.date}
          content={d.content}
          className={data.indexOf(d) % 2 === 0 ? classes.root : classes.alt}
        />
      ))}
    </Box>
  );
}

export default CallLogs;

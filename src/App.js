import React, { useState } from "react";
import Info from "./components/info";
import { CssBaseline, Grid, Container, Box } from "@material-ui/core";
import CallLogs from "./components/calllogs";
import TopBar from "./components/topbar";
import Logging from "./components/logging";
import EmailBox from "./components/email";
import Message from "./components/message";

function App() {
  return (
    <>
      <TopBar />
      <Container>
        <Box py={2}>
          <CssBaseline />
          <Grid container spacing={4}>
            <Grid container direction="column" item xs>
              <Grid item xs>
                <Info />
              </Grid>
              <Grid item xs>
                <CallLogs />
              </Grid>
            </Grid>

            <Grid container direction="column" item xs spacing={2}>
              <Grid item xs>
                <Logging />
              </Grid>

              <Grid container direction="row" item xs>
                <Grid item xs>
                  <EmailBox />
                </Grid>
                <Grid item xs>
                  <Message />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;

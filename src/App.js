import React, { useState, useEffect } from "react";
import Info from "./components/info";
import { CssBaseline, Grid, Container, Box } from "@material-ui/core";
import CallLogs from "./components/calllogs";
import TopBar from "./components/topbar";
import Logging from "./components/logging";
import EmailBox from "./components/email";
import Message from "./components/message";

function App() {
  const [loggedNotes, setLoggedNotes] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    let today = new Date().toISOString().slice(0, 10);
    setDate(today);
  }, []);

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/notes");
    const loggedNotes = await response.json();
    setLoggedNotes(loggedNotes);
  }, []);

  const loadNotInt = () => {
    const newNote = {
      date: [date],
      content: "Not Interested" + "  - Power Dialer",
    };
    let loggedNotesCopy = loggedNotes.slice();
    loggedNotesCopy.unshift(newNote);
    setLoggedNotes(loggedNotesCopy);
  };

  const loadCallBack = () => {
    const newNote = {
      date: [date],
      content: "Call Back needed" + "  - Power Dialer",
    };
    let loggedNotesCopy = loggedNotes.slice();
    loggedNotesCopy.unshift(newNote);
    setLoggedNotes(loggedNotesCopy);
  };

  const loadHungUp = () => {
    const newNote = {
      date: [date],
      content: "Hung up" + "  - Power Dialer",
    };
    let loggedNotesCopy = loggedNotes.slice();
    loggedNotesCopy.unshift(newNote);
    setLoggedNotes(loggedNotesCopy);
  };

  const loadWrongNum = () => {
    const newNote = {
      date: [date],
      content: "Wrong number" + "  - Power Dialer",
    };
    let loggedNotesCopy = loggedNotes.slice();
    loggedNotesCopy.unshift(newNote);
    setLoggedNotes(loggedNotesCopy);
  };

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
                <CallLogs data={loggedNotes} />
              </Grid>
            </Grid>

            <Grid container direction="column" item xs spacing={2}>
              <Grid item xs>
                <Logging
                  loadCallBack={loadCallBack}
                  loadHungUp={loadHungUp}
                  loadNotInt={loadNotInt}
                  loadWrongNum={loadWrongNum}
                />
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

import React, { useState, useEffect, useRef } from "react";
import Info from "./components/info";
import { CssBaseline, Grid, Container, Box } from "@material-ui/core";
import CallLogs from "./components/calllogs";
import TopBar from "./components/topbar";
import Logging from "./components/logging";
import EmailBox from "./components/email";
import Message from "./components/message";
import callCustomer from "./testdial";

function App() {
  const [loggedNotes, setLoggedNotes] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [date, setDate] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [calling, setCalling] = useState(false);
  const [callInfo, setCallInfo] = useState("");

  useEffect(() => {
    let today = new Date().toISOString().slice(0, 10);
    setDate(today);
  }, []);

  useEffect(() => {
    // use local files for now
    const fetchData = async () => {
      // something is up, in dev mode, had to add ./custoemr.json for it to work a
      //and then it just worked all the sudden even without it
      const response = await fetch("auto-dialer/customers.json");
      console.log(response);
      const customerList = await response.json();
      setCustomers(customerList);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // use local files for now
    const fetchData = async () => {
      const response = await fetch("auto-dialer/notes.json");
      const loggedNotes = await response.json();
      setLoggedNotes(loggedNotes);
    };
    fetchData();
  }, []);

  // ---- Note logging Button functions
  const loadNotInt = () => {
    const newNote = {
      date: [date],
      content: "Not Interested    - Power Dialer",
    };
    let loggedNotesCopy = loggedNotes.slice();
    loggedNotesCopy.unshift(newNote);
    setLoggedNotes(loggedNotesCopy);
  };

  const loadCallBack = () => {
    const newNote = {
      date: [date],
      content: "Call Back needed    -Power Dialer",
    };
    let loggedNotesCopy = loggedNotes.slice();
    loggedNotesCopy.unshift(newNote);
    setLoggedNotes(loggedNotesCopy);
  };

  const loadHungUp = () => {
    const newNote = {
      date: [date],
      content: "Hung up    - Power Dialer",
    };
    let loggedNotesCopy = loggedNotes.slice();
    loggedNotesCopy.unshift(newNote);
    setLoggedNotes(loggedNotesCopy);
  };

  const loadWrongNum = () => {
    const newNote = {
      date: [date],
      content: "Wrong number    - Power Dialer",
    };
    let loggedNotesCopy = loggedNotes.slice();
    loggedNotesCopy.unshift(newNote);
    setLoggedNotes(loggedNotesCopy);
  };
  // ---- end of Note logging Button functions

  const handleNext = () => {
    console.log("Next Customer");
    const currentIndexCopy = currentIndex;
    setCurrentIndex(currentIndexCopy + 1);
  };

  //using vanilaJS atm to update the box.
  const handleBoxUpdate = (params) => {
    const callBox = document.querySelector("#box");
    callBox.innerHTML = params;
  };

  // this code calls the current customer and go to next customer
  useEffect(() => {
    const run = async () => {
      if (calling) {
        const currentCustomer = customers[currentIndex];

        const numbersToCall = [
          { num: currentCustomer.Cell, attempts: 3 },
          { num: currentCustomer.Home, attempts: 3 },
          { num: currentCustomer.Work, attempts: 1 },
        ];

        await callCustomer(
          currentCustomer.Name,
          numbersToCall,
          handleBoxUpdate
        );
        console.log("this customer is called");
        handleNext();
      }
    };
    run();
  });

  const handlePause = () => {
    setCalling(false);
  };

  const handleStart = () => {
    setCalling(true);
  };

  return (
    <>
      <TopBar
        handleNext={handleNext}
        handlePause={handlePause}
        handleStart={handleStart}
        callStatus={calling}
      />
      <Container>
        <Box py={2}>
          <CssBaseline />

          <Grid container spacing={4}>
            <Grid container direction="column" item xs>
              <Grid item xs>
                <Info customer={customers[currentIndex]} />
              </Grid>

              <Grid item xs>
                <CallLogs data={loggedNotes} />
              </Grid>
            </Grid>

            <Grid container direction="column" item xs spacing={2}>
              <Grid item xs></Grid>

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

import React, { useState } from "react";
import { Box, Grid, Button, TextField, ButtonGroup } from "@material-ui/core";

function Logging(props) {
  const [callNote, setCallNote] = useState();

  return (
    <>
      <Box padding={2}>
        <Grid container direction="column" spacing={1}>
          <Grid item xs>
            <ButtonGroup
              variant="outlined"
              color="primary"
              fullWidth="true"
              size="small"
            >
              <Button onClick={props.loadNotInt}>Not int</Button>
              <Button onClick={props.loadCallBack}>Call Back</Button>
              <Button onClick={props.loadHungUp}>Hung up</Button>
              <Button onClick={props.loadWrongNum}>Wrong num</Button>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <TextField
              label="Log your note here"
              fullWidth
              multiline
              rows={2}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Logging;

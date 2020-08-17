import React from "react";
import { Box, Grid, Button, TextField, ButtonGroup } from "@material-ui/core";

function Logging(props) {
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
              <Button>Not int</Button>
              <Button>Call Back</Button>
              <Button>Hung up</Button>
              <Button>Wrong num</Button>
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

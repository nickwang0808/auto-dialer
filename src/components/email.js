import React from "react";
import { Box, Button, Grid, TextField, ButtonGroup } from "@material-ui/core";

function EmailBox(props) {
  return (
    <>
      <Box p={2}>
        <Grid container direction="row">
          <Grid item container direction="row">
            <Grid item xs>
              <ButtonGroup
                variant="outlined"
                orientation="vertical"
                size="small"
                color="primary"
                fullWidth="true"
              >
                <Button>Email 1</Button>
                <Button>Email 2</Button>
                <Button>Email 3</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs>
              <ButtonGroup
                variant="outlined"
                orientation="vertical"
                size="small"
                color="primary"
                fullWidth="true"
              >
                <Button>Email 4</Button>
                <Button>Email 5</Button>
                <Button>Email 6</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={2}>
          <TextField
            label="you template is here"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
          />
        </Box>
      </Box>
    </>
  );
}

export default EmailBox;

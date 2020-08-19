import React from "react";
import { Box, Button, Grid, TextField, ButtonGroup } from "@material-ui/core";

function Message(props) {
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
                fullWidth
              >
                <Button>Text 1</Button>
                <Button>Text 2</Button>
                <Button>Text 3</Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs>
              <ButtonGroup
                variant="outlined"
                orientation="vertical"
                size="small"
                color="primary"
                fullWidth
              >
                <Button>Text 4</Button>
                <Button>Text 5</Button>
                <Button>Text 6</Button>
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

export default Message;

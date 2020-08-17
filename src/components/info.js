import React from "react";
import { Grid, Box } from "@material-ui/core";

function TextBox(props) {
  return (
    <Grid item>
      <Box>{props.value}</Box>
    </Grid>
  );
}

function Info() {
  return (
    <>
      <Box p={2}>
        <Box fontSize={24} fontWeight="bold" mb={2}>
          Morty Smith
        </Box>
        <Grid container spacing={2}>
          <Grid container direction="column" item xs spacing={0}>
            <TextBox value={"Cell: 306 241 1234"} />
            <TextBox value={"Home: 306 241 1234"} />
            <TextBox value={"Work: 306 241 1234"} />
          </Grid>
          <Grid container direction="column" item xs spacing={0}>
            <TextBox
              value="Adress: 133 Kotlin Street North, 
Saskatoon SK"
            />
            <TextBox value="Postal Code: S7V 3D3" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Info;

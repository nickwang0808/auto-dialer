import React from "react";
import { Grid, Box } from "@material-ui/core";

function Info({ customer }) {
  // had to use a if statement to catch the pre ajax state as undefined error
  if (customer !== undefined) {
    return (
      <>
        <Box p={2}>
          <Box fontSize={24} fontWeight="bold" mb={2}>
            {customer.Name}
          </Box>
          <Grid container spacing={2}>
            <Grid container direction="column" item xs spacing={0}>
              <Box>{`Cell: ${customer.Cell}`}</Box>
              <Box>{`Home: ${customer.Home}`}</Box>
              <Box>{`Work: ${customer.Work}`}</Box>
            </Grid>
            <Grid container direction="column" item xs spacing={0}>
              <Box>{`Address: ${customer.Address}`}</Box>
              <Box>{`Postal: S7G 1tL`}</Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  } else return <Box />;
}

export default Info;

import React from "react";
import { Box } from "@material-ui/core";

function DialBox({ callInfo }) {
  // this is gonna receive a list of called numbers
  return (
    <>
      <Box>{callInfo}</Box>
    </>
  );
}

export default DialBox;

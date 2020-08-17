// this is for Voip setup, migrate back to main code when finished

import React, { useState, useEffect } from "react";
const { Device } = require("twilio-client");

function App() {
  const [deviceReady, setDeviceReady] = useState(false);
  const [connection, setConnection] = useState(false);
  const [number, setNumber] = useState("");

  const updateNumber = (event) => {
    setNumber(event.target.value);
  };

  const connectCustomer = () => {
    const params = { number: number };
    Device.connect(params);
  };

  const getToken = async () => {
    const response = await fetch("http://localhost:3000/token/generate", {
      method: "POST",
    }).then((body) => body.json());

    console.log(response.token);
    Device.setup(response.token);
  };

  useEffect(() => {
    getToken();
    Device.on("ready", () => {
      console.log("device ready");
      setDeviceReady(true);
    });

    Device.on("error", (error) => console.log(error));
  });

  return (
    <React.Fragment>
      <div>
        <button onClick={getToken}>Setup</button>
        <h3>{deviceReady ? "Device Ready" : "Device not Ready"}</h3>
        <input name="phoneNumber" onChange={updateNumber} value={number} />
        <button onClick={connectCustomer}>Call</button>
        <span>Call Status </span>
        <span>{connection ? "calling" : "ready"}</span>
      </div>
    </React.Fragment>
  );
}

export default App;

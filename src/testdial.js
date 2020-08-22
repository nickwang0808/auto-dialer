const waitTime = 1000;

const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

async function callNumber(name, number, attempts, displayCallInfo) {
  const call = (counter) => {
    console.log(`Calling ${name}: ${number} x ${counter}`);
    // this function will generate a string as prop
    // displayCallInfo(`Calling ${name}: ${number} x ${counter}`);
  };

  const start = async () => {
    for (let innerI = 0; innerI < attempts; innerI++) {
      call(innerI + 1);
      await wait(waitTime);
    }
  };
  await start();
}

// this function calls all numbers of a customer
export default async function callCustomer(
  name,
  numbersToCall,
  displayCallInfo
) {
  // had to declare testDial() as async and then call it with await.
  for (let i = 0; i < numbersToCall.length; i++) {
    await callNumber(
      name,
      numbersToCall[i].num,
      numbersToCall[i].attempts,
      displayCallInfo
    );
  }
}

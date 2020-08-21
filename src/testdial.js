const waitTime = 100;

const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

// using a wait() to put a delay in between each call();
async function callNumber(name, number, attempts) {
  const call = (counter) => {
    console.log(`Calling ${name}: ${number} x ${counter}`);
  };

  // do I really need to make a dummy function here? Very confused with async await
  const start = async () => {
    for (let innerI = 0; innerI < attempts; innerI++) {
      call(innerI + 1);
      await wait(waitTime);
    }
  };
  await start();
}

// this function calls all numbers of a customer
export default async function callCustomer(name, numbersToCall) {
  // had to declare testDial() as async and then call it with await.
  for (let i = 0; i < numbersToCall.length; i++) {
    await callNumber(name, numbersToCall[i].num, numbersToCall[i].attempts);
  }
}

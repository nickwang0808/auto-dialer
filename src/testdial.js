// something is not working right with the setinterval. it wont pause
export default function call(customer) {
  let attempt = 1;
  for (let index = 0; index < 3; index++) {
    setInterval(() => {
      console.log(
        `Calling ${customer.Name}'s Cell: ${customer.Cell} x ${attempt}`
      );
    }, 10000);
  }
  attempt = 1;
  for (let index = 0; index < 3; index++) {
    setInterval(() => {
      console.log(
        `Calling ${customer.Name}'s Home: ${customer.Home} x ${attempt}`
      );
    }, 10000);
  }
  attempt = 1;
  console.log(`Calling ${customer.Name}'s Home: ${customer.Home} x ${attempt}`);
}

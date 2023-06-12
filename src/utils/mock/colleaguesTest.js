export const colleaguesData = [...Array(5)].flatMap((_, i) => [
  {
    id: i * 4 + 0,
    firstName: 'John',
    lastName: 'Doe',
    email: `john.doe${i}@example.com`,
    year: 2022,
  },
  {
    id: i * 4 + 1,
    firstName: 'Jane',
    lastName: 'Smith',
    email: `jane.smith${i}@example.com`,
    year: 2022,
  },
  {
    id: i * 4 + 2,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: `alice.johnson${i}@example.com`,
    year: 2022,
  },
  {
    id: i * 4 + 3,
    firstName: 'Bob',
    lastName: 'Brown',
    email: `bob.brown${i}@example.com`,
    year: 2022,
  },
]);
